"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 py-5 md:px-8 md:py-6 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="font-headline text-xl md:text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 relative z-50"
          onClick={() => setIsOpen(false)}
        >
          The Digital Curator
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-headline text-lg tracking-tight text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-4">
            <Link href="/login">
              <span className="material-symbols-outlined text-on-surface cursor-pointer">person</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button & Person Icon */}
        <div className="md:hidden flex items-center gap-5 relative z-50">
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined text-on-surface cursor-pointer !text-[24px]">person</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none flex items-center"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-zinc-900 dark:text-zinc-100 !text-[28px]">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-zinc-950 z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[-10px]"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            style={{ transitionDelay: `${i * 100}ms` }}
            className={`font-headline text-4xl tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-primary transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <div className="pt-10">
           <p className="font-label text-[10px] uppercase tracking-[0.3em] text-zinc-400">Curating Rwandan Legacies</p>
        </div>
      </div>
    </nav>
  );
}
