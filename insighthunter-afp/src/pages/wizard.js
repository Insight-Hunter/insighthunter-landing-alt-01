import * as React from "react"
import Layout from "../components/Layout"

export default function WizardPage() {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
    role: "",
    domain: "",
    riskTolerance: "",
    answers: {}
  })

  const next = () => setStep(step + 1)
  const back = () => setStep(step - 1)

  const handleQuizSubmit = async (e) => {
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

    await fetch("https://your-worker-url.workers.dev/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })

    next()
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
            {["Treasurer", "Analyst", "Admin"].map(r => (
              <button key={r} onClick={() => { setFormData({ ...formData, role: r }); next() }}>
                {r}
              </button>
            ))}
          </>
        )}

        {step === 3 && (
          <>
            <h1>Select Domain</h1>
            {["Liquidity", "Risk", "Compliance", "Forecasting"].map(d => (
              <button key={d} onClick={() => { setFormData({ ...formData, domain: d }); next() }}>
                {d}
              </button>
            ))}
          </>
        )}

        {step === 4 && (
          <>
            <h1>Risk Tolerance</h1>
            {["Low", "Moderate", "High"].map(risk => (
              <button key={risk} onClick={() => { setFormData({ ...formData, riskTolerance: risk }); next() }}>
                {risk}
              </button>
            ))}
          </>
        )}

        {step === 5 && (
          <>
            <h1>Quiz</h1>
            <form onSubmit={handleQuizSubmit}>
              <label>
                Liquidity ratio:
                <input name="q1" required />
              </label><br/>
              <label>
                Forecast horizon:
                <input name="q2" required />
              </label><br/>
              <label>
                Reporting style:
                <input name="q3" required />
              </label><br/>
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
            <a href="/reports/latest.pdf">Download Report</a>
          </>
        )}

        {step > 1 && step < 7 && <button onClick={back}>← Back</button>}
      </div>
    </Layout>
  )
}

