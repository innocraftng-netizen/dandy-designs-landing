import { Heart, Instagram, Phone, Sparkles } from "lucide-react"
import logo from "@/assets/logo.png"
import { INSTAGRAM, PHONE, PHONE2, TIKTOK } from '../utils/constants.ts'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	
	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
	}
	
	return (
		<footer className="bg-foreground text-background py-16">
			<div className="container mx-auto px-4">
				
				{/* Main Footer Content */ }
				<div className="grid md:grid-cols-3 gap-12 mb-12">
					
					{/* Brand Section */ }
					<div className="space-y-6">
						<div className="flex items-center space-x-3">
							<img src={ logo } alt="Dandy Designs" className="w-12 h-12"/>
							<div>
								<h3 className="font-black text-primary cursive">DANDY DESIGNS</h3>
								<p className="text-xs font-bold text-background/70">Fashion House</p>
							</div>
						</div>
						
						<p className="text-background/80 leading-relaxed">
							"Designed with passion, dressed with dignity." We create exceptional fashion pieces that celebrate your
							unique style and elevate your confidence.
						</p>
						
						<div className="flex items-center space-x-2 text-primary">
							<Sparkles className="w-4 h-4"/>
							<span className="text-sm font-semibold">Premium Fashion Since 2019</span>
						</div>
					</div>
					
					{/* Quick Links */ }
					<div className="space-y-6">
						<h4 className="text-lg font-bold text-background">Quick Links</h4>
						<div className="space-y-3">
							<button
								onClick={ () => scrollToSection('hero') }
								className="block text-background/80 hover:text-primary transition-colors text-left"
							>
								Home
							</button>
							<button
								onClick={ () => scrollToSection('services') }
								className="block text-background/80 hover:text-primary transition-colors text-left"
							>
								Our Services
							</button>
							<button
								onClick={ () => scrollToSection('gallery') }
								className="block text-background/80 hover:text-primary transition-colors text-left"
							>
								Gallery
							</button>
							<button
								onClick={ () => scrollToSection('contact') }
								className="block text-background/80 hover:text-primary transition-colors text-left"
							>
								Contact
							</button>
						</div>
					</div>
					
					{/* Contact Info */ }
					<div className="space-y-6">
						<h4 className="text-lg font-bold text-background">Get In Touch</h4>
						<div className="space-y-4">
							
							<div className="flex items-center space-x-3">
								<Phone className="w-5 h-5 text-primary"/>
								<div className="space-y-1">
									<a href={ `tel:${ PHONE }` }
									   className="block text-background/80 hover:text-primary transition-colors">
										{ PHONE }
									</a>
									<a href={ `tel:${ PHONE2 }` }
									   className="block text-background/80 hover:text-primary transition-colors">
										{ PHONE2 }
									</a>
								</div>
							</div>
							
							<div className="flex items-center space-x-3">
								<Instagram className="w-5 h-5 text-primary"/>
								<div className="space-y-1">
									<a
										href={ INSTAGRAM }
										target="_blank"
										rel="noopener noreferrer"
										className="block text-background/80 hover:text-primary transition-colors text-sm"
									>
										@dandy_designs_fashion_house
									</a>
									<a
										href={ TIKTOK }
										target="_blank"
										rel="noopener noreferrer"
										className="block text-background/80 hover:text-primary transition-colors text-sm"
									>
										@dandydesignsfashionhouse (TikTok)
									</a>
								</div>
							</div>
						</div>
						
						<div className="pt-4">
							<p className="text-sm text-background/60">
								Lagos, Nigeria<br/>
								Available by appointment
							</p>
						</div>
					</div>
				</div>
				
				{/* Divider */ }
				<div className="border-t border-background/20 pt-8">
					
					{/* Bottom Footer */ }
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						
						<div className="flex items-center space-x-2 text-sm text-background/60">
							<span>© { currentYear } Dandy Designs. Made with</span>
							<Heart className="w-4 h-4 text-red-500 fill-current"/>
							<span>in Lagos, Nigeria</span>
						</div>
						
						<div className="flex items-center space-x-6">
							<a
								href={ `tel:${ PHONE }` }
								className="text-background/60 hover:text-primary transition-colors"
							>
								<Phone className="w-5 h-5"/>
							</a>
							<a
								href={ INSTAGRAM }
								target="_blank"
								rel="noopener noreferrer"
								className="text-background/60 hover:text-primary transition-colors"
							>
								<Instagram className="w-5 h-5"/>
							</a>
						</div>
					</div>
					
					{/* Back to Top */ }
					<div className="text-center mt-8">
						<button
							onClick={ () => scrollToSection('hero') }
							className="inline-flex items-center space-x-2 text-sm text-background/60 hover:text-primary transition-colors"
						>
							<Sparkles className="w-4 h-4"/>
							<span>Back to Top</span>
						</button>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer