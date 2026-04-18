import type { Metadata } from 'next'
import AuroraBackground from '@/components/AuroraBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About NeuralEdge | AI Digital Marketing Agency for US Businesses',
  description: 'Learn about NeuralEdge — the AI-first digital marketing agency helping US businesses rank on Google and get cited by AI. Meet our team and mission.',
}

export default function AboutPage() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '100px 60px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="section-label" style={{ marginBottom: 16, display: 'block' }}>
              ABOUT US
            </span>
            <h1
              className="font-syne"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 58px)',
                color: '#F0F9FF',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              We&apos;re the Agency Built for the{' '}
              <span style={{ color: '#7DD3FC', textShadow: '0 0 40px rgba(125,211,252,0.4)' }}>
                AI Search Age
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 18,
                color: '#94A3B8',
                lineHeight: 1.7,
                maxWidth: 600,
                margin: '0 auto',
              }}
            >
              NeuralEdge was founded in 2023 with a single mission: help US businesses thrive in a
              world where AI is rewriting the rules of search and discovery. We combine technical SEO,
              Generative Engine Optimization (GEO), and cutting-edge web development to future-proof
              your brand.
            </p>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '60px 60px 100px' }}>
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                title: 'AI-First',
                body: 'Every strategy, tool, and decision is designed with the AI search landscape in mind — because that\'s where your customers are going.',
              },
              {
                title: 'US-Focused',
                body: 'We specialize exclusively in the US market. We understand American consumer psychology, search behavior, and competitive dynamics.',
              },
              {
                title: 'Transparent',
                body: 'No black-box strategies. We give you clear reporting, real metrics, and honest assessments of what\'s working and what isn\'t.',
              },
              {
                title: 'Results-Driven',
                body: 'We don\'t measure success in vanity metrics. Leads generated, revenue influenced, and rankings achieved — that\'s what matters.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{ padding: '32px 28px' }}
              >
                <h3
                  className="font-syne"
                  style={{ fontWeight: 700, fontSize: 20, color: '#7DD3FC', marginBottom: 12 }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 15,
                    color: '#94A3B8',
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
