"use client"

import { useEffect, useRef } from "react"
import { Check, ArrowRight, Target, Handshake, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Target,
    title: "Strategic Thinking",
    description: "Step by step, we keep in mind long term implications of every decision to protect and grow your investment."
  },
  {
    icon: Handshake,
    title: "Team Effort",
    description: "We believe in collaborative property management, working closely with owners and tenants for optimal results."
  },
  {
    icon: TrendingUp,
    title: "Value-Add Tenants",
    description: "More than just filling vacancies: New tenants are carefully selected as value additions to your assets."
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "Regular updates and open dialogue ensure you are always informed about your property's status."
  },
]

const features = [
  {
    number: "01",
    title: "Experienced Professionals",
    description: "Our team has successfully managed and maintained hundreds of residential and condominium properties throughout the GTA."
  },
  {
    number: "02",
    title: "Trusted Service Partners",
    description: "We have established partnerships with reliable maintenance service providers allowing us to manage your property with ease."
  },
  {
    number: "03",
    title: "Premium Tenant Selection",
    description: "We ensure that only the best tenants are selected to live in your property through our rigorous screening process."
  },
]

const landlordResponsibilities = [
  "Maintain appropriate Insurance on property",
  "Timely decisions on property matters",
  "Maintain property in good condition"
]

export function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#FAF8F0] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#6A9AB8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#2D4A5E]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Intro Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 rounded-full bg-[#6A9AB8]/20 text-[#6A9AB8] text-sm font-semibold mb-6 tracking-wide uppercase">
            About Us
          </span>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D4A5E] mb-6 text-balance leading-tight">
            Let Us Introduce Ourselves
          </h2>
          <p className="animate-on-scroll opacity-0 text-lg text-[#2D4A5E]/80 leading-relaxed">
            Keystone Property Solutions Inc. is a full-service company dedicated to 
            servicing investment property owners, their properties, and tenants. Our 
            team is comprised of experienced professionals who have managed and 
            maintained residential and condominium properties for over 4 years.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="animate-on-scroll opacity-0 group bg-white rounded-2xl p-6 shadow-lg border border-[#9DD1F5]/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2D4A5E] to-[#4A6A7E] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-[#9DD1F5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D4A5E] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#2D4A5E]/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Features */}
          <div>
            <h3 className="animate-on-scroll opacity-0 text-2xl md:text-3xl font-bold text-[#2D4A5E] mb-8">
              Why Property Owners Trust Us
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-on-scroll opacity-0 group flex gap-5 bg-white rounded-2xl p-6 shadow-lg border border-[#9DD1F5]/20 transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#2D4A5E] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-xl font-bold text-[#9DD1F5]">
                      {feature.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2D4A5E] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-[#2D4A5E]/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="animate-on-scroll opacity-0 mt-8 bg-[#6A9AB8] hover:bg-[#5A8AA8] text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right - Responsibilities & Stats */}
          <div className="space-y-8">
            {/* Experience Card */}
            <div className="animate-on-scroll opacity-0 relative bg-[#2D4A5E] rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#6A9AB8]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#9DD1F5]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold text-[#9DD1F5] mb-1">4+</div>
                    <div className="text-sm text-[#FAF8F0]/80">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold text-[#9DD1F5] mb-1">500+</div>
                    <div className="text-sm text-[#FAF8F0]/80">Properties Managed</div>
                  </div>
                </div>
                <p className="text-[#FAF8F0]/90 text-center leading-relaxed">
                  We have established partnerships with maintenance service providers 
                  which allows us to manage your condo or home with ease.
                </p>
              </div>
            </div>

            {/* Landlord Responsibilities */}
            <div className="animate-on-scroll opacity-0 bg-white rounded-2xl p-8 shadow-lg border border-[#9DD1F5]/20">
              <h4 className="text-xl font-bold text-[#2D4A5E] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#6A9AB8]/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#6A9AB8]" />
                </div>
                {"Landlord's Responsibilities"}
              </h4>
              <p className="text-[#2D4A5E]/70 mb-6">
                While we handle the day-to-day management, here is what we ask from you:
              </p>
              <div className="space-y-4">
                {landlordResponsibilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F0]/50 transition-colors duration-300 hover:bg-[#FAF8F0]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#2D4A5E] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#FAF8F0]" />
                    </div>
                    <span className="text-[#2D4A5E]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
