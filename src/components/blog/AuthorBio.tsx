import { BlogPost } from '@/lib/blog-data'

interface AuthorBioProps {
  author: BlogPost['author']
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            About {author.name}
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            {author.title}
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {author.bio}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {author.credentials.map((credential) => (
              <span 
                key={credential}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {credential}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
