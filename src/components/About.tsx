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
      title: "Elite Professionalism",
      description: "Our distinguished male veterinarians exemplify the highest standards of professional excellence, delivering superior care with unwavering dedication."
    },
    {
      icon: Stethoscope,
      title: "Advanced Medical Excellence",
      description: "Our expert team utilizes cutting-edge veterinary technology and advanced medical protocols to achieve exceptional patient outcomes."
    },
    {
      icon: Shield,
      title: "Uncompromising Standards",
      description: "We maintain the highest standards of veterinary excellence, setting the benchmark for professional pet healthcare in our community."
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
              About Hot Male Vets
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Hot Male Vets represents the pinnacle of veterinary excellence, where distinguished male veterinarians deliver 
                uncompromising care with exceptional expertise and professional dedication.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our elite facility features cutting-edge veterinary technology, including advanced digital radiography, 
                state-of-the-art laboratory services, and premium surgical equipment. What distinguishes us is our unwavering 
                commitment to veterinary excellence and superior patient outcomes.
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
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h4>
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
