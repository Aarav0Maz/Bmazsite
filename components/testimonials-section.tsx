"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote: "We were especially impressed with the care and attention Keystone Property Solutions gave us in helping to find our tenants. Their thorough screening process gave us complete peace of mind knowing our property is in excellent hands.",
    author: "Amar Nagarsurkar",
    location: "Kitchener, ON",
    rating: 5,
    propertyType: "Residential Property"
  },
  {
    quote: "Thank you for making it so easy for us. The team handles everything professionally and keeps us informed every step of the way. We have never had a single late payment since they took over management.",
    author: "Sandeep Kale",
    location: "Brampton, ON",
    rating: 5,
    propertyType: "Condo Unit"
  },
  {
    quote: "After struggling with property management for years, finding Keystone was a game-changer. Their attention to detail and proactive approach to maintenance has actually increased our property value.",
    author: "Jennifer Thompson",
    location: "Mississauga, ON",
    rating: 5,
    propertyType: "Multi-Unit Property"
  },
  {
    quote: "The monthly reports are detailed and transparent. I always know exactly what is happening with my investment properties. Their LTB assistance saved us during a difficult tenant situation.",
    author: "David Park",
    location: "Vaughan, ON",
    rating: 5,
    propertyType: "Investment Portfolio"
  },
  {
    quote: "As a non-resident landlord, I needed a team I could trust completely. Keystone has exceeded all my expectations with their professionalism and comprehensive reporting.",
    author: "Maria Santos",
    location: "Toronto, ON",
    rating: 5,
    propertyType: "Non-Resident Property"
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#9DD1F5]/20 via-[#FAF8F0] to-[#9DD1F5]/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#6A9AB8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2D4A5E]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 rounded-full bg-[#2D4A5E]/10 text-[#2D4A5E] text-sm font-semibold mb-6 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D4A5E] mb-6 text-balance leading-tight">
            What Our Clients Say
          </h2>
          <p className="animate-on-scroll opacity-0 text-lg text-[#2D4A5E]/80 leading-relaxed">
            Hear from property owners across the GTA who trust us with their 
            investments. Their success stories speak to our commitment to excellence.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="animate-on-scroll opacity-0 relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#2D4A5E]/10 border border-[#9DD1F5]/20 relative overflow-hidden">
              {/* Decorative Quote Background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#6A9AB8]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6A9AB8] to-[#5A8AA8] flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="pt-16 md:pt-12 md:pl-24 relative">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#6A9AB8] text-[#6A9AB8]" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote 
                  className={`text-xl md:text-2xl text-[#2D4A5E] leading-relaxed mb-8 transition-all duration-500 ${
                    isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  {`"${testimonials[currentIndex].quote}"`}
                </blockquote>

                {/* Author Info */}
                <div 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-500 delay-100 ${
                    isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2D4A5E] to-[#4A6A7E] flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-[#9DD1F5]">
                        {testimonials[currentIndex].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-[#2D4A5E] text-lg">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-[#2D4A5E]/60">
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-[#2D4A5E]/10 text-sm font-medium text-[#2D4A5E]">
                    {testimonials[currentIndex].propertyType}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-8 right-8 flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  disabled={isAnimating}
                  className="w-12 h-12 rounded-full bg-[#2D4A5E]/10 flex items-center justify-center text-[#2D4A5E] hover:bg-[#2D4A5E] hover:text-[#FAF8F0] transition-all duration-300 disabled:opacity-50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  disabled={isAnimating}
                  className="w-12 h-12 rounded-full bg-[#2D4A5E] flex items-center justify-center text-[#FAF8F0] hover:bg-[#6A9AB8] transition-all duration-300 disabled:opacity-50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-10 bg-[#6A9AB8]"
                      : "w-2 bg-[#2D4A5E]/20 hover:bg-[#2D4A5E]/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
