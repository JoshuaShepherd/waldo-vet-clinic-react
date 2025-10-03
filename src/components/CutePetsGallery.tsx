'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const CutePetsGallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cutePets = [
    {
      src: "/media/kittens/cute-kitten-02.jpg",
      alt: "Adorable kitten with big eyes",
      name: "Whiskers"
    },
    {
      src: "/media/kittens/cute-kitten-03.jpg", 
      alt: "Playful kitten exploring",
      name: "Mittens"
    },
    {
      src: "/media/kittens/cute-kitten-04.jpg",
      alt: "Sleepy kitten taking a nap",
      name: "Snuggles"
    },
    {
      src: "/media/kittens/cute-kitten-05.jpg",
      alt: "Curious kitten looking up",
      name: "Buttons"
    },
    {
      src: "/media/kittens/cute-kitten-06.jpg",
      alt: "Happy kitten playing",
      name: "Paws"
    },
    {
      src: "/media/kittens/cute-kitten-07.jpg",
      alt: "Sweet kitten cuddling",
      name: "Cuddles"
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
    <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Adorable Patients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet some of the cutest patients who have visited our clinic. We love caring for every furry friend that comes through our doors!
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cutePets.map((pet, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src={pet.src}
                  alt={pet.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold text-sm">{pet.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Every pet deserves the best care, and we&apos;re here to provide it with love and compassion.
          </p>
          <motion.div 
            className="inline-flex items-center gap-2 text-green-700 font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl">🐾</span>
            <span>Schedule your pet&apos;s visit today!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CutePetsGallery
