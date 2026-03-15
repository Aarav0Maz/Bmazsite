"use client"

import { useEffect, useRef, useState } from "react"
import { Megaphone, Palette, TrendingUp, Globe, Mail, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Strategic paid campaigns across Google, Meta, and more to reach your ideal customers.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Create a memorable brand that resonates with your audience and stands out from competition.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies to accelerate your business growth and maximize ROI.",
  },
  {
    icon: Globe,
    title: "Social Media",
    description: "Build and engage your community with compelling content and strategic social presence.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track performance and uncover opportunities with comprehensive analytics.",
  },
]

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-pretty">
            Comprehensive marketing solutions tailored to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              data-index={index}
              className={`group cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
