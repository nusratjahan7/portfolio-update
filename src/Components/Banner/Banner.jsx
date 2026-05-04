'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Stats from './Stats';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: 'easeOut' }
    })
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5, ease: 'easeOut' }
    }
};

const pulse = {
    animate: {
        opacity: [1, 0.3, 1],
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    }
};

const scrollDown = {
    animate: {
        scaleY: [0, 1, 1],
        opacity: [1, 1, 0],
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
    }
};

const Banner = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col md:flex-row items-center !px-5 md:!px-16 !pt-32 !pb-2 overflow-hidden"
        >
            {/* Background gradients */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 60% 50% at 70% 50%, rgba(167,139,250,0.08) 0%, transparent 60%),
                        radial-gradient(ellipse 40% 40% at 20% 80%, rgba(200,245,66,0.06) 0%, transparent 50%)`
                }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(42,42,58,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,58,0.15) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                }}
            />

            {/* Hero content */}
            <div className="relative z-10 max-w-3xl !mb-10">

                {/* Badge */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="!mt-2.5 inline-flex items-center gap-2 bg-[rgba(200,245,66,0.08)] border border-[rgba(200,245,66,0.2)] rounded-full !px-4 !py-2 text-sm text-(--accent) font-['Space_Mono',monospace]"
                >
                    <motion.span
                        variants={pulse}
                        animate="animate"
                        className="w-1.5 h-1.5 rounded-full bg-(--accent) shadow-[0_0_8px_var(--accent)]"
                    />
                    Available for opportunities
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="font1 !mt-3.5 font-black leading-none tracking-tighter text-(--white)"
                    style={{ fontSize: 'clamp(52px, 8vw, 62px)' }}
                >
                    Frontend<br />
                    <em className="not-italic text-transparent" style={{ WebkitTextStroke: '2px var(--accent)' }}>
                        Developer
                    </em><br />
                    & Creator
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="!mt-7 text-[17px] text-(--muted) max-w-lg leading-relaxed font-light"
                >
                    Hi, I'm <strong className="font-semibold text-(--white)">Nusrat Jahan</strong> — a frontend developer passionate about crafting beautiful, interactive web experiences with modern technologies.
                </motion.p>

                {/* Actions */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="!mt-12 flex flex-wrap gap-4 items-center"
                >
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 bg-(--accent) text-[#0a0a0f] !px-9 !py-4 rounded-full text-sm font-bold tracking-wide no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(200,245,66,0.35)]"
                    >
                        View Projects
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 text-(--text) border border-(--border) !px-9 !py-4 rounded-full text-sm font-medium no-underline bg-transparent transition-all duration-300 hover:border-(--accent) hover:text-(--accent) hover:bg-[rgba(200,245,66,0.04)]"
                    >
                        Get in touch
                    </Link>
                </motion.div>
            </div>

            {/* Stat cards */}
            <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                className="hidden md:flex md:flex-col absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 gap-5"
            >
                {[
                    { number: '10+', label: 'Projects Built' },
                    { number: '10+', label: 'Tools Learned' },
                    { number: '∞',   label: 'Curiosity' },
                ].map(({ number, label }) => (
                    <div
                        key={label}
                        className="bg-(--card) border border-(--border) rounded-2xl !px-7 !py-6 text-center min-w-36 transition-all duration-300 hover:border-(--accent)hover:-translate-x-1"
                    >
                        <div className="font-['Playfair_Display',serif] text-4xl font-black text-(--accent) leading-none">
                            {number}
                        </div>
                        <div className="text-xs text-(--muted) !mt-1.5 uppercase tracking-widest">
                            {label}
                        </div>
                    </div>
                ))}
            </motion.div>

            <Stats />

            {/* Scroll indicator */}
            <div className="hidden md:flex absolute right-1 top-1/3 items-center gap-2 text-xs tracking-widest uppercase text-(--muted) font-['Space_Mono',monospace] [writing-mode:vertical-rl]">
                <motion.div
                    variants={scrollDown}
                    animate="animate"
                    className="w-px h-16 origin-top bg-linear-to-b from-(--accent) to-transparent"
                />
                Scroll to explore
            </div>
        </section>
    );
};

export default Banner;