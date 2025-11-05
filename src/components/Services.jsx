import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Pipe Installation',
    desc: 'New pipelines, replacements, and upgrades with leak-proof fittings.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18"/><path d="M7 9v6"/><path d="M17 9v6"/><rect x="3" y="15" width="18" height="3"/></svg>
    ),
  },
  {
    title: 'Leak Repair',
    desc: 'Quick detection and sealing of leaks to protect your property.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C12 2 7 8 7 11a5 5 0 0 0 10 0c0-3-5-9-5-9z"/></svg>
    ),
  },
  {
    title: 'Bathroom Fittings',
    desc: 'Professional installation of faucets, showers, and sanitaryware.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.04 3.4l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 9.42 2H9.5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 20.6 6.04l-.06.06a1.65 1.65 0 0 0-.33 1.82h0a1.65 1.65 0 0 0 1.51 1H22a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
    ),
  },
  {
    title: 'Drain Cleaning',
    desc: 'Unclogging and deep cleaning for kitchens, bathrooms, and sewers.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v6h18V2Z"/><path d="M7 22v-6h10v6"/><path d="M7 10h10"/></svg>
    ),
  },
  {
    title: 'Water Heater Setup',
    desc: 'Geyser installation and maintenance for safe hot-water supply.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M7 6h10"/><path d="M7 18h10"/><circle cx="12" cy="12" r="3"/></svg>
    ),
  },
  {
    title: 'Emergency Plumbing',
    desc: '24/7 rapid response for burst pipes, leaks, and urgent repairs.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
  },
]

export default function Services() {
  const bgRef = useRef(null)
  const [supportsFixed, setSupportsFixed] = useState(true)
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(ua)) setSupportsFixed(false)

    const onScroll = () => {
      if (!supportsFixed && bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect()
        const offset = (window.innerHeight - rect.top) * 0.08
        bgRef.current.style.transform = `translateY(${offset}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [supportsFixed])

  return (
    <section id="services" className="relative py-20 md:py-28">
      {/* Background with subtle parallax */}
      <div
        ref={bgRef}
        className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 ${supportsFixed ? 'bg-fixed' : ''}`}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Our Plumbing Services in Dehradun
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Reliable, affordable, and same-day work across Rajpur Road, Hathibarkala, Mussoorie Road, Jakhan, and nearby areas.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl bg-white/80 backdrop-blur border border-gray-100 p-6 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 shadow-inner">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
