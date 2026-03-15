"use client"

import Link from "next/link"
import { Home, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Tenant Selection", href: "#services" },
    { label: "Marketing Services", href: "#services" },
    { label: "Rent Collection", href: "#services" },
    { label: "Maintenance", href: "#services" },
    { label: "Property Inspections", href: "#services" },
    { label: "LTB Assistance", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Values", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

const contactDetails = [
  { icon: Phone, value: "647 216 8870", href: "tel:+16472168870" },
  { icon: Mail, value: "contact@keystoneproperty.ca", href: "mailto:contact@keystoneproperty.ca" },
  { icon: MapPin, value: "Brampton, Ontario", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a2f3a] relative overflow-hidden">
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6A9AB8] via-[#9DD1F5] to-[#6A9AB8]" />

      {/* Newsletter Section */}
      <div className="border-b border-[#2D4A5E]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#2D4A5E] to-[#3D5A6E] rounded-2xl p-8 lg:p-10">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#FAF8F0] mb-2">
                Stay Updated with Property Insights
              </h3>
              <p className="text-[#FAF8F0]/70">
                Get expert tips on property management and market trends delivered to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-4 rounded-xl bg-[#1a2f3a] border border-[#3D5A6E] text-[#FAF8F0] placeholder:text-[#FAF8F0]/40 focus:border-[#6A9AB8] focus:outline-none transition-colors duration-300 w-full sm:w-72"
              />
              <button
                type="submit"
                className="px-6 py-4 rounded-xl bg-[#6A9AB8] text-white font-medium hover:bg-[#5A8AA8] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6A9AB8] to-[#5A8AA8] flex items-center justify-center shadow-lg">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#FAF8F0] block leading-tight">Keystone</span>
                <span className="text-xs text-[#FAF8F0]/60">Property Solutions</span>
              </div>
            </Link>
            <p className="text-[#FAF8F0]/60 mb-6 leading-relaxed">
              Your trusted partner in property management. We take the stress out 
              of real estate investing so you can focus on growing your portfolio.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactDetails.map((contact) => {
                const Icon = contact.icon
                return (
                  <a
                    key={contact.value}
                    href={contact.href}
                    className="flex items-center gap-3 text-[#FAF8F0]/60 hover:text-[#9DD1F5] transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{contact.value}</span>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-[#2D4A5E] flex items-center justify-center text-[#FAF8F0]/60 hover:bg-[#6A9AB8] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold text-[#FAF8F0] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#6A9AB8]" />
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FAF8F0]/60 hover:text-[#9DD1F5] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold text-[#FAF8F0] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#6A9AB8]" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FAF8F0]/60 hover:text-[#9DD1F5] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & CTA Column */}
          <div>
            <h4 className="text-lg font-bold text-[#FAF8F0] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#6A9AB8]" />
              Business Hours
            </h4>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[#FAF8F0]/60">Monday - Friday</span>
                <span className="text-[#FAF8F0]">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#FAF8F0]/60">Saturday</span>
                <span className="text-[#FAF8F0]">By Appointment</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#FAF8F0]/60">Sunday</span>
                <span className="text-[#FAF8F0]">Closed</span>
              </div>
              <div className="pt-2 mt-2 border-t border-[#2D4A5E]">
                <div className="flex justify-between text-sm">
                  <span className="text-[#9DD1F5]">Emergency Line</span>
                  <span className="text-[#9DD1F5] font-medium">24/7</span>
                </div>
              </div>
            </div>
            
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#6A9AB8] text-white font-medium hover:bg-[#5A8AA8] transition-all duration-300 hover:scale-105"
            >
              Get Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2D4A5E]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#FAF8F0]/40 text-sm text-center md:text-left">
              {new Date().getFullYear()} Keystone Property Solutions Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#FAF8F0]/40 hover:text-[#9DD1F5] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
