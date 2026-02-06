import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Donald Mbouhom | Full Stack AI Developer',
  description: 'Full Stack AI Developer specializing in Computer Vision, Machine Learning, and Industrial Automation. Expert in end-to-end AI solutions from model design to production deployment.',
  keywords: ['AI Developer', 'Machine Learning', 'Computer Vision', 'Full Stack', 'YOLOv8', 'Next.js', 'FastAPI', 'Azure'],
  authors: [{ name: 'Donald Mbouhom' }],
  openGraph: {
    title: 'Donald Mbouhom | Full Stack AI Developer',
    description: 'Full Stack AI Developer specializing in Computer Vision and Industrial Automation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="animated-bg noise-texture">
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}