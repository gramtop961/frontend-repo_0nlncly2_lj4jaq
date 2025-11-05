import { useEffect, useRef, useState } from 'react'

// Lightweight parallax hero with CTA and floating click-to-call for mobile
export default function Hero() {
  const bgRef = useRef(null)
  const [supportsFixed, setSupportsFixed] = useState(true)

  useEffect(() => {
    // Detect if background-attachment: fixed is supported well
    // Fallback to JS parallax on iOS
    const ua = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(ua)) setSupportsFixed(false)

    const onScroll = () => {
      if (!supportsFixed && bgRef.current) {
        const y = window.scrollY
        bgRef.current.style.transform = `translateY(${y * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [supportsFixed])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center ${supportsFixed ? 'bg-fixed' : ''}`}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/70" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-40 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
            <span className="text-yellow-300">★★★★★</span>
            <span>Top-rated Plumber in Dehradun</span>
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Expert Plumbing Solutions in Dehradun
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-blue-100">
            Fast, Reliable & Affordable Services by Local Professionals. Same-day fixes and 24/7 emergency support across Dehradun.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={scrollToContact} className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30 transition">
              Book a Plumber Now
            </button>
            <a href="tel:+919876543210" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition">
              Call: +91 98765 43210
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-blue-100 text-sm">
            <li>• Leak Repair</li>
            <li>• Pipe Installation</li>
            <li>• Bathroom Fittings</li>
            <li>• Drain Cleaning</li>
            <li>• Water Heater Setup</li>
            <li>• Emergency Plumbing</li>
          </ul>
        </div>
      </div>

      {/* Floating Google Reviews Badge */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Aquafix+Plumbing+Services+Dehradun+Rajpur+Road"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 z-20 flex items-center gap-2 rounded-full bg-white shadow-lg px-4 py-2 hover:shadow-xl transition"
        aria-label="See our Google Reviews"
      >
        <span className="text-yellow-500">★★★★★</span>
        <span className="text-sm font-semibold text-gray-800">4.9 on Google</span>
      </a>

      {/* Mobile click-to-call bubble */}
      <a
        href="tel:+919876543210"
        className="fixed md:hidden right-4 bottom-24 z-20 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 animate-bounce"
        aria-label="Call Aquafix"
      >
        {/* Phone SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 3.18 2 2 0 0 1 5.1 1h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9 8a16 16 0 0 0 7 7l.67-1.19a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </section>
  )
}
