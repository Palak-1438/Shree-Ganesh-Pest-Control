"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">About Us</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
            Shree Ganesh Pest Control is a trusted local company offering safe, eco-friendly pest management solutions
            for homes and businesses. With years of experience and certified professionals, we ensure a pest-free
            environment for your comfort and safety.
          </p>
        </div>
      </div>
    </section>
  )
}
