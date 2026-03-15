"use client"

import { useEffect, useRef } from "react"
import { 
  Users, 
  Megaphone, 
  CreditCard, 
  Wrench, 
  FileText, 
  Search, 
  Shield, 
  Calculator,
  ClipboardCheck,
  Building,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Users,
    title: "Tenant Selection",
    description: "Comprehensive screening process including credit checks, employment verification, and reference validation to ensure only quality tenants occupy your property.",
    highlight: true
  },
  {
    icon: Megaphone,
    title: "Marketing Services",
    description: "Professional property listings across Social Media platforms and MLS to maximize exposure and minimize vacancy periods.",
    highlight: false
  },
  {
    icon: CreditCard,
    title: "Rent Collection",
    description: "Seamless, automated rent collection systems with timely deposits directly to your account and comprehensive payment tracking.",
    highlight: true
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description: "Access to our network of trusted maintenance service providers with competitive quotes and quality workmanship guaranteed.",
    highlight: false
  },
  {
    icon: FileText,
    title: "Monthly Reporting",
    description: "Detailed monthly and non-resident reporting providing complete transparency on your property's performance and financials.",
    highlight: false
  },
  {
    icon: Search,
    title: "Property Inspections",
    description: "Regular and ad-hoc inspections to monitor property condition, ensure lease compliance, and protect your investment.",
    highlight: true
  },
  {
    icon: Shield,
    title: "Insurance Coordination",
    description: "Full coordination with insurance agencies to ensure proper coverage and seamless claims processing when needed.",
    highlight: false
  },
  {
    icon: Calculator,
    title: "Tax Filing Assistance",
    description: "Expert guidance and assistance for income tax filing related to your rental property to maximize your deductions.",
    highlight: false
  },
  {
    icon: ClipboardCheck,
    title: "LTB Assistance",
    description: "Complete coordination and assistance for Landlord and Tenant Board matters, ensuring your rights are protected.",
    highlight: true
  },
  {
    icon: Building,
    title: "Renovation Management",
    description: "Expert oversight of property renovations and upgrades to enhance value and attract premium tenants.",
    highlight: false
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-[#2D4A5E] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6A9AB8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9DD1F5]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 rounded-full bg-[#6A9AB8]/20 text-[#9DD1F5] text-sm font-semibold mb-6 tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF8F0] mb-6 text-balance leading-tight">
            Comprehensive Property Management Solutions
          </h2>
          <p className="animate-on-scroll opacity-0 text-lg text-[#FAF8F0]/80 leading-relaxed">
            From tenant screening to tax assistance, we provide everything you need 
            for successful, worry-free property ownership. Our full-service approach 
            ensures your investment is always in expert hands.
          </p>
        </div>

        {/* Services Grid — symmetric layout: 2 columns on small, 5 columns on medium+ */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`animate-on-scroll opacity-0 group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  service.highlight 
                    ? "bg-[#6A9AB8] hover:bg-[#5A8AA8]" 
                    : "bg-[#3D5A6E] hover:bg-[#4D6A7E]"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                  service.highlight 
                    ? "bg-white/20" 
                    : "bg-[#6A9AB8]/20 group-hover:bg-[#6A9AB8]"
                }`}>
                  <Icon className={`w-7 h-7 transition-colors duration-300 ${
                    service.highlight 
                      ? "text-white" 
                      : "text-[#9DD1F5] group-hover:text-white"
                  }`} />
                </div>

                {/* Content */}
                <h3 className={`text-lg font-bold mb-3 ${
                  service.highlight ? "text-white" : "text-[#FAF8F0]"
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  service.highlight ? "text-white/90" : "text-[#FAF8F0]/70"
                }`}>
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
                  service.highlight ? "bg-white/20" : "bg-[#6A9AB8]/20"
                }`}>
                  <ArrowRight className={`w-4 h-4 ${
                    service.highlight ? "text-white" : "text-[#9DD1F5]"
                  }`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll opacity-0 text-center mt-16">
          <Button
            size="lg"
            className="bg-[#9DD1F5] hover:bg-[#8DC1E5] text-[#2D4A5E] px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-[#9DD1F5]/20"
          >
            Get a Free Property Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
