export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method === "POST" && url.pathname === "/quiz") {
      const data = await request.json()
      const key = `quiz-${Date.now()}.json`

      await env.REPORTS_BUCKET.put(key, JSON.stringify(data), {
        httpMetadata: { contentType: "application/json" }
      })

      return new Response(JSON.stringify({ success: true, id: key }), {
        headers: { "Content-Type": "application/json" }
      })
    }if (request.method === "POST" && url.pathname === "/quiz") {
  const data = await request.json()
  const key = `quiz-${Date.now()}.json`

  await env.REPORTS_BUCKET.put(key, JSON.stringify(data), {
    httpMetadata: { contentType: "application/json" }
  })

  return new Response(JSON.stringify({ success: true, id: key }), {
    headers: { "Content-Type": "application/json" }
  })
}


export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method === "POST" && url.pathname === "/quiz") {
      const data = await request.json()
      const key = `quiz-${Date.now()}.json`

      await env.REPORTS_BUCKET.put(key, JSON.stringify(data), {
        httpMetadata: { contentType: "application/json" }
      })

      return new Response(JSON.stringify({ success: true, id: key }), {
        headers: { "Content-Type": "application/json" }
      })
    }f
  }
}

  async fetch(request, env) {
    if (request.method === "POST" && new URL(request.url).pathname === "/upload") {
      const formData = await request.formData()
      const file = formData.get("file")
      const key = `${new Date().toISOString().split("T")[0]}-${file.name}`

      await env.REPORTS_BUCKET.put(key, file.stream(), {
        httpMetadata: { contentType: file.type }
      })

      return new Response("Uploaded", { status: 200 })
    }

    // Default: list reports
    const objects = await env.REPORTS_BUCKET.list()
    const reports = objects.objects.map(obj => ({
      id: obj.key,
      title: obj.key.replace(".pdf", ""),
      date: obj.key.split("-")[0],
      file: `/reports/${obj.key}`,
      activity: ["Quiz submitted", "Preview seeded", "Report generated"]
    }))
    return new Response(JSON.stringify(reports), {
      headers: { "Content-Type": "application/json" }
    })
  }
}
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

export default {
  async fetch(request, env) {
    if (request.method === "POST" && new URL(request.url).pathname === "/upload") {
      const formData = await request.formData()
      const file = formData.get("file")
      const key = `${new Date().toISOString().split("T")[0]}-${file.name}`

      await env.REPORTS_BUCKET.put(key, file.stream(), {
        httpMetadata: { contentType: file.type }
      })

      return new Response("Uploaded", { status: 200 })
    }

    // Default: list reports
    const objects = await env.REPORTS_BUCKET.list()
    const reports = objects.objects.map(obj => ({
      id: obj.key,
      title: obj.key.replace(".pdf", ""),
      date: obj.key.split("-")[0],
      file: `/reports/${obj.key}`,
      activity: ["Quiz submitted", "Preview seeded", "Report generated"]
    }))
    return new Response(JSON.stringify(reports), {
      headers: { "Content-Type": "application/json" }
      
    })
  }
}
