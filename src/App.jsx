import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Skills from "./components/ServicesSkillsSection";
import Toolkit from "./components/Toolkit";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";


export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main className="pt-16 overflow-x-hidden">
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <Toolkit />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
