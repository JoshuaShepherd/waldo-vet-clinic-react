import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Award, Users, Scissors } from 'lucide-react'

export default function AlexanderBlackwoodProfile() {
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
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Senior Associate Veterinarian
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Dr. Alexander Blackwood
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A compassionate surgeon with 12 years of experience, specializing in advanced orthopedic procedures and pain management for our beloved pets.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Scissors className="w-4 h-4 mr-2 text-green-500" />
                  Advanced Orthopedic Surgery
                </span>
                <span className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-red-500" />
                  Pain Management
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-500" />
                  12 Years Experience
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/media/veterinarians/hot-vet-2.png"
                  alt="Dr. Alexander Blackwood"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">A Surgeon's Compassionate Touch</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Alexander Blackwood's path to veterinary surgery was forged through personal experience. As a teenager, he watched his beloved Golden Retriever, Max, struggle with hip dysplasia. The pain he witnessed in Max's eyes and the relief that came after successful surgery inspired him to dedicate his life to helping other animals overcome similar challenges.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              After completing his Doctor of Veterinary Medicine at Texas A&M University, Dr. Blackwood pursued a rigorous surgical residency at the renowned Colorado State University Veterinary Teaching Hospital. His exceptional skills and dedication earned him board certification in veterinary surgery (DACVS), making him one of the most qualified surgeons in the region.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Blackwood joined Waldo Area Veterinary Clinic in 2016, bringing with him innovative surgical techniques and a philosophy that combines technical excellence with emotional support for both pets and their families. His gentle bedside manner and ability to explain complex procedures in understandable terms have made him a trusted confidant for countless pet owners facing difficult decisions.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Professional Achievements</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Board-certified in Veterinary Surgery (DACVS)
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Fellowship in Advanced Orthopedic Surgery
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Pioneer in minimally invasive arthroscopic procedures
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Co-author of "Advances in Canine Hip Replacement Surgery"
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Kansas City Veterinary Medical Association Surgeon of the Year (2022)
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Surgical Philosophy</h3>
            <blockquote className="border-l-4 border-green-500 pl-6 italic text-gray-700 text-lg">
              "Every surgery is not just a medical procedure—it's a chance to restore quality of life and bring joy back to both the pet and their family. My goal is to make each procedure as safe, comfortable, and successful as possible."
            </blockquote>
            
            <p className="text-gray-600 leading-relaxed mt-6">
              Dr. Blackwood's expertise extends beyond the operating room. He's passionate about pain management and rehabilitation, working closely with our physical therapy team to ensure optimal recovery. His gentle approach and attention to detail have earned him the nickname "The Miracle Worker" among grateful pet owners.
            </p>
            
            <p className="text-gray-600 leading-relaxed mt-6">
              When not in surgery, Dr. Blackwood enjoys hiking with his rescue dog, Atlas, and volunteering at the Kansas City Humane Society. He's also an accomplished woodworker, crafting custom furniture and surgical instrument cases in his home workshop.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Surgical Specialties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Orthopedic Surgery</h3>
              <p className="text-gray-600">Complex bone and joint procedures including hip replacements, ACL repairs, and fracture stabilization.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pain Management</h3>
              <p className="text-gray-600">Comprehensive pain control strategies including multimodal anesthesia and post-operative care.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Surgical Rehabilitation</h3>
              <p className="text-gray-600">Collaborative approach to recovery including physical therapy and rehabilitation protocols.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
