import { SignJWT, jwtVerify } from 'jose'

const encoder = new TextEncoder()

/* -------------------------
   Helpers
------------------------- */
async function verifyJWT(request, env) {
  const auth = request.headers.get("Authorization")
  if (!auth) throw new Error("Unauthorized")

  const token = auth.replace("Bearer ", "")
  return jwtVerify(token, encoder.encode(env.JWT_SECRET))
}

async function verifyTurnstile(token, env) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token
      })
    }
  )
  const data = await res.json()
  if (!data.success) throw new Error("Bot detected")
}

/* -------------------------
   Worker
------------------------- */
export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    /* -------------------------
       POST /api/quiz
    ------------------------- */
    if (request.method === "POST" && url.pathname === "/api/quiz") {
      const { turnstileToken, quiz } = await request.json()
      await verifyTurnstile(turnstileToken, env)

      const key = `quiz-${Date.now()}.json`
      await env.REPORTS_BUCKET.put(key, JSON.stringify(quiz), {
        httpMetadata: { contentType: "application/json" }
      })

      return Response.json({ success: true, id: key })
    }

    /* -------------------------
       POST /api/upload
    ------------------------- */
    if (request.method === "POST" && url.pathname === "/api/upload") {
      await verifyJWT(request, env)

      const formData = await request.formData()
      const file = formData.get("file")

      const key = `${Date.now()}-${file.name}`
      await env.REPORTS_BUCKET.put(key, file.stream(), {
        httpMetadata: { contentType: file.type }
      })

      return new Response("Uploaded")
    }

    /* -------------------------
       GET /api/reports
    ------------------------- */
    if (request.method === "GET" && url.pathname === "/api/reports") {
      await verifyJWT(request, env)

      const objects = await env.REPORTS_BUCKET.list()

      return Response.json(
        objects.objects.map(o => ({
          id: o.key,
          title: o.key.replace(/\.(pdf|json)/, ""),
          date: new Date(o.uploaded).toISOString()
        }))
      )
    }

    /* -------------------------
       GET /api/download?id=
    ------------------------- */
    if (request.method === "GET" && url.pathname === "/api/download") {
      await verifyJWT(request, env)

      const key = url.searchParams.get("id")
      const object = await env.REPORTS_BUCKET.get(key)

      if (!object) return new Response("Not found", { status: 404 })

      return new Response(object.body, {
        headers: {
          "Content-Type": object.httpMetadata.contentType,
          "Content-Disposition": `attachment; filename="${key}"`
        }
      })
    }

    return new Response("Not found", { status: 404 })
  }
}
