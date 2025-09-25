'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Mail, Github, Linkedin, ExternalLink,
  MapPin, Calendar, Briefcase, GraduationCap, Wrench, FileDown
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const skills: Record<string, string[]> = {
  "Languages & Frameworks": ["Python", "TypeScript", "React", "Express"],
  "Data & Tools": ["MySQL", "Firebase", "Tableau", "Power BI", "Pandas", "PySpark"],
};

type Job = {
  company: string; role: string; location: string; dates: string; bullets: string[];
};
const experience: Job[] = [
  {
    company: "Blackstone",
    role: "Software Engineer Intern — Launch Pad",
    location: "New York, NY",
    dates: "Jun 2025 – Aug 2025",
    bullets: [
      "Optimized website flows; boosted acquisition & engagement by ~70%.",
      "Built CRM solutions for lead gen, tracking & follow-ups.",
      "Integrated analytics for behavior, retention & conversion insights.",
    ],
  },
  {
    company: "Everest Associates",
    role: "Financial Data Intern",
    location: "Jersey City, NJ",
    dates: "Jul 2024 – Sep 2024",
    bullets: [
      "Processed/validated 1,000+ financial records for monthly closes.",
      "Prepared audit packages; cut retrieval time by ~30%.",
      "Automated Excel workflows; reduced manual work by ~25%.",
    ],
  },
  {
    company: "StudentsWhoCode",
    role: "Software Engineer Intern",
    location: "New York, NY",
    dates: "Jun 2023 – Sep 2023",
    bullets: [
      "Built a Python course; improved student proficiency by ~40%.",
      "Streamlined backend collaboration; shipped 2–3 weeks faster.",
      "Deployed interactive modules; +20% website traffic.",
    ],
  },
];

type Project = { name: string; stack: string; link: string; desc: string };
const projects: Project[] = [
  {
    name: "MunchMates",
    stack: "SwiftUI, Firebase",
    link: "https://www.munchmates.fyi/",
    desc: "Tinder-style restaurant discovery with real-time auth/data. Managed 120+ pre-launch waitlist; shipped MVP for feedback.",
  },
  {
    name: "MedChain",
    stack: "Python, Flask, React, Next.js",
    link: "https://github.com/WomB0ComB0/hack-knight-25/tree/tyler/contributions",
    desc: "Hackathon full-stack app: patient records on individualized blockchains for immutable, real-time access & transparency.",
  },
];

const links = {
  email: "alimustafa.ny@gmail.com",
  github: "https://github.com/AliMustafa100",
  linkedin: "http://www.linkedin.com/in/ali-mustafa2003",
  resume: "/AMResume.pdf",
};

