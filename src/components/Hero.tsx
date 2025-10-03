'use client'

import { Button } from '@/components/ui/button'
import { Phone, Heart, PawPrint } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/clinic-interiors/waiting-room-comfortable.jpg"
          alt="Clean veterinary clinic background"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-white/90"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div 
                className="inline-block mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Emergency Services Available
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block">Expert Veterinary Care</span>
                <span className="block">in Kansas City&apos;s</span>
                <span className="block text-green-700">Waldo Neighborhood</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Your trusted partner in pet health for over 15 years. We provide comprehensive medical care, 
                advanced surgical procedures, and compassionate wellness services for dogs, cats, and exotic pets.
              </motion.p>

              {/* Actions */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-4"
                >
                  <a href="tel:816-555-0123" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Schedule Appointment
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-lg px-8 py-4"
                  onClick={() => scrollToSection('#services')}
                >
                  Our Services
                </Button>
              </motion.div>

              {/* Emergency Info */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-700">24/7 Emergency:</span>
                  <a 
                    href="tel:816-555-0123" 
                    className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    (816) 555-0123
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/media/kittens/cute-kitten-01.jpg"
                  alt="Cute kitten at veterinary clinic"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-1/4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-6 h-6 text-green-600" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/3 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                >
                  <PawPrint className="w-6 h-6 text-green-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
