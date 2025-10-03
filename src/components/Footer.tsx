'use client'


const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    services: [
      { label: 'Wellness Care', href: '#services' },
      { label: 'Medical Services', href: '#services' },
      { label: 'Surgical Services', href: '#services' },
      { label: 'Emergency Care', href: '#services' }
    ],
    resources: [
      { label: 'Pet Care Guides', href: '#resources' },
      { label: 'Vaccination Schedules', href: '#resources' },
      { label: 'Emergency Guide', href: '#resources' },
      { label: 'Forms & Policies', href: '#resources' }
    ],
    contact: [
      { label: '(816) 555-0123', href: 'tel:816-555-0123' },
      { label: 'info@waldovetclinic.com', href: 'mailto:info@waldovetclinic.com' },
      { label: 'Schedule Appointment', href: '#contact' },
      { label: 'Visit Us', href: '#contact' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🐾</span>
                Waldo Area Veterinary Clinic
              </h3>
              <p className="text-gray-300 mb-4 font-medium">Compassionate Care for Your Beloved Pets</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                7425 Wornall Road, Kansas City, MO 64114
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-6">Services</h4>
                <div className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6">Resources</h4>
                <div className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6">Contact</h4>
                <div className="space-y-3">
                  {footerLinks.contact.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="bg-orange-500 text-white p-6 rounded-lg text-center shadow-lg max-w-xs">
              <div className="font-semibold mb-2">24/7 Emergency</div>
              <a 
                href="tel:816-555-0123" 
                className="text-2xl font-bold hover:text-orange-200 transition-colors"
              >
                (816) 555-0123
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Waldo Area Veterinary Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
