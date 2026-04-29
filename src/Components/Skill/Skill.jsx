"use client"
import Image from "next/image";
import { motion } from 'framer-motion';

const skills = [
    { name: "HTML5", level: "Foundation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", level: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", level: "Core Lang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", level: "UI Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", level: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", level: "CSS Framework", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Git & GitHub", level: "Version Control", icon: "https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF" },
    { name: "Vercel", level: "Deployment", icon: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png" },
    { name: "Netlify", level: "Hosting", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    { name: "Figma", level: "UI Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const skillCategories = [
    {
        title: "FRONTEND",
        skills: [
            { name: "HTML / CSS", percent: 95 },
            { name: "JavaScript (ES6+)", percent: 88 },
            { name: "React.js", percent: 85 },
            { name: "Tailwind CSS", percent: 90 },

        ]
    },
    // {
    //     title: "BACKEND",
    //     skills: [
    //         { name: "Node.js", percent: 75 },
    //         { name: "Express.js", percent: 72 },
    //         { name: "MongoDB", percent: 68 },
    //         { name: "REST APIs", percent: 80 },
    //         { name: "Firebase", percent: 78 },
    //     ]
    // },
    {
        title: "DESIGN & TOOLS",
        skills: [
            { name: "Figma", percent: 82 },
            { name: "Git / GitHub", percent: 88 },
            { name: "Next.js", percent: 65 },
            { name: "VS Code / DevTools", percent: 92 },
            { name: "Responsive Design", percent: 95 },
        ]
    }
];

const Skill = () => {
    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="section-tag">// Tech Stack</motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="section-title">
                Tools & <em>Skills</em>
            </motion.h2>
            <div className="divider"></div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4 !mt-16 !mb-16 reveal">
                {skills.map((skill, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="group bg-(--card) border border-(--border) rounded-2xl !py-5 !px-4 text-center transition-all duration-300 ease-out cursor-default relative overflow-hidden hover:border-(--accent) hover:-translate-y-1" key={index}>
                        
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-[#c8f542]/0 to-[#c8f542]/5 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-events-none" />
                        
                        <div className="text-[28px] !mb-2.5 inline-flex items-center justify-center relative z-10">
                            <Image src={skill.icon} alt={skill.name} height={40} width={30} />
                        </div>
                        <div className="text-[12px] font-medium text-(--text) relative z-10">{skill.name}</div>
                        <div className="text-[10px] text-(--muted) !mt-1 font-mono relative z-10">{skill.level}</div>
                    </motion.div>
                ))}
            </div>

            {/* New Detailed Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 !mt-16">
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#16161f] rounded-2xl !p-6 md:!p-8 border border-white/5"
                    >
                        <h3 className="font-mono text-(--accent) text-sm font-bold tracking-widest !mb-8 uppercase">
                            / {cat.title}
                        </h3>
                        <div className="flex flex-col gap-6">
                            {cat.skills.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-200 text-[15px] font-medium !mb-2">{skill.name}</span>
                                        <span className="text-(--accent) text-sm font-bold">{skill.percent}%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-1.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percent}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="bg-linear-to-r from-(--accent) to-(--accent2) h-1.5 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skill;