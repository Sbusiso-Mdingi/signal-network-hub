import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LegalSection = {
  title: string;
  paragraphs: Array<string>;
};

type PublicLegalPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  sections: Array<LegalSection>;
};

export function PublicLegalPage({ eyebrow, title, lead, updated, sections }: PublicLegalPageProps) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
            <p className="label-mono mt-6">{updated}</p>
          </div>
        </section>
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="divide-y divide-border border-y border-border">
              {sections.map((section, index) => (
                <section key={section.title} className="grid gap-5 py-8 md:grid-cols-[70px_1fr]">
                  <p className="label-mono">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h2 className="text-2xl md:text-3xl">{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
