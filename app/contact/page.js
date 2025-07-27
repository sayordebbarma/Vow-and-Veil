'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you, ${form.name}! We'll get back to you shortly.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="bg-[#fffaf7] min-h-screen px-6 md:px-20 py-16 text-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-center">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you — whether it's about collaborations, inquiries, or love stories.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm block mb-1 font-bold">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm block mb-1 font-bold">Email Address</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm block mb-1 font-bold">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Type your message here..."
                className="w-full h-50 border border-gray-300 rounded px-4 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 text-sm transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info / Map Placeholder */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6 space-y-3">
              <h2 className="text-lg font-semibold">Visit Us</h2>
              <p className="text-sm text-gray-600">
                Vow & Veil Studio<br />
                123 Love Lane<br />
                Paris, FR 75001
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 space-y-2">
              <h2 className="text-lg font-semibold">Contact Info</h2>
              <p className="text-sm text-gray-600">Email: hello@vowandveil.com</p>
              <p className="text-sm text-gray-600">Phone: +91 1231 231 321</p>
              <p className="text-sm text-gray-600">Support: Mon-Fri, 9am-5pm</p>
            </div>

            <div className="w-full h-40 rounded-xl overflow-hidden">
              <iframe
                title="Studio Location"
                src="https://maps.google.com/maps?q=Paris,%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}