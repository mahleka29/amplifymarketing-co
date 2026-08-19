import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/Placeholders";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lead Gen, PPC, SEO, Social & Email | MPS" },
      {
        name: "description",
        content:
          "Detailed breakdown of MPS services: lead generation, PPC and paid ads, SEO, social media advertising, and email campaigns.",
      },
      { property: "og:title", content: "Services — Lead Gen, PPC, SEO, Social & Email | MPS" },
      {
        name: "og:description",
        content:
          "What's included in each MPS service, from campaign builds to reporting and optimisation.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow rule-accent text-primary">Services</p>
            <h1 className="mt-2 text-4xl leading-tight text-navy sm:text-5xl">
              Campaign work, spelled out
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Each service below can run on its own, but they were designed to work together. Here
              is exactly what is included.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-10 flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-border bg-card px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-primary hover:text-primary"
              >
                {s.name}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 ${i % 2 === 1 ? "bg-surface" : "bg-background"}`}
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="font-display text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-3xl text-navy sm:text-4xl">{s.name}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{s.long}</p>
              <ul className="mt-8 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-navy">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <ImagePlaceholder label={s.imageLabel} />
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center">
          <h2 className="max-w-xl text-2xl sm:text-3xl">
            Not sure which mix fits your budget? That's the first conversation.
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get a free quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
