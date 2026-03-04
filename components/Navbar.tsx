"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "About Me", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Coffe Chat", href: "#coffee-chat" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 inset-x-0 z-50 transition-all duration-500"
        >
            <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-center">
                <div
                    className="max-w-7xl w-full flex items-center justify-between md:justify-start rounded-full pl-4 pr-5 sm:pr-6 md:px-6 py-3"
                    style={{
                        background: scrolled
                            ? "rgba(18, 18, 18, 0.85)"
                            : "rgba(18, 18, 18, 0.3)",
                        backdropFilter: "blur(24px)",
                        border: scrolled
                            ? "1px solid rgba(200,245,63,0.2)"
                            : "1px solid rgba(255,255,255,0.06)",
                        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
                    }}
                >
                    {/* Logo & Links Left Aligned Container */}
                    <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-8 lg:gap-12 min-w-0">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 font-bold text-lg tracking-tight shrink-0 group"
                            style={{ color: "#f0f0f0" }}
                        >
                            <span
                                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-base font-black transition-all duration-300 group-hover:scale-110 shadow-lg"
                                style={{ background: "linear-gradient(135deg, #C8F53F 0%, #a8d52f 100%)", color: "#121212" }}
                            >
                                H
                            </span>
                            <span className="hidden sm:inline tracking-wide">Huma Tejaswi</span>
                        </Link>

                        {/* Left-Aligned Nav Links (Desktop) */}
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8 border-l border-white/10 pl-8 lg:pl-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="relative text-sm font-semibold tracking-wide py-1.5 transition-all duration-300 group"
                                    style={{ color: "rgba(240,240,240,0.8)" }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLElement).style.color = "#C8F53F";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLElement).style.color = "rgba(240,240,240,0.8)";
                                    }}
                                >
                                    {link.label}
                                    {/* Sleek underline hover effect */}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full" style={{ background: "#C8F53F" }} />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile hamburger (visual only, pushed to right on small screens) */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 pr-0 focus:outline-none"
                        aria-label="Menu"
                        aria-expanded={open}
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <span className="block w-6 h-[2px] rounded-full transition-all" style={{ background: "#C8F53F" }} />
                        <span className="block w-4 h-[2px] rounded-full transition-all ml-auto" style={{ background: "#f0f0f0" }} />
                        <span className="block w-6 h-[2px] rounded-full transition-all" style={{ background: "#f0f0f0" }} />
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div
                        className="md:hidden absolute left-0 right-0 mt-3 px-4"
                        style={{ top: "100%" }}
                    >
                        <div
                            className="w-full max-w-7xl mx-auto rounded-2xl px-4 py-3 space-y-2"
                            style={{
                                background: "rgba(18,18,18,0.92)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                                backdropFilter: "blur(12px)",
                            }}
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block w-full text-sm font-semibold py-2 px-2 rounded-lg transition-all"
                                    style={{ color: "rgba(240,240,240,0.9)" }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.header>
    );
}
