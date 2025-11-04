const plans = [
  {
    name: 'Free',
    price: '$0',
    features: ['1 dashboard', 'Community support', 'Basic analytics'],
  },
  {
    name: 'Pro',
    price: '$29/mo',
    features: ['Unlimited dashboards', 'AI insights', 'PDF exports', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['SSO & RBAC', 'Dedicated onboarding', 'Custom integrations', 'White-label reports'],
  },
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
              <p className="text-2xl font-bold text-orange-600 mb-4">{plan.price}</p>
              <ul className="mb-4 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-gray-600">• {f}</li>
                ))}
              </ul>
              <a href="/signup" className="block bg-orange-600 text-white text-center py-2 rounded hover:bg-orange-500">Start Trial</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
