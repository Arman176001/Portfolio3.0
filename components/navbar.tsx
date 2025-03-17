"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // References to track sections
  type SectionRefs = {
    [K in
      | "home"
      | "about"
      | "projects"
      | "resume"
      | "contact"]: HTMLElement | null;
  };
  const sectionRefs = useRef<SectionRefs>({
    home: null,
    about: null,
    projects: null,
    resume: null,
    contact: null,
  });

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Work Experience", href: "#experience", id: "experience" },
    { name: "Connect", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 130;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Check if we're at the top of the page
      if (window.scrollY < 50) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Smooth scroll to section when clicking nav links
  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId); // Immediately update active section on click
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <div className="flex justify-center">
      <div className="fixed z-1000 flex justify-center pt-2 sm:pt-3 md:pt-4 w-full">
        <motion.header
          initial={{ width: "95%" }}
          animate={{
            width: scrolled
              ? window.innerWidth < 640
                ? "95%"
                : window.innerWidth < 768
                ? "90%"
                : window.innerWidth < 1024
                ? "80%"
                : "60%"
              : "95%",
            paddingBottom: scrolled ? "8px" : "3px",
            paddingTop: scrolled ? "8px" : "3px",
            backgroundColor: scrolled ? "#000000" : "#FFFFFF4D",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="rounded-full shadow-md bg-[rgba(255,255,255,0.3)] backdrop-blur-lg"
        >
          <div className="px-2 sm:px-3 rounded-full flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="block"
                onClick={(e) => scrollToSection(e, "home")}
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black transition hover:-rotate-45 duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <motion.nav
              className="hidden md:flex space-x-2 lg:space-x-8 items-center justify-end ml-auto px-2 lg:px-8 py-2 sm:py-3"
              animate={{
                color: scrolled ? "#ffffff" : "#111827",
              }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="relative font-medium text-sm lg:text-base px-2 py-1 hover:bg-black/10 rounded-md transition-colors duration-200"
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

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <motion.div
                animate={{
                  backgroundColor: scrolled ? "#ffffff" : "#000000",
                  color: scrolled ? "#000000" : "#ffffff",
                  paddingBottom: scrolled ? "0.5rem" : "0.4rem",
                  paddingTop: scrolled ? "0.5rem" : "0.4rem",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-full"
              >
                <Link
                  href="https://github.com/Arman176001"
                  className="px-3 lg:px-6 font-medium flex items-center text-sm lg:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/github.svg"
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full mr-2"
                    alt="GitHub"
                  />
                  GitHub
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex items-center justify-center p-2"
              animate={{
                color: scrolled ? "#ffffff" : "#000000",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </motion.header>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            }}
            exit={{
              opacity: 0,
              y: -30,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            }}
            className="fixed inset-0 top-16 bg-black/95 backdrop-blur-sm z-40 flex flex-col items-center pt-6 sm:pt-10 overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-white font-medium text-lg py-2 w-full text-center border-b border-gray-800 transition-colors duration-200 ${
                    activeSection === item.id
                      ? "border-white"
                      : "border-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="https://github.com/Arman176001"
                className="flex items-center justify-center text-white font-medium text-lg py-2 sm:py-3 px-6 sm:px-8 bg-gray-800 rounded-full mt-4 hover:bg-gray-700 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/github.svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full mr-2 sm:mr-3"
                  alt="GitHub"
                />
                GitHub
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
