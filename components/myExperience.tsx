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
      description:
        "Advancing AI research in the agricultural sector to drive innovation and efficiency.",
      skills: ["Neural Networks", "Research", "Academic Writing"],
    },
  ]

  return (
    <div id="experience" className="py-16">
      <div className="container mx-auto py-12 max-w-6xl bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">
        <div className="mb-8 relative flex flex-col items-center">
          <div className="w-full flex justify-between">
            <div className="w-1/4 h-[2px] bg-black dark:bg-white"></div>
            <div className="w-1/4 h-[2px] bg-black dark:bg-white"></div>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl font-manrope tracking-tight text-gray-900 dark:text-white">
            Work Experience
          </h1>
          <div className="w-16 h-[2px] bg-black dark:bg-white mt-4"></div>
          <p className="text-xl text-muted-foreground flex justify-center items-center py-6 font-manrope">
            From research to real-world applications—shaping AI-driven solutions.
          </p>
        </div>

        <TracingBeam className="px-3">
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

