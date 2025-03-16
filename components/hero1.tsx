"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero1 = () => {
  return (
    <div className="flex justify-center items-center space-y-5 pt-30" id="home">
      <div className="w-6xl h-screen">
        <div className="bg-[#1a1a1a] rounded-3xl h-9/12 px-16 ">
          <motion.div
            className="z-10 absolute w-[306px] mt-80 ml-[600px]"
            animate={{ y: [0, -20, 0] }}
            transition={{ ease: "easeInOut", duration: 7, repeat: Infinity }}
          >
            <img src="/unique.png" />
          </motion.div>
          <div className="absolute w-[250px] mt-42 ml-[900px]">
            <img src="/black.png" />
          </div>
          <div className="absolute w-[200px] -mt-9 ml-[600px]">
            <img src="/quad.png" />
          </div>
          <div className="flex flex-col justify-center items-start h-full">
            <h1 className="text-white font-manrope font-semibold text-5xl leading-16">
              Shaping the Future with AI <br />
              Crafting Intelligence Beyond Limits.
            </h1>
            <div className="py-3">
              <p className="text-[#E6E6E6] font-manrope">
                <span className="font-semibold ">Hi, I am Arman Chaudhary</span>{" "}
                <br />
                AI/ML Developer, Research Fellow at PEC, building intelligent
                solutions with Machine Learning and AI.
                <br /> Passionate about research, innovation, and creating
                impactful technology.
              </p>
            </div>
            <div className="py-5 relative top-8">
              <div className="bg-[#484848] rounded-2xl flex justify-center items-center">
                <a
                  className="text-white px-5 py-3 font-manrope group flex items-center gap-4 transition-colors duration-200 rounded-lg"
                  href="https://www.linkedin.com/in/arman-chaudhary/"
                >
                  Hire Me
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-[#e05d26] transition-colors duration-200">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-transform group-hover:rotate-[-45deg] duration-200">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 group-hover:text-white transition-colors duration-200"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
