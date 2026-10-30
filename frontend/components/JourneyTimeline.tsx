'use client';

import { profileData } from '@/profileData';

export default function JourneyTimeline() {
  const milestones = profileData.careerMilestones;

  return (
    <section id="journey" className="relative border-t border-border/40 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted">
            Career Journey
          </p>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Milestones across infrastructure & AI
        </h2>
        <p className="max-w-2xl text-lg text-muted">
          A timeline of leadership, enterprise delivery, and applied AI across global environments.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-6 lg:left-1/2 lg:-translate-x-px" />

        <ol className="space-y-12">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (            
              <li key={`${milestone.role}-${index}`} className="relative grid gap-6 lg:grid-cols-2 lg:gap-10">
                <div className="absolute left-4 top-2 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-6 lg:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-accent shadow-glow" />
                  <div className="absolute h-6 w-6 rounded-full bg-accent/10" />
                </div>

                <div className={`${isEven ? 'lg:text-right' : 'lg:order-2 lg:text-left'} ml-10 sm:ml-14 lg:ml-0`}>
                  <div className="inline-flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                      {milestone.period}
                    </span>
                    {milestone.type === 'current' && (
                      <span className="border border-accent/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                        Current
                      </span>
                    )}
                    {milestone.type === 'productionSupport' && (
                      <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                        Production Support
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                    {milestone.role}
                  </h3>
                </div>

                <div className={`${isEven ? 'lg:order-2' : ''} ml-10 sm:ml-14 lg:ml-0`}>
                  <article className="group relative border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-soft">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                    {milestone.highlights && milestone.highlights.length > 0 ? (
                      <ul className="space-y-3 text-sm leading-relaxed text-muted">
                        {milestone.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="relative pl-4">
                            <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent/70" />
                            <span className="text-foreground/90">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted">
                        Enterprise database administration, production support, and infrastructure delivery across global banking and technology environments.
                      </p>
                    )}
                  </article>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
