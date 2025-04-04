"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CalendarIcon, MapPinIcon } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  description: string
  skills?: string[]
  isLeft?: boolean
}

export const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  skills = [],
  isLeft = false,
}: ExperienceCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="mb-6 sm:mb-8 md:mb-10" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`relative ${isLeft ? "md:mr-auto md:ml-10 md:pr-10" : "md:ml-auto md:mr-10 md:pl-10"} md:w-[calc(50%-20px)]`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 shadow-lg border border-gray-100 dark:border-gray-700 relative">
          {/* Connector line to timeline - only visible on md and up */}
          <div
            className="hidden md:block absolute top-8 w-8 border-t-2 border-dashed border-primary/50 h-0"
            style={{ [isLeft ? "right" : "left"]: "-32px" }}
          />

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <h4 className="text-base sm:text-lg font-semibold text-primary mt-1">{company}</h4>

          <div className="flex flex-wrap gap-2 mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>{period}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>

          <p className="mt-2 sm:mt-3 text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>

          {skills.length > 0 && (
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

