import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Waldo Area Veterinary Clinic | Compassionate Care for Your Beloved Pets',
  description: 'Premier veterinary care in Kansas City\'s Waldo neighborhood. Expert veterinarians providing comprehensive medical, surgical, and wellness services for dogs, cats, and exotic pets.',
  keywords: 'veterinary clinic, Kansas City, Waldo, pet care, emergency vet, exotic pets, animal hospital',
  authors: [{ name: 'Waldo Area Veterinary Clinic' }],
  openGraph: {
    title: 'Waldo Area Veterinary Clinic | Compassionate Care for Your Beloved Pets',
    description: 'Premier veterinary care in Kansas City\'s Waldo neighborhood. Expert veterinarians providing comprehensive medical, surgical, and wellness services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waldo Area Veterinary Clinic | Compassionate Care for Your Beloved Pets',
    description: 'Premier veterinary care in Kansas City\'s Waldo neighborhood. Expert veterinarians providing comprehensive medical, surgical, and wellness services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}