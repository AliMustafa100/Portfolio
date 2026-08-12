'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Wrench,
  FileDown,
  ArrowUpRight,
  User,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const skills: Record<string, string[]> = {
  "Languages & Frameworks": [
    "Python",
    "JavaScript",
    "React",
    "Express",
    "Java",
    "Spring Boot",
  ],
  "Data & Tools": [
    "MySQL",
    "Firebase",
    "Tableau",
    "Power BI",
    "Pandas",
    "AWS",
    "Docker",
    ".NET",
    "Git",
  ],
};

type Job = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

const experience: Job[] = [
  {
    company: "Independent",
    role: "Web Developer",
    location: "New York, NY",
    dates: "Sept 2025 – Present",
    bullets: [
      "Designed, developed, and deployed 10+ custom web applications for small businesses and individual clients, managing the full software development lifecycle from requirements gathering through deployment and ongoing maintenance.",
      "Configured secure Stripe payment workflows supporting one-time and recurring transactions, processing $6,500+ in payments with automated confirmations, invoicing, and transaction tracking.",
      "Collaborated directly with clients to build onboarding, content delivery, and payment systems across 10+ projects totaling $12,000+ in client work.",
    ],
  },
  {
    company: "Blackstone Launch Pad",
    role: "Software Engineer Intern",
    location: "New York, NY",
    dates: "June 2025 – Aug 2025",
    bullets: [
      "Redesigned signup and contact workflows across Instagram, Facebook, and WhatsApp using React, HTML/CSS, Vite, and webhook integrations, increasing subscription sign-ups by 70% across 200+ prospective customers over three months.",
      "Built automated CRM and lead qualification workflows managing 1,000+ customer leads, improving response time by 40%, follow-up rates by 10%, and increasing SMB subscribers by 200%.",
      "Created a custom analytics dashboard tracking 1,000+ webhook interactions, user engagement, and conversion behavior, providing insights used to guide product and retention improvements.",
    ],
  },
  {
    company: "Everest Associates",
    role: "Software Engineer Intern",
    location: "Jersey City, NJ",
    dates: "July 2024 – Sept 2024",
    bullets: [
      "Developed Python-based data pipelines using Pandas, SQL, and CSV ingestion to ingest, clean, and validate 1,000 monthly financial and tax records, enforcing consistency and null checks to support high-accuracy tax filing and leadership reporting.",
      "Automated manual data entry by 30% by integrating Google Vision OCR and Excel-based workflows, reducing reconciliation effort and surfacing data quality issues earlier in the monthly close process.",
      "Built 15+ interactive Tableau dashboards tracking revenue, expenses, and spending trends with dynamic filters, enabling leadership to monitor weekly financial performance and identify reporting anomalies.",
    ],
  },
  {
    company: "StudentsWhoCode",
    role: "Software Engineer Intern",
    location: "New York, NY",
    dates: "June 2023 – September 2023",
    bullets: [
      "Spearheaded the development of a Python course for the internship program, contributing to a more extensive learning engagement among elementary students and boosting their coding proficiency by 40%.",
      "Facilitated collaboration with the back-end team, streamlining workflows and accelerating delivery by 2–3 weeks.",
      "Developed and deployed a Python course with interactive modules on the company website, boosting student engagement and driving a 20% increase in traffic.",
    ],
  },
];

type Project = { name: string; stack: string; link: string; desc: string };

const projects: Project[] = [
  {
    name: "Health Plan Comparison",
    stack: "Java, Spring Boot, Spring Data JPA, H2, Maven, JUnit, Mockito",
    link: "https://github.com/AliMustafa100/healthapi",
    desc: "RESTful Health Plan Comparison API inspired by the NY State of Health exchange — list, filter, and compare marketplace-style plans with SQL-backed analytics by metal tier, seeded mock 2024 NY plan data, a lightweight frontend dashboard, and JUnit 5 + Mockito service tests.",
  },
  {
    name: "The Eternal Now Project",
    stack: "Next.js, React, TypeScript, Vercel",
    link: "https://eternalhealth.vercel.app/",
    desc: "Client web app for a mental wellness membership platform — grounded lessons on mental clarity, emotional health, and embodied presence with membership signup, auth, and content areas of focus.",
  },
  {
    name: "Bulletin",
    stack: "Next.js, React, TypeScript, Supabase, Vercel",
    link: "https://bulletin-beige.vercel.app",
    desc: "Full-stack Next.js app with Supabase-backed database features for dynamic content. Frontend deployed on Vercel; designed for real-time community/project updates with App Router architecture.",
  },
  {
    name: "MunchMates",
    stack: "SwiftUI, Firebase",
    link: "https://www.munchmates.fyi/",
    desc: "Tinder-style restaurant discovery with real-time auth/data. Managed 120+ pre-launch waitlist; shipped MVP for feedback.",
  },
];

