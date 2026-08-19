import { Link } from "@tanstack/react-router";
import { LogoPlaceholder } from "./Placeholders";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* Replace this block with the uploaded MPS logo */}
          <LogoPlaceholder variant="dark" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-muted">
            A lead generation and marketing campaign company. We plan, build, and optimise
            full-funnel campaigns that turn traffic into qualified enquiries.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-navy-muted">Pages</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-navy-foreground/85 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-navy-muted">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/85">
            <li>[email placeholder]</li>
            <li>[phone placeholder]</li>
            <li>[location placeholder]</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/12">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mamohla Projects &amp; Services. All rights reserved.</span>
          <span>Lead generation · PPC · SEO · Social ads · Email</span>
        </div>
      </div>
    </footer>
  );
}
