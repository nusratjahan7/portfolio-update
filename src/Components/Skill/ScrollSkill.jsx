import Image from "next/image";

const tools = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png" },
  { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];


const ScrollSkill = () => {
    return (
        <div className="!mb-2.5 overflow-hidden">
  <div className="flex gap-5 animate-[scroll_15s_linear_infinite]">
    {[...tools, ...tools].map((tool, index) => (
      <div
        key={index}
        className="flex items-center justify-center gap-2.5 !px-5 1py-2.5 rounded-[50px] bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 text-[14px] font-semibold text-white h-10 min-w-[120px] text-center hover:-translate-y-[5px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] md:text-[12px] md:px-3 md:py-1.5"
      >
        <Image 
          width={30} height={30}
          src={tool.icon}
          alt={tool.name}
          className="w-5 h-5 object-contain transition-all duration-300 dark:invert md:w-[18px] md:h-[18px]"
        />
        <span className="text-sm">{tool.name}</span>
      </div>
    ))}
  </div>
</div>
    );
};

export default ScrollSkill;