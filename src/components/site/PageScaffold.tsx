import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type ScaffoldSection = {
  title: string;
  body: string;
};

type PageScaffoldProps = {
  label: string;
  title: string;
  intro: string;
  sections: ScaffoldSection[];
  note?: string;
};

export function PageScaffold({ label, title, intro, sections, note }: PageScaffoldProps) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">{label}</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="divide-y divide-border border-y border-border">
              {sections.map((section) => (
                <article key={section.title} className="grid gap-4 py-8 md:grid-cols-[minmax(220px,0.75fr)_minmax(0,1.25fr)] md:gap-12">
                  <h2 className="text-2xl md:text-3xl">{section.title}</h2>
                  <p className="max-w-2xl leading-relaxed text-muted-foreground">{section.body}</p>
                </article>
              ))}
            </div>
            {note ? <p className="mt-10 max-w-3xl border-l border-primary pl-4 text-sm leading-6 text-muted-foreground">{note}</p> : null}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
