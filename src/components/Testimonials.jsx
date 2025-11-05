const testimonials = [
  {
    name: 'Rahul Sharma',
    text: 'Aquafix reached within an hour for an emergency leak. Professional and affordable. Highly recommend in Dehradun!',
  },
  {
    name: 'Priya Mehta',
    text: 'Same-day service for my bathroom fittings. Clean work and polite team. Great local plumbers near Rajpur Road.',
  },
  {
    name: 'Amit Verma',
    text: 'They fixed our clogged drain fast. Transparent pricing and excellent support. Will call again!',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          What Dehradun Customers Say
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Trusted by homeowners, offices, and property managers across the city.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-white border border-gray-100 p-6 shadow-sm">
              <div className="text-yellow-500">★★★★★</div>
              <p className="mt-3 text-gray-700">“{t.text}”</p>
              <div className="mt-4 font-semibold text-gray-900">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
