import React from "react"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <div className="ih-shell">
      <main className="ih-panel">
        {/* Top bar */}
        <div className="ih-panel-header">
          <div className="ih-logo">
            <span>INSIGHT</span>
            <span>HUNTER</span>
          </div>
          <button className="ih-avatar">
            {/* simple user icon */}
            <span className="text-sm">👤</span>
          </button>
        </div>

        {/* Welcome copy */}
        <section className="mb-4 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold mb-1">
            Welcome to InsightHunter
          </h1>
          <p className="ih-subtitle">
            Your enterprise financial nervous system.
          </p>
        </section>

        {/* Primary tiles */}
        <section className="ih-primary-tiles">
          <button className="ih-tile">
            <div className="ih-tile-icon">✏️</div>
            <div className="ih-tile-label">Start Wizard</div>
          </button>
          <button className="ih-tile">
            <div className="ih-tile-icon">📄</div>
            <div className="ih-tile-label">View Reports</div>
          </button>
          <button className="ih-tile">
            <div className="ih-tile-icon">〰️</div>
            <div className="ih-tile-label">Simulation Preview</div>
          </button>
        </section>

        {/* Lower cards */}
        <section className="ih-lower">
          <div className="ih-card">
            <h2 className="ih-card-title">Company Snapshot</h2>
            <div className="ih-card-row">
              <span>Role</span>
              <span className="ih-card-emph">Treasurer</span>
            </div>
            <div className="ih-card-row">
              <span>Domain</span>
              <span className="ih-card-emph">Liquidity</span>
            </div>
            <div className="ih-card-row">
              <span>Risk tolerance</span>
              <span className="ih-card-emph">Moderate</span>
            </div>
            <div className="ih-card-row">
              <span>Last report</span>
              <span className="ih-card-emph flex items-center gap-1">
                Dec 12
                <button className="ih-download-link">Download</button>
              </span>
            </div>
          </div>

          <div className="ih-card">
            <h2 className="ih-card-title">Recent Activity</h2>
            <div className="space-y-2 mt-1">
              <div className="ih-activity-item">
                <span className="ih-activity-dot" />
                <span>Quiz submitted</span>
              </div>
              <div className="ih-activity-item">
                <span className="ih-activity-dot" />
                <span>Preview seeded</span>
              </div>
              <div className="ih-activity-item">
                <span className="ih-activity-dot" />
                <span>Report generated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer links */}
        <nav className="ih-footer-nav">
          <a>Docs</a>
          <a>Support</a>
          <a>Admin</a>
        </nav>
      </main>
    </div>
  )
}

export default IndexPage
