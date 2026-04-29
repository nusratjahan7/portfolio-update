"use client"
import { useState } from 'react';
import './navbar.css'
import useActiveSection from './useActiveSection';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    useActiveSection();
    return (
        <nav>
            {/* Top bar */}
            <div className="flex justify-between items-center">
                <a href="#" className="nav-logo font1 text-2xl font-bold text-(--white) tracking-[-0.5px]">
                    Nusrat<span className="text-(--accent)">.</span>
                </a>

                <ul className="nav-links hidden md:flex gap-10 list-none">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#contact" className="nav-cta">Hire Me</a></li>
                </ul>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-(--white) text-2xl"
                    aria-label="Toggle menu"
                >
                    {open ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile dropdown — now INSIDE <nav> */}
            {open && (
                <div className="md:hidden w-11/12 mx-auto mb-4 rounded-2xl border border-white/10 bg-[rgba(10,10,15,0.95)] backdrop-blur-xl !px-6 !py-6 !mt-1.5">
                    <ul className="nav-links flex flex-col gap-5 list-none">
                        <li>
                            <a href="#about" onClick={() => setOpen(false)} className="block hover:text-(--accent) transition">
                                About
                            </a>
                        </li>
                        
                        <li>
                            <a href="#skills" onClick={() => setOpen(false)} className="block hover:text-(--accent) transition">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-(--accent) transition">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-(--accent) transition">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setOpen(false)} className="nav-cta">
                                Hire Me
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;