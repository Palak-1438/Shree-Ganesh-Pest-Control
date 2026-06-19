"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    content: "Excellent service! The team was professional and the results were immediate. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content: "Very reliable and affordable. They solved our pest problem without disrupting our business operations.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Homeowner",
    content: "Great customer service and effective solutions. Our home is pest-free now!",
    rating: 5,
  },
]

export default function Testimonials() {
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
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Customer Reviews</h2>
        <p className="text-lg text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
          What our satisfied customers have to say
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-8 transition-all duration-500 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
