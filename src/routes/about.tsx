import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/Placeholders";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MPS — One Team for the Whole Funnel" },
      {
        name: "description",
        content:
          "Why Mamohla Projects & Services exists: one team handling strategy, ads, SEO, and email instead of juggling separate specialists.",
      },
      { property: "og:title", content: "About MPS — One Team for the Whole Funnel" },
      {
        property: "og:description",
        content:
          "Our story, our approach, and the values behind how MPS runs lead generation campaigns.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Full-funnel, not single-channel",
    body: "A great ad pointed at a weak page still wastes money. We take responsibility for the whole path, which means we can fix the part that is actually broken.",
  },
  {
    title: "Transparent by default",
    body: "You see the accounts, the spend, and the numbers behind every claim. No black-box reporting and no metrics chosen because they happen to look good.",
  },
  {
    title: "Right-sized for you",
    body: "We scope campaigns to your budget and capacity. A plan that generates more leads than you can follow up on is not a win.",
  },
];

const values = [
  {
    title: "Results over vanity metrics",
    body: "Impressions and follower counts don't pay salaries. We report leads, cost per lead, and pipeline contribution.",
  },
  {
    title: "Clear communication",
    body: "Plain language, predictable updates, and a direct line to the people doing the work.",
  },
  {
    title: "Continuous improvement",
    body: "Every campaign carries a testing plan. What we learn in one month is applied in the next.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow rule-accent text-primary">About MPS</p>
            <h1 className="mt-2 text-4xl leading-tight text-navy sm:text-5xl">
              One team for the whole funnel
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl text-navy">Our story</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                MPS — Mamohla Projects &amp; Services — started because too many businesses were
                paying three or four different specialists to manage pieces of the same funnel. An
                ads freelancer here, an SEO consultant there, a designer for the landing page, and
                someone else again for the follow-up emails.
              </p>
              <p>
                Nobody owned the result. When leads dried up, each specialist could point at their
                own metric and call it a success while the business had nothing to show for the
                spend.
              </p>
              <p>
                We built MPS as the alternative: one team that owns strategy, media, pages, and
                follow-up together, and reports on the only number that matters — qualified leads at
                a cost that makes sense for your business.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ImagePlaceholder
              label="Photo: the MPS team at work, office, or a campaign planning session"
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-accent">Our approach</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Three principles we don't bend</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="border-t-2 border-accent/60 pt-6"
              >
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-accent text-primary">Our values</p>
            <h2 className="mt-2 text-3xl text-navy sm:text-4xl">How we work day to day</h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-card p-8">
                <h3 className="text-xl text-navy">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-navy px-7 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:bg-primary"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
