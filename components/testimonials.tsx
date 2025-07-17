import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Rahul Kumar",
      designation: "AI Engineer at Powersmy.biz",
      src: "rahul.jpg",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Abhipsit Bhjpai",
      designation: "My Hackathon team member",
      src: "abhipsit.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
