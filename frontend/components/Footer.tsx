'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { profileData } from '@/profileData';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-24 border-t border-border bg-surface-2">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            {profileData.name}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
          <Link href={profileData.digitalProfiles.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </Link>
          <span className="hidden h-3 w-px bg-border md:inline" />
          <Link href={profileData.digitalProfiles.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </Link>
          <span className="hidden h-3 w-px bg-border md:inline" />
          <a href="mailto:abmilyaz@gmail.com" className="transition-colors hover:text-foreground">
            Email
          </a>
        </div>

        {year !== null && (
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            © {year} • Enterprise meets Edgy
          </p>
        )}
      </div>
    </footer>
  );
}
