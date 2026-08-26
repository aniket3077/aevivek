import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
};

export function MagneticButton({ children, href, variant = "solid", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-300 will-change-transform";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
      : "border border-border text-foreground hover:border-primary hover:text-primary";

  return (
    <a
      ref={ref}
      href={href}
      className={`${base} ${styles} ${className}`}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (el) el.style.transform = "translate(0,0)";
      }}
      style={{ transition: "transform 0.35s cubic-bezier(0.2,0.7,0.2,1), background-color 0.3s, color 0.3s" }}
    >
      {children}
    </a>
  );
}
