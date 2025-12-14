import React from "react"
import { Link } from "gatsby"
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
          <button className="ih-avatar" aria-label="User profile">
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

        {/* Primary action */}
        <div className="actions">
          <Link to="/wizard" className="ih-action-btn">
            Start Wizard
          </Link>
        </div>

        {/* Primary tiles */}
        <section className="ih-primary-tiles">
          <Link to="/wizard" className="ih-tile">
            <div className="ih-tile-icon">✏️</div>
            <span>Start Wizard</span>
          </Link>

          <Link to="/reports" className="ih-tile">
            <div className="ih-tile-icon">📄</div>
            <span>View Reports</span>
          </Link>

          <Link to="/preview" className="ih-tile">
            <div className="ih-tile-icon">〰️</div>
            <span>Simulation Preview</span>
          </Link>
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
                <Link to="/reports/dec-12.pdf" className="ih-download-link">
                  Download
                </Link>
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

        {/* Footer */}
        <nav className="ih-footer-nav">
          <Link to="/docs">Docs</Link>
          <Link to="/support">Support</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </main>
    </div>
  )
}

export default IndexPage
