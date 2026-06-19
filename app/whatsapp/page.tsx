"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MessageCircle, Phone, Mail } from "lucide-react"

export default function WhatsAppPage() {
  useEffect(() => {
    // Redirect to WhatsApp chat
    window.location.href =
      "https://wa.me/917860420081?text=Hello%20Shree%20Ganesh%20Pest%20Control%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle size={64} className="mx-auto mb-6 text-green-500" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Connect on WhatsApp</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Redirecting you to WhatsApp chat with Shree Ganesh Pest Control...
          </p>

          <div className="bg-card rounded-lg p-8 border border-border mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Quick Contact Info</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <MessageCircle className="text-green-500 mb-3" size={32} />
                <p className="font-semibold text-primary mb-2">WhatsApp</p>
                <a href="https://wa.me/917860420081" className="text-foreground/70 hover:text-primary">
                  +91 78604 20081
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="text-blue-500 mb-3" size={32} />
                <p className="font-semibold text-primary mb-2">Call</p>
                <a href="tel:+919125962046" className="text-foreground/70 hover:text-primary">
                  +91 91259 62046
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="text-red-500 mb-3" size={32} />
                <p className="font-semibold text-primary mb-2">Email</p>
                <a href="mailto:shreeganeshpestcontroljhs@gmail.com" className="text-foreground/70 hover:text-primary">
                  shreeganeshpestcontroljhs@gmail.com
                </a>
              </div>
            </div>
          </div>

          <p className="text-foreground/60">
            If you're not redirected automatically, click the WhatsApp button above to start chatting with us.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
