import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Award, Users, Bird, Shield } from 'lucide-react'

export default function SebastianCrossProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/#team" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Team
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Exotic Pet Specialist
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Dr. Sebastian Cross
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A board-certified exotic pet specialist with 10 years of experience, providing expert care for birds, reptiles, and small mammals with unmatched expertise and compassion.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Bird className="w-4 h-4 mr-2 text-purple-500" />
                  Exotic Medicine Excellence
                </span>
                <span className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-blue-500" />
                  Avian Specialization
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  10 Years Experience
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/media/veterinarians/hot-vet-3.png"
                  alt="Dr. Sebastian Cross"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Exotic Animal Whisperer</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Sebastian Cross&apos;s fascination with exotic animals began during childhood visits to the Kansas City Zoo, where he spent hours observing the intricate behaviors of parrots, reptiles, and small mammals. His early passion for these unique creatures led him to pursue a specialized path in veterinary medicine that few dare to take.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              After earning his DVM from the University of Pennsylvania School of Veterinary Medicine, Dr. Cross completed an intensive residency in exotic animal medicine at the world-renowned Wildlife Conservation Society. His groundbreaking research on avian nutrition and reptile anesthesia protocols has been published in multiple international journals and has revolutionized care standards for exotic pets.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Cross joined Waldo Area Veterinary Clinic in 2018, bringing with him state-of-the-art equipment specifically designed for exotic animal care. His gentle, patient approach with nervous birds and reptiles has earned him the trust of even the most challenging patients, while his encyclopedic knowledge of exotic animal diseases and treatments has saved countless lives.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Professional Achievements</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Board-certified in Exotic Companion Mammal Practice (ABVP)
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Certified Avian Veterinarian (CAV) with advanced training in avian surgery
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Specialist in reptile medicine with focus on tortoise and iguana care
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Author of "The Complete Guide to Exotic Pet Health" (2021)
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Featured expert on National Geographic's "Exotic Pet Rescue" series
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Specialized Care Philosophy</h3>
            <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-700 text-lg">
              &ldquo;Exotic animals are not just pets&mdash;they&apos;re ambassadors from wild places. My mission is to provide them with the specialized care they deserve while educating their families about the unique needs of these remarkable creatures.&rdquo;
            </blockquote>
            
            <p className="text-gray-600 leading-relaxed mt-6">
              Dr. Cross&apos;s expertise spans across all exotic species, from the smallest sugar gliders to the largest tortoises. His clinic features specialized equipment including avian incubators, reptile heating systems, and advanced diagnostic tools designed specifically for exotic animals. He&apos;s particularly known for his innovative approach to avian surgery and his success rate with complex reptile cases.
            </p>
            
            <p className="text-gray-600 leading-relaxed mt-6">
              Beyond clinical practice, Dr. Cross is passionate about conservation education. He regularly speaks at schools and community events about responsible exotic pet ownership and wildlife conservation. His home is a sanctuary for rescued exotic animals, including three parrots, a tortoise, and a colony of sugar gliders.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Exotic Animal Specialties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bird className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Avian Medicine & Surgery</h3>
              <p className="text-gray-600">Specialized care for parrots, canaries, finches, and other exotic birds with advanced surgical capabilities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reptile Medicine</h3>
              <p className="text-gray-600">Expert care for snakes, lizards, turtles, and tortoises with species-specific treatment protocols.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Exotic Mammals</h3>
              <p className="text-gray-600">Specialized care for rabbits, guinea pigs, ferrets, sugar gliders, and other small exotic mammals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
