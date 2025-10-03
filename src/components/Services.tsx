'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Stethoscope, Cross, Bandage, PawPrint, Thermometer } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Heart,
      title: "Wellness & Preventive Care",
      description: "Annual exams, vaccinations, parasite prevention, and health screenings to keep your pet healthy and happy.",
      features: [
        "Annual wellness exams",
        "Vaccination programs", 
        "Parasite prevention",
        "Dental cleanings"
      ]
    },
    {
      icon: Stethoscope,
      title: "Medical Services",
      description: "Diagnostic testing, internal medicine, and treatment for acute and chronic conditions.",
      features: [
        "Laboratory diagnostics",
        "Digital radiography",
        "Ultrasound imaging",
        "Internal medicine"
      ]
    },
    {
      icon: Cross,
      title: "Surgical Services",
      description: "Advanced surgical procedures performed with state-of-the-art equipment and compassionate care.",
      features: [
        "Spay and neuter",
        "Soft tissue surgery",
        "Orthopedic procedures",
        "Emergency surgery"
      ]
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
            Comprehensive Veterinary Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine wellness exams to advanced surgical procedures, we provide complete medical care for your beloved pets.
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-800 transition-colors">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
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
                        <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></span>
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