const Section = ({
  id, title, icon, children,
}: {
  id: string; title: string; icon?: React.ReactNode; children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

export default function AliPortfolio() {
  return (
    <div className="min-h-screen bg-[--base] text-[--ink]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--base)]/80 border-b border-[--accent-emerald]/30">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-[--accent-emerald] text-lg">
            Ali Mustafa
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-base">
              <a href="#about" className="hover:text-[--accent-emerald]">About</a>
              <a href="#education" className="hover:text-[--accent-emerald]">Education</a>
              <a href="#skills" className="hover:text-[--accent-emerald]">Skills</a>
              <a href="#experience" className="hover:text-[--accent-emerald]">Experience</a>
              <a href="#projects" className="hover:text-[--accent-emerald]">Projects</a>
              <a href={`mailto:${links.email}`} className="hover:text-[--accent-emerald]">Contact</a>
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-4 ml-4">
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[--ink]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[--ink]">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[--accent-emerald]">Software Engineer</h1>
            <p className="mt-3 max-w-4xl md:max-w-5xl">
              Studying CS at Queens College. I like building full-stack web apps and practical tools. I don’t know everything yet, 
 But I love to keep learning.
            </p>
          </div>

          {/* ABOUT ME */}
          <Card className="border-[--accent-emerald]/30 bg-white text-[--ink]">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-full shrink-0">
                  <img src="/me.jpg" alt="Ali Mustafa" className="w-full h-full object-cover" />
                </div>
                <div className="md:flex-1 max-w-none w-full">
                  <div className="text-lg font-semibold mb-1 text-[--accent-emerald]">About Me</div>
                  <p>
                   I lift, I watch anime, I talk, and I eat — a lot. Being a foodie, I’m always down to try a new cuisine, 
                   and I approach coding the same way, every language and 
                   framework is like a new dish on the menu. Some are comfort food, some are an acquired taste, but I want to try it all until I find my favorites.
                    For me, it’s all about enjoying the process and building skills that feel human and real.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-20 space-y-14">
   {/* EDUCATION */}
<Section id="education" title="Education" icon={<GraduationCap className="h-5 w-5" />}>
  <Card className="border-[--accent-emerald]/30 bg-white">
    <CardContent className="text-sm pt-1">
      {/* School */}
      <div className="text-lg font-semibold text-[--ink]">
        Queens College, City University of New York
      </div>

      {/* Degree + Graduation */}
      <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <span>B.S. in Computer Science</span>
        <span className="inline-flex items-center gap-1 text-[--ink]/80">
          <Calendar className="h-3.5 w-3.5" /> Expected May 2026
        </span>
      </div>

      {/* Scholarships */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-[--base-soft] text-[--accent-emerald] border border-[--accent-emerald]/30">
          APIA Scholar
        </span>
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-[--base-soft] text-[--accent-emerald] border border-[--accent-emerald]/30">
          Freda Stern Johnson Scholar
        </span>
      </div>

      {/* Clubs */}
      <div className="mt-4">
      </div>

      {/* Leadership & Activities */}
      <div className="mt-4">
        <div className="font-medium text-[--accent-emerald] mb-2">Leadership & Activities</div>
       <ul className="list-disc pl-5 space-y-1">
  <li>Event Manager, Student Union, New York, NY — Sep 2024 – Present</li>
  <li>Event Manager, Code for All QC, New York, NY — Sep 2023 – Sep 2025</li>
  <li>ISACA Cyber Security Club @ Queens College — Sep 2024 – Present</li>
  <li>South Asian Student Association (SASA) — Sep 2023 – Present</li>
  
</ul>

      </div>
    </CardContent>
  </Card>
</Section>



        {/* SKILLS */}
        <Section id="skills" title="Skills" icon={<Wrench className="h-5 w-5" />}>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([group, items]) => (
              <Card key={group} className="border-[--accent-emerald]/30 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[--accent-emerald]">{group}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Badge key={s} variant="outline" className="text-sm py-1 border-[--accent-emerald]/40 text-[--accent-emerald]">{s}</Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience" icon={<Briefcase className="h-5 w-5" />}>
          <div className="grid gap-6">
            {experience.map((job) => (
              <Card key={job.company} className="border-[--accent-emerald]/30 bg-white">
                <CardHeader className="pb-1">
                  <CardTitle className="flex flex-col text-lg font-semibold text-[--accent-emerald]">
                    <span>{job.company}</span>
                    <span className="text-sm font-normal text-[--ink]">{job.role}</span>
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-xs text-[--ink]/80 mt-0.5">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{job.dates}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-sm pt-0">
                  <ul className="list-disc pl-5 space-y-1">
                    {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects" icon={<ExternalLink className="h-5 w-5" />}>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Card key={p.name} className="flex flex-col border-[--accent-emerald]/30 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-2 text-lg font-semibold text-[--accent-emerald]">
                    <span>{p.name}</span>
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-sm font-normal inline-flex items-center gap-1 text-[--accent-emerald] hover:underline">
                      Visit <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="mb-2 text-xs uppercase tracking-wide">{p.stack}</div>
                  <p>{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[--accent-emerald]/30">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="font-semibold text-[--accent-emerald]">Let’s build something.</div>
            <div className="text-sm">Open to SWE internships & product-minded roles.</div>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild variant="outline" className="border-[--accent-emerald] text-[--ink] hover:bg-[--base-soft]">
              <a href={`mailto:${links.email}`}><Mail className="mr-2 h-4 w-4" /> Email</a>
            </Button>
            <Button asChild variant="secondary" className="border-[--accent-amber] text-[--accent-amber] hover:bg-[--base-soft]">
              <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
            </Button>
            <Button asChild variant="outline" className="border-[--accent-amber] text-[--accent-amber] hover:bg-[--base-soft]">
              <a href={links.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
            </Button>
            <Button asChild variant="outline" className="border-[--accent-amber] text-[--ink] hover:bg-[--base-soft]">
              <a href={links.resume} target="_blank" rel="noreferrer" download><FileDown className="mr-2 h-4 w-4" /> Resume</a>
            </Button>
          </div>
        </div>
        <div className="text-center text-xs pb-6">© {new Date().getFullYear()} Ali Mustafa</div>
      </footer>
    </div>
  );
}
