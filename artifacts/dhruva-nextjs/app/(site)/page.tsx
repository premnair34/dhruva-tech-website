import { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Dhruva Technologies | Software & Consulting Firm",
  description: "Dhruva Technologies provides innovative software solutions and technical consulting for business transformation and growth.",
  keywords: "software engineering, consulting firm, digital transformation, IT solutions, custom software"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <Testimonial />
      <CTA />
      <Contact />
    </main>
  );
}
