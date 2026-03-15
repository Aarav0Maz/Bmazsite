"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, Briefcase, Users, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#about", label: "About", icon: Users },
  { href: "#contact", label: "Contact", icon: Phone },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active section
      const sections = navLinks.map(link => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#2D4A5E]/95 backdrop-blur-lg shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6A9AB8] to-[#5A8AA8] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#2D4A5E] border-2 border-white flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">K</span>
            </div>
          </div>
          <div>
            <span className={`text-lg font-bold transition-colors duration-300 block leading-tight ${isScrolled ? "text-[#FAF8F0]" : "text-[#2D4A5E]"}`}>
              Keystone
            </span>
            <span className={`text-xs transition-colors duration-300 ${isScrolled ? "text-[#FAF8F0]/70" : "text-[#2D4A5E]/70"}`}>
              Property Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? isScrolled
                      ? "text-[#9DD1F5] bg-[#9DD1F5]/10"
                      : "text-[#6A9AB8] bg-[#6A9AB8]/10"
                    : isScrolled
                    ? "text-[#FAF8F0]/80 hover:text-[#FAF8F0] hover:bg-white/10"
                    : "text-[#2D4A5E]/80 hover:text-[#2D4A5E] hover:bg-[#2D4A5E]/5"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+16472168870" 
            className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? "text-[#FAF8F0]/80" : "text-[#2D4A5E]/80"}`}
          >
            647 216 8870
          </a>
          <Link href="#contact">
            <Button
              className="bg-[#6A9AB8] hover:bg-[#5A8AA8] text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-[#6A9AB8]/20"
            >
              Free Consultation
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-[#FAF8F0]" : "text-[#2D4A5E]"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-[#FAF8F0]" : "text-[#2D4A5E]"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#2D4A5E] shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? "bg-[#6A9AB8] text-white" 
                    : "text-[#FAF8F0] hover:bg-[#3D5A6E]"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#9DD1F5]"}`} />
                {link.label}
              </Link>
            )
          })}
          <div className="border-t border-[#3D5A6E] my-4" />
          <a 
            href="tel:+16472168870" 
            className="text-center text-[#FAF8F0]/80 mb-2"
          >
            Call: 647 216 8870
          </a>
          <Link href="#contact">
            <Button className="bg-[#6A9AB8] hover:bg-[#5A8AA8] text-white py-6">
              Free Consultation
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
