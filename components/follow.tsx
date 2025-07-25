"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Follow() {
  const socialLinks = [
    {
      name: "LeetCode",
      color: "#FFA116",
      bgColor: "#FFF5E9",
      url: "https://leetcode.com/u/Arman176/",
      icon: <img src="/icons/leetcode.svg" width="24" className="bg-transparent" />,
    },
    {
      name: "Kaggle",
      color: "#20BEFF",
      bgColor: "#E9F8FF",
      url: "https://www.kaggle.com/armanchaudhary",
      icon: <img src="/icons/kaggle.svg" width="24" className="bg-transparent" />,
    },
    {
      name: "GitHub",
      color: "#333333",
      bgColor: "#F0F0F0",
      url: "https://github.com/Arman176001",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      color: "#0A66C2",
      bgColor: "#E8F1FA",
      url: "https://www.linkedin.com/in/arman-chaudhary/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Mail",
      color: "#EA4335",
      bgColor: "#FEEFED",
      url: "mailto:armanchaudhary176001@gmail.com",
      icon: <img src="/icons/gmail.svg" width="24" className="bg-transparent" />,
    },
    {
      name: "Twitter",
      color: "#1DA1F2",
      bgColor: "#E8F5FD",
      url: "https://x.com/ArmanChaud30997",
      icon: <img src="/icons/twitter.svg" width="24" className="bg-transparent" />,
    },
  ]

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div id="contact" className="pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
      <div className="container mx-auto py-8 sm:py-12 md:py-16 w-full max-w-6xl bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="mb-5 sm:mb-7 relative flex flex-col items-center">
          <div className="w-full flex justify-between">
            <div className="w-[30%] h-[2px] bg-black"></div>
            <div className="w-[30%] h-[2px] bg-black"></div>
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-manrope tracking-tight text-center">
            Leets Connect
          </h1>
          <div className="w-16 h-[2px] bg-black mt-4"></div>
        </div>
        <div className="container mx-auto py-4 sm:py-6 md:py-8 max-w-4xl px-2 sm:px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {socialLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={item}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="w-full group"
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  aria-label={`Visit my ${link.name}`}
                >
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4"
                      style={{ backgroundColor: link.bgColor }}
                    >
                      <div style={{ color: link.color }}>{link.icon}</div>
                    </div>
                    <span className="font-medium text-sm sm:text-base">{link.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-rotate-45 transition duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

