"use client"

const AboutMe = () => {
  return (
    <section className="min-h-screen text-black pt-8 sm:pt-12 md:pt-16 px-4 sm:px-8 md:px-16 relative" id="about">
      {/* Decorative elements */}

      <div className="mx-auto w-full max-w-6xl bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
        {/* Header with minimalist design */}
        <div className="mb-5 sm:mb-7 relative flex flex-col items-center">
          <div className="w-full flex justify-between">
            <div className="w-1/3 h-[2px] bg-black"></div>
            <div className="w-1/3 h-[2px] bg-black"></div>
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-manrope tracking-tight text-center">
            ABOUT ME
          </h1>
          <div className="w-16 h-[2px] bg-black mt-4"></div>
        </div>

        {/* Content in a modern grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Image with geometric frame - stacks on mobile */}
          <div className="md:col-span-5 order-2 md:order-1 relative mx-auto md:mx-0 max-w-xs sm:max-w-sm md:max-w-full">
            <div className="aspect-square relative">
              <div className="absolute inset-0 border-2 border-black rounded-none transform translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4"></div>
              <img src="/me.jpg" alt="Arman Chaudhary" className="w-full h-full object-cover grayscale contrast-125" />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 border-2 border-black"></div>
            </div>
          </div>

          {/* Text content with minimalist styling */}
          <div className="md:col-span-7 order-1 md:order-2 space-y-4">
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed font-light">
                Hey there! I'm <span className="font-medium">Arman Chaudhary</span>, an AI/ML and Web
                Developer from India, currently pursuing Computer Science at <span className="font-medium">PEC</span>. I
                specialize in AI-driven applications, full-stack web development and data science. Passionate about
                blending technology with real-world impact, I aim to create intelligent and efficient solutions through
                AI and software development.
              </p>
            </div>

            {/* Skills with minimalist indicators */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-medium flex items-center">
                <span className="w-6 h-[1px] bg-black mr-3"></span>
                Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="border-l border-black pl-3 sm:pl-4">
                  <h4 className="font-medium text-sm sm:text-base">AI & Machine Learning</h4>
                  <p className="text-xs sm:text-sm text-gray-700">Computer vision, deep learning, model optimization</p>
                </div>
                <div className="border-l border-black pl-3 sm:pl-4">
                  <h4 className="font-medium text-sm sm:text-base">Web Development</h4>
                  <p className="text-xs sm:text-sm text-gray-700">React (TypeScript), Next.js, Supabase</p>
                </div>
                <div className="border-l border-black pl-3 sm:pl-4">
                  <h4 className="font-medium text-sm sm:text-base">Data Structures & Algorithms</h4>
                  <p className="text-xs sm:text-sm text-gray-700">C++ for optimized, scalable solutions</p>
                </div>
                <div className="border-l border-black pl-3 sm:pl-4">
                  <h4 className="font-medium text-sm sm:text-base">Data Science</h4>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Python and AI frameworks for analyzing complex datasets
                  </p>
                </div>
              </div>
            </div>

            {/* Mission with unique styling */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-medium flex items-center">
                <span className="w-6 h-[1px] bg-black mr-3"></span>
                Mission
              </h3>
              <p className="text-base sm:text-lg leading-relaxed font-light border-b border-black pb-4">
                I aim to apply AI and software development to real-world challenges,
                <span className="font-medium">
                  {" "}
                  contributing to research, industry projects and innovative application
                </span>
                . My focus is on staying at the forefront of AI advancements, improving system efficiency and
                developing scalable, intelligent solutions for practical use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

