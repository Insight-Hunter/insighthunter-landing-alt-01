import * as React from "react"
import Layout from "../components/Layout"
import reports from "../data/reports.json"

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
