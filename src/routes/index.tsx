import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Compass, Wallet } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { services, processSteps } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MPS — Lead Generation & Marketing Campaigns" },
      {
        name: "description",
        content:
          "Mamohla Projects & Services builds full-funnel lead generation campaigns: PPC, SEO, social ads and email. Turn traffic into qualified enquiries.",
      },
      { property: "og:title", content: "MPS — Lead Generation & Marketing Campaigns" },
      {
        property: "og:description",
        content:
          "Full-funnel lead generation: PPC, SEO, social ads and email campaigns managed against cost per lead.",
      },
    ],
  }),
  component: Home,
});

const valueProps = [
  {
    icon: Compass,
    title: "Full-funnel thinking",
    body: "We don't optimise one channel in isolation. Ads, pages, and follow-up are planned as a single path to an enquiry, so improvements compound instead of cancelling out.",
  },
  {
    icon: BarChart3,
    title: "Plain-language reporting",
    body: "No dashboards you have to decode. Every report says how many leads came in, what each one cost, what we changed, and what happens next.",
  },
  {
    icon: Wallet,
    title: "Budget-fit recommendations",
    body: "We recommend the channels your budget can actually win in. If paid search is too expensive in your category this quarter, we'll say so.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-28">
          <Reveal>
            <p className="eyebrow rule-accent text-primary">Lead generation & campaign management</p>
            <h1 className="mt-2 text-4xl leading-[1.06] text-navy sm:text-5xl lg:text-6xl">
              Traffic is not the goal.
              <span className="block text-primary">Qualified leads are.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              MPS plans, builds, and optimises the full campaign path — paid search, SEO, social
              advertising, and email — so the budget you spend arrives as enquiries your sales team
              can actually work.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-navy px-7 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:bg-primary"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center border border-navy/25 px-7 py-4 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-secondary"
              >
                See our services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <FunnelGraphic />
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-accent text-primary">What we do</p>
            <h2 className="mt-2 text-3xl text-navy sm:text-4xl">
              Five disciplines, run by one team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every service below feeds the same funnel. Use one, or let us run the sequence.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 70} className="bg-card">
                <Link
                  to="/services"
                  hash={s.id}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-secondary/60"
                >
                  <span className="font-display text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl text-navy">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <div className="hidden bg-card lg:block" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-accent text-primary">How it works</p>
            <h2 className="mt-2 text-3xl text-navy sm:text-4xl">A sequence, not a retainer</h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 80} className="border-t-2 border-navy/15 pt-6">
                <div className="font-display text-4xl text-primary/25">{p.step}</div>
                <h3 className="mt-3 text-xl text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why MPS */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <Reveal>
            <p className="eyebrow text-accent">Why MPS</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Built for businesses spending real money on growth
            </h2>
          </Reveal>
          <div className="space-y-10">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="flex gap-5">
                <v.icon className="mt-1 h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <Reveal className="flex flex-col items-start justify-between gap-8 border-l-2 border-accent bg-card p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl text-navy sm:text-3xl">
                Ready to see what a full-funnel campaign looks like?
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Tell us your goal and monthly budget. We'll come back with a realistic channel mix
                and an expected cost per lead.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-navy px-7 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:bg-primary"
            >
              Get a free quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FunnelGraphic() {
  const stages = [
    { label: "Reach", detail: "Search, social, display", width: "100%" },
    { label: "Engage", detail: "Landing pages & offers", width: "82%" },
    { label: "Capture", detail: "Forms & lead routing", width: "64%" },
    { label: "Nurture", detail: "Email follow-up", width: "46%" },
    { label: "Convert", detail: "Qualified enquiries", width: "30%" },
  ];
  return (
    <div className="border border-border bg-card p-8">
      <div className="flex items-baseline justify-between">
        <span className="eyebrow text-muted-foreground">The MPS funnel</span>
        <span className="eyebrow text-accent">Lead ready</span>
      </div>
      <div className="mt-8 space-y-3">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center gap-4">
            <div
              className="flex h-14 items-center justify-between px-4 text-navy-foreground"
              style={{
                width: s.width,
                backgroundColor:
                  i === stages.length - 1 ? "var(--accent)" : "var(--navy)",
                opacity: i === stages.length - 1 ? 1 : 0.92 - i * 0.1,
              }}
            >
              <span className="text-sm font-semibold">{s.label}</span>
            </div>
            <span className="hidden text-xs text-muted-foreground sm:block">{s.detail}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">
        One team owns every stage — so nothing is lost between the click and the conversation.
      </p>
    </div>
  );
}
