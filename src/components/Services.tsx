'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Stethoscope, Cross, Bandage, PawPrint, Thermometer } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Heart,
      title: "Elite Wellness & Preventive Care",
      description: "Our expert male veterinarians provide comprehensive wellness programs, advanced vaccinations, and cutting-edge preventive care protocols.",
      features: [
        "Premium wellness examinations",
        "Advanced vaccination protocols", 
        "Comprehensive parasite prevention",
        "Professional dental care"
      ],
      image: "/media/kittens/cute-kitten-01.jpg"
    },
    {
      icon: Stethoscope,
      title: "Advanced Medical Services",
      description: "Our distinguished male veterinarians utilize cutting-edge diagnostic technology and advanced medical protocols for superior patient outcomes.",
      features: [
        "State-of-the-art laboratory diagnostics",
        "Advanced digital radiography",
        "Premium ultrasound imaging",
        "Expert internal medicine"
      ],
      image: "/media/kittens/cute-kitten-02.jpg"
    },
    {
      icon: Cross,
      title: "Elite Surgical Services",
      description: "Our expert male veterinary surgeons perform advanced procedures with precision, utilizing the latest surgical techniques and equipment.",
      features: [
        "Professional spay and neuter",
        "Advanced soft tissue surgery",
        "Expert orthopedic procedures",
        "Emergency surgical care"
      ],
      image: "/media/kittens/cute-kitten-03.jpg"
    },
    {
      icon: Bandage,
      title: "Emergency Care",
      description: "24/7 emergency services for urgent medical situations that can't wait for regular business hours.",
      features: [
        "24/7 emergency line",
        "Trauma care",
        "Poisoning treatment",
        "Critical care monitoring"
      ]
    },
    {
      icon: PawPrint,
      title: "Exotic Pet Care",
      description: "Specialized care for birds, reptiles, rabbits, and other exotic pets with unique medical needs.",
      features: [
        "Avian medicine",
        "Reptile care",
        "Small mammal medicine",
        "Specialized nutrition"
      ]
    },
    {
      icon: Thermometer,
      title: "Behavioral Services",
      description: "Behavioral consultations and training support to help your pet thrive in your home environment.",
      features: [
        "Behavioral consultations",
        "Training referrals",
        "Anxiety management",
        "Aggression counseling"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Elite Veterinary Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our distinguished male veterinarians deliver uncompromising excellence in comprehensive pet healthcare, from routine wellness to advanced surgical procedures.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md group overflow-hidden">
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`Cute kitten for ${service.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  {!service.image && (
                    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-slate-600 rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
