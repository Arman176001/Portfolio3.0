"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/components/projectsData";

export default function BentoGrid() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

 useEffect(() => {
  // Track direction of scrolling
  let lastScrollY = window.scrollY;
  let scrollingDown = true;

  // Update scroll direction on scroll
  const handleScroll = () => {
    scrollingDown = window.scrollY > lastScrollY;
    lastScrollY = window.scrollY;
  };

  window.addEventListener('scroll', handleScroll);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = cardsRef.current.findIndex(
          (ref) => ref === entry.target
        );
        
        if (index !== -1) {
          setVisibleCards((prev) => {
            const newSet = new Set(prev);
            
            // Only add/remove based on intersection and scroll direction
            if (entry.isIntersecting) {
              newSet.add(index);
            } else if (scrollingDown) {
              // Only remove when scrolling down and element exits viewport
              newSet.delete(index);
            }
            
            return newSet;
          });
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px",
    }
  );

  cardsRef.current.forEach((card) => {
    if (card) observer.observe(card);
  });

  return () => {
    observer.disconnect();
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <div id="projects" className="pt-16">
      <div className="container mx-auto py-12 w-6xl bg-white rounded-3xl p-8 shadow-sm">
        <div className="mb-7 relative flex flex-col items-center">
          <div className="w-full flex justify-between">
            <div className="w-1/3 h-[2px] bg-black"></div>
            <div className="w-1/3 h-[2px] bg-black"></div>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl font-manrope tracking-tight">
            PROJECTS
          </h1>
          <div className="w-16 h-[2px] bg-black mt-4"></div>
          <p className="text-xl text-muted-foreground flex justify-center items-center py-6">
            From AI innovation to seamless user experience, our projects push
            the boundaries of technology.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [&>*:first-child]:mt-0">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`break-inside-avoid mb-6 overflow-hidden border border-border/40 
              ${project.image ? "h-auto" : "h-auto max-h-[280px]"} bg-[#f5f4f6]
              transition-all duration-700 ease-out hover:shadow-lg hover:shadow-primary/5
              hover:border-primary/20 hover:-translate-y-1
              ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="h-full flex flex-col">
                {project.image && (
                  <div className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt=""
                      className="w-full h-48 object-cover transition-transform duration-700 p-3 rounded-3xl"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm flex-grow mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Section - Stacked Icons */}
                  <div className="mt-auto mb-3">
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      Technologies
                    </div>
                    <div className="flex items-center">
                      <div className="flex -space-x-3">
                        {project.techStack.map((tech, idx) => (
                          <div
                            key={idx}
                            className="relative inline-block rounded-full border-2 border-background overflow-hidden w-8 h-8 bg-white hover:z-10 transition-transform hover:scale-110"
                            title={tech.name}
                          >
                            <img
                              src={tech.icon || "/placeholder.svg"}
                              alt={tech.name}
                              className="w-full h-full object-cover p-1"
                            />
                          </div>
                        ))}
                      </div>
                      <span className="ml-4 text-sm text-muted-foreground">
                        {project.techStack.map((t) => t.name).join(" · ")}
                      </span>
                    </div>
                  </div>
                  <a href={project.link}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-auto w-full justify-between group hover:bg-white hover:scale-105 hover:border border-gray-300"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:-rotate-45" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
