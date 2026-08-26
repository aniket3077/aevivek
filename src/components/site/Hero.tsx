import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/hero-cutout.png";
import brush from "@/assets/brush-stroke.png";
import { MagneticButton } from "./MagneticButton";
import {
  AeTile,
  CcTile,
  ClapperGlyph,
  FilmPlayGlyph,
  PrTile,
  ScissorsGlyph,
  TimelineGlyph,
} from "./ToolLogos";

const PILLARS = [
  {
    title: "Natural Rhythm",
    copy: "Letting landscapes and wildlife breathe — pacing edits to the pulse of the wild.",
  },
  {
    title: "Cinematic Wilderness",
    copy: "Color grading and motion design that turn raw nature footage into immersive films.",
  },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const scope = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const drift = (depth: number) => ({
    transform: `translate3d(${pointer.x * depth}px, ${pointer.y * depth}px, 0)`,
    transition: "transform 0.6s cubic-bezier(0.2,0.7,0.2,1)",
  });

  const rise = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section
      ref={scope}
      id="top"
      className="grain relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 px-6 md:px-12 lg:grid-cols-[1.02fr_0.98fr]">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="mb-5 flex items-center gap-4" style={rise(80)}>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground">
              <span className="ml-[3px] block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-background" />
            </span>
            <span>
              <span className="label-mono block text-[0.6rem]">Nature Videographer / Video Editor</span>
              <span className="display-xl block text-2xl tracking-wide md:text-3xl">
                Curated by AE.Vivek
              </span>
            </span>
          </div>

          <h1 className="display-xl text-[clamp(3.6rem,11vw,8.5rem)]" style={rise(140)}>
            <span className="block">Nature</span>
            <span className="flex items-center gap-4">
              Editor
              <span className="mt-2 flex h-[0.42em] w-[0.42em] shrink-0 items-center justify-center rounded-full bg-foreground">
                <FilmPlayGlyph className="h-[52%] w-[52%] text-background" />
              </span>
            </span>
          </h1>

          <p
            className="editorial mt-7 max-w-xl text-xl text-muted-foreground md:text-2xl"
            style={rise(220)}
          >
            Turning raw wilderness footage into cinematic nature stories through{" "}
            <span className="font-sans font-semibold text-foreground underline decoration-2 underline-offset-4 not-italic">
              RHYTHMIC EDITING
            </span>{" "}
            — wildlife, landscapes, and the outdoors, cut with intention.
          </p>

          <div className="mt-10 grid max-w-2xl gap-8 sm:grid-cols-2" style={rise(300)}>
            {PILLARS.map((p) => (
              <div key={p.title}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  <p className="label-mono text-foreground">{p.title}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-6" style={rise(380)}>
            <MagneticButton href="#contact" className="rounded-full">
              Initiate Project
            </MagneticButton>
            <a
              href="#work"
              className="group flex items-center gap-3 text-base font-semibold underline decoration-2 underline-offset-[6px]"
            >
              View Selected Work
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Portrait + floating tool marks */}
        <div className="relative order-1 lg:order-2">
          <div
            className="relative mx-auto aspect-[3/4] w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-card lg:max-w-none"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "scale(1.03)",
              transition: "opacity 1s ease, transform 1s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <img
              src={brush}
              alt=""
              aria-hidden="true"
              width={1024}
              height={1024}
              className="absolute top-[6%] left-[4%] w-[92%] opacity-95"
            />
            <img
              src={portrait}
              alt="AE.VIVEK, nature videographer and video editor"
              width={1024}
              height={1408}
              className="absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto max-w-none object-contain"
            />

            <ClapperGlyph
              className="float-soft absolute top-[16%] left-[6%] h-14 w-14 text-foreground md:h-20 md:w-20"
              style={drift(-14)}
            />
            <FilmPlayGlyph
              className="absolute top-[13%] right-[6%] h-12 w-12 text-foreground md:h-16 md:w-16"
              style={drift(12)}
            />
            <ScissorsGlyph
              className="absolute top-[45%] left-[4%] h-11 w-11 text-foreground md:h-14 md:w-14"
              style={drift(-9)}
            />
            <TimelineGlyph
              className="float-soft absolute top-[38%] right-[3%] h-12 w-16 text-foreground md:h-16 md:w-24"
              style={drift(16)}
            />
            <PrTile
              className="absolute bottom-[26%] left-[3%] h-14 w-14 text-[0.85rem] md:h-20 md:w-20 md:text-[1.1rem]"
              style={drift(-18)}
            />
            <AeTile
              className="absolute bottom-[24%] right-[2%] h-14 w-14 text-[0.85rem] md:h-20 md:w-20 md:text-[1.1rem]"
              style={drift(20)}
            />
            <CcTile
              className="absolute top-[4%] right-[34%] hidden h-12 w-12 text-[0.75rem] md:flex"
              style={drift(8)}
            />

            <div
              className="absolute bottom-[6%] left-[8%] rotate-[-6deg] rounded-xl bg-card px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]"
              style={drift(-6)}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-destructive" />
                <span className="label-mono text-[0.5rem]">Rec / Studio Active</span>
              </div>
              <p className="display-xl mt-1 text-lg">00:04:12:08</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden bg-foreground py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-10">
              {[
                "Wildlife Films",
                "Landscape Edits",
                "Nature Reels",
                "Cinematic Color",
                "Sound of the Wild",
                "Outdoor Storytelling",
              ].map((t) => (
                <span
                  key={t}
                  className="label-mono flex items-center gap-10 text-background/85"
                >
                  {t}
                  <span className="h-1.5 w-1.5 rotate-45 bg-background/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
