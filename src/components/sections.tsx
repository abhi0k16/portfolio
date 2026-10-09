"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import {
  about,
  achievements,
  certifications,
  engineering,
  experience,
  profile,
  projects,
  repositories,
  skillGroups,
} from "@/lib/content";
import { Reveal } from "@/components/reveal";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
      {index} / {children}
    </p>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <SectionLabel index="01">About</SectionLabel>
        <div>
          <Reveal>
            <h2 className="max-w-2xl text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
              Specialist at {profile.company}, working across models, services, and the cloud they run on.
            </h2>
          </Reveal>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {about.facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-line bg-surface px-4 py-4">
                <dt className="font-mono text-[11px] tracking-wider text-muted uppercase">{fact.label}</dt>
                <dd className="mt-2 text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm leading-6 text-muted">
            {about.education.degree}, {about.education.school}. {about.education.dates}. {about.education.detail}.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <SectionLabel index="02">Experience</SectionLabel>
        <div>
          <Reveal>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Where the work happened.</h2>
          </Reveal>
          <ol className="mt-10 space-y-12">
            {experience.map((job) => (
              <Reveal key={job.company}>
                <li className="grid gap-4 border-t border-line pt-8 md:grid-cols-[200px_minmax(0,1fr)]">
                  <div>
                    <p className="text-sm text-foreground">{job.dates}</p>
                    <p className="mt-1 text-sm text-muted">{job.location}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {job.role}
                      <span className="text-muted"> · {job.company}</span>
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <SectionLabel index="03">Skills</SectionLabel>
        <div>
          <Reveal>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">The toolkit I actually use.</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {skillGroups.map((group) => (
              <Reveal key={group.name}>
                <div className="grid gap-3 py-5 md:grid-cols-[160px_minmax(0,1fr)] md:items-start">
                  <h3 className="text-sm text-foreground">{group.name}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-foreground/90"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <SectionLabel index="04">Projects</SectionLabel>
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
              Three systems, from a broker to a recommendation service.
            </h2>
          </Reveal>
        </div>
        <motion.ol
          className="mt-12 space-y-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={list}
        >
          {projects.map((project) => (
            <motion.li
              key={project.name}
              variants={item}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-line bg-surface p-5 transition-colors hover:border-accent/40 sm:p-7"
            >
              <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                <div className="flex h-36 items-end rounded-2xl border border-line bg-surface-2 p-4 lg:h-full">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">{project.mark}</p>
                    <p className="mt-3 font-mono text-xs leading-5 whitespace-pre-line text-foreground/80">{project.tech.slice(0, 4).join("\n")}</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight">{project.name}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{project.description}</p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-4 text-sm text-foreground opacity-100 transition-colors group-hover:border-accent/50 group-hover:text-accent sm:opacity-80 sm:group-hover:opacity-100"
                    >
                      GitHub <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-foreground/90">{project.problem}</p>
                  <ul className="mt-4 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-muted">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="font-mono text-[11px] tracking-wide text-muted uppercase">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

export function Engineering() {
  return (
    <section id="engineering" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <SectionLabel index="05">Engineering</SectionLabel>
        <div>
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">What the work actually is.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {engineering.map((block) => (
              <Reveal key={block.name}>
                <article className="h-full rounded-2xl border border-line bg-surface p-5">
                  <h3 className="text-lg font-medium tracking-tight">{block.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{block.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <SectionLabel index="06">Credentials</SectionLabel>
        <div>
          <Reveal>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Certifications and results.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4">
            {certifications.map((cert) => (
              <Reveal key={cert.name}>
                <article className="flex flex-col justify-between gap-4 rounded-2xl border border-line bg-surface p-5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">{cert.name}</h3>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                    <p className="mt-2 text-sm text-muted">{cert.detail}</p>
                    {cert.code ? (
                      <p className="mt-2 font-mono text-[11px] tracking-wide text-foreground/70">
                        Validation {cert.code}
                      </p>
                    ) : null}
                  </div>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-line px-4 text-sm text-foreground hover:border-accent/50"
                  >
                    {cert.cta} <ArrowUpRight className="size-3.5" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {achievements.map((entry) => (
              <li key={entry.text} className="text-sm leading-6 text-muted">
                {entry.text}{" "}
                {entry.links?.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="ml-2 text-foreground underline-offset-4 hover:underline">
                    {link.label}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function GithubSection() {
  return (
    <section id="github" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <SectionLabel index="07">GitHub</SectionLabel>
        <div>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Selected repositories.</h2>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
                github.com/abhi0k16 <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </Reveal>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {repositories.map((repo) => (
              <li key={repo.name}>
                <a href={repo.href} target="_blank" rel="noreferrer" className="group grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <span>
                    <span className="text-base text-foreground group-hover:text-accent">{repo.name}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted">{repo.description}</span>
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-muted uppercase">{repo.language}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">08 / Contact</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
            Let&apos;s build something great.
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          <ContactLink href={`mailto:${profile.email}`} label="Email" value={profile.email} icon={<Mail className="size-4" />} />
          <ContactLink href={profile.linkedin} label="LinkedIn" value="abhi160k" icon={<LinkedinIcon className="size-4" />} external />
          <ContactLink href={profile.github} label="GitHub" value="abhi0k16" icon={<GithubIcon className="size-4" />} external />
        </ul>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  value,
  icon,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="flex h-full items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-4 transition-colors hover:border-accent/40"
      >
        <span className="text-accent">{icon}</span>
        <span>
          <span className="block font-mono text-[11px] tracking-wider text-muted uppercase">{label}</span>
          <span className="mt-1 block text-sm text-foreground">{value}</span>
        </span>
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          {profile.name} · 2026
        </p>
        <div className="flex gap-4 text-sm">
          <a className="text-muted hover:text-foreground" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-muted hover:text-foreground" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
