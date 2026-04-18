import type { Metadata } from 'next'
import { Syne, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'], weight: ['400', '700', '800'], variable: '--font-syne', display: 'swap' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-dm-sans', display: 'swap' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'AI Website Design, SEO & GEO Services for US Businesses | NeuralEdge',
  description: 'NeuralEdge is a US-focused AI digital marketing agency offering AI website builds, SEO & GEO services, and UI/UX design. Get found on Google and cited by AI.',
  keywords: ['AI digital marketing agency USA', 'SEO and GEO services United States', 'AI website design agency', 'generative engine optimization USA', 'UI UX design agency America', 'LLM visibility services', 'ChatGPT SEO optimization', 'AI search optimization agency'],
  openGraph: {
    title: 'AI Website Design, SEO & GEO Services | NeuralEdge',
    description: 'Get found on Google and cited by AI. AI websites, SEO & GEO, and UI/UX design for US businesses.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'NeuralEdge',
  description: 'AI digital marketing agency offering AI website builds, SEO & GEO services, and UI/UX design for US businesses.',
  areaServed: 'United States',
  serviceType: ['AI Website Build', 'SEO and GEO Services', 'UI/UX Design Services'],
  url: 'https://www.neuraledge.ai',
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050A18" />
      </head>
      <body className="font-dm-sans antialiased">{children}</body>
    </html>
  )
}
