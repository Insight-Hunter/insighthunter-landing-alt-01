import * as React from "react"
import Layout from "../components/Layout"

export default function AdminPage() {
  return (
    <main style={{ padding: "2rem", color: "#00ffff", background: "#0b0f1a" }}>
     <Layout>
      <h1>Admin</h1>
      <p>Administrative controls and audit logs.</p>
     </Layout>
    </main>
  )
}

