import { useEffect } from 'react'

export default function Contact() {
  // simple form handler – sends email link with prefilled content
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const phone = form.get('phone')
    const message = form.get('message')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`)
    window.location.href = `mailto:info@aquafixplumbing.in?subject=New%20Enquiry%20from%20Website&body=${body}`
  }

  useEffect(() => {
    // ensure map is lazy by not doing anything heavy; iframe has loading="lazy"
  }, [])

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Aquafix</h2>
          <p className="mt-3 text-gray-600">
            Serving Dehradun — Rajpur Road, Hathibarkala, Jakhan, Mussoorie Road and nearby. We respond quickly and offer same-day service.
          </p>
          <div className="mt-6 space-y-3 text-gray-700">
            <div className="flex items-start gap-3"><span className="font-semibold w-28">Phone:</span><a className="text-blue-600 hover:underline" href="tel:+919876543210">+91 98765 43210</a></div>
            <div className="flex items-start gap-3"><span className="font-semibold w-28">Email:</span><a className="text-blue-600 hover:underline" href="mailto:info@aquafixplumbing.in">info@aquafixplumbing.in</a></div>
            <div className="flex items-start gap-3"><span className="font-semibold w-28">Address:</span><span>27 Rajpur Road, Dehradun, Uttarakhand, India</span></div>
            <div className="flex items-start gap-3"><span className="font-semibold w-28">Hours:</span><span>Mon–Sat, 8 AM – 8 PM</span></div>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Aquafix Plumbing Services - Map"
              src="https://www.google.com/maps?q=27+Rajpur+Road,+Dehradun&output=embed"
              loading="lazy"
              className="w-full h-64"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900">Get a Free Quote</h3>
          <p className="text-sm text-gray-600 mt-1">We usually respond within 10 minutes.</p>
          <div className="mt-5 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" required type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" required type="tel" className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="+91" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us about your plumbing issue" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
