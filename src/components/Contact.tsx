import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Instagram, MapPin, Phone, Send, Sparkles } from "lucide-react"
import { INSTAGRAM, PHONE, PHONE2, SEND_MAIL_TO } from "@/utils/constants.ts";

const Contact = () => {
	const contactInfo = [
		{
			icon: Phone,
			title: "Call Us",
			info: [ PHONE, PHONE2 ],
			action: `tel:${ PHONE }`
		},
		{
			icon: Instagram,
			title: "Follow Us",
			info: [ "@dandy_designs_fashion_house", "@dandydesignsfashionhouse" ],
			action: INSTAGRAM
		},
		{
			icon: MapPin,
			title: "Visit Us",
			info: [ "Lagos, Nigeria", "By appointment only" ],
			action: null
		},
		{
			icon: Clock,
			title: "Business Hours",
			info: [ "Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM" ],
			action: null
		}
	]
	
	const [ form, setForm ] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	})
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const {name, value} = e.target
		setForm(prev => ( {...prev, [name]: value} ))
	}
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		
		const recipient = SEND_MAIL_TO // your pre-determined email
		const subject = `Consultation Request: ${ form.service || "General" }`
		const body = `
First Name: ${ form.firstName }
Last Name: ${ form.lastName }
Email: ${ form.email }
Phone: ${ form.phone }
Service Interest: ${ form.service }

Message:
${ form.message }
    `
		
		// encode into mailto link
		const mailtoLink = `mailto:${ recipient }?subject=${ encodeURIComponent(subject) }&body=${ encodeURIComponent(body) }`
		window.location.href = mailtoLink
	}
	
	return (
		<section id="contact" className="py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				
				{/* Section Header */ }
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
					<div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
						<Send className="w-5 h-5 text-primary"/>
						<span className="text-sm font-bold text-primary uppercase tracking-wider">Get In Touch</span>
					</div>
					
					<h2 className="heading-hero">
						Let's Create Something
						<span className="text-primary block">Beautiful Together</span>
					</h2>
					
					<p className="text-xl text-muted-foreground leading-relaxed">
						Ready to elevate your style? Contact us today for a personalized consultation and let's bring your fashion
						vision to life.
					</p>
				</div>
				
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					
					{/* Contact Form */ }
					<Card className="shadow-luxury hover:shadow-glow transition-all duration-500">
						<CardContent className="p-8">
							<div className="space-y-6">
								<div className="text-center space-y-2">
									<h3 className="text-2xl font-black text-foreground">Book Your Consultation</h3>
									<p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24
										hours.</p>
								</div>
								
								<form onSubmit={ handleSubmit } className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<label className="text-sm font-semibold text-foreground">First Name</label>
											<Input
												name="firstName"
												value={ form.firstName }
												onChange={ handleChange }
												placeholder="Enter your first name"
												className="h-12"
											/>
										</div>
										<div className="space-y-2">
											<label className="text-sm font-semibold text-foreground">Last Name</label>
											<Input
												name="lastName"
												value={ form.lastName }
												onChange={ handleChange }
												placeholder="Enter your last name"
												className="h-12"
											/>
										</div>
									</div>
									
									<div className="space-y-2">
										<label className="text-sm font-semibold text-foreground">Email Address</label>
										<Input
											type="email"
											name="email"
											value={ form.email }
											onChange={ handleChange }
											placeholder="Enter your email"
											className="h-12"
										/>
									</div>
									
									<div className="space-y-2">
										<label className="text-sm font-semibold text-foreground">Phone Number</label>
										<Input
											type="tel"
											name="phone"
											value={ form.phone }
											onChange={ handleChange }
											placeholder="Enter your phone number"
											className="h-12"
										/>
									</div>
									
									<div className="space-y-2">
										<label className="text-sm font-semibold text-foreground">Service Interest</label>
										<select
											name="service"
											value={ form.service }
											onChange={ handleChange }
											className="w-full h-12 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
											<option value="">Select a service</option>
											<option value="Corporate Wears">Corporate Wears</option>
											<option value="Evening Gowns">Evening Gowns</option>
											<option value="Skirts & Blouses">Skirts & Blouses</option>
											<option value="Custom Design">Custom Design</option>
										</select>
									</div>
									
									<div className="space-y-2">
										<label className="text-sm font-semibold text-foreground">Message</label>
										<Textarea
											name="message"
											value={ form.message }
											onChange={ handleChange }
											placeholder="Tell us about your vision, measurements, timeline, or any special requirements..."
											className="min-h-[120px] resize-none"
										/>
									</div>
									
									<Button type="submit" variant="hero" size="xl" className="w-full">
										<Sparkles className="w-5 h-5 mr-2"/>
										Send Message
									</Button>
								</form>
							</div>
						</CardContent>
					</Card>
					
					{/* Contact Information */ }
					<div className="space-y-8">
						<div className="space-y-6">
							<h3 className="text-2xl font-black text-foreground">Connect With Us</h3>
							<p className="text-muted-foreground leading-relaxed">
								We're here to help you create the perfect wardrobe. Reach out through any of the channels below.
							</p>
						</div>
						
						{/* Contact Cards */ }
						<div className="grid gap-6">
							{ contactInfo.map((contact, index) => (
								<Card key={ index }
								      className="hover-lift shadow-soft hover:shadow-luxury transition-all duration-500 group">
									<CardContent className="p-6">
										<div className="flex items-start space-x-4">
											<div
												className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
												<contact.icon className="w-6 h-6 text-primary-foreground"/>
											</div>
											<div className="flex-1">
												<h4 className="font-bold text-foreground mb-2">{ contact.title }</h4>
												<div className="space-y-1">
													{ contact.info.map((info, idx) => (
														<p key={ idx } className="text-muted-foreground text-sm">
															{ contact.action && idx === 0 ? (
																<a
																	href={ contact.action }
																	className="hover:text-primary transition-colors"
																	target={ contact.action.startsWith('http') ? '_blank' : undefined }
																	rel={ contact.action.startsWith('http') ? 'noopener noreferrer' : undefined }
																>
																	{ info }
																</a>
															) : (
																info
															) }
														</p>
													)) }
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							)) }
						</div>
						
						{/* Quick Contact Actions */ }
						<div className="space-y-4">
							<h4 className="font-bold text-foreground">Quick Actions</h4>
							<div className="flex flex-col sm:flex-row gap-3">
								<Button variant="outline" size="lg" className="flex-1" asChild>
									<a href="tel:07012463004">
										<Phone className="w-4 h-4 mr-2"/>
										Call Now
									</a>
								</Button>
								<Button variant="outline" size="lg" className="flex-1" asChild>
									<a href="https://instagram.com/dandy_designs_fashion_house" target="_blank" rel="noopener noreferrer">
										<Instagram className="w-4 h-4 mr-2"/>
										Follow Us
									</a>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact