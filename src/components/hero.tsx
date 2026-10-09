"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/content";

const rows = [
  { k: "genai", v: "rag · openai · langchain · crewai" },
  { k: "backend", v: "rest · fastapi · decision engines" },
  { k: "cloud", v: "kubernetes · terraform · aws" },
  { k: "interface", v: "react · angular · typescript" },
];

export function Hero() {
  return (
    <section id="top" className="desk relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">Software Engineer</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className="mt-4 max-w-xl text-xl leading-snug text-muted sm:text-2xl">{profile.headline}</p>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-px"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm text-foreground transition-colors hover:border-accent/50"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
          <div className="mt-6 flex gap-5 text-sm">
            <a className="inline-flex items-center gap-1 text-muted hover:text-foreground" href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight className="size-3.5" />
            </a>
            <a className="inline-flex items-center gap-1 text-muted hover:text-foreground" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <figure className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="relative aspect-[5/4]">
              <Image
                src="/abhinav.jpg"
                alt="Portrait of Abhinav Kumar"
                fill
                priority
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="text-sm text-foreground">{profile.name}</span>
              <span className="font-mono text-[11px] tracking-wider text-muted uppercase">PwC · Specialist</span>
            </figcaption>
          </figure>
          <div className="rounded-2xl border border-line bg-surface/80 p-4" aria-label="Current engineering focus">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">Current focus</p>
              <span className="caret inline-block h-3 w-1.5 bg-accent" />
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-3">
              {rows.map((row) => (
                <li key={row.k}>
                  <p className="font-mono text-[11px] tracking-wider text-accent uppercase">{row.k}</p>
                  <p className="mt-1 text-xs leading-5 text-foreground/90">{row.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
