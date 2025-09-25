import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Crown, Shirt, Sparkles, Star, Zap } from "lucide-react"
import { PHONE } from "@/utils/constants.ts";

const Services = () => {
	const services = [
		{
			icon: Briefcase,
			title: "Corporate Wears",
			description: "Professional attire that commands respect and confidence in any business setting.",
			features: [ "Custom blazers", "Tailored suits", "Professional dresses", "Business casual" ]
		},
		{
			icon: Crown,
			title: "Evening Gowns",
			description: "Exquisite gowns designed to make you the center of attention at any special occasion.",
			features: [ "Red carpet ready", "Custom designs", "Luxury fabrics", "Perfect fit guarantee" ]
		},
		{
			icon: Shirt,
			title: "Skirts & Blouses",
			description: "Elegant separates that offer versatility and sophistication for any wardrobe.",
			features: [ "Mix & match pieces", "Contemporary styles", "Quality materials", "Perfect tailoring" ]
		}
	]
	
	const features = [
		{icon: Star, text: "Premium Quality Fabrics"},
		{icon: Zap, text: "Quick Turnaround Time"},
		{icon: Sparkles, text: "Custom Design Service"},
	]
	
	return (
		<section id="services" className="py-24 bg-gradient-hero">
			<div className="container mx-auto px-4">
				
				{/* Section Header */ }
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
					<div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
						<Sparkles className="w-5 h-5 text-primary"/>
						<span className="text-sm font-bold text-primary uppercase tracking-wider">Our Services</span>
					</div>
					
					<h2 className="heading-hero">
						Crafted for Your
						<span className="text-primary block">Perfect Style</span>
					</h2>
					
					<p className="text-xl text-muted-foreground leading-relaxed">
						From boardroom to ballroom, we create exceptional pieces that reflect your unique personality and elevate
						your confidence.
					</p>
				</div>
				
				{/* Services Grid */ }
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{ services.map((service, index) => (
						<Card key={ index }
						      className="hover-lift bg-card border-0 shadow-soft hover:shadow-luxury transition-all duration-500 group">
							<CardContent className="p-8">
								<div className="text-center space-y-6">
									
									{/* Icon */ }
									<div
										className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl group-hover:shadow-glow transition-all duration-300">
										<service.icon className="w-8 h-8 text-primary-foreground"/>
									</div>
									
									{/* Title & Description */ }
									<div className="space-y-3">
										<h3 className="text-2xl font-black text-foreground">{ service.title }</h3>
										<p className="text-muted-foreground leading-relaxed">{ service.description }</p>
									</div>
									
									{/* Features */ }
									<div className="space-y-2">
										{ service.features.map((feature, idx) => (
											<div key={ idx } className="flex items-center justify-center space-x-2 text-sm">
												<div className="w-1.5 h-1.5 bg-primary rounded-full"/>
												<span className="text-muted-foreground">{ feature }</span>
											</div>
										)) }
									</div>
									
									{/* CTA */ }
									<Button asChild variant="outline"
									        className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
										<a href={ `tel:${ PHONE }` }> Learn More </a>
									</Button>
								</div>
							</CardContent>
						</Card>
					)) }
				</div>
				
				{/* Features Bar */ }
				<div className="grid md:grid-cols-3 gap-8 p-8 glass-effect rounded-3xl">
					{ features.map((feature, index) => (
						<div key={ index } className="flex items-center justify-center space-x-3 text-center">
							<feature.icon className="w-6 h-6 text-primary"/>
							<span className="font-semibold text-foreground">{ feature.text }</span>
						</div>
					)) }
				</div>
				
				{/* CTA Section */ }
				<div className="text-center mt-16">
					<div className="space-y-6">
						<h3 className="text-3xl font-black text-foreground">
							Ready to Transform Your Wardrobe?
						</h3>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Schedule a consultation with our expert designers and discover how we can bring your fashion vision to
							life.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button variant="hero" size="xl">
								<Sparkles className="w-5 h-5 mr-2"/>
								Book Consultation
							</Button>
							<Button variant="outline" size="xl">
								View Pricing
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services