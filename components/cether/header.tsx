"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  ["Home", "home"],
  ["Coffee + Bistro", "coffee-bistro"],
  ["Highlights", "highlights"],
  ["The Space", "space"],
  ["Events", "events"],
  ["Visit", "visit"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a
          href="#home"
          className="wordmark"
          aria-label="Cether Specialty Coffee + Bistro, home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/cether/updated-logo.png"
            alt="Cether Specialty Coffee + Bistro"
            width={2048}
            height={2048}
            sizes="(max-width: 599px) 132px, (max-width: 1100px) 145px, 165px"
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#visit" className="header-cta">
          Find us <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <Button
          ref={toggle}
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map(([label, id], index) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            <span className="eyebrow">0{index + 1}</span>
            {label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