const links = {
  email: "mohammadali7477@gmail.com",
  github: "https://github.com/AliMustafa100",
  linkedin: "https://www.linkedin.com/in/ali-mustafa2003",
  resume: "/AMResume.pdf",
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

const Section = ({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <motion.section id={id} className="scroll-mt-28" {...fadeUp}>
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--base-soft] text-[--accent-emerald]">
        {icon}
      </span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-[--ink]">
          {title}
        </h2>
        <div className="mt-1 h-0.5 w-10 rounded-full bg-[--accent-emerald]" />
      </div>
    </div>
    {children}
  </motion.section>
);

export default function AliPortfolio() {
  return (
    <div className="min-h-screen text-[--ink]">
      <header className="sticky top-0 z-50 border-b border-[--border] bg-[color:var(--base)]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <a
            href="#home"
            className="text-base font-semibold tracking-tight text-[--ink] transition-colors hover:text-[--accent-emerald]"
          >
            Ali Mustafa
          </a>

          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-5 text-sm text-[--ink-muted] md:flex">
              {[
                ["About", "#about"],
                ["Education", "#education"],
                ["Skills", "#skills"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="transition-colors hover:text-[--accent-emerald]"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-md p-1.5 text-[--ink-muted] transition-colors hover:bg-[--base-soft] hover:text-[--accent-emerald]"
              >
                <Linkedin className="h-4.5 w-4.5 h-[18px] w-[18px]" />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-md p-1.5 text-[--ink-muted] transition-colors hover:bg-[--base-soft] hover:text-[--accent-emerald]"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <Button asChild size="sm" className="ml-1 hidden sm:inline-flex">
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="!bg-[var(--accent-emerald)] !text-white hover:!bg-[var(--accent-emerald-soft)]"
                >
                  <FileDown className="mr-1.5 h-3.5 w-3.5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto max-w-5xl px-5 pb-10 pt-14 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid items-center gap-8 md:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="mb-3 text-sm font-medium tracking-wide text-[var(--accent-emerald)]">
              New York, NY
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">
              Ali Mustafa
            </h1>
            <p className="mt-2 text-xl font-medium text-[var(--accent-emerald)] md:text-2xl">
              Software Engineer
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-muted)]">
              CS graduate from Queens College building full-stack web apps,
              APIs, and client products — from Spring Boot services to Next.js
              apps and Stripe-powered business sites.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={`mailto:${links.email}`}
                  className="!bg-[var(--accent-emerald)] !text-white hover:!bg-[var(--accent-emerald-soft)]"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[var(--border)] bg-white text-[var(--ink)] hover:bg-[var(--base-soft)]"
              >
                <a href={links.resume} target="_blank" rel="noreferrer">
                  <FileDown className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[var(--border)] bg-white text-[var(--ink)] hover:bg-[var(--base-soft)]"
              >
                <a href={links.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-[140px] shrink-0 md:mx-0 md:w-[160px]"
          >
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[var(--accent-emerald)]/20 via-transparent to-sky-300/25 blur-sm" />
            <div className="relative overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_12px_32px_-16px_rgba(29,78,216,0.45)] ring-1 ring-[var(--border)]">
              <img
                src="/me.png"
                alt="Ali Mustafa"
                className="aspect-square w-full object-cover object-[50%_18%]"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <main className="mx-auto max-w-5xl space-y-16 px-5 pb-24">
        {/* ABOUT */}
        <Section id="about" title="About" icon={<User className="h-4 w-4" />}>
          <Card className="border-[--border] bg-white/80 shadow-sm backdrop-blur-sm">
            <CardContent className="pt-6 text-[15px] leading-relaxed text-[--ink-muted]">
              <p>
                Outside of work I lift, watch anime, and chase good food across
                the city. I approach coding the same way — every language and
                framework is another dish to try. Some become staples, some are
                an acquired taste, but the goal is the same: enjoy the process
                and ship work that feels useful and human.
              </p>
            </CardContent>
          </Card>
        </Section>

        {/* EDUCATION */}
        <Section
          id="education"
          title="Education"
          icon={<GraduationCap className="h-4 w-4" />}
        >
          <Card className="border-[--border] bg-white/80 shadow-sm backdrop-blur-sm">
            <CardContent className="space-y-5 pt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[--ink]">
                    Queens College, City University of New York
                  </h3>
                  <p className="mt-0.5 text-[--ink-muted]">
                    B.A. in Computer Science
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm text-[--ink-muted]">
                  <Calendar className="h-3.5 w-3.5" />
                  Graduated Spring 2026
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "APIA / Coca-Cola First Generation AANAPISI Scholar",
                  "Freda Stern Johnson Scholar",
                ].map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="border-[var(--accent-emerald)]/25 bg-[var(--base-soft)] px-3 py-1 text-[var(--accent-emerald)]"
                  >
                    {s}
                  </Badge>
                ))}
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-[var(--ink)]">
                  Leadership & Activities
                </h4>
                <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-emerald)]" />
                    Fellow, Basta — Jan 2026 – Present
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-emerald)]" />
                    Event Manager, Student Union — Sept 2024 – May 2026
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-emerald)]" />
                    Event Manager, Code for All QC — Sept 2024 – May 2026
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-emerald)]" />
                    APIA / Coca-Cola Foundation First Generation AANAPISI
                    Scholar — Aug 2024 – Sept 2025
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-emerald)]" />
                    Member, ISACA Cyber Security Club — Sept 2024 – May 2026
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills" icon={<Wrench className="h-4 w-4" />}>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <Card
                key={group}
                className="border-[--border] bg-white/80 shadow-sm backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold text-[--ink]">
                    {group}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Badge
                      key={s}
                      variant="outline"
                      className="border-[--border] bg-[--base] px-2.5 py-1 text-sm font-normal text-[--ink]"
                    >
                      {s}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          title="Experience"
          icon={<Briefcase className="h-4 w-4" />}
        >
          <div className="relative space-y-4 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-px before:bg-[--border] md:before:left-[11px]">
            {experience.map((job) => (
              <Card
                key={job.company}
                className="relative border-[--border] bg-white/80 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-[--ink]">
                        {job.company}
                      </CardTitle>
                      <p className="mt-0.5 text-sm font-medium text-[--accent-emerald]">
                        {job.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[--ink-muted]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {job.dates}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2.5 text-sm leading-relaxed text-[--ink-muted]">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[--accent-emerald]/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Projects"
          icon={<ExternalLink className="h-4 w-4" />}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <Card className="h-full border-[--border] bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-[--accent-emerald]/35 group-hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-start justify-between gap-3 text-lg font-semibold text-[--ink]">
                      <span>{p.name}</span>
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[--ink-muted] transition-colors group-hover:text-[--accent-emerald]" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.split(", ").map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-[--border] bg-[--base] px-2 py-0.5 text-[11px] font-normal text-[--ink-muted]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="leading-relaxed text-[--ink-muted]">{p.desc}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer
        id="contact"
        className="border-t border-[--border] bg-white/60 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-6 px-5 py-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-[--ink]">
              Let&apos;s work together.
            </h2>
            <p className="mt-1 text-sm text-[--ink-muted]">
              Open to software engineering roles and freelance web projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 md:justify-end">
            <Button asChild>
              <a
                href={`mailto:${links.email}`}
                className="!bg-[var(--accent-emerald)] !text-white hover:!bg-[var(--accent-emerald-soft)]"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[--border] bg-white text-[--ink] hover:bg-[--base-soft]"
            >
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[--border] bg-white text-[--ink] hover:bg-[--base-soft]"
            >
              <a href={links.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[--border] bg-white text-[--ink] hover:bg-[--base-soft]"
            >
              <a href={links.resume} target="_blank" rel="noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="pb-8 text-center text-xs text-[--ink-muted]">
          © {new Date().getFullYear()} Ali Mustafa
        </div>
      </footer>
    </div>
  );
}
