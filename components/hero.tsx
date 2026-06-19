"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">Say Goodbye to Pests</h2>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Welcome to a healthier home with Shree Ganesh Pest Control. Safe, reliable, and effective pest solutions
              for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold group"
              >
                Book a Service
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919125962046"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-all font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img
                src="/clean-home-pest-control-professional.jpg"
                alt="Professional pest control service"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
