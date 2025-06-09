"use client"

import { TracingBeam } from "./ui/tracing-beam"
import { ExperienceCard } from "./ui/experience-card"
import { HackathonMarquee } from "./hackathon-marquee"

export const Experience = () => {
  const experiences = [
    {
      title: "Research Fellow",
      company: "Punjab Engineering College",
      location: "Chandigarh, India",
      period: "2025",
      description: "Leading analysis of CDR (Call Detail Record) datasets, identifying behavioral trends using clustering, temporal pattern mining, and supervised learning for applications in telecom and urban planning.",
      skills: ["Deep Learning", "Research", "Academic Writing"],
    },
    {
      title: "Research Assistant",
      company: "Punjab Engineering College",
      location: "Chandigarh, India",
      period: "2025",
      description: "“Deep Learning for Precipitation Nowcasting.” Focused on developing models to improve the accuracy of short-term weather forecasting using deep learning techniques.",
      skills: ["Deep Learning", "Research", "Academic Writing"],
    },
  ]

  return (
    <div id="experience" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto py-8 sm:py-10 md:py-12 max-w-6xl bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="mb-5 sm:mb-6 md:mb-8 relative flex flex-col items-center">
          <div className="w-full flex justify-between">
            <div className="w-1/4 h-[2px] bg-black dark:bg-white"></div>
            <div className="w-1/4 h-[2px] bg-black dark:bg-white"></div>
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-manrope tracking-tight text-gray-900 dark:text-white text-center">
            Work Experience
          </h1>
          <div className="w-16 h-[2px] bg-black dark:bg-white mt-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center py-4 sm:py-6 font-manrope">
            From research to real-world applications—shaping AI-driven solutions.
          </p>
        </div>

        <TracingBeam className="px-2 sm:px-3">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              skills={exp.skills}
              isLeft={index % 2 === 0}
            />
          ))}
        </TracingBeam>

        {/* Hackathon Marquee Section */}
        <HackathonMarquee />
      </div>
    </div>
  )
}

