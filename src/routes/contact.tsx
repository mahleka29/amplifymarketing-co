import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, Check, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/components/site/data";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MPS — Get a Free Campaign Quote" },
      {
        name: "description",
        content:
          "Tell MPS about your goals and budget. We'll come back with a realistic channel mix and expected cost per lead.",
      },
      { property: "og:title", content: "Contact MPS — Get a Free Campaign Quote" },
      {
        property: "og:description",
        content: "Request a free lead generation quote from Mamohla Projects & Services.",
      },
    ],
  }),
  component: ContactPage,
});

const budgets = [
  "Under R5 000 / month",
  "R5 000 – R15 000 / month",
  "R15 000 – R50 000 / month",
  "R50 000+ / month",
  "Not sure yet",
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: String(fd.get("service") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
    });

    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please try again or email us directly.");
      return;
    }

    form.reset();
    setSent(true);
    toast.success("Thanks — we've got your enquiry and will be in touch shortly.");
  }

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow rule-accent text-primary">Contact</p>
            <h1 className="mt-2 text-4xl leading-tight text-navy sm:text-5xl">
              Tell us what you need leads for
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Share your goal and rough monthly budget. We'll respond with a realistic channel mix,
              an expected cost per lead, and what the first 60 days would look like.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <Reveal>
            {sent ? (
              <div className="border border-accent/40 bg-card p-10">
                <Check className="h-8 w-8 text-accent" />
                <h2 className="mt-5 text-2xl text-navy">Enquiry received</h2>
                <p className="mt-3 text-muted-foreground">
                  Thanks for reaching out. We'll review your details and come back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Send another enquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-border bg-card p-8 sm:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" required placeholder="Your full name" />
                  <Field label="Company" name="company" placeholder="Business name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                  <Field label="Phone" name="phone" type="tel" placeholder="+27 ..." />

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service">Service interested in</Label>
                    <select id="service" name="service" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="Not sure / multiple">Not sure / multiple</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="budget">Approximate monthly budget</Label>
                    <select id="budget" name="budget" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="What are you selling, and what does a good lead look like for you?"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-8 inline-flex items-center gap-2 bg-navy px-7 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:bg-primary disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send enquiry"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className="space-y-8">
            <div className="border border-border bg-card p-8">
              <h2 className="eyebrow text-muted-foreground">Direct contact</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-navy">[email placeholder]</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-navy">[phone placeholder]</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-navy">[location placeholder]</span>
                </li>
              </ul>
            </div>

            <div className="border border-dashed border-primary/35 bg-surface p-8">
              <CalendarClock className="h-5 w-5 text-primary" />
              <h2 className="mt-4 text-lg text-navy">Book a call</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Placeholder for a future Calendly (or similar) booking link — send it through and
                we'll embed the scheduler right here.
              </p>
            </div>

            <div className="bg-navy p-8 text-navy-foreground">
              <h2 className="text-lg">Response time</h2>
              <p className="mt-2 text-sm text-navy-muted">
                Enquiries sent on a working day are usually answered within one business day.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const fieldClass =
  "w-full border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

function Label({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-semibold tracking-wide text-navy uppercase">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={fieldClass}
      />
    </div>
  );
}
