import { cn } from "@/lib/utils";

export function LogoPlaceholder({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "grid h-10 w-10 shrink-0 grid-cols-2 grid-rows-2 overflow-hidden rounded-[3px]",
          dark ? "opacity-95" : "",
        )}
        aria-hidden="true"
      >
        <span className="bg-primary" />
        <span className="bg-steel" />
        <span className="bg-steel" />
        <span className="bg-primary" />
      </div>
      <div className="leading-tight">
        <div
          className={cn(
            "font-display text-lg font-semibold tracking-tight",
            dark ? "text-navy-foreground" : "text-navy",
          )}
        >
          MPS
        </div>
        <div
          className={cn(
            "text-[10px] font-medium tracking-[0.14em] uppercase",
            dark ? "text-navy-muted" : "text-muted-foreground",
          )}
        >
          Mamohla Projects &amp; Services
        </div>
      </div>
    </div>
  );
}

export function ImagePlaceholder({
  label,
  ratio = "aspect-[4/3]",
  className,
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 border border-dashed border-primary/35 bg-surface px-6 text-center",
        ratio,
        className,
      )}
    >
      <span className="eyebrow text-primary/70">Image placeholder</span>
      <span className="max-w-xs text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
