import { useEffect } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior and intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    // Observe all sections for animations
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
	      
	      <div id="gallery">
		      <Gallery />
	      </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Index