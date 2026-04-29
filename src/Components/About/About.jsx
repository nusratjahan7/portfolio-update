"use client"
import Image from 'next/image';
import Img from '@/assets/image.png';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="bg-(--surface)"> {/* Ensure the variable --surface is defined in your CSS */}
            <motion.div
                className="section-tag"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
            > // Who I Am </motion.div>

            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
            >  About <em>Me</em>
            </motion.h2>

            <div className="divider"></div>

            <div className="grid md:grid-cols-2 gap-20 items-center mt-16">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="w-full aspect-3/4  bg-(--card) rounded-3xl border border-(--border) h-[400px] flex items-center justify-center relative overflow-hidden">
                        <Image src={Img} height={400} alt="animated image" />
                    </div>
                    <div className="absolute -bottom-5 -right-5 w-30 h-30 rounded-full bg-[#c8f542]/10 border border-[#c8f542]/20 flex items-center justify-center text-[12px] font-mono text-accent text-center leading-[1.4] backdrop-blur-sm">
                        Frontend<br />Developer<br />✦
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col text-[16px] leading-[1.85] text-(--muted) font-light"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="mb-5">
                        Hi there! I'm <strong className="text-(--text) font-medium">Nusrat Jahan</strong>, a passionate and driven frontend developer based in Bangladesh. I'm at the beginning of my journey in web development, but my enthusiasm and dedication to learning are limitless.
                    </p>
                    <p className="mb-5 ">
                        I'm currently mastering the art of building modern, responsive, and visually stunning web applications. I specialize in <strong className="text-(--text) font-medium">HTML, CSS, JavaScript</strong>, and frameworks like <strong className="text-(--text) font-medium">React</strong> and <strong className="text-(--text) font-medium">Next.js</strong>. My goal is to turn ideas into reality through clean, efficient, and beautiful code.
                    </p>
                    <p className="mb-5">
                        While I'm yet to take on professional client work, I've been actively building projects to sharpen my skills and demonstrate what I'm capable of. I believe <strong className="text-(--text) font-medium">the best time to start is now</strong>, and every project I build brings me one step closer to my dream career.
                    </p>
                    <p className="mb-5">
                        I'm eager to collaborate, contribute to real-world projects, and grow as a developer. If you're looking for someone who is <strong className="text-(--text) font-medium">motivated, quick to learn, and genuinely passionate</strong> — let's connect!
                    </p>
                </motion.div>
            </div>
            {/* Education Section */}
            <div className="!mt-23">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase flex items-center gap-4 !mb-4"
                >
                    <div className="w-8 h-px bg-(--accent)"></div>
                    <h2 className='section-tag'>EDUCATION</h2>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="section-title font1 text-5xl font-black text-white tracking-[-2px] leading-none !mb-4"
                >
                    Academic <em>journey</em>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-(--muted) text-[17px] !mb-16"
                >
                    My formal education that laid the foundation for my technical career.
                </motion.p>

                <div className="relative border-l border-(--accent)/20 !ml-3 md:!ml-4 flex flex-col gap-10 !pb-4">

                    {/* Item 1 */}
                    {/* <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative !pl-8 md:!pl-12"
                    >
                        
                        <div className="absolute -left-1.25 top-6 w-2.25 h-2.25 bg-(--accent) rounded-full shadow-[0_0_10px_rgba(200,245,66,0.6)]"></div>
                        
                        <div className="bg-[#1a1a24] border border-white/5 rounded-2xl !p-6 md:!p-8 hover:border-(--accent)/30 transition-colors duration-300">
                            <h3 className="text-white text-[18px] md:text-[20px] font-bold !mb-1">B.Sc. in Computer Science & Engineering</h3>
                            <div className="text-accent font-semibold text-[15px] !mb-2">BRAC University, Dhaka, Bangladesh</div>
                            <div className="font-mono text-white/40 text-[12px] tracking-wider !mb-4">
                                2020 — 2024 · CGPA: 3.65 / 4.00
                            </div>
                            <p className="text-muted text-[14px] leading-relaxed font-light">
                                Focused on software engineering, algorithms, and web technologies. Completed capstone project on real-time collaborative task management applications using WebSockets and React. Active member of the university's programming club, participated in multiple hackathons.
                            </p>
                        </div>
                    </motion.div> */}

                    {/* Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative !pl-8 md:!pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-1.25 top-6 w-2.25 h-2.25 bg-(--accent) rounded-full shadow-[0_0_10px_rgba(200,245,66,0.6)]"></div>

                        <div className="bg-[#1a1a24] border border-white/5 rounded-2xl !p-6 md:!p-8 hover:border-(--accent)/30 transition-colors duration-300">
                            <h3 className="text-white text-[18px] md:text-[20px] font-bold !mb-1">Higher Secondary Certificate (HSC) — Science</h3>
                            <div className="text-(--accent) font-semibold text-[15px] !mb-2">BAF Shaheen College Kurmitola, Dhaka Cantonment, Bangladesh</div>
                            <div className="font-mono text-white/40 text-[12px] tracking-wider !mb-4">
                                2023 — 2025 · GPA: 4.25 / 5.00
                            </div>
                            <p className="text-muted text-[14px] leading-relaxed font-light">
                                Completed Higher Secondary Certificate with perfect GPA in Science group. Developed strong foundations in Mathematics and Physics which later contributed to my logical problem-solving approach in programming.
                            </p>
                        </div>
                    </motion.div>
                    {/* Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative !pl-8 md:!pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-1.25 top-6 w-2.25 h-2.25 bg-(--accent) rounded-full shadow-[0_0_10px_rgba(200,245,66,0.6)]"></div>

                        <div className="bg-[#1a1a24] border border-white/5 rounded-2xl !p-6 md:!p-8 hover:border-(--accent)/30 transition-colors duration-300">
                            <h3 className="text-white text-[18px] md:text-[20px] font-bold !mb-1">Secondary School Certificate (SSC) — Science</h3>
                            <div className="text-(--accent) font-semibold text-[15px] !mb-2">Momena Ali Biggan School, Sirajgonj, Bangladesh</div>
                            <div className="font-mono text-white/40 text-[12px] tracking-wider !mb-4">
                                2022 — 2023 · GPA: 5.00 / 5.00
                            </div>
                            <p className="text-muted text-[14px] leading-relaxed font-light">
                                Graduated with perfect GPA, winning awards for academic excellence in Mathematics and General Science. First exposure to computer basics during this period sparked an enduring curiosity for technology.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default About;