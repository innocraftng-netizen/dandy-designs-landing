import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import gallery images
import gallery1 from "@/assets/img/1.jpeg"
import gallery2 from "@/assets/img/2.jpeg"
import gallery3 from "@/assets/img/3.jpeg"
import gallery4 from "@/assets/img/4.jpeg"
import gallery5 from "@/assets/img/5.jpeg"
import gallery6 from "@/assets/img/6.jpeg"
import gallery7 from "@/assets/img/7.jpeg"
import gallery8 from "@/assets/img/8.jpeg"
import gallery9 from "@/assets/img/9.jpeg"
import gallery10 from "@/assets/img/10.jpeg"
import gallery11 from "@/assets/img/11.jpeg"
import gallery12 from "@/assets/img/12.jpeg"
import gallery13 from "@/assets/img/13.jpeg"
import gallery14 from "@/assets/img/14.jpeg"
import gallery15 from "@/assets/img/15.jpeg"

const Gallery = () => {
	const [ isExpanded, setIsExpanded ] = useState(false)
	const [ currentImage, setCurrentImage ] = useState(0)
	const [ galleryOpen, setGalleryOpen ] = useState(false);
	
	const images = [
		{src: gallery1, alt: "Corporate professional wear", title: "Corporate Elegance"},
		{src: gallery2, alt: "Golden evening gown", title: "Evening Glamour"},
		{src: gallery3, alt: "Modern business attire", title: "Business Chic"},
		{src: gallery4, alt: "Sophisticated dress design", title: "Luxury Design"},
		{src: gallery5, alt: "Contemporary blazer styling", title: "Modern Professional"},
		{src: gallery6, alt: "Formal evening wear", title: "Evening Excellence"},
		{src: gallery7, alt: "Corporate professional wear", title: "Corporate Elegance"},
		{src: gallery8, alt: "Golden evening gown", title: "Evening Glamour"},
		{src: gallery9, alt: "Modern business attire", title: "Business Chic"},
		{src: gallery10, alt: "Sophisticated dress design", title: "Luxury Design"},
		{src: gallery11, alt: "Contemporary blazer styling", title: "Modern Professional"},
		{src: gallery12, alt: "Formal evening wear", title: "Evening Excellence"},
		{src: gallery13, alt: "Formal evening wear", title: "Evening Excellence"},
		{src: gallery14, alt: "Formal evening wear", title: "Evening Excellence"},
		{src: gallery15, alt: "Formal evening wear", title: "Evening Excellence"},
	]
	
	// Split images into two columns for masonry effect
	const leftColumn = images.filter((_, index) => index % 2 === 0)
	const rightColumn = images.filter((_, index) => index % 2 === 1)
	
	const nextImage = () => {
		setCurrentImage((prev) => ( prev + 1 ) % images.length)
	}
	
	const prevImage = () => {
		setCurrentImage((prev) => ( prev - 1 + images.length ) % images.length)
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
	}, [ isExpanded ])
	
	const columns = 3;
	const columnImages = Array.from({length: columns}, (_, col) =>
		images.filter((_, i) => i % columns === col)
	);
	
	
	return (
		<div>
			<section id="gallery" className="relative px-6 py-20 bg-gray-50">
				
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
					<h2 className="heading-hero">
						Look What We
						<span className="text-primary block">Can Do</span>
					</h2>
				</div>
				<div
					className="relative flex items-center justify-center gap-4 max-h-[70vh] overflow-hidden container lg:w-1/2">
					{ columnImages.map((colImgs, colIdx) => (
						<div
							key={ colIdx }
							className={ `flex flex-col w-full gap-4 ${ colIdx % 2 === 0 ? "animate-scrollUp" : "animate-scrollDown" }` }
						>
							{ colImgs.concat(colImgs).map((img, i) => (
								<img
									key={ i }
									src={ img.src }
									alt={ `Design ${ i + 1 }` }
									loading="lazy"
									className="rounded-lg object-cover w-full"
								/>
							)) }
						</div>
					)) }
					<div
						className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
					<div
						className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
					<div
						className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>
					<div
						className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>
				</div>
				<div className="text-center mt-6">
					<button
						onClick={ () => setGalleryOpen(true) }
						className="text-gray-600 hover:text-yellow-700"
					>
						Click to view gallery 👀
					</button>
				</div>
			</section>
			
			{ galleryOpen && (
				<div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
					<button
						onClick={ () => setGalleryOpen(false) }
						className="absolute top-4 right-6 text-white heading-hero w-12 h-12 z-50 hover:text-gray-300 transition-colors"
					>
						✕
					</button>
					
					<div className="w-full h-full flex items-center justify-center p-4">
						<Swiper
							modules={ [ Navigation, Pagination ] }
							spaceBetween={ 30 }
							slidesPerView={ 1 }
							navigation={ {
								nextEl: '.swiper-button-next-custom',
								prevEl: '.swiper-button-prev-custom',
							} }
							pagination={ {
								clickable: true,
								dynamicBullets: true
							} }
							className="w-full h-full max-w-6xl max-h-[100vh] rounded"
							style={ {
								'--swiper-navigation-color': '#fff',
								'--swiper-pagination-color': '#fff',
								'--swiper-navigation-size': '44px'
							} as React.CSSProperties }
						>
							{ images.map((img, i) => (
								<SwiperSlide key={ i } className="flex items-center justify-center rounded">
									<img
										title={ img.title }
										src={ img.src }
										alt={ img.alt }
										className="object-contain rounded-3xl "
									/>
								</SwiperSlide>
							)) }
						</Swiper>
						
						{/* Custom navigation buttons */ }
						<button
							className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 text-white heading-hero z-40 hover:text-gray-300 transition-colors p-2">
							‹
						</button>
						<button
							className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 text-white heading-hero z-40 hover:text-gray-300 transition-colors p-2">
							›
						</button>
					</div>
				</div>
			) }
			
			<style>{ `
          @keyframes scrollUp {
              0% {
                  transform: translateY(0);
              }
              100% {
                  transform: translateY(-50%);
              }
          }

          @keyframes scrollDown {
              0% {
                  transform: translateY(-50%);
              }
              100% {
                  transform: translateY(0);
              }
          }

          .animate-scrollUp {
              animation: scrollUp 40s linear infinite;
          }

          .animate-scrollDown {
              animation: scrollDown 40s linear infinite;
          }
			` }</style>
		</div>
	)
	
	// return (
	//   <section id="gallery" className="py-24 bg-muted/30">
	//     <div className="container mx-auto px-4">
	//
	//       {/* Section Header */}
	//       <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
	//         <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
	//           <Eye className="w-5 h-5 text-primary" />
	//           <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Gallery</span>
	//         </div>
	//
	//         <h2 className="heading-hero">
	//           Fashion That Speaks
	//           <span className="text-primary block">Your Language</span>
	//         </h2>
	//
	//         <p className="text-xl text-muted-foreground leading-relaxed">
	//           Explore our portfolio of stunning designs and see how we transform visions into wearable art.
	//         </p>
	//       </div>
	//
	//       {/* Masonry Gallery with Auto-Scroll */}
	//       <div className="relative h-[600px] overflow-hidden rounded-3xl">
	//         {/* Fade Gradients */}
	//         <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-muted/30 to-transparent z-10" />
	//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-muted/30 to-transparent z-10" />
	//         <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
	//         <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />
	//
	//         {/* Scrolling Columns */}
	//         <div className="flex gap-6 h-full">
	//
	//           {/* Left Column - Scrolling Up */}
	//           <div className="flex-1 flex flex-col space-y-6 animate-scroll-up">
	//             {[...leftColumn, ...leftColumn, ...leftColumn].map((image, index) => (
	//               <Card key={`left-${index}`} className="overflow-hidden hover-lift shadow-soft hover:shadow-luxury transition-all duration-500 group">
	//                 <div className="relative aspect-[3/4] overflow-hidden">
	//                   <img
	//                     src={image.src}
	//                     alt={image.alt}
	//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
	//                   />
	//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
	//                   <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
	//                     <h4 className="text-white font-bold text-lg">{image.title}</h4>
	//                   </div>
	//                 </div>
	//               </Card>
	//             ))}
	//           </div>
	//
	//           {/* Right Column - Scrolling Down */}
	//           <div className="flex-1 flex flex-col space-y-6 animate-scroll-down">
	//             {[...rightColumn, ...rightColumn, ...rightColumn].map((image, index) => (
	//               <Card key={`right-${index}`} className="overflow-hidden hover-lift shadow-soft hover:shadow-luxury transition-all duration-500 group">
	//                 <div className="relative aspect-[3/4] overflow-hidden">
	//                   <img
	//                     src={image.src}
	//                     alt={image.alt}
	//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
	//                   />
	//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
	//                   <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
	//                     <h4 className="text-white font-bold text-lg">{image.title}</h4>
	//                   </div>
	//                 </div>
	//               </Card>
	//             ))}
	//           </div>
	//         </div>
	//
	//         {/* Gallery Expand Button */}
	//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
	//           <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
	//             <DialogTrigger asChild>
	//               <Button variant="glass" className="shadow-luxury hover:shadow-glow">
	//                 <Eye className="w-4 h-4 mr-2" />
	//                 👀 Click to view gallery
	//               </Button>
	//             </DialogTrigger>
	//
	//             <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black/95 border-0">
	//               <div className="relative w-full h-full flex items-center justify-center">
	//
	//                 {/* Close Button */}
	//                 <button
	//                   onClick={() => setIsExpanded(false)}
	//                   className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
	//                 >
	//                   <X className="w-6 h-6 text-white" />
	//                 </button>
	//
	//                 {/* Navigation Buttons */}
	//                 <button
	//                   onClick={prevImage}
	//                   className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
	//                 >
	//                   <ChevronLeft className="w-6 h-6 text-white" />
	//                 </button>
	//
	//                 <button
	//                   onClick={nextImage}
	//                   className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
	//                 >
	//                   <ChevronRight className="w-6 h-6 text-white" />
	//                 </button>
	//
	//                 {/* Current Image */}
	//                 <div className="w-full h-full flex items-center justify-center p-8">
	//                   <div className="relative max-w-4xl max-h-full">
	//                     <img
	//                       src={images[currentImage].src}
	//                       alt={images[currentImage].alt}
	//                       className="w-full h-full object-contain rounded-lg"
	//                     />
	//
	//                     {/* Image Info */}
	//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
	//                       <h3 className="text-white text-2xl font-bold mb-2">{images[currentImage].title}</h3>
	//                       <p className="text-white/80">{images[currentImage].alt}</p>
	//                       <div className="flex justify-center mt-4 space-x-2">
	//                         {images.map((_, index) => (
	//                           <button
	//                             key={index}
	//                             onClick={() => setCurrentImage(index)}
	//                             className={`w-2 h-2 rounded-full transition-colors ${
	//                               index === currentImage ? 'bg-primary' : 'bg-white/30'
	//                             }`}
	//                           />
	//                         ))}
	//                       </div>
	//                     </div>
	//                   </div>
	//                 </div>
	//               </div>
	//             </DialogContent>
	//           </Dialog>
	//         </div>
	//       </div>
	//
	//       {/* CTA Section */}
	//       <div className="text-center mt-16">
	//         <div className="space-y-6 max-w-2xl mx-auto">
	//           <h3 className="text-3xl font-black text-foreground">
	//             Love What You See?
	//           </h3>
	//           <p className="text-lg text-muted-foreground">
	//             Every piece in our gallery represents our commitment to excellence and attention to detail. Let's create something beautiful together.
	//           </p>
	//           <Button variant="hero" size="xl">
	//             Start Your Custom Design
	//           </Button>
	//         </div>
	//       </div>
	//     </div>
	//   </section>
	// )
}

export default Gallery