import { BackgroundFX } from "@/components/BackgroundFX";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <LoadingScreen />
      <BackgroundFX />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Approach />
        <Contact />
      </main>
    </div>
  );
}
