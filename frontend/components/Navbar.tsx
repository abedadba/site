'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#portfolio', label: 'Portfolio' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="#home" className="group flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent shadow-glow" />
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-foreground">Abeda</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-muted transition-colors hover:text-foreground md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative font-mono text-xs uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 font-mono text-xs uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
