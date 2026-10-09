"use client";

import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { useEffect, useId, useState, useSyncExternalStore, type ReactNode } from "react";
import { nav, profile } from "@/lib/content";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function scrolled() {
  return window.scrollY > 8;
}

export function Navbar() {
  const compact = useSyncExternalStore(subscribe, scrolled, () => false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
        compact || open
          ? "border-line bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm tracking-tight text-foreground">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <IconLink href={profile.github} label="GitHub">
            <GithubIcon />
          </IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn">
            <LinkedinIcon />
          </IconLink>
          <a
            href={profile.resume}
            download
            className="ml-2 inline-flex h-9 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-px"
          >
            Resume
          </a>
        </div>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-line text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {open ? (
        <div id={menuId} className="border-t border-line bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <IconLink href={profile.github} label="GitHub">
                <GithubIcon />
              </IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn">
                <LinkedinIcon />
              </IconLink>
              <a
                href={profile.resume}
                download
                className="inline-flex h-10 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-ink"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-accent/50 hover:text-accent [&_svg]:size-4"
    >
      {children}
    </a>
  );
}
