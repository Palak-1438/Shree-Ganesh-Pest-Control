"use client"

import { useState } from "react"
import { Phone, MessageCircle, Mail, X } from "lucide-react"

export default function FloatingContactBar() {
  const [isOpen, setIsOpen] = useState(false)

  const contactMethods = [
    {
      icon: Phone,
      label: "Call",
      href: "tel:+919125962046",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/917860420081",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:shreeganeshpestcontroljhs@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Buttons */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "WhatsApp" ? "_blank" : undefined}
                rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-3 ${method.color} text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl`}
                title={method.label}
              >
                <Icon size={20} />
                <span className="text-sm font-semibold">{method.label}</span>
              </a>
            )
          })}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center text-white font-bold text-xl ${
          isOpen ? "bg-gray-600 hover:bg-gray-700" : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isOpen ? <X size={24} /> : <Phone size={24} />}
      </button>
    </div>
  )
}
