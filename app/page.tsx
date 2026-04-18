import AuroraBackground from '@/components/AuroraBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import HowWeWork from '@/components/HowWeWork'
import Testimonial from '@/components/Testimonial'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowWeWork />
        <Testimonial />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
