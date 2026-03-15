"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "EcoLife Rebrand",
    category: "Brand Identity",
    description: "Complete brand transformation for a sustainable lifestyle company.",
    color: "bg-primary",
  },
  {
    title: "TechStart Launch",
    category: "Digital Campaign",
    description: "Multi-channel launch campaign reaching 2M+ potential customers.",
    color: "bg-accent",
  },
  {
    title: "FreshBite Social",
    category: "Social Media",
    description: "Growing a food delivery app from 10K to 500K followers in 6 months.",
    color: "bg-secondary",
  },
  {
    title: "HealthPlus Growth",
    category: "Growth Strategy",
    description: "300% increase in qualified leads for a healthcare SaaS platform.",
    color: "bg-primary",
  },
]

export function Work() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-pretty">
            A glimpse into the projects that showcase our creativity and strategic thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`${project.color} aspect-[4/3] transition-transform duration-500 group-hover:scale-105`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm text-secondary font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                <p className="text-white/80 text-sm mt-2">{project.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
