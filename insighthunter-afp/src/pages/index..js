import React from "react"
import "../styles/global.css"

const IndexPage = () => (
  <div>
    <header className="header">
      <div className="container">
        <h1 className="title">Insight Hunter</h1>
        <p className="subtitle">Discover Hidden Insights</p>
      </div>
    </header>

    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Connect Your Data</h3>
            <p>
              Import data from multiple sources with our seamless integrations
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Analyzes</h3>
            <p>Our intelligent algorithms scan for patterns and anomalies</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Discover Insights</h3>
            <p>Receive actionable recommendations tailored to your goals</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Take Action</h3>
            <p>Implement insights and track results in real-time</p>
          </div>
        </div>
      </div>
    </section>

    <section className="app-options">
      <div className="container">
        <h2 className="section-title">Our App Options</h2>
        <div className="columns">
          <ul className="price">
            <li className="header">Insight Lite</li>
            <li className="grey">Free</li>
            <li>Core financial dashboards</li>
            <li>Basic cash flow & P&L insights</li>
            <li>Single company support</li>
            <li>Manual CSV upload</li>
            <li className="grey">
              <a href="#" className="button">
                Get Started
              </a>
            </li>
          </ul>
          <ul className="price">
            <li className="header">Insight Hunter Standard</li>
            <li className="grey">Advanced Analysis</li>
            <li>Deeper forecasting & KPIs</li>
            <li>Basic AI insights & alerts</li>
            <li>Single company focus</li>
            <li>Automated sync (coming soon)</li>
            <li className="grey">
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
          <ul className="price">
            <li className="header">Insight Hunter AFP</li>
            <li className="grey">Autonomous Financial Platform</li>
            <li>All Standard features</li>
            <li>Full AI-powered CFO engine</li>
            <li>Multi-entity & group reporting</li>
            <li>Automated workflows & actions</li>
            <li className="grey">
              <a href="#" className="button">
                Contact Sales
              </a>
            </li>
          </ul>
          <ul className="price">
            <li className="header">BizForma</li>
            <li className="grey">Free with In-App Upgrades</li>
            <li>Smart forms & workflows</li>
            <li>Powered by Insight Hunter analytics</li>
            <li>Basic marketing & lead capture</li>
            <li>Premium add-ons: advanced analytics, automation</li>
            <li className="grey">
              <a href="#" className="button">
                Download Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="cta-section" id="get-started">
      <div className="container">
        <h2>Ready to Discover Your Next Big Insight?</h2>
        <p>
          Join thousands of teams already using Insight Hunter to make smarter
          decisions
        </p>
        <a href="https://insighthunter.app" className="button">
          Get Started Free
        </a>
      </div>
    </section>

    <footer>
      <div className="container">
        <p>&copy; 2025 Insight Hunter. All rights reserved.</p>
        <div className="footer-links">
          <a href="legal.html">Terms of Service</a>
          <a href="legal.html">Privacy Policy</a>
        </div>
      </div>
    </footer>
  </div>
)

export default IndexPage
