import Hero1 from "@/components/hero1"
import Hero2 from "@/components/aboutMe"
import { Navbar } from "@/components/navbar"
import BentoGrid from "@/components/projects"
import { Experience } from "@/components/myExperience"
import  Follow  from "@/components/follow"
import { AnimatedTestimonialsDemo } from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero1/>
      <Hero2/>
      <BentoGrid/>
      <Experience/>
      {/* <AnimatedTestimonialsDemo/> */}
      <Follow/>
    </main>
  )
}

