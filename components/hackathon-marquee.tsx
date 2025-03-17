"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Code, Zap, Rocket, Target } from "lucide-react";

interface HackathonProps {
  name: string;
  year: string;
  achievement?: string;
  icon: React.ReactNode;
}

const HackathonBlock = ({ hackathon }: { hackathon: HackathonProps }) => {
  return (
    <div className="flex-shrink-0 w-72 h-40 m-3 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white font-manrope">
          {hackathon.name}
        </h3>
        <div className="text-primary">{hackathon.icon}</div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-manrope">
          {hackathon.year}
        </p>
        {hackathon.achievement && (
          <p className="mt-1 text-sm font-medium text-primary font-manrope">
            {hackathon.achievement}
          </p>
        )}
      </div>
    </div>
  );
};

export const HackathonMarquee = () => {
  const hackathons: HackathonProps[] = [
    {
      name: "Electrothon 7.0",
      year: "2025",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    { name: "HackJMI", year: "2025", icon: <Code className="w-5 h-5" /> },
    {
      name: "Smart India Hackathon",
      year: "2024",
      achievement: "Best AI Model",
      icon: <Zap className="w-5 h-5" />,
    },
    { name: "NightSprint", year: "2024", icon: <Rocket className="w-5 h-5" /> },
    { name: "HackToHatch", year: "2023", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <div className="relative overflow-hidden py-10 dark:bg-gray-900 rounded-b-3xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-manrope">
          Hackathon Participations
        </h2>
        <p className="mt-2 text-muted-foreground font-manrope">
          Building innovative solutions under pressure
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex overflow-hidden">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="flex whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...hackathons, ...hackathons].map((hackathon, index) => (
              <HackathonBlock key={`${i}-${index}`} hackathon={hackathon} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
