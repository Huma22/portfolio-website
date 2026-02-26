"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const aboutLines = [
  "I am Huma Tejaswi Akkem, a software engineer based in Chicago.",
  "I build AWS backend systems and data pipelines for production workloads.",
  "My recent work focuses on serverless APIs, ETL, and analytics reliability.",
  "I have shipped solutions across healthcare, fintech, and enterprise reporting.",
  "I enjoy turning complex workflows into maintainable, observable systems.",
  "I am currently focused on cloud architecture, ML integration, and scale.",
];

const skillBars = [
  { label: "Python", level: 95 },
  { label: "AWS (Lambda, API Gateway, SQS, S3, IAM)", level: 93 },
  { label: "SQL / Aurora PostgreSQL / Redshift", level: 90 },
  { label: "TypeScript / JavaScript / Java", level: 86 },
  { label: "ETL, Monitoring, and Reliability", level: 90 },
  { label: "TensorFlow / OpenCV / Mask R-CNN", level: 82 },
];

const focusAreas = [
  {
    id: "cloud",
    title: "Cloud Architecture",
    text: "Designing practical AWS serverless systems with clear ownership, observability, and cost-aware decisions.",
  },
  {
    id: "data",
    title: "Data Platforms",
    text: "Building reliable ETL workflows and analytics pipelines with validation, reconciliation checks, and production monitoring.",
  },
  {
    id: "ml",
    title: "Applied ML",
    text: "Integrating ML and computer vision workflows into real systems with measurable outcomes and maintainable deployments.",
  },
];

function SkillBar({ label, level, delay }: { label: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: "rgba(240,240,240,0.82)" }}>
          {label}
        </span>
        <span className="text-xs font-semibold" style={{ color: "#C8F53F" }}>
          {level}%
        </span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
        <motion.div
          className="h-full rounded-full"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: "linear-gradient(90deg, #C8F53F 0%, #7be3ff 100%)" }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [activeFocus, setActiveFocus] = useState(focusAreas[0]);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative scroll-mt-28 px-4 md:px-8 pt-36 md:pt-40 pb-28">
      <div className="w-full">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-8xl mb-16 md:mb-20 text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.32em] uppercase mb-4" style={{ color: "#C8F53F" }}>
            ✦ About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ color: "#f0f0f0" }}>
            Building reliable systems
            <br />
            <span style={{ color: "#C8F53F" }}>that scale and last.</span>
          </h2>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full max-w-4xl rounded-3xl p-6 md:p-10 mb-10"
            style={{
              background:
                "radial-gradient(1200px 300px at 50% -20%, rgba(200,245,63,0.14), transparent 70%), rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="max-w-4xl mx-auto text-center space-y-3">
              {aboutLines.map((line) => (
                <p key={line} className="text-lg leading-relaxed" style={{ color: "rgba(240,240,240,0.72)" }}>
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-10 max-w-6xl mx-auto text-center">
              <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h4 className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8F53F" }}>
                  Education
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,240,0.76)" }}>
                  University of Illinois Chicago, BS in Computer Science
                  <br />
                  Honors College, Dean&apos;s List, December 2022
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl rounded-2xl p-8 md:p-10 mb-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4 text-center" style={{ color: "#C8F53F" }}>
              Focus Areas
            </h4>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {focusAreas.map((item) => {
                const active = activeFocus.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveFocus(item)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-250"
                    style={{
                      color: active ? "#121212" : "#d8ff4a",
                      background: active ? "#C8F53F" : "rgba(200,245,63,0.1)",
                      border: active ? "1px solid #C8F53F" : "1px solid rgba(200,245,63,0.35)",
                    }}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeFocus.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl p-5 md:p-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-base font-semibold mb-2 text-center" style={{ color: "#f0f0f0" }}>
                {activeFocus.title}
              </p>
              <p className="text-base leading-relaxed text-center" style={{ color: "rgba(240,240,240,0.7)" }}>
                {activeFocus.text}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl rounded-2xl p-6"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-5 text-center" style={{ color: "#C8F53F" }}>
              Core Skills
            </h4>
            <div className="mx-auto max-w-3xl">
              {skillBars.map((skill, index) => (
                <SkillBar key={skill.label} label={skill.label} level={skill.level} delay={index * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
