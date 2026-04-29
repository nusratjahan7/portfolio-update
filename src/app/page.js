
import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Contact from "@/Components/Contact/Contact";
import Navbar from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";
import ScrollSkill from "@/Components/Skill/ScrollSkill";
import Skill from "@/Components/Skill/Skill";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ScrollSkill />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}
