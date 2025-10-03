'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Syringe, Bandage, Shield, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Resources = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const resources = [
    {
      icon: Heart,
      title: "Pet Care Guides",
      description: "Comprehensive guides covering nutrition, exercise, grooming, and general wellness for dogs, cats, and exotic pets.",
      linkText: "View Guides"
    },
    {
      icon: Syringe,
      title: "Vaccination Schedules",
      description: "Keep track of your pet's vaccination schedule with our easy-to-use charts and reminder system.",
      linkText: "View Schedules"
    },
    {
      icon: Bandage,
      title: "Emergency Preparedness",
      description: "Learn how to recognize emergencies and what to do before bringing your pet to our clinic.",
      linkText: "Emergency Guide"
    },
    {
      icon: Shield,
      title: "Forms & Policies",
      description: "Download new patient forms, view our policies, and access important clinic information.",
      linkText: "Download Forms"
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
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pet Care Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Helpful information and resources to keep your pets healthy and happy between visits.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {resources.map((resource, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md group text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group-hover:translate-x-1 transition-all duration-200"
                  >
                    {resource.linkText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Resources
