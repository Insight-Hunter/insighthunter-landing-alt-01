import { useState } from 'react';

const questions = [
  { id: 'data_sources', text: 'How many data sources do you currently use?', options: ['1-2', '3-5', '6+'] },
  { id: 'reporting_speed', text: 'How fast can you generate reports today?', options: ['Days', 'Hours', 'Minutes'] },
  { id: 'team_size', text: 'How many people use analytics in your org?', options: ['1-5', '6-20', '20+'] },
  { id: 'automation', text: 'Do you automate any insights or alerts?', options: ['No', 'Some', 'Fully automated'] },
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);

  const handleAnswer = (value: string) => {
    const q = questions[step];
    setAnswers({ ...answers, [q.id]: value });
    setStep(step + 1);
  };

  if (step >= questions.length) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Data Maturity Score</h2>
        <p className="mb-6">Based on your answers, you’re at Stage 2: Emerging Insights.</p>
        <form method="POST" action="/api/report">
          <input type="hidden" name="score" value="42" />
          <input type="hidden" name="name" value="James Turner" />
          <input type="hidden" name="insights" value='["Centralize your data", "Automate reporting", "Train your team"]' />
          <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-500">Download Personalized Report</button>
        </form>
      </section>
    );
  }

  const q = questions[step];
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">{q.text}</h2>
      <div className="space-y-4">
        {q.options.map((opt) => (
          <button key={opt} onClick={() => handleAnswer(opt)} className="block mx-auto bg-gray-100 px-6 py-3 rounded hover:bg-gray-200">
            {opt}
          </button>
        ))}
      </div>
    </section>
  );
}

