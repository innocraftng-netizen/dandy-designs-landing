import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Import gallery images
import gallery1 from "@/assets/gallery-1.jpg"
import gallery2 from "@/assets/gallery-2.jpg"
import gallery3 from "@/assets/gallery-3.jpg"
import gallery4 from "@/assets/gallery-4.jpg"
import gallery5 from "@/assets/gallery-5.jpg"
import gallery6 from "@/assets/gallery-6.jpg"
import heroImage from "@/assets/hero.jpeg"

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: heroImage, alt: "Elegant fashion styling", title: "Signature Style" },
    { src: gallery1, alt: "Corporate professional wear", title: "Corporate Elegance" },
    { src: gallery2, alt: "Golden evening gown", title: "Evening Glamour" },
    { src: gallery3, alt: "Modern business attire", title: "Business Chic" },
    { src: gallery4, alt: "Sophisticated dress design", title: "Luxury Design" },
    { src: gallery5, alt: "Contemporary blazer styling", title: "Modern Professional" },
    { src: gallery6, alt: "Formal evening wear", title: "Evening Excellence" },
  ]

  // Split images into two columns for masonry effect
  const leftColumn = images.filter((_, index) => index % 2 === 0)
  const rightColumn = images.filter((_, index) => index % 2 === 1)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isExpanded) {
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
        if (e.key === 'Escape') setIsExpanded(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isExpanded])

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
            <Eye className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Gallery</span>
          </div>
          
          <h2 className="heading-hero">
            Fashion That Speaks
            <span className="text-primary block">Your Language</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our portfolio of stunning designs and see how we transform visions into wearable art.
          </p>
        </div>

        {/* Masonry Gallery with Auto-Scroll */}
        <div className="relative h-[600px] overflow-hidden rounded-3xl">
          {/* Fade Gradients */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-muted/30 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-muted/30 to-transparent z-10" />
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          {/* Scrolling Columns */}
          <div className="flex gap-6 h-full">
            
            {/* Left Column - Scrolling Up */}
            <div className="flex-1 flex flex-col space-y-6 animate-scroll-up">
              {[...leftColumn, ...leftColumn, ...leftColumn].map((image, index) => (
                <Card key={`left-${index}`} className="overflow-hidden hover-lift shadow-soft hover:shadow-luxury transition-all duration-500 group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-bold text-lg">{image.title}</h4>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Right Column - Scrolling Down */}
            <div className="flex-1 flex flex-col space-y-6 animate-scroll-down">
              {[...rightColumn, ...rightColumn, ...rightColumn].map((image, index) => (
                <Card key={`right-${index}`} className="overflow-hidden hover-lift shadow-soft hover:shadow-luxury transition-all duration-500 group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-bold text-lg">{image.title}</h4>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery Expand Button */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
              <DialogTrigger asChild>
                <Button variant="glass" className="shadow-luxury hover:shadow-glow">
                  <Eye className="w-4 h-4 mr-2" />
                  👀 Click to view gallery
                </Button>
              </DialogTrigger>
              
              <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black/95 border-0">
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>

                  {/* Current Image */}
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="relative max-w-4xl max-h-full">
                      <img
                        src={images[currentImage].src}
                        alt={images[currentImage].alt}
                        className="w-full h-full object-contain rounded-lg"
                      />
                      
                      {/* Image Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                        <h3 className="text-white text-2xl font-bold mb-2">{images[currentImage].title}</h3>
                        <p className="text-white/80">{images[currentImage].alt}</p>
                        <div className="flex justify-center mt-4 space-x-2">
                          {images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImage(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImage ? 'bg-primary' : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h3 className="text-3xl font-black text-foreground">
              Love What You See?
            </h3>
            <p className="text-lg text-muted-foreground">
              Every piece in our gallery represents our commitment to excellence and attention to detail. Let's create something beautiful together.
            </p>
            <Button variant="hero" size="xl">
              Start Your Custom Design
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery