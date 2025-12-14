import * as React from "react"
import Layout from "../components/Layout"
import reports from "../data/reports.json"
import "..\styles\global.scss"

export default function ReportsPage() {
  const [reports, setReports] = React.useState([])
  const [file, setFile] = React.useState(null)
  const [filter, setFilter] = React.useState("")

  React.useEffect(() => {
    // Fetch reports from your Worker API
    fetch("https://your-worker-url.workers.dev")
      .then(res => res.json())
      .then(data => setReports(data))
  }, [])

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    await fetch("https://your-worker-url.workers.dev/upload", {
      method: "POST",
      body: formData,
    })

    // Refresh list after upload
    const updated = await fetch("https://your-worker-url.workers.dev").then(res => res.json())
    setReports(updated)
  }

  const filteredReports = reports.filter(r =>
    r.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Layout>
      <h1>Reports</h1>

      <form onSubmit={handleUpload}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload Report</button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Filter by title..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      <ul>
        {filteredReports.map(report => (
          <li key={report.id}>
            <strong>{report.title}</strong> ({report.date}) —
            <a href={report.file} download>Download</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}


export default function ReportsPage() {
  return (
    <Layout>
      <h1>Reports</h1>
      <p>Browse generated reports below:</p>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            <strong>{report.title}</strong> ({report.date}) —
            <a href={report.file} download>Download</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
