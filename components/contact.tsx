"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Get in Touch</h2>
        <p className="text-lg text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
          Contact us for a free consultation or to book a service
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Phone</h3>
                <a href="tel:+919125962046" className="text-foreground/70 hover:text-primary transition-colors">
                  +91 91259 62046
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a
                  href="mailto:shreeganeshpestcontroljhs@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  shreeganeshpestcontroljhs@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Address</h3>
                <p className="text-foreground/70">
                  Durga Ji Mandir 164
                  <br />
                  New Rail Ganj Puliya No. 9
                  <br />
                  Jhansi
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/917860420081"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +91 78604 20081
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Tell us about your pest problem..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
