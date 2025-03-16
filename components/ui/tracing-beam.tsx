"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight - 50]), {
    stiffness: 500,
    damping: 90,
  })

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50]), {
    stiffness: 500,
    damping: 90,
  })

  return (
    <motion.div ref={ref} className={`relative ${className}`}>
      <div className="absolute -left-3 md:left-1/2 md:-ml-[1px] h-full">
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="block" aria-hidden="true">
          <motion.path
            d={`M 10,0 L 10,${svgHeight}`}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
            className="stroke-muted-foreground/20"
          />
          <motion.path
            d={`M 10,0 L 10,${svgHeight}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="0 1"
            className="stroke-primary"
            initial={{ pathLength: 0 }}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.circle
            cx="10"
            cy={y1}
            r="5"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="2"
            className="fill-background stroke-primary"
          />
          <motion.circle cx="10" cy={y2} r="2" fill="currentColor" className="fill-primary" />
        </svg>
      </div>
      <div ref={contentRef} className="ml-5 md:ml-0">
        {children}
      </div>
    </motion.div>
  )
}

