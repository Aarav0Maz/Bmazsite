"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Users, TrendingUp, Home, CheckCircle2 } from "lucide-react"

const stats = [
  { icon: Shield, value: "4+", label: "Years Experience" },
  { icon: Users, value: "1,200+", label: "Satisfied Landlords" },
  { icon: TrendingUp, value: "98%", label: "Tenant Retention" },
]

const highlights = [
  "Stress-free tenant management",
  "Maximize your property value",
  "Trusted local expertise",
]

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FAF8F0] via-[#FAF8F0] to-[#9DD1F5]/20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2D4A5E]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6A9AB8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#9DD1F5]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(#2D4A5E 1px, transparent 1px), linear-gradient(90deg, #2D4A5E 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="grid gap-12 items-start lg:grid-cols-[1fr_auto]">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D4A5E]/10 border border-[#2D4A5E]/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6A9AB8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6A9AB8]"></span>
              </span>
              <span className="text-sm font-medium text-[#2D4A5E]">
                Your Property Specialist in the GTA
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D4A5E] leading-[1.1] mb-6 text-balance">
              Worry-Free{" "}
              <span className="relative">
                <span className="text-[#6A9AB8]">Real Estate</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#6A9AB8" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>{" "}
              Investing
            </h1>

            {/* Subheadline */}
            <p className="animate-on-scroll opacity-0 text-lg md:text-xl text-[#2D4A5E]/80 mb-8 leading-relaxed">
              We take away the key fear that a real estate investor has as a landlord 
              to manage the tenant. Let us handle the complexities while you enjoy 
              the returns on your investment.
            </p>

            {/* Highlights */}
            <div className="animate-on-scroll opacity-0 flex flex-wrap gap-4 mb-10">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#2D4A5E]/70"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#6A9AB8]" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row items-start gap-4">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-[#2D4A5E] hover:bg-[#3D5A6E] text-[#FAF8F0] px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-[#2D4A5E]/20"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>

              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#6A9AB8] text-[#6A9AB8] hover:bg-[#6A9AB8] hover:text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg md:text-xl transition-all duration-300 group"
                >
                  <span>View Our Services</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Card */}
          <div className="animate-on-scroll opacity-0 relative self-start justify-self-end w-full max-w-[560px] xl:max-w-[720px]">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-[#2D4A5E]/10 border border-[#9DD1F5]/30">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6A9AB8]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2D4A5E]/10 rounded-full blur-xl" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2D4A5E] to-[#4A6A7E] flex items-center justify-center mb-6 shadow-lg">
                  <Home className="w-8 h-8 text-[#FAF8F0]" />
                </div>

                <h3 className="text-2xl font-bold text-[#2D4A5E] mb-4">
                  Opening Doors for Homeowners Like You
                </h3>

                <p className="text-[#2D4A5E]/70 mb-8 leading-relaxed">
                  Our team is comprised of experienced professionals who have managed 
                  and maintained residential and condominium properties throughout 
                  the Greater Toronto Area.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={stat.label}
                        className="text-center p-4 rounded-xl bg-[#FAF8F0]/50 transition-all duration-300 hover:bg-[#FAF8F0] hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#2D4A5E]/10 flex items-center justify-center mb-2 mx-auto">
                          <Icon className="w-5 h-5 text-[#2D4A5E]" />
                        </div>
                        <div className="text-2xl font-bold text-[#6A9AB8]">
                          {stat.value}
                        </div>
                        <div className="text-xs text-[#2D4A5E]/60">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Floating Badge removed */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-[#2D4A5E]/50 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-[#2D4A5E]/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#6A9AB8] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
