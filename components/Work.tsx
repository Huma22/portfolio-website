"use client";

import { motion } from "framer-motion";

const roles = [
  {
    company: "West Loop Strategy (AWS Partner)",
    title: "Software Engineer",
    period: "Mar 2023 - Present",
    summary: [
      "Built an AWS serverless pipeline (Lambda, SQS, S3, API Gateway, Aurora PostgreSQL) processing 1M daily drug requests; improved run reliability from 70% to 96% with validation and monitoring.",
      "Built MCP integrations and internal APIs on AWS (Lambda, API Gateway, IAM, Terraform) with structured logging for traceability and faster debugging.",
      "Supported Aurora PostgreSQL to Redshift migrations using AWS DMS with S3 staging; added reconciliation checks and task health monitoring.",
      "Migrated reporting from Sisense to Amazon QuickSight using AWS Glue and RDS datasets; rebuilt KPIs with scheduled refreshes, validation, and alerting.",
      "Automated ops checks with AWS SDK tooling (permissions, refresh status, task health) to reduce manual console work; governed QuickSight assets across 15+ AWS accounts and helped reduce cloud spend by 20%.",
    ]
  },
  {
    company: "Korn Ferry",
    title: "Web/UI Developer Co-Op",
    period: "Jun 2022 - Oct 2022",
    summary:
      "Built interactive talent acquisition report visualizations using D3.js, Java, and HTML to help clients analyze company operations and workforce demographics more effectively. Developed a user friendly web portal with Bootstrap and React, including real time data updates, a comprehensive dashboard, and a dynamic news section to improve engagement. Implemented a RESTful API endpoint to fetch and sort the latest news, and integrated click tracking to measure usage and increase the efficiency of content delivery",

  },
  {
    company: "University of Illinois at Chicago",
    title: "Computer Science Teaching Assistant-CS362 ",
    period: "Dec 2021 - Dec 2022S",
    summary:
      "Assisted the professor in supervising students using hardware tools including Arduino, Raspberry Pi, MinnowBoard MAX, and Nanode. Guided 250+ students through hands on lab sessions, ran office hours for individual support, and provided detailed feedback on assignments and labs to help students strengthen understanding and stay on track.",
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
    <section id="work" className="relative pt-20 sm:pt-24 lg:pt-32 pb-14 sm:pb-16 lg:pb-24">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
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
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
                {Array.isArray(role.summary) ? (
                  <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed" style={{ color: "rgba(240,240,240,0.58)" }}>
                    {role.summary.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,240,0.58)" }}>{role.summary}</p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
