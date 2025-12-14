import * as React from "react"

export default function ReportsPage() {
  return (
    <main style={{ padding: "2rem", color: "#00ffff", background: "#0b0f1a" }}>
      <h1>Reports</h1>
      <p>List of generated reports will appear here.</p>
      <ul>
        <li><a href="/reports/dec-12.pdf">Download Dec 12 Report</a></li>
      </ul>
    </main>
  )
}
