"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer
            id="footer"
            className="relative w-full flex flex-col items-center justify-center py-16 mt-10 overflow-hidden"
            style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                background: "#0e0e0e",
            }}
        >
            {/* Ambient glow */}
            <div
                className="absolute inset-x-0 top-0 w-full h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent 0%, #C8F53F 50%, transparent 100%)",
                    opacity: 0.3,
                }}
            />

            <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6 text-center">
                {/* Center content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <p
                        className="text-2xl font-black tracking-tight mb-2"
                        style={{ color: "#f0f0f0" }}
                    >
                        Let&apos;s Talk{" "}
                        <span style={{ color: "#C8F53F" }}>extraordinary.</span>
                    </p>
                    <p
                        className="text-sm"
                        style={{ color: "rgba(240,240,240,0.4)" }}
                    >
                        akkemhumatejaswi222@gmail.com · Chicago, IL
                    </p>
                </motion.div>

                {/* Social links centered */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="flex items-center justify-center gap-6 w-full flex-wrap"
                >
                    <a href="https://github.com/Huma22" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors duration-200" style={{ color: "rgba(240,240,240,0.4)" }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C8F53F"} onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(240,240,240,0.4)"}>
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/humaakkem/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors duration-200" style={{ color: "rgba(240,240,240,0.4)" }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C8F53F"} onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(240,240,240,0.4)"}>
                        LinkedIn
                    </a>
                    <a href="mailto:akkemhumatejaswi222@gmail.com" className="text-sm font-medium transition-colors duration-200" style={{ color: "rgba(240,240,240,0.4)" }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C8F53F"} onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(240,240,240,0.4)"}>
                        Gmail
                    </a>
                </motion.div>

                {/* Credits centered */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xs"
                    style={{ color: "rgba(240,240,240,0.3)" }}
                >
                    All credits to Huma Tejaswi.
                </motion.p>
            </div>

            {/* Bottom copy */}
            <div
                className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 mt-10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-2 text-xs"
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    color: "rgba(240,240,240,0.25)",
                }}
            >
                <span className="text-center md:text-left">© {new Date().getFullYear()} Huma Tejaswi. Crafted with intention.</span>
                <span className="text-center md:text-right">Built with Next.js · Framer Motion · TypeScript</span>
            </div>
        </footer>
    );
}
