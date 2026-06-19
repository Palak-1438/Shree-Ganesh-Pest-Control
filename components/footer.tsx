import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">SG</span>
              </div>
              <h3 className="font-bold text-lg">Shree Ganesh</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">Safe. Reliable. Effective Pest Solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-primary-foreground/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-foreground/80 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-foreground/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Cockroach Control</li>
              <li>Termite Treatment</li>
              <li>Bed Bug Removal</li>
              <li>Mosquito Control</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/shreeganeshpestcontrol.jhs?igsh=MWQ5Mmx3NHU4MnplNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © {currentYear} Shree Ganesh Pest Control. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
