"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Award-winning creative team",
  "Data-driven decision making",
  "Transparent communication",
  "Results-focused approach",
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative shapes */}
              <div className="absolute inset-0 bg-secondary rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-accent/20 rounded-3xl transform -rotate-3" />
              <div className="relative bg-primary rounded-3xl h-full flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-bold text-primary-foreground mb-4">12+</div>
                  <div className="text-xl text-primary-foreground/80">Years of Excellence</div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-secondary rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
                <div className="absolute bottom-10 left-8 w-12 h-12 bg-accent rounded-full animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="text-accent">Bloom Marketing?</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
              We're not just another marketing agency. We're your growth partners, dedicated to 
              understanding your unique challenges and crafting strategies that deliver real results. 
              Our team combines creativity with analytics to ensure every campaign makes an impact.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
              From startups to established enterprises, we've helped businesses across industries 
              achieve their marketing goals and reach new heights.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
