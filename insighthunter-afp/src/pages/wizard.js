.import * as React from "react"
import Layout from "../components/Layout"
impott "../styles/global.scss

export default function WizardPage() {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({})

  const next = () => {
    if (step < 7) {
      setStep(step + 1)
    }
  }

  const back = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      role: formData.role,
      domain: formData.domain,
      riskTolerance: formData.riskTolerance,
      answers: {
        q1: e.target.q1.value,
        q2: e.target.q2.value,
        q3: e.target.q3.value
      }
    }
    try {
      await fetch("https://your-worker-url.workers.dev/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      next()
    } catch (error) {
      // Handle error, show user feedback if needed
      console.error("Failed to submit quiz:", error)
    }
  }

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

        {step === 5 && (
          <>
            <h1>Quiz</h1>
            <form onSubmit={handleSubmit}>
              <label>Liquidity ratio: <input name="q1" /></label><br/>
              <label>Forecast horizon: <input name="q2" /></label><br/>
              <label>Reporting style: <input name="q3" /></label><br/>
              <button type="submit">Submit Quiz →</button>
            </form>
          </>
        )}

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

