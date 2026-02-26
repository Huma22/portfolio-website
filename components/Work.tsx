"use client";

import { motion } from "framer-motion";

const roles = [
  {
    company: "West Loop Strategy (AWS Partner)",
    title: "Software Engineer",
    period: "Mar 2023 - Present",
    summary:
      "Built serverless AWS systems using Lambda, SQS, S3, API Gateway, and Aurora PostgreSQL to process high-volume healthcare workflows.",
  },
  {
    company: "Korn Ferry",
    title: "Web/UI Developer Co-Op",
    period: "Jun 2022 - Oct 2022",
    summary:
      "Developed interactive analytics experiences and REST-driven features with React, D3.js, and Java for enterprise reporting use cases.",
  },
  {
    company: "Illinois Department of Transportation",
    title: "Machine Learning Intern",
    period: "Apr 2022 - Jun 2022",
    summary:
      "Implemented truck parking computer vision workflows with Mask R-CNN, TensorFlow, OpenCV, and automated timestamp extraction.",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative px-6 md:px-10 pt-28 pb-24 md:pt-32">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-8xl mb-16 md:mb-20 text-center"
        >
          <span
            className="block text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#C8F53F" }}
          >
            ✦ Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: "#f0f0f0" }}>
            Experience building
            <br />
            <span style={{ color: "#C8F53F" }}>production systems.</span>
          </h2>
        </motion.div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5">
            {roles.map((role, i) => (
              <motion.article
                key={role.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8F53F" }}>
                  {role.period}
                </p>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#f0f0f0" }}>{role.title}</h3>
                <p className="text-sm mb-4" style={{ color: "rgba(240,240,240,0.72)" }}>{role.company}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,240,0.58)" }}>{role.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
