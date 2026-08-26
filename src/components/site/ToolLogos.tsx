/** Editing tool badges + black glyph accents in the style of app icons. */

type P = { className?: string; style?: React.CSSProperties };

function Tile({
  label,
  title,
  className = "",
  style,
}: P & { label: string; title: string }) {
  return (
    <div
      title={title}
      aria-label={title}
      className={`flex items-center justify-center rounded-[26%] bg-foreground shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] ${className}`}
      style={style}
    >
      <span className="font-display text-[1.6em] leading-none text-background">{label}</span>
    </div>
  );
}

export function AeTile(p: P) {
  return <Tile {...p} label="Ae" title="Adobe After Effects" />;
}
export function PrTile(p: P) {
  return <Tile {...p} label="Pr" title="Adobe Premiere Pro" />;
}
export function CcTile(p: P) {
  return <Tile {...p} label="Cc" title="CapCut" />;
}

export function ClapperGlyph({ className = "", style }: P) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} style={style} fill="currentColor">
      <path d="M6 22h52v32a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V22Zm22 8v18l15-9-15-9Z" />
      <path d="M8.4 8.6 57 15.2l-1.2 8.6L7.2 17.2 8.4 8.6Zm7.2 2.6-2 2.2 5.6.8 2-2.2-5.6-.8Zm12 1.7-2 2.2 5.6.8 2-2.2-5.6-.8Zm12 1.7-2 2.2 5.6.8 2-2.2-5.6-.8Z" />
    </svg>
  );
}

export function FilmPlayGlyph({ className = "", style }: P) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} style={style} fill="currentColor">
      <path d="M8 10h48a4 4 0 0 1 4 4v36a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Zm4 8v6h6v-6h-6Zm0 12v6h6v-6h-6Zm0 12v6h6v-6h-6Zm34-24v6h6v-6h-6Zm0 12v6h6v-6h-6Zm0 12v6h6v-6h-6ZM26 21v22l17-11-17-11Z" />
    </svg>
  );
}

export function ScissorsGlyph({ className = "", style }: P) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
    >
      <circle cx="14" cy="49" r="7" />
      <circle cx="14" cy="15" r="7" />
      <path d="M20 20 56 52M20 44 56 12" />
    </svg>
  );
}

export function TimelineGlyph({ className = "", style }: P) {
  return (
    <svg viewBox="0 0 80 56" aria-hidden="true" className={className} style={style} fill="currentColor">
      <path d="M4 14h72v14H4V14Zm5 3v8h6v-8H9Zm11 0v8h6v-8h-6Zm11 0v8h6v-8h-6Zm11 0v8h6v-8h-6Zm11 0v8h6v-8h-6Zm11 0v8h5v-8h-5Z" />
      <rect x="4" y="34" width="72" height="4" rx="2" />
      <rect x="4" y="43" width="46" height="4" rx="2" />
      <circle cx="58" cy="6" r="5" />
      <rect x="56.5" y="6" width="3" height="46" />
    </svg>
  );
}

export function ToolLogos({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <AeTile className="h-12 w-12 text-[0.75rem]" />
      <PrTile className="h-12 w-12 text-[0.75rem]" />
      <CcTile className="h-12 w-12 text-[0.75rem]" />
      <span className="editorial hidden text-base text-muted-foreground sm:block">my daily tools</span>
    </div>
  );
}
