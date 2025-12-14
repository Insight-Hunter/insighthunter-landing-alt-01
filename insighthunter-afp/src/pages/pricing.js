import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

import Layout from "../components/Layout"

const PricingPage = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-cream-50">
      <div className="container py-20">
        <h1 className="section-title text-center">Pricing & Plans</h1>
        <p className="text-xl text-slate-500 text-center mb-12 max-w-3xl mx-auto">
          Choose the plan that fits your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Insight Lite */}
          <div className="price-card">
            <div className="price-header">Insight Lite</div>
            <div className="price-footer">Free</div>
            <ul className="price-features mt-6 space-y-2">
              <li>Core financial dashboards</li>
              <li>Basic cash flow & P&L insights</li>
              <li>Single company support</li>
              <li>Manual CSV upload</li>
            </ul>
            <div className="mt-6">
              <Link to="/lite" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>

          {/* Insight Hunter Standard */}
          <div className="price-card">
            <div className="price-header">Insight Hunter Standard</div>
            <div className="price-footer">$199/month</div>
            <ul className="price-features mt-6 space-y-2">
              <li>Advanced analysis & forecasting</li>
              <li>Basic AI insights & alerts</li>
              <li>Single company focus</li>
              <li>Automated sync (coming soon)</li>
            </ul>
            <div className="mt-6">
              <Link to="/standard" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>

          {/* Insight Hunter AFP */}
          <div className="price-card">
            <div className="price-header">Insight Hunter AFP</div>
            <div className="price-footer">Contact Sales</div>
            <ul className="price-features mt-6 space-y-2">
              <li>All Standard features</li>
              <li>Full AI-powered CFO engine</li>
              <li>Multi-entity & group reporting</li>
              <li>Automated workflows & actions</li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* BizForma */}
          <div className="price-card">
            <div className="price-header">BizForma</div>
            <div className="price-footer">Free + In-App Upgrades</div>
            <ul className="price-features mt-6 space-y-2">
              <li>Smart forms & workflows</li>
              <li>Powered by Insight Hunter analytics</li>
              <li>Basic marketing & lead capture</li>
              <li>Premium add-ons: advanced analytics, automation</li>
            </ul>
            <div className="mt-6">
              <Link to="/bizforma" className="btn-primary">
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </Layout>
  )
}

export default PricingPage
