import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import {
  About,
  Certifications,
  Contact,
  Engineering,
  Experience,
  Footer,
  GithubSection,
  Projects,
  Skills,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Engineering />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
