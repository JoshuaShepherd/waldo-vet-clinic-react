import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veterinary Blog | Expert Insights from Our Veterinarians',
  description: 'Expert veterinary insights, health tips, and medical guidance from our team of experienced veterinarians. Stay informed about your pet\'s health and wellness.',
  keywords: 'veterinary blog, pet health tips, animal care, veterinary medicine, pet wellness',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}
