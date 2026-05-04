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
  const repeated = [...tools, ...tools];
  return (
    <div style={{ overflow: 'hidden', width: '100%', marginBottom: '10px' }}>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          width: 'max-content',
          animation: 'scroll 35s linear infinite',
        }}
      >
        {/* First copy */}
        {repeated.map((tool, index) => (
          <div
            key={`a-${index}`}
            className="flex items-center justify-center gap-2.5 !px-5 !py-2.5 rounded-[50px] bg-white/10 backdrop-blur-md border border-white/10 text-[14px] font-semibold text-white h-10 min-w-[120px] text-center"
          >
            <Image width={20} height={20} src={tool.icon} alt={tool.name} className="w-5 h-5 object-contain dark:invert" />
            <span className="text-sm">{tool.name}</span>
          </div>
        ))}
        {/* Exact duplicate for seamless loop */}
        {repeated.map((tool, index) => (
          <div
            key={`b-${index}`}
            className="flex items-center justify-center gap-2.5 !px-5 !py-2.5 rounded-[50px] bg-white/10 backdrop-blur-md border border-white/10 text-[14px] font-semibold text-white h-10 min-w-[120px] text-center"
          >
            <Image width={20} height={20} src={tool.icon} alt={tool.name} className="w-5 h-5 object-contain dark:invert" />
            <span className="text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSkill;