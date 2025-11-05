import { useEffect } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

/*
NOTES FOR EDITING
- Update contact info: Change phone, email, address, and hours in the Contact component and WhatsApp/phone links below.
- Change colors/theme: Adjust Tailwind color classes (e.g., bg-blue-600, text-blue-900, bg-orange-500) across components.
- Update services: Edit the array in Services component to add/remove items. Icons are inline SVGs for safety.
- SEO: Edit the metaDescription, pageTitle, and schema JSON-LD below.
*/

export default function App() {
  // SEO: set title, meta description, and Open Graph tags without extra packages
  useEffect(() => {
    const pageTitle = 'Aquafix Plumbing Services | Plumber in Dehradun | Emergency Plumbing'
    const metaDescription = 'Local plumber in Dehradun for leaks, pipe installation, bathroom fittings, drain cleaning, geysers, and 24/7 emergency plumbing.'
    document.title = pageTitle

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setOG = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', metaDescription)
    setMeta('keywords', 'Plumber in Dehradun, Emergency plumbing Dehradun, plumbing services near me, leak repair, drain cleaning, geyser installation, bathroom fittings, Rajpur Road')
    setMeta('viewport', 'width=device-width, initial-scale=1')
    setOG('og:title', pageTitle)
    setOG('og:description', metaDescription)
    setOG('og:type', 'website')

    // Structured Data: LocalBusiness
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Aquafix Plumbing Services',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
      telephone: '+91-98765-43210',
      email: 'info@aquafixplumbing.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '27 Rajpur Road',
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        postalCode: '248001',
        addressCountry: 'IN',
      },
      url: window.location.origin,
      openingHours: 'Mo-Sa 08:00-20:00',
      areaServed: 'Dehradun',
      sameAs: [
        'https://www.google.com/maps/search/?api=1&query=Aquafix+Plumbing+Services+Dehradun+Rajpur+Road',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '120',
      },
      priceRange: '$$'
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl text-blue-900">Aquafix <span className="text-orange-500">Plumbing</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#testimonials" className="hover:text-blue-700">Reviews</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
            <a href="tel:+919876543210" className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Call Now</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        {/* About blurb */}
        <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/40">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted Local Plumbers in Dehradun</h2>
              <p className="mt-3 text-gray-700">
                Aquafix Plumbing Services delivers reliable, affordable, same-day solutions backed by trained professionals. We specialise in leak repairs, new pipe installations, bathroom fittings, drain cleaning, and water heater setups. Our 24/7 emergency support ensures your home or office stays safe and functional.
              </p>
              <a href="#services" className="inline-block mt-6 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow">Learn More</a>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581094794891-3a809f25a3d8?q=80&w=1200&auto=format&fit=crop"
                alt="Plumber fixing a sink in Dehradun"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </section>

        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-extrabold text-xl">Aquafix Plumbing</div>
            <p className="mt-2 text-blue-100">Reliable, affordable, and same-day plumbing solutions across Dehradun.</p>
            <div className="mt-4 text-sm text-blue-200">© {new Date().getFullYear()} Aquafix Plumbing Services. All rights reserved.</div>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-blue-100">
              <li><a className="hover:text-white" href="#services">Services</a></li>
              <li><a className="hover:text-white" href="#testimonials">Reviews</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Hours & Contact</div>
            <ul className="mt-3 space-y-2 text-blue-100">
              <li>Mon–Sat: 8 AM – 8 PM</li>
              <li><a className="hover:text-white" href="tel:+919876543210">+91 98765 43210</a></li>
              <li><a className="hover:text-white" href="mailto:info@aquafixplumbing.in">info@aquafixplumbing.in</a></li>
              <li>27 Rajpur Road, Dehradun</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp chat button with tooltip */}
      <a
        href="https://wa.me/919876543210?text=Hi!%20I%20need%20plumbing%20help%20from%20Aquafix."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-20 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute -top-10 right-0 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-xs px-2 py-1 rounded shadow">
          Chat Now
        </div>
        <div className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 grid place-items-center hover:scale-105 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.15 1.6 5.96L0 24l6.2-1.62A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22a9.93 9.93 0 01-5.06-1.39l-.36-.22-3.58.94.96-3.49-.23-.37A10.03 10.03 0 1122 12 10.01 10.01 0 0112 22zm5.28-6.71c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.14-1.21-.45-2.3-1.45-.85-.75-1.42-1.68-1.59-1.97-.17-.29-.02-.45.13-.59.14-.14.29-.34.43-.52.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.5l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.02 2.83 1.16 3.03c.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.33z" />
          </svg>
        </div>
      </a>
    </div>
  )
}
