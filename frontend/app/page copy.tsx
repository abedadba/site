import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JourneyTimeline from '@/components/JourneyTimeline';
import PortfolioPreview from '@/components/PortfolioPreview';
import { profileData } from '@/profileData';
import Link from 'next/link';

export default function Home() {
  return (
    <div className=\"min-h-screen bg-background text-foreground\">
      <Navbar />

      <main>
        <section id=\"home\" className=\"relative overflow-hidden\">
          <div className=\"absolute inset-0 bg-radial-fade\" />
          <div className=\"absolute inset-0 bg-grid-cyber bg-grid-cyber opacity-40\" />
          <div className=\"relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-32\">
            <div className=\"flex max-w-2xl flex-col gap-8\">
              <div className=\"flex items-center gap-2\">
                <div className=\"h-1.5 w-1.5 rounded-full bg-accent shadow-glow\" />
                <p className=\"font-mono text-xs uppercase tracking-[0.4em] text-muted\">
                  {profileData.title}
                </p>
              </div>
              <div className=\"space-y-4\">
                <h1 className=\"text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl\">
                  {profileData.name}
                </h1>
                <p className=\"max-w-xl text-lg leading-relaxed text-muted\">
                  {profileData.aboutMe.essence}
                </p>
              </div>
              <div className=\"flex flex-wrap items-center gap-4\">
                <Link
                  href=\"#journey\"
                  className=\"group relative inline-flex items-center gap-2 border border-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-all duration-300 hover:shadow-glow-accent\"
                >
                  <span>View Journey</span>
                  <span className=\"transition-transform group-hover:translate-x-1\">→</span>
                </Link>
                <Link
                  href={mailto:}
                  className=\"inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-muted transition-colors hover:text-foreground\"
                >
                  Get In Touch
                </Link>
              </div>
              <div className=\"flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted\">
                <span>{profileData.availability.location}</span>
                <span className=\"hidden h-3 w-px bg-border sm:inline\" />
                <span>{profileData.availability.status}</span>
              </div>
            </div>

            <div className=\"relative\">
              <div className=\"absolute -inset-6 bg-gradient-to-br from-accent/20 via-transparent to-accent-2/10 blur-3xl\" />
              <div className=\"relative flex h-72 w-72 items-center justify-center border border-border bg-surface sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]\">
                <div className=\"absolute inset-0 bg-grid-cyber bg-grid-cyber opacity-30\" />
                <div className=\"relative flex flex-col items-center gap-3 text-center\">
                  <div className=\"h-16 w-16 rounded-full border border-accent/60 bg-accent/10 shadow-glow\" />
                  <p className=\"font-mono text-xs uppercase tracking-[0.4em] text-muted\">
                    Profile Image
                  </p>
                  <p className=\"max-w-[12rem] text-sm text-muted\">
                    Placeholder for a professional headshot
                  </p>
                </div>
                <div className=\"absolute -right-4 -top-4 h-8 w-8 border border-accent/70\" />
                <div className=\"absolute -bottom-4 -left-4 h-10 w-10 border border-border\" />
              </div>
            </div>
          </div>
        </section>

        <section id=\"about\" className=\"relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8\">
          <div className=\"flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between\">
            <div className=\"max-w-2xl space-y-6\">
              <div className=\"flex items-center gap-2\">
                <div className=\"h-1.5 w-1.5 rounded-full bg-accent\" />
                <p className=\"font-mono text-xs uppercase tracking-[0.4em] text-muted\">
                  About Me
                </p>
              </div              >
              <h2 className=\"text-3xl font-semibold tracking-tight sm:text-4xl\">
                Enterprise precision with an edge.
              </h2>
              <p className=\"text-lg leading-relaxed text-muted\">
                {profileData.aboutMe.essence}
              </p>
            </div>
            <div className=\"grid w-full max-w-xl gap-4 sm:grid-cols-2\">
              {profileData.aboutMe.overview.map((item, index) => (
                <article
                  key={index}
                  className=\"group relative border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-soft\"
                >
                  <div className=\"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent\" />
                  <p className=\"text-sm leading-relaxed text-foreground/90\">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <JourneyTimeline />
        <PortfolioPreview />
      </main>

      <Footer />
    </div>
  );
}
