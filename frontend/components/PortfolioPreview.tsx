import Link from 'next/link';

const projects = [
  {
    title: 'Project Coming Soon',
    tag: 'AI / ML',
    description: 'Enterprise-grade intelligence system in the pipeline.',
  },
  {
    title: 'Project Coming Soon',
    tag: 'Data Platform',
    description: 'Scalable data infrastructure with real-time insights.',
  },
  {
    title: 'Project Coming Soon',
    tag: 'Agentic AI',
    description: 'Autonomous workflows powered by LangGraph and LLMs.',
  },
];

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="relative border-t border-border/40 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted">
            Featured Work
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Future Portfolio
            </h2>
            <p className="max-w-2xl text-lg text-muted">
              A glimpse of upcoming builds — sleek, secure, and engineered for scale.
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Coming Soon
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group relative overflow-hidden border border-border bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-soft"
          >
            <div className="absolute inset-0 bg-grid-cyber bg-grid-cyber opacity-20 transition-opacity duration-500 group-hover:opacity-40" />
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />
            <div className="relative flex h-full flex-col gap-6 p-8">
              <div className="flex items-center justify-between">
                <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                  {project.tag}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-accent/60 transition-all duration-300 group-hover:bg-accent group-hover:shadow-glow" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted transition-colors group-hover:text-foreground">
                <span>In Development</span>
          <span className="transition-transform group-hover:translate-x-1">?</span>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="mailto:contact@example.com"
          className="group relative inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-muted transition-all duration-300 hover:border-accent hover:text-foreground hover:shadow-glow-soft"
        >
          <span>Discuss a Collaboration</span>
          <span className="transition-transform group-hover:translate-x-1">?</span>
        </Link>
      </div>
    </section>
  );
}
