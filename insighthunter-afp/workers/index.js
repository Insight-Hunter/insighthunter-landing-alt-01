export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // === QUIZ SUBMISSION ===
    if (request.method === "POST" && url.pathname === "/quiz") {
      const data = await request.json()
      const key = `quiz-${Date.now()}.json`

      await env.REPORTS_BUCKET.put(key, JSON.stringify(data), {
        httpMetadata: { contentType: "application/json" }
      })

      return new Response(JSON.stringify({ success: true, id: key }), {
        headers: { "Content-Type": "application/json" }
      })
    }

    // === REPORT UPLOAD ===
    if (request.method === "POST" && url.pathname === "/upload") {
      const formData = await request.formData()
      const file = formData.get("file")
      const key = `${new Date().toISOString().split("T")[0]}-${file.name}`

      await env.REPORTS_BUCKET.put(key, file.stream(), {
        httpMetadata: { contentType: file.type }
      })

      return new Response("Uploaded", { status: 200 })
    }

    // === REPORT DELETE (ADMIN) ===
    if (request.method === "DELETE" && url.pathname.startsWith("/delete/")) {
      const key = url.pathname.split("/delete/")[1]
      await env.REPORTS_BUCKET.delete(key)

      // optional: log action into KV or R2
      if (env.AUDIT_LOG) {
        const entry = {
          timestamp: new Date().toISOString(),
          action: "delete",
          file: key
        }
        await env.AUDIT_LOG.put(`${entry.timestamp}-${key}`, JSON.stringify(entry))
      }

      return new Response("Deleted", { status: 200 })
    }

    // === DEFAULT: LIST REPORTS ===
    const objects = await env.REPORTS_BUCKET.list()
    const reports = objects.objects.map(obj => ({
      id: obj.key,
      title: obj.key.replace(".pdf", "").replace(".json", ""),
      date: obj.key.split("-")[0],
      file: `/reports/${obj.key}`,
      activity: obj.key.startsWith("quiz-")
        ? ["Quiz submitted", "Preview seeded", "Report generated"]
        : ["Report uploaded"]
    }))

    return new Response(JSON.stringify(reports), {
      headers: { "Content-Type": "application/json" }
    })
  }
}
