
import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Navbar from "@/Components/Navbar/Navbar";
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
    </div>
  );
}
