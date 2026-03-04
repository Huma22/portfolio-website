"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    category: "Cloud & DevSecOps",
    skills: [
      "AWS Lambda",
      "Amazon API Gateway",
      "S3 · SQS · SNS",
      "Step Functions",
      "IAM / STS",
      "CloudWatch",
      "Terraform",
      "Kubernetes",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "Data & ML",
    skills: ["ETL Pipelines", "PostgreSQL", "Aurora", "Redshift", "Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-Learn", "QuickSight"],
  },
  {
    category: "Language & Web",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Go", "Java", "C++"],
  },
  {
    category: "Agents & Automation",
    skills: ["N8N workflows", "AI Agents", "MCP", "Web Automation", "Puppeteer", "Selenium"],
  },
];

// Replaced SkillBar with inline Pill styles inside the main component

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative scroll-mt-28 pt-20 sm:pt-24 lg:pt-32 pb-14 sm:pb-16 lg:pb-24">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mb-16 md:mb-20 text-center"
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-5xl space-y-8"
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full rounded-3xl p-6 sm:p-8 space-y-4"
            style={{
              background: "linear-gradient(135deg, rgba(200,245,63,0.08), rgba(123,227,255,0.05)), rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
            }}
          >
            <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: "#C8F53F" }}>
              <span>About Me</span>
              <span className="h-px flex-1" style={{ background: "rgba(200,245,63,0.3)" }} />
            </div>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed pl-8" style={{ color: "rgba(240,240,240,0.86)" }}>
              <p>
                I’m <span className="font-bold text-white">Huma Tejaswi</span> (Hima), a software engineer who builds production-grade cloud systems and analytics platforms, mostly on AWS. I specialize in transforming complex requirements into clean pipelines, reliable APIs, and BI experiences that deliver real value.
              </p>
              <p>
                Outside of work, I spend time exploring quantitative finance and machine learning through hands-on projects. I enjoy analyzing model behavior, testing hypotheses with structured experiments, and building systems that connect theory to real signals and decisions. The rewarding part is the iterative process: hypothesis, data, backtest, validation, refinement.
              </p>
              <p>
                When I’m not coding, I’m usually doing something that still scratches the problem-solving itch in a different way—hiking for mental clarity, chess for strategic thinking, DIY projects to build tangible solutions, and painting to practice patience and embrace creative iteration.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-3xl p-6 sm:p-7 space-y-4"
            style={{
              background: "linear-gradient(135deg, rgba(200,245,63,0.08), rgba(123,227,255,0.05)), rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.22)",
            }}
          >
            <h4 className="text-sm font-semibold tracking-[0.22em] uppercase pl-8" style={{ color: "#C8F53F" }}>
              Education
            </h4>
            <p className="text-sm font-semibold text-white pl-8">University of Illinois Chicago</p>
            <p className="text-sm pl-8" style={{ color: "rgba(240,240,240,0.75)" }}>
              Bachelors of Computer Science · Honors College · Dean’s List
            </p>
            <div className="pt-3 text-sm font-semibold flex flex-wrap gap-3 pl-8" style={{ color: "rgba(240,240,240,0.85)" }}>
              <span>20+ Projects</span>
              <span>3+ Organizations</span>
              <span>4+ Hackathons</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full rounded-3xl p-6 sm:p-7 space-y-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.22)",
            }}
          >
            <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(240,240,240,0.6)" }}>
              <span>Skills</span>
              <span className="h-px flex-1" style={{ background: "rgba(240,240,240,0.18)" }} />
            </div>
            <div className="space-y-6 pl-8">
              {skillCategories.map((group, groupIdx) => (
                <div key={group.category} className="space-y-3 relative pl-6">
                  <div className="flex items-center gap-3">
                    <span className="absolute -left-6 w-4 h-0.5" style={{ background: "rgba(200,245,63,0.5)" }} />
                    <span className="w-2.5 h-2.5 rounded-full absolute -left-[26px]" style={{ background: "#C8F53F", boxShadow: "0 0 8px rgba(200,245,63,0.6)" }} />
                    <p className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(240,240,240,0.85)" }}>
                      {group.category}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.22, delay: (groupIdx * 0.05) + (skillIdx * 0.02) }}
                        className="px-3.5 py-1.5 rounded-full text-sm font-medium"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(240,240,240,0.88)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
