"use client"
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5  }}
                className="hero-stats flex md:hidden gap-2.5 !mb-5">
                {[
                    { number: '10+', label: 'Projects Built' },
                    { number: '10+', label: 'Tools Learned' },
                    { number: '∞',   label: 'Curiosity' },
                ].map(({ number, label }) => (
                    <div
                        key={label}
                        className="bg-(--card) border border-(--border) rounded-2xl !px-4 !py-3 text-center transition-all duration-300 hover:border-(--accent)hover:-translate-x-1"
                    >
                        <div className="font-['Playfair_Display',serif] text-2xl font-black text-(--accent) leading-none">
                            {number}
                        </div>
                        <div className="text-xs text-(--muted) !mt-1.5 uppercase tracking-widest">
                            {label}
                        </div>
                    </div>
                ))}
            </motion.div>
    );
};

export default Stats;