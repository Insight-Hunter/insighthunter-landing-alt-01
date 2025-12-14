import * as React from "react"
import Layout from "../components/Layout"
import { useAuth } from "../context/AuthContext"
import "../styles/global.scss"

export default function AdminPage() {
  const { role } = useAuth()

  if (role !== "admin") {
    return (
      <Layout>
        <p>Access denied</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <main style={{ padding: "2rem", color: "#00ffff", background: "#0b0f1a" }}>
        <h1>Admin</h1>
        <p>Administrative controls and audit logs.</p>
      </main>
    </Layout>
  )
}
