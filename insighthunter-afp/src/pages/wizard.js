import * as React from "react"
import Layout from "../components/Layout"

export default function WizardPage() {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({})

  const next = () => setStep(step + 1)
  const back = () => setStep(step - 1)

  return (
    <Layout>
      <div style={{ padding: "2rem", color: "#00ffff" }}>
        {step === 1 && (
          <>
            <h1>Welcome</h1>
            <p>Let’s get started with your InsightHunter setup.</p>
            <button onClick={next}>Next →</button>
          </>
        )}

        {step === 2 && (
          <>
            <h1>Select Role</h1>
            <button onClick={() => { setFormData({ ...formData, role: "Treasurer" }); next() }}>Treasurer</button>
            <button onClick={() => { setFormData({ ...formData, role: "Analyst" }); next() }}>Analyst</button>
            <button onClick={() => { setFormData({ ...formData, role: "Admin" }); next() }}>Admin</button>
          </>
        )}

        {/* Repeat for domain, risk tolerance, quiz, etc. */}

        {step === 6 && (
          <>
            <h1>Preview Seeding</h1>
            <p>Seeding your simulation preview…</p>
            <button onClick={next}>View Preview →</button>
          </>
        )}

        {step === 7 && (
          <>
            <h1>Report Ready</h1>
            <p>Your report has been generated.</p>
            <a href="/reports/dec-12.pdf">Download Report</a>
          </>
        )}

        {step > 1 && step < 7 && <button onClick={back}>← Back</button>}
      </div>
    </Layout>
  )
}
