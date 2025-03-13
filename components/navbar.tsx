"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 130;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <motion.header
        initial={{ width: "90%" }}
        animate={{
          width: scrolled ? "50%" : "95%",
          paddingBottom: scrolled ? "10px" : "3px",
          paddingTop: scrolled ? "10px" : "3px",
          backgroundColor: scrolled ? "#000000" : "#FFFFFF4D",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="rounded-4xl shadow-md bg-[rgba(255,255,255,0.3)] backdrop-blur-lg"
      >
        <div className="px-6 py-2 rounded-4xl flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <motion.nav
            className="space-x-8 items-center justify-end ml-auto px-8"
            animate={{
              color: scrolled ? "#ffffff" : "#111827",
            }}
            transition={{ duration: 0.4 }}
          >
            {[
              { name: "Home", href: "/", active: true },
              { name: "Projects", href: "/cases" },
              { name: "About", href: "/about" },
              { name: "Resume", href: "/article" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-medium"
              >
                {item.name}
                {item.active && (
                  <motion.span
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                    animate={{
                      backgroundColor: scrolled ? "#ffffff" : "#000000",
                    }}
                    transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.3 }}
              className="rounded-4xl"
            >
              <Link
                href="/remix"
                className="px-8 font-medium flex items-center space-x-2"
              >
                  <img src="/github.svg" className="w-6 h-6 bg-white rounded-full mr-3" />
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
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </motion.header>
    </div>
  );
}
