import type { Metadata } from 'next'
import AuroraBackground from '@/components/AuroraBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'AI Marketing Services — SEO, GEO & Web Design | NeuralEdge',
  description: 'Explore NeuralEdge\'s three core services: AI Website Build, SEO & GEO Services, and UI/UX Design. Built for US businesses that want to dominate Google and AI search.',
}

export default function ServicesPage() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <section style={{ padding: '80px 60px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <span className="section-label" style={{ marginBottom: 16, display: 'block' }}>
              WHAT WE DO
            </span>
            <h1
              className="font-syne"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: '#F0F9FF',
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Services Built to Get You{' '}
              <span style={{ color: '#7DD3FC', textShadow: '0 0 40px rgba(125,211,252,0.4)' }}>
                Found
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 17,
                color: '#94A3B8',
                lineHeight: 1.7,
              }}
            >
              Three focused services. One mission: make your US business visible on Google, AI,
              and everywhere your customers are searching.
            </p>
          </div>
        </section>
        <Services />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
