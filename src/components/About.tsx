'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Stethoscope, Shield, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We understand the special bond between pets and their families, and we treat every interaction with empathy and respect."
    },
    {
      icon: Stethoscope,
      title: "Advanced Medicine",
      description: "Our team stays current with the latest veterinary advances to provide the best possible outcomes for your pets."
    },
    {
      icon: Shield,
      title: "Community Focus",
      description: "We're proud to be part of the Waldo community and support local animal rescue organizations and events."
    }
  ]

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/media/clinic-interiors/vet-examination-room.jpg"
                alt="Modern veterinary clinic facility"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute top-1/4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Stethoscope className="w-6 h-6 text-green-600" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/3 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              >
                <Shield className="w-6 h-6 text-green-600" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Waldo Area Veterinary Clinic
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                For over 15 years, Waldo Area Veterinary Clinic has been Kansas City&apos;s trusted partner in pet health and wellness. 
                Located in the heart of the Waldo neighborhood, we&apos;ve built lasting relationships with families throughout the metro area.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our state-of-the-art facility features the latest in veterinary technology, including digital radiography, 
                in-house laboratory services, and advanced surgical equipment. But what truly sets us apart is our commitment 
                to treating every pet as if they were our own.
              </p>
            </div>

            {/* Values */}
            <motion.div 
              ref={ref}
              className="mt-12 space-y-8"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 }
                    }
                  }}
                >
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-700 mb-2">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
