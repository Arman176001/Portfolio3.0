"use client"

import { useState, useEffect, useRef, MouseEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // References to track sections
  type SectionRefs = {
    [K in 'home' | 'about' | 'projects' | 'resume' | 'contact']: HTMLElement | null;
  }
  const sectionRefs = useRef<SectionRefs>({
    home: null,
    about: null,
    projects: null,
    resume: null,
    contact: null,
  })

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Work Experience", href: "#experience", id: "experience" },
    { name: "Connect", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 130
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
      
      // Check if we're at the top of the page
      if (window.scrollY < 50) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])


  // Smooth scroll to section when clicking nav links
  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId) // Immediately update active section on click
    }
  }

  return (
    <div className="flex justify-center">
      <div className="fixed z-50 flex justify-center pt-4 w-7xl">
        <motion.header
          initial={{ width: "90%" }}
          animate={{
            width: scrolled ? "60%" : "95%",
            paddingBottom: scrolled ? "10px" : "3px",
            paddingTop: scrolled ? "10px" : "3px",
            backgroundColor: scrolled ? "#000000" : "#FFFFFF4D",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="rounded-full shadow-md bg-[rgba(255,255,255,0.3)] backdrop-blur-lg"
        >
          <div className="px-3 rounded-full flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block" onClick={(e) => scrollToSection(e, "home")}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black transition hover:-rotate-45 duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <motion.nav
              className="space-x-8 items-center justify-end ml-auto px-8 py-3"
              animate={{
                color: scrolled ? "#ffffff" : "#111827",
              }}
              transition={{ duration: 0.4 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="relative font-medium"
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="navDot"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-transparent"
                    />
                  )}
                </Link>
              ))}
            </motion.nav>

            {/* CTA Button */}
            <div>
              <motion.div
                animate={{
                  backgroundColor: scrolled ? "#ffffff" : "#000000",
                  color: scrolled ? "#000000" : "#ffffff",
                  paddingBottom: scrolled ? "0.9rem" : "0.5rem",
                  paddingTop: scrolled ? "0.9rem" : "0.5rem",
                }}
                transition={{ duration: 0.4 }}
                className="rounded-4xl"
              >
                <Link href="https://github.com/Arman176001" className="px-8 font-medium flex items-center">
                  <img src="/github.svg" className="w-6 h-6 bg-white rounded-full mr-3" alt="GitHub" />
                  GitHub
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button (hidden in desktop) */}
            <motion.button
              className="md:hidden"
              animate={{
                color: scrolled ? "#ffffff" : "#000000",
              }}
              transition={{ duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </motion.header>
      </div>
    </div>
  )
}