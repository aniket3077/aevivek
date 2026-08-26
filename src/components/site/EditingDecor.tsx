/** Decorative editing-software inspired elements. Purely visual, never literal UI. */

export function KeyframeDiamond({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2.5 w-2.5 rotate-45 border border-primary bg-primary/30 ${className}`}
      aria-hidden="true"
    />
  );
}

export function CompLayers({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`w-56 border border-border bg-card/70 p-3 backdrop-blur-[2px] ${className}`}
    >
      <p className="label-mono mb-3 text-[0.55rem]">COMP // AE.VIVEK_01</p>
      <div className="space-y-2">
        {[
          { w: "88%", label: "TITLE_ANIM" },
          { w: "64%", label: "MASK_02" },
          { w: "76%", label: "FX_GLOW" },
          { w: "48%", label: "NULL_CTRL" },
        ].map((l, i) => (
          <div key={l.label} className="flex items-center gap-2">
            <span className="font-mono text-[0.5rem] tracking-widest text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="relative h-1.5 flex-1 bg-secondary">
              <div
                className={i % 2 === 0 ? "h-full bg-primary/70" : "h-full bg-foreground/40"}
                style={{ width: l.w }}
              />
            </div>
            <KeyframeDiamond className="h-1.5 w-1.5 scale-90" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TimelineStrip({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`w-64 overflow-hidden border border-border bg-card/70 backdrop-blur-[2px] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
        <span className="label-mono text-[0.5rem]">TIMELINE</span>
        <span className="font-mono text-[0.5rem] text-primary">00:04:12:08</span>
      </div>
      <div className="relative px-3 py-3">
        <div className="mb-2 flex gap-[2px]">
          {Array.from({ length: 26 }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-full ${i % 6 === 0 ? "bg-muted-foreground/70" : "bg-muted-foreground/25"}`}
            />
          ))}
        </div>
        <div className="mb-1.5 flex gap-1">
          <span className="h-3.5 flex-[3] bg-primary/60" />
          <span className="h-3.5 flex-[2] bg-foreground/25" />
          <span className="h-3.5 flex-[4] bg-foreground/15" />
        </div>
        <div className="flex items-end gap-[2px]">
          {Array.from({ length: 34 }).map((_, i) => (
            <span
              key={i}
              className="w-full origin-bottom bg-foreground/40"
              style={{
                height: `${6 + ((i * 7) % 14)}px`,
                animation: `wave ${1.2 + (i % 5) * 0.18}s ease-in-out ${i * 0.04}s infinite`,
              }}
            />
          ))}
        </div>
        <span className="absolute top-0 bottom-0 left-10 w-[1px] bg-primary" />
      </div>
    </div>
  );
}

export function FilmFrames({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex flex-col gap-1 ${className}`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="flex h-6 w-10 items-center justify-center border border-border bg-card/60">
          <span className="h-1 w-1 bg-muted-foreground/60" />
        </span>
      ))}
    </div>
  );
}

export function MotionPath({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 160"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M4 152C48 152 62 16 120 16s66 122 136 96"
        strokeWidth="1"
        strokeDasharray="5 6"
        className="text-primary/60"
      />
      <circle cx="120" cy="16" r="3" className="fill-primary stroke-none" />
      <circle cx="4" cy="152" r="3" className="fill-none text-primary" strokeWidth="1" />
    </svg>
  );
}

export function PlayGlyph({ size = 84 }: { size?: number }) {
  return (
    <span
      className="group/play relative grid place-items-center rounded-full border border-paper/40 bg-background/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        className="ml-1 h-5 w-5 fill-foreground transition-colors duration-300 group-hover:fill-primary-foreground"
        aria-hidden="true"
      >
        <path d="M5 3l16 9-16 9z" />
      </svg>
    </span>
  );
}
