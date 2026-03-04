"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  accentColor: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "QuantOps-FactorForge",
    description: "Equity Factor Backtesting Engine built with Python, DuckDB/PostgreSQL, and Airflow.",
    tags: ["Python", "DuckDB", "Airflow", "Finance"],
    href: "https://github.com/Huma22/QuantOps-FactorForge-Backtesting-Engine",
    image: "/projects/Gemini_Generated_Image_9ged269ged269ged.png",
    accentColor: "#C8F53F",
  },
  {
    id: 2,
    title: "GuardianCare",
    description: "Healthcare monitoring and management platform.",
    tags: ["Healthcare", "Web", "App"],
    href: "https://github.com/Huma22/GuardianCare",
    image: "/projects/Gemini_Generated_Image_6wg93h6wg93h6wg9.png",
    accentColor: "#72C9FF",
  },
  {
    id: 3,
    title: "Student Participation DB",
    description: "Database system for tracking and analyzing student participation metrics.",
    tags: ["Database", "SQL", "Education"],
    href: "https://github.com/Huma22/student_participationDB/",
    image: "/projects/Gemini_Generated_Image_auhyniauhyniauhy.png",
    accentColor: "#9AE56A",
  },
  {
    id: 4,
    title: "ChatAgent",
    description: "AI-powered conversational agent capable of handling diverse inquiries.",
    tags: ["AI", "MCP", "Python", "Chat"],
    href: "https://github.com/Huma22/ChatAgent",
    image: "/projects/Gemini_Generated_Image_ihxdsxihxdsxihxd.png",
    accentColor: "#58B2FF",
  },
  {
    id: 5,
    title: "Continuous Wordle",
    description: "A continuous play clone of the popular word-guessing game Wordle, built dynamically.",
    tags: ["Next.js", "React", "TypeScript", "Game"],
    href: "https://github.com/Huma22/continuous_wordle",
    image: "/projects/Gemini_Generated_Image_cuvgw2cuvgw2cuvg.png",
    accentColor: "#D1F75A",
  },
  {
    id: 6,
    title: "Web Visualization Interface",
    description: "Browser-based data visualization suite for analyzing and presenting tabular data efficiently.",
    tags: ["Visualization", "D3.js", "Frontend"],
    href: "https://github.com/Huma22/Web_visualization_interface",
    image: "/projects/Gemini_Generated_Image_4vxvn14vxvn14vxv.png",
    accentColor: "#90D7FF",
  },
  {
    id: 7,
    title: "OpenStreet Maps",
    description: "Geospatial mapping tools and integration with OpenStreetMap data.",
    tags: ["GIS", "Mapping", "Data"],
    href: "https://github.com/Huma22/openstreet-maps",
    image: "/projects/Gemini_Generated_Image_n0co71n0co71n0co.png",
    accentColor: "#C8F53F",
  },
];

const certifications = [
  {
    title: "AWS Solutions Architect Professional",
    image: "/badges/Screenshot_2025-09-09_at_9.07.49_PM.png",
  },
  {
    title: "AWS Cloud Practitioner",
    image: "/badges/Screenshot_2025-09-09_at_9.08.05_PM.png",
  },
  {
    title: "Azure Hackathon Participant",
    image: "/badges/Screenshot_2025-09-09_at_9.08.35_PM.png",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
        <Image src={project.image} alt={project.title} width={900} height={520} className="w-full h-auto" />
      </a>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: "#f0f0f0" }}>{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(240,240,240,0.6)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${project.accentColor}18`,
                border: `1px solid ${project.accentColor}40`,
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: project.accentColor }}>
          Open on GitHub →
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative pt-20 sm:pt-24 lg:pt-32 pb-14 sm:pb-16 lg:pb-24">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="block text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "#C8F53F" }}>
            ✦ Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: "#f0f0f0" }}>
            GitHub Projects
            <br />
            <span style={{ color: "#C8F53F" }}>and certifications.</span>
          </h2>
        </motion.div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-16 w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <h3 className="text-2xl font-black mb-6 text-center" style={{ color: "#f0f0f0" }}>Certification Badges</h3>
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6">
              {certifications.map((cert, i) => (
                <motion.article
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl p-4 flex-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    maxWidth: "300px",
                  }}
                >
                  <Image src={cert.image} alt={cert.title} width={420} height={420} className="w-full h-auto rounded-xl object-contain" />
                  <p className="mt-3 text-sm font-semibold text-center" style={{ color: "#f0f0f0" }}>{cert.title}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
