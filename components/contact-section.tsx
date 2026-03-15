"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "647 216 8870",
    href: "tel:+16472168870",
    description: "Mon-Fri: 9AM-6PM"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@keystoneproperty.ca",
    href: "mailto:contact@keystoneproperty.ca",
    description: "We reply within 24 hours"
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Brampton, Ontario",
    href: "#",
    description: "Greater Toronto Area"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri: 9AM-6PM",
    href: "#",
    description: "Emergency: 24/7"
  },
]

const benefits = [
  "Free property assessment",
  "No obligation consultation",
  "Same-day response guaranteed",
  "Customized management plan"
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.05 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", propertyType: "", message: "" })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-[#2D4A5E] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6A9AB8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#9DD1F5]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 rounded-full bg-[#6A9AB8]/20 text-[#9DD1F5] text-sm font-semibold mb-6 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF8F0] mb-6 text-balance leading-tight">
            Ready to Experience Worry-Free Property Management?
          </h2>
          <p className="animate-on-scroll opacity-0 text-lg text-[#FAF8F0]/80 leading-relaxed">
            Whether you have questions about our services or are ready to start 
            working with us, we would love to hear from you. Schedule a free 
            consultation today and discover how we can help maximize your investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Content - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="animate-on-scroll opacity-0 group flex items-start gap-4 bg-[#3D5A6E] rounded-2xl p-5 transition-all duration-300 hover:bg-[#4D6A7E] hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#6A9AB8]/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#6A9AB8] group-hover:scale-110">
                      <Icon className="w-6 h-6 text-[#9DD1F5] transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#FAF8F0]/50 uppercase tracking-wide mb-1">{info.label}</div>
                      <div className="font-semibold text-[#FAF8F0] mb-1">{info.value}</div>
                      <div className="text-sm text-[#FAF8F0]/60">{info.description}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Benefits List */}
            <div className="animate-on-scroll opacity-0 bg-[#3D5A6E] rounded-2xl p-6">
              <h4 className="text-lg font-bold text-[#FAF8F0] mb-4">What You Get:</h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9DD1F5] flex-shrink-0" />
                    <span className="text-[#FAF8F0]/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:col-span-3">
            <div className="animate-on-scroll opacity-0 bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#2D4A5E]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#2D4A5E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D4A5E] mb-4">Thank You!</h3>
                  <p className="text-[#2D4A5E]/70 mb-6">
                    We have received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#6A9AB8] hover:bg-[#5A8AA8] text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#2D4A5E] mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-[#2D4A5E]/60 mb-8">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#2D4A5E] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-[#9DD1F5]/50 bg-[#FAF8F0]/30 text-[#2D4A5E] placeholder:text-[#2D4A5E]/40 focus:border-[#6A9AB8] focus:outline-none transition-colors duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#2D4A5E] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-[#9DD1F5]/50 bg-[#FAF8F0]/30 text-[#2D4A5E] placeholder:text-[#2D4A5E]/40 focus:border-[#6A9AB8] focus:outline-none transition-colors duration-300"
                          placeholder="(647) 555-0123"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2D4A5E] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-[#9DD1F5]/50 bg-[#FAF8F0]/30 text-[#2D4A5E] placeholder:text-[#2D4A5E]/40 focus:border-[#6A9AB8] focus:outline-none transition-colors duration-300"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-[#2D4A5E] mb-2">
                          Property Type
                        </label>
                        <select
                          id="propertyType"
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-[#9DD1F5]/50 bg-[#FAF8F0]/30 text-[#2D4A5E] focus:border-[#6A9AB8] focus:outline-none transition-colors duration-300"
                        >
                          <option value="">Select property type</option>
                          <option value="condo">Condominium</option>
                          <option value="house">Single Family Home</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="multi-unit">Multi-Unit Property</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#2D4A5E] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-[#9DD1F5]/50 bg-[#FAF8F0]/30 text-[#2D4A5E] placeholder:text-[#2D4A5E]/40 focus:border-[#6A9AB8] focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us about your property and what you're looking for..."
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#6A9AB8] hover:bg-[#5A8AA8] text-white py-6 text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
