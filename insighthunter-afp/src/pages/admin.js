import * as React from "react"
import Layout from "../components/Layout"
import { useAuth } from "../context/AuthContext
import "../styles/global.scss"

export default function AdminPage() {
  const { role } = useAuth()
  if (arole !== "admin") return <p>Access denied</p>
  return <p>Admin controls here</p>
  return (
    <main style={{ padding: "2rem", color: "#00ffff", background: "#0b0f1a" }}>
     <Layout>
      <h1>Admin</h1>
      <p>Administrative controls and audit logs.</p>
     </Layout>
    </main>

  )
}

