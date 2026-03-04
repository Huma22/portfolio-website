"use client";

import { useRef } from "react";
import {
    useScroll,
    useTransform,
    motion,
    MotionValue,
} from "framer-motion";

interface TextSectionProps {
    scrollYProgress: MotionValue<number>;
    inputRange: [number, number, number, number];
    align: "left" | "center" | "right";
    eyebrow?: string;
    headline: string;
    subline?: string;
    xOffset?: number; // horizontal parallax px
}

function TextSection({
    scrollYProgress,
    inputRange,
    align,
    eyebrow,
    headline,
    subline,
    xOffset = 0,
}: TextSectionProps) {
    const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, inputRange, [40, 0, 0, -30]);
    const x = useTransform(scrollYProgress, inputRange, [xOffset, 0, 0, xOffset * -0.4]);

    const alignClass =
        align === "center"
            ? "items-center text-center"
            : align === "left"
                ? "items-start text-left"
                : "items-end text-right";

    return (
        <motion.div
            style={{ opacity, y, x }}
            className={`absolute inset-0 pointer-events-none`}
        >
            <div className={`w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-full flex flex-col justify-center ${alignClass}`}>
                {eyebrow && (
                    <span
                        className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase"
                        style={{ color: "#C8F53F" }}
                    >
                        {eyebrow}


                    </span>
                )}
                <h1
                    className="font-bold leading-tight pr-4 sm:pr-0 max-w-full break-words"
                    style={{
                        fontSize: "clamp(2rem, 5vw, 4.8rem)",
                        color: "#f0f0f0",
                        textShadow: "0 0 80px rgba(0,0,0,0.8)",
                        maxWidth: "15ch",
                        letterSpacing: "-0.02em"
                    }}
                >
                    {headline}
                </h1>
                {subline && (
                    <p
                        className="mt-5 max-w-xl font-light leading-relaxed pr-4 sm:pr-0"
                        style={{ color: "rgba(240,240,240,0.65)", fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
                    >
                        {subline}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    // This overlay reads scroll from the document window (same as ScrollyCanvas parent)
    const { scrollYProgress } = useScroll();

    // Map overall page scroll to the 500vh scroll section (0 → ~0.83 of total page)
    // Overlay's three beats tied to scroll 0–1 of the 500vh section
    // We drive off window scrollYProgress and clamp segments

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        >
            {/* Section 1 */}
            <TextSection
                scrollYProgress={scrollYProgress}
                inputRange={[0.00, 0.03, 0.10, 0.14]}
                align="left"
                eyebrow="✦ Software Engineer"
                headline={"Huma Tejaswi Akkem"}
                subline="I build reliable AWS production systems with Python and SQL, designed to be observable, fast, and simple to run. Outside of work, I explore quant workflows for turning data into signals."
                xOffset={-80}
            />

            {/* Section 2 */}
            <TextSection
                scrollYProgress={scrollYProgress}
                inputRange={[0.16, 0.19, 0.26, 0.30]}
                align="left"
                eyebrow="✦ Current Role"
                headline={"West Loop Strategy"}
                subline="I work as a Software Engineer and built AWS serverless data pipelines and automation tools, with a focus on reliability, performance, and clean, maintainable systems."
                xOffset={-80}
            />

            {/* Section 3 */}
            <TextSection
                scrollYProgress={scrollYProgress}
                inputRange={[0.32, 0.35, 0.42, 0.46]}
                align="left"
                eyebrow="✦ Focus"
                headline={"Cloud, Data, and Applied ML"}
                subline="Hands-on experience with cloud migrations, automation, AI agent workflows, and BI analytics, from data pipelines and integrations to production deployments and dashboards."
                xOffset={-80}
            />
        </div>
    );
}
