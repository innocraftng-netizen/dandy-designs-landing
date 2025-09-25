import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Sparkles, X } from "lucide-react"
import logo from "@/assets/logo.png"
import { PHONE } from "@/utils/constants.ts";

const Navigation = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const [ isScrolled, setIsScrolled ] = useState(false)
	
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	
	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
		setIsOpen(false)
	}
	
	return (
		<nav className={ `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled ? 'glass-effect shadow-soft backdrop-blur-md' : 'bg-transparent'
		}` }>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					
					{/* Logo */ }
					<div className="flex items-center space-x-3 cursor-pointer" onClick={ () => scrollToSection('hero') }>
						<img src={ logo } alt="Dandy Designs" className="w-16 h-16"/>
						<div className="hidden sm:block">
							<span className="text-sm text-primary cursive">DANDY DESIGNS</span>
						</div>
					</div>
					
					{/* Desktop Menu */ }
					<div className="hidden lg:flex items-center space-x-8">
						<button onClick={ () => scrollToSection('hero') }
						        className="text-foreground hover:text-primary transition-colors font-semibold">
							Home
						</button>
						<button onClick={ () => scrollToSection('gallery') }
						        className="text-foreground hover:text-primary transition-colors font-semibold">
							Gallery
						</button>
						<button onClick={ () => scrollToSection('services') }
						        className="text-foreground hover:text-primary transition-colors font-semibold">
							Services
						</button>
						<button onClick={ () => scrollToSection('contact') }
						        className="text-foreground hover:text-primary transition-colors font-semibold">
							Contact
						</button>
					</div>
					
					{/* Contact Info & CTA */ }
					<div className="hidden lg:flex items-center space-x-4">
						<div className="flex items-center space-x-2 text-sm text-muted-foreground">
							<Phone className="w-4 h-4"/>
							<span>07012463004</span>
						</div>
						<Button asChild variant="luxury" size="sm">
							<a href={ `tel:${ PHONE }` }>
								<Sparkles className="w-4 h-4 mr-2"/>
								Book Now
							</a>
						</Button>
					</div>
					
					{/* Mobile Menu Button */ }
					<button
						onClick={ () => setIsOpen(!isOpen) }
						className="lg:hidden p-2 rounded-md hover:bg-accent"
					>
						{ isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/> }
					</button>
				</div>
				
				{/* Mobile Menu */ }
				{ isOpen && (
					<div className="lg:hidden glass-effect rounded-2xl mt-2 p-6 space-y-4">
						<button onClick={ () => scrollToSection('hero') }
						        className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-semibold">
							Home
						</button>
						<button onClick={ () => scrollToSection('gallery') }
						        className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-semibold">
							Gallery
						</button>
						<button onClick={ () => scrollToSection('services') }
						        className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-semibold">
							Services
						</button>
						<button onClick={ () => scrollToSection('contact') }
						        className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-semibold">
							Contact
						</button>
						<div className="pt-4 border-t border-border space-y-3">
							<div className="flex items-center space-x-2 text-sm text-muted-foreground">
								<Phone className="w-4 h-4"/>
								<span>07012463004</span>
							</div>
							<Button asChild variant="luxury" className="w-full">
								<a href={ `tel:${ PHONE }` }>
									<Sparkles className="w-4 h-4 mr-2"/>
									Book Consultation
								</a>
							</Button>
						</div>
					</div>
				) }
			</div>
		</nav>
	)
}

export default Navigation