
import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Navbar from "@/Components/Navbar/Navbar";
import ScrollSkill from "@/Components/Skill/ScrollSkill";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ScrollSkill />
      <About />
    </div>
  );
}
