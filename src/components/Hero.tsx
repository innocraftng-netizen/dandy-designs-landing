import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"
import heroImage from "@/assets/hero.jpeg"
import { PHONE } from "@/utils/constants.ts";

const Hero = () => {
	const scrollToServices = () => {
		document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})
	}
	
	return (
		<section className="min-h-screen relative overflow-hidden bg-gradient-hero">
			{/* Background Pattern */ }
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary))_1px,transparent_0)] bg-[size:30px_30px]"/>
			</div>
			
			{/* Main Hero Content */ }
			<div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
					
					{/* Left Content */ }
					<div className="space-y-8 animate-fade-in-up">
						{/* Logo & Brand */ }
						<div className="flex items-center space-x-4">
							<div className="text-left max-w-3xl mx-auto space-y-6">
								<h2 className="heading-hero">
									<span> Dandy </span>
									<span className="text-primary">Designs</span>
								</h2>
							</div>
						</div>
						
						{/* Tagline */ }
						<div className="space-y-4">
							<p className="text-xl lg:text-2xl text-muted-foreground italic">
								"Designed with passion, dressed with dignity."
							</p>
							
							<div className="flex items-center space-x-2 text-primary">
								<Sparkles className="w-5 h-5"/>
								<span className="text-sm font-semibold uppercase tracking-wider">
                  Premium Fashion House
                </span>
							</div>
						</div>
						
						{/* Description */ }
						<p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
							Elevate your wardrobe with our exquisite collection of custom-tailored
							pieces. From sophisticated corporate wear to stunning evening gowns,
							we craft every garment with unmatched attention to detail.
						</p>
						
						{/* CTA Buttons */ }
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button variant="hero" size="xl" onClick={ scrollToServices }>
								Explore Collection
								<ArrowDown className="w-5 h-5 ml-2"/>
							</Button>
							<Button asChild variant="outline" size="xl">
								<a href={ `tel:${ PHONE }` }>
									Book Consultation
								</a>
							</Button>
						</div>
					</div>
					
					{/* Right Content - Hero Image */ }
					<div className="relative">
						<div
							className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-glow transition-all duration-500 hover-lift">
							<img
								src={ heroImage }
								alt="Elegant Fashion by Dandy Designs"
								className="w-full h-full object-cover aspect-[3/4]"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
						</div>
						
						{/* Floating Stats */ }
						<div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-6 animate-float">
							<div className="text-center">
								<div className="text-2xl font-black text-primary">500+</div>
								<div className="text-sm text-muted-foreground">Happy Clients</div>
							</div>
						</div>
						
						<div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-6 animate-float"
						     style={ {animationDelay: '2s'} }>
							<div className="text-center">
								<div className="text-2xl font-black text-primary">5+</div>
								<div className="text-sm text-muted-foreground">Years Experience</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Scroll Indicator */ }
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<ArrowDown className="w-6 h-6 text-primary"/>
			</div>
		</section>
	)
}

export default Hero