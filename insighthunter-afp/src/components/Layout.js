import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="logo">INSIGHTHUNTER</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/wizard">Wizard</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/preview">Preview</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/support">Support</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <main className="content">{children}</main>

      <footer className="footer">
        <Link to="/docs">Docs</Link> | <Link to="/support">Support</Link> | <Link to="/admin">Admin</Link>
      </footer>
    </div>
  )
}
