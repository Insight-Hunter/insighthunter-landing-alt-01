import * as React from "react"
import reports from "../data/reports.json"

export default function ReportHistory() {
  // Grab the most recent report (first entry in JSON)
  const latestReport = reports[0]

  return (
    <div className="activity">
      <h3>Recent Activity</h3>
      <ul>
        {latestReport.activity.map((item, idx) => (
          <li key={idx}>✓ {item}</li>
        ))}
      </ul>
    </div>
  )
}
