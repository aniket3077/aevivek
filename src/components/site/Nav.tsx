import { useState } from "react";

const LINKS = [
  { label: "Work", sub: "Productions", href: "#work" },
  { label: "About", sub: "Filmmaker", href: "#about" },
  { label: "Process", sub: "Workflow", href: "#process" },
  { label: "Studio", sub: "Connect", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[26%] bg-foreground">
            <span className="font-display text-lg leading-none text-background">V</span>
          </span>
          <span className="display-xl text-xl tracking-wide">AE.Vivek.</span>
        </a>

        <nav className="hidden items-center gap-8 rounded-2xl bg-card px-7 py-3 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="group block text-center">
              <span className="label-mono block text-[0.66rem] font-semibold text-foreground/80 transition-colors group-hover:text-foreground">
                {l.label}
              </span>
              <span className="label-mono block text-[0.5rem] text-muted-foreground">{l.sub}</span>
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-2xl bg-card shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] md:hidden"
        >
          <span
            className={`h-[2px] w-5 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-5 bg-foreground transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="animate-fade-in mx-4 rounded-2xl bg-card px-6 pb-4 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display-xl block border-b border-border py-4 text-3xl last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
