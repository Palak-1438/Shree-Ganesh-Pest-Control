"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  "Safe & Certified Chemicals",
  "Experienced Professionals",
  "Quick Response & Guaranteed Results",
  "Affordable Packages",
]

export default function WhyChooseUs() {
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
    <section id="why-us" ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <img
              src="/pest-control-team.png"
              alt="Professional team"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
