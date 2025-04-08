"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  // Custom debounce function
  function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
      const later = () => {
        timeout = null;
        func(...args);
      };

      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

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
    // Create a debounced function to handle resize
    const handleResizeDebounced = debounce(() => {
      // Force a re-render to update width calculations
      setScrolled((prevScrolled) => {
        // Toggle the value to force a re-render
        const currentScroll = window.scrollY > 130;
        return currentScroll;
      });

      // Also close mobile menu if needed
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }, 100);

    window.addEventListener("resize", handleResizeDebounced);
    return () => {
      window.removeEventListener("resize", handleResizeDebounced);
    };
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
                ? "87%"
                : "79%"
              : "95%",
            paddingBottom: scrolled ? "8px" : "3px",
            paddingTop: scrolled ? "8px" : "3px",
            backgroundColor: scrolled ? "#000000" : "#FFFFFF4D",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="rounded-full shadow-md bg-[rgba(255,255,255,0.3)] backdrop-blur-lg overflow-hidden"
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
              className="hidden md:flex space-x-2 lg:space-x-4 items-center justify-end ml-auto px-2 lg:px-4 py-2 sm:py-3 flex-grow overflow-x-auto"
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
              <Link
                href="https://drive.google.com/file/d/1W-XRWdnnYX8TKEV5iP1Tsi9xHlC2KmYG/view?usp=sharing"
                className="relative font-medium text-sm lg:text-base px-2 py-1 hover:bg-black/10 rounded-md transition-colors duration-200"
              >
                Resume
              </Link>
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
                className="rounded-full flex-shrink-0"
              >
                <Link
                  href="https://github.com/Arman176001"
                  className="px-3 lg:px-6 font-medium flex items-center text-sm lg:text-base whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-current mr-2"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
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
                href="https://drive.google.com/file/d/1W-XRWdnnYX8TKEV5iP1Tsi9xHlC2KmYG/view?usp=sharing"
                className="text-white font-medium text-lg py-2 w-full text-center border-b border-gray-800 transition-colors duration-200"
              >
                Resume
              </Link>

              <Link
                href="https://github.com/Arman176001"
                className="flex items-center justify-center text-white font-medium text-lg py-2 sm:py-3 px-6 sm:px-8 bg-gray-800 rounded-full mt-4 hover:bg-gray-700 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-white mr-2 sm:mr-3"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
