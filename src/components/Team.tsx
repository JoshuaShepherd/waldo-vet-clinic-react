'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Lead Veterinarian & Practice Owner",
      credentials: "DVM, MS - 15 years experience",
      bio: "Dr. Chen specializes in internal medicine and emergency care. She founded Waldo Vet Clinic in 2009 with a vision of providing compassionate, comprehensive care to the Kansas City community.",
      specialties: ["Internal Medicine", "Emergency Care", "Surgery"],
      image: "/media/veterinarians/veterinarian-woman-stethoscope.jpg"
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Associate Veterinarian",
      credentials: "DVM - 8 years experience",
      bio: "Dr. Rodriguez brings expertise in orthopedic surgery and pain management. He's passionate about improving quality of life for pets with chronic conditions.",
      specialties: ["Orthopedic Surgery", "Pain Management", "Rehabilitation"],
      image: "/media/veterinarians/veterinarian-man-lab-coat.jpg"
    },
    {
      name: "Dr. Emily Watson",
      title: "Exotic Pet Specialist",
      credentials: "DVM, ABVP - 6 years experience",
      bio: "Dr. Watson is board-certified in exotic pet medicine and provides specialized care for birds, reptiles, and small mammals. She's known for her gentle approach with nervous pets.",
      specialties: ["Exotic Medicine", "Avian Care", "Reptile Medicine"],
      image: "/media/veterinarians/veterinarian-woman-scrubs.jpg"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced veterinarians and support staff are dedicated to providing the highest quality care for your pets.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                      <p className="text-sm opacity-90">{member.title}</p>
                      <p className="text-xs opacity-75">{member.credentials}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-700 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span 
                        key={specialtyIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team
