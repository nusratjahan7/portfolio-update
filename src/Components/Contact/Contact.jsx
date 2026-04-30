"use client"
import Link from "next/link";
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Contact() {

    const contactItems = [
        {
            label: "Email",
            value: "nusratjahan77222@gmail.com",
            icon: (
                <svg className="w-4 h-4 text-(--accent2)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                </svg>
            ),
        },
        {
            label: "Phone",
            value: "+880 1518-731771",
            icon: (
                <svg className="w-4 h-4 text-(--accent2)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
            ),
        },
        {
            label: "WhatsApp",
            value: "+880 1518-731771",
            icon: (
                <svg className="w-4 h-4 text-(--accent2)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
            ),
        },
        {
            label: "Telegram",
            value: "@nusratjahan77",
            icon: (
                <FaTelegramPlane className="w-4 h-4 text-(--accent2)" />
            ),
        },
        {
            label: "Location",
            value: "Dhaka, Bangladesh",
            icon: (
                <svg className="w-4 h-4 text-(--accent2)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
        },
    ];

    const inputClass =
        "w-full !px-3.5 !py-2.5 text-sm bg-(--card) border border-(--border) dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--accent2)/30 focus:border-(--accent2) transition-all";

    return (
        <section id="contact" className="!py-10">
            <div className="px-4 sm:w-11/12 sm:mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="!mb-10"
                >
                    <p className="section-tag text-3xl text-(--accent)">
                        // Contact
                    </p>
                    <h2 className="section-title text-4xl text-white !mb-4" >
                        Let&apos;s <em>connect</em>
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
                        Have a project in mind, a collaboration idea, or just want to say hello? My inbox is always open.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-center">
                    {/* Left — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col gap-3 md:!ml-4"
                    >
                        {contactItems.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center gap-3 !px-4 !py-3.5 bg-(--card)  border border-(--border) rounded-xl hover:border-(--accent)/40 transition-colors"
                            >
                                <div className="w-9 h-9 rounded-lg bg-(--accent2)/10 border-(--accent2)/60 flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] tracking-widest uppercase text-gray-400 leading-none !mb-0.5">
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-medium !pr-1 text-gray-800 dark:text-gray-200">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Social Buttons */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4 mt-2"
                        >
                            <Link href="https://github.com/nusratjahan7" target="_blank" className="flex items-center gap-2 !px-5 !py-3 rounded-xl bg-(--card) border border-(--border) text-sm font-medium hover:border-(--accent) hover:text-(--accent) transition-colors">
                                <FiGithub className="text-[18px]" /> GitHub
                            </Link>
                            <Link href="https://linkedin.com/in/nusratjahan77" target="_blank" className="flex items-center gap-2 !px-5 !py-3 rounded-xl bg-(--card) border border-(--border) text-sm font-medium hover:border-(--accent) hover:text-(--accent) transition-colors">
                                <FaLinkedin className="text-[18px]" /> LinkedIn
                            </Link>
                            <Link href="https://instagram.com/nuraisa_nusrat" target="_blank" className="flex items-center gap-2 !px-5 !py-3 rounded-xl bg-(--card) border border-(--border) text-sm font-medium hover:border-(--accent) hover:text-(--accent) transition-colors">
                                <FaInstagram className="text-[18px]" /> Instagram
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                         className="flex flex-col gap-4 md:!ml-9">
                        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="John"
                                    required
                                    className={inputClass}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Doe"
                                    required
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Collaboration"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                required
                                rows={5}
                                className={`${inputClass} resize-y`}
                            />
                        </div>

                        {/* Submit */}
                         <button
                            type="submit"
                            className="flex items-center justify-center gap-2 w-full !py-3 !px-6 bg-(--accent) text-white dark:text-gray-900 text-sm font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            Send Message
                        </button> 
                    </motion.form>
                    
                </div>
            </div>
        </section>
    );
}