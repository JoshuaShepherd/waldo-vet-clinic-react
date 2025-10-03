import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Award, Users } from 'lucide-react'

export default function MarcusSterlingProfile() {
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Chief Veterinarian & Practice Director
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Dr. Marcus Sterling
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A visionary leader in veterinary medicine with over 18 years of experience in advanced internal medicine and emergency care.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-red-500" />
                  Advanced Internal Medicine
                </span>
                <span className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-blue-500" />
                  Emergency Care Specialist
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  18 Years Experience
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/media/veterinarians/hot-vet-1.png"
                  alt="Dr. Marcus Sterling"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Journey of Excellence</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Marcus Sterling&apos;s journey into veterinary medicine began with a childhood fascination for the bond between humans and animals. Growing up on a small farm in rural Missouri, he spent his formative years caring for livestock and companion animals, developing a deep understanding of animal behavior and health.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              After graduating magna cum laude from the University of Missouri College of Veterinary Medicine, Dr. Sterling pursued advanced training in internal medicine at the prestigious Cornell University. His research on feline diabetes management earned him recognition in the Journal of Veterinary Internal Medicine and established him as a rising star in the field.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              In 2006, Dr. Sterling founded Waldo Area Veterinary Clinic with a revolutionary vision: to combine cutting-edge medical technology with compassionate, personalized care. His leadership philosophy centers on treating every pet as if they were his own, ensuring that both animals and their families feel valued and understood.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Professional Achievements</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Board-certified in Internal Medicine (ACVIM)
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Master&apos;s Degree in Veterinary Science with focus on Emergency Medicine
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Published author of 15+ peer-reviewed articles on veterinary internal medicine
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Recipient of the Missouri Veterinary Medical Association&apos;s Excellence Award (2019)
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Featured speaker at the North American Veterinary Conference
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Personal Philosophy</h3>
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 text-lg">
              &ldquo;Every animal deserves the highest quality of care, regardless of their background or circumstances. My mission is to ensure that every pet receives the same level of attention and expertise that I would want for my own beloved companions.&rdquo;
            </blockquote>
            
            <p className="text-gray-600 leading-relaxed mt-6">
              When not at the clinic, Dr. Sterling enjoys hiking with his two rescue dogs, Luna and Scout, and volunteering at local animal shelters. He&apos;s also an avid photographer, capturing the beauty of Missouri&apos;s wildlife and landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Internal Medicine</h3>
              <p className="text-gray-600">Specialized diagnosis and treatment of complex internal conditions in dogs and cats.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Care</h3>
              <p className="text-gray-600">24/7 emergency services with advanced life support and critical care capabilities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Surgical Excellence</h3>
              <p className="text-gray-600">Advanced surgical procedures with state-of-the-art equipment and techniques.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
