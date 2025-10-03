'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Our Team' },
    { href: '#about', label: 'About' },
    { href: '#resources', label: 'Resources' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}
              className="flex items-center gap-2 text-2xl font-bold text-green-700 hover:text-green-800 transition-colors"
            >
              <span className="text-2xl">🐾</span>
              Waldo Vet Clinic
            </a>
            <span className="text-xs text-gray-500 font-medium">Compassionate Care</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
              <a href="tel:816-555-0123" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-green-700 flex items-center gap-2">
                    <span className="text-2xl">🐾</span>
                    Waldo Vet Clinic
                  </span>
                  <span className="text-sm text-gray-500">Compassionate Care</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                      className="text-gray-700 hover:text-green-700 font-medium transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <Button asChild className="bg-green-700 hover:bg-green-800 text-white w-full">
                  <a href="tel:816-555-0123" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
