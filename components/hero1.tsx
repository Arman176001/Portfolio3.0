"use client";
import { motion } from "framer-motion";

const Hero1 = () => {
  return (
    <div
      className="flex justify-center items-center pt-16 sm:pt-20 md:pt-20 lg:pt-32 px-4 sm:px-6"
      id="home"
    >
      <div className="w-full max-w-6xl min-h-[80vh] sm:min-h-[90vh] md:h-screen">
        <div className="hidden lg:block absolute w-[120px] lg:w-[250px] top-16 right-8 lg:right-80 z-10">
          <img
            src="/black.png"
            alt="Decorative element"
            className="w-full h-auto"
          />
        </div>
        <motion.div
          className="hidden md:block absolute w-[150px] lg:w-[306px] top-[60%] right-14 md:top-[78%] lg:top-[60%] md:right-40 lg:right-96 transform z-10 overflow-visible"
          animate={{ y: [0, -20, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <img
            src="/unique.png"
            alt="Decorative element"
            className="w-full h-auto"
          />
        </motion.div>
        <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl md:rounded-3xl h-[75%] md:h-[85%] lg:h-[75%] px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-0 relative overflow-hidden">
          {/* Images - Responsive visibility based on screen size */}
          {/* Only show unique.png on medium and large screens */}

          {/* Only show black.png on large screens */}

          {/* Only show quad.png on medium and large screens, but positioned differently */}
          <div className="hidden md:block absolute w-[100px] lg:w-[200px] bottom-48 right-8 lg:right-16">
            <img
              src="/quad.png"
              alt="Decorative element"
              className="w-full h-auto"
            />
          </div>

          {/* Mobile-optimized single image for small screens only */}
          <div className="md:hidden absolute right-4 top-[85%] transform -translate-y-1/2 w-[120px] z-10 sm:top-80 lg:-translate-y-1/3">
            <img
              src="/unique.png"
              alt="Decorative element"
              className="w-full h-auto"
            />
          </div>

          {/* Content layout - adjusted for better spacing on mobile */}
          <div className="flex flex-col justify-center h-full md:max-w-[80%] lg:max-w-[60%] relative z-20">
            <h1 className="text-white font-manrope font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Shaping the Future with AI <br className="hidden sm:block" />
              Crafting Intelligence Beyond Limits.
            </h1>
            <div className="py-3">
              <p className="text-[#E6E6E6] font-manrope text-sm sm:text-base">
                <span className="font-semibold">Hi, I am Arman Chaudhary</span>{" "}
                <br className="sm:hidden" />
                AI/ML Developer, Research Fellow at PEC, building intelligent
                solutions with Machine Learning and AI.
                <br className="hidden sm:block" /> Passionate about research,
                innovation, and creating impactful technology.
              </p>
            </div>
            <div className="py-5 relative top-0 sm:top-4 md:-top-3 lg:top-6">
              <div className="bg-[#484848] rounded-xl sm:rounded-2xl inline-flex justify-center items-center">
                <a
                  className="text-white px-4 sm:px-5 py-2 sm:py-3 font-manrope group flex items-center gap-2 sm:gap-4 transition-colors duration-200 rounded-lg text-sm sm:text-base"
                  href="https://www.linkedin.com/in/arman-chaudhary/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire Me
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center bg-[#e05d26] transition-colors duration-200">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent transition-transform group-hover:rotate-[-45deg] duration-200">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white transition-colors duration-200"
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
