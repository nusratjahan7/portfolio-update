'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import digi from '@/assets/digitool.png';
import keenKeeper from '@/assets/keenkeeper.png';
import hero from '@/assets/hero-apps.png';
import terra from '@/assets/terra.png';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';

const projects = [
    {
        num: "01", img: digi,
        tags: ["React", "Tailwind CSS", "ES6+"],
        name: "DigiTools",
        desc: "DigiTools Web is a modern and responsive web application that provides a collection of useful digital tools in one place.",
        git: "https://github.com/nusratjahan7/Payoo-Resources",
        live: "https://digitools-web.vercel.app/",
    },
    {
        num: "02", img: keenKeeper,
        tags: ["React", "Next.js", "Recharts"],
        name: "KeenKeeper",
        desc: "FriendTrack helps you track your relationships, set contact goals, and log interactions so you never lose touch with friends.",
        git: "https://github.com/nusratjahan7/kin-keeper",
        live: "https://kin-keeper-nu.vercel.app/",
    },
    {
        num: "03", img: hero,
        tags: ["React", "Tailwind CSS", "Hooks"],
        name: "AppVault",
        desc: "Hero Apps is a collection of multiple small web applications built to practice and strengthen core JavaScript and frontend development skills.",
        git: "https://github.com/nusratjahan7/hero-apps",
        live: "https://hero-apps-three.vercel.app/",
    },
    {
        num: "04", img: terra,
        tags: ["React", "Tailwind CSS", "ES6+"],
        name: "TerraVerde",
        desc: "TerraVerde is a premium agricultural website with a cinematic and modern design. It presents sustainable farming solutions through smooth animations, clean UI, and a nature-inspired color palette.",
        git: "https://github.com/nusratjahan7/terra-verde",
        live: "https://terra-verde-vert.vercel.app/",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="!py-13">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="section-tag text-3xl text-(--accent)">// My Work</motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="section-title text-4xl text-white mb-4">Recent <em className="text-accent">Projects</em></motion.h2>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="divider h-1 bg-linear-to-r from-accent to-blue-500 w-1/5 mx-auto !mb-12"></motion.div>

            <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        key={project.num}
                        className="project-card bg-(--card) border border-(--border) rounded-2xl overflow-hidden flex flex-col transition-all group hover:translate-y-2 hover:border-(--accent)/30 hover:shadow-xl hover:shadow-(--accent)/30"
                    >
                        <div className="project-thumbnail relative w-full overflow-hidden border-b border-(--border)">
                            {project.img ? (
                                <Image
                                    src={project.img}
                                    alt={project.name}
                                    height={600}
                                    width={500}
                                    className="object-cover w-full h-full opacity-70"
                                />
                            ) : (
                                <div
                                    className="project-thumbnail-bg absolute inset-0 bg-gray-900 opacity-30"
                                ></div>
                            )}
                            <div className="project-num absolute bottom-0 right-5 text-8xl text-white opacity-10">{project.num}</div>
                            <div className="project-emoji relative text-4xl z-10">{project.emoji}</div>
                        </div>

                        <div className="project-body !p-7 flex flex-col justify-between flex-1">
                            <div>
                                <div className="project-tags flex flex-wrap gap-2 !mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-tag text-xs font-mono text-(--accent2) bg-(--accent2)/10 border-(--accent2)/60 border !px-2 !py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div className='flex-1'>
                                    <div className="project-name font1 text-2xl font-semibold text-white !mb-3">{project.name}</div>
                                <p className="project-desc text-sm text-(--muted)">{project.desc}</p>
                                </div>
                            </div>
                            <div className="project-footer !mt-6 !pt-5 border-t border-(--border) flex justify-between items-center gap-4">
                                <div className="project-links flex gap-4">
                                    {project.git && (
                                        <Link href={project.git} target="_blank" rel="noopener noreferrer">
                                            <button className="proj-link flex items-center text-sm gap-2 !px-3 !py-2 bg-(--accent)/10 text-(--accent) border border-(--accent)/20 rounded-full hover:bg-(--accent)/20 transition-colors">
                                                <FiGithub /> GitHub
                                            </button>
                                        </Link>
                                    )}
                                    {project.live && (
                                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                            <button className="proj-link flex items-center text-sm gap-2 !px-3 !py-2 bg-(--accent)/10 text-(--accent) border border-(--accent)/20 rounded-full hover:bg-(--accent)/20 transition-colors">
                                                <GoLinkExternal /> Live Demo
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;