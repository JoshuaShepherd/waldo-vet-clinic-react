import { Metadata } from 'next'
import { blogPosts } from '@/lib/blog-data'
import BlogCard from '@/components/blog/BlogCard'
import { Calendar, User, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Veterinary Blog | Expert Insights from Our Veterinarians',
  description: 'Expert veterinary insights, health tips, and medical guidance from our team of experienced veterinarians. Stay informed about your pet\'s health and wellness.',
  keywords: 'veterinary blog, pet health tips, animal care, veterinary medicine, pet wellness',
}

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Veterinary Insights & Expert Guidance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about your pet's health with expert insights from our experienced veterinarians. 
              From preventive care to advanced treatments, we're here to help you make the best decisions for your beloved pets.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.publishDate}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-slate-800">{featuredPost.author.name}</p>
                      <p className="text-sm text-gray-500">{featuredPost.author.title}</p>
                    </div>
                  </div>
                  <a 
                    href={`/blog/${featuredPost.slug}`}
                    className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-900 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Pet Health</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest veterinary insights and health tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
