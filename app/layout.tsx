import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mirrorly - AI-Powered Virtual Try-On for Chrome',
  description: 'Experience AI-powered virtual try-on technology directly in your browser. Try on clothes, accessories, and more with our Chrome extension.',
  keywords: 'virtual try-on, AI, Chrome extension, fashion, clothing, try-on',
  authors: [{ name: 'Mirrorly Team' }],
  openGraph: {
    title: 'Mirrorly - AI-Powered Virtual Try-On',
    description: 'Experience AI-powered virtual try-on technology directly in your browser.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirrorly - AI-Powered Virtual Try-On',
    description: 'Experience AI-powered virtual try-on technology directly in your browser.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
