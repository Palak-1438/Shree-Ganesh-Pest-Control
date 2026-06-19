"use client"

import { useEffect, useRef, useState } from "react"
import { Bug, Zap, Wind, Rat, Droplets, Sparkles } from "lucide-react"

const services = [
  {
    icon: Bug,
    title: "Cockroach Control",
    description: "Effective elimination of cockroaches with safe, certified treatments.",
  },
  {
    icon: Zap,
    title: "Termite Treatment",
    description: "Comprehensive termite control to protect your property from damage.",
  },
  {
    icon: Droplets,
    title: "Bed Bug Removal",
    description: "Complete bed bug eradication with proven methods and follow-ups.",
  },
  {
    icon: Wind,
    title: "Mosquito Control",
    description: "Seasonal mosquito management for a comfortable living environment.",
  },
  {
    icon: Rat,
    title: "Rodent Control",
    description: "Safe and humane rodent removal and prevention strategies.",
  },
  {
    icon: Sparkles,
    title: "Sanitization Services",
    description: "Professional sanitization to maintain a clean and healthy space.",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Our Services</h2>
        <p className="text-lg text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
          Comprehensive pest control solutions tailored to your needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
