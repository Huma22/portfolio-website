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
            <div className={`mx-auto w-full max-w-6xl h-full flex flex-col justify-center px-6 md:px-10 ${alignClass}`}>
                {eyebrow && (
                    <span
                        className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase"
                        style={{ color: "#C8F53F" }}
                    >
                        {eyebrow}
                    </span>
                )}
                <h1
                    className="font-bold leading-tight"
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
                        className="mt-5 max-w-xl font-light leading-relaxed"
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
                inputRange={[0, 0.04, 0.16, 0.22]}
                align="left"
                eyebrow="✦ Software Engineer"
                headline={"Huma Tejaswi Akkem"}
                subline="I build production systems on AWS with Python and SQL, then make them observable, fast, and boring to operate. Exploring quant style workflows for turning data into signals"
                xOffset={-80}
            />

            {/* Section 2 */}
            <TextSection
                scrollYProgress={scrollYProgress}
                inputRange={[0.54, 0.60, 0.74, 0.80]}
                align="left"
                eyebrow="✦ Current Role"
                headline={"West Loop Strategy"}
                subline="I work as a Software Engineer and built AWS serverless data pipelines and automation tools, with a focus on reliability, performance, and clean, maintainable systems."
                xOffset={-80}
            />

            {/* Section 3 */}
            <TextSection
                scrollYProgress={scrollYProgress}
                inputRange={[0.30, 0.36, 0.50, 0.56]}
                align="left"
                eyebrow="✦ Focus"
                headline={"Cloud, Data, and Applied ML"}
                subline="Hands-on experience with cloud migrations, automation, AI agent workflows, and BI analytics, from data pipelines and integrations to production deployments and dashboards."
                xOffset={-80}
            />
        </div>
    );
}
