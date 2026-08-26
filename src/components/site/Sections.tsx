import aboutPortrait from "@/assets/about-portrait.jpg";
import showreel from "@/assets/showreel.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import reel5 from "@/assets/reel-5.jpg";
import reel6 from "@/assets/reel-6.jpg";
import { KeyframeDiamond, MotionPath, PlayGlyph } from "./EditingDecor";
import { MagneticButton } from "./MagneticButton";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <KeyframeDiamond />
      <p className="label-mono">{children}</p>
    </div>
  );
}

/* ---------------- TOOLS ---------------- */

const TOOLS = [
  {
    id: "AE",
    name: "After Effects",
    role: "Motion Graphics / VFX",
    uses: [
      "Title cards",
      "Map & route animation",
      "Visual effects",
      "Transitions",
      "Compositing",
      "Kinetic typography",
    ],
  },
  {
    id: "PR",
    name: "Premiere Pro",
    role: "Nature Film Editing",
    uses: [
      "Wildlife sequencing",
      "Cinematic cuts",
      "Storytelling",
      "Audio synchronization",
      "Color correction",
      "Long-form documentaries",
    ],
  },
  {
    id: "CC",
    name: "CapCut",
    role: "Fast-Paced Social Editing",
    uses: [
      "Nature Reels",
      "YouTube Shorts",
      "Trending edits",
      "Fast transitions",
      "Captions",
      "Social media content",
    ],
  },
];

export function Tools() {
  return (
    <section id="stack" className="grain relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel>Tools of the trade</SectionLabel>
        <h2 className="display-xl max-w-3xl text-[clamp(2.6rem,7vw,5.5rem)]">My Editing Stack</h2>
        <p className="editorial mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          The software I use to turn hours of field footage into finished nature films.
        </p>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {TOOLS.map((t, i) => (
            <article
              key={t.id}
              data-reveal
              className="reveal group relative bg-background p-7 transition-colors duration-500 hover:bg-card md:p-9"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="display-xl text-5xl text-primary/90 transition-transform duration-500 group-hover:-translate-y-1">
                  {t.id}
                </span>
                <span className="font-mono text-[0.6rem] tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="display-xl mt-8 text-[clamp(1.9rem,3.4vw,2.7rem)]">{t.name}</h3>
              <p className="mt-2 font-mono text-[0.68rem] tracking-[0.16em] text-primary uppercase">
                {t.role}
              </p>

              <ul className="mt-7 space-y-2.5">
                {t.uses.map((u) => (
                  <li key={u} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-[1px] w-4 bg-primary/70" />
                    {u}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex gap-[3px]">
                {Array.from({ length: 22 }).map((_, k) => (
                  <span
                    key={k}
                    className={`h-4 w-full transition-colors duration-500 ${
                      k % 4 === 0 ? "bg-primary/50 group-hover:bg-primary" : "bg-secondary"
                    }`}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORK ---------------- */

const PROJECTS = [
  { n: "01", title: "Nature Reels", copy: "Short-form wildlife and landscape edits for social.", img: reel2 },
  {
    n: "02",
    title: "Wildlife Films",
    copy: "Cinematic animal behavior sequences, music sync, transitions, and color.",
    img: reel4,
  },
  {
    n: "03",
    title: "Landscape Edits",
    copy: "After Effects motion, kinetic typography, and VFX over sweeping scenery.",
    img: reel3,
  },
  {
    n: "04",
    title: "Outdoor Shorts",
    copy: "Fast-paced nature shorts optimized for short-form platforms.",
    img: reel1,
  },
  {
    n: "05",
    title: "Documentaries",
    copy: "Long-form nature documentaries with pacing, graphics, and sound design.",
    img: reel5,
  },
];

export function Work() {
  return (
    <section id="work" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="display-xl text-[clamp(2.6rem,8vw,6.5rem)]">Selected Work</h2>
          </div>
          <p className="max-w-xs font-mono text-[0.68rem] leading-relaxed tracking-[0.16em] text-muted-foreground uppercase">
            Nature cut for attention. Stories built to last.
          </p>
        </div>

        {/* Featured showreel */}
        <div data-reveal className="reveal group mt-14 block">
          <div className="grain relative aspect-[16/9] w-full overflow-hidden border border-border">
            <img
              src={showreel}
              alt="Cinematic still from the AE.VIVEK nature showreel 2026"
              loading="lazy"
              width={1600}
              height={900}
              className="h-full w-full scale-[1.03] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.09]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-background/40" />
            <span className="absolute inset-0 grid place-items-center">
              <PlayGlyph size={96} />
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-border">
              <span className="block h-full w-1/3 bg-primary transition-all duration-700 group-hover:w-full" />
            </span>
            <span className="label-mono absolute top-5 left-5 text-foreground/80">
              00:00 / 02:14
            </span>
          </div>
          <div className="mt-5 grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <h3 className="display-xl text-[clamp(1.8rem,4.4vw,3.4rem)]">
              AE.VIVEK Nature Showreel 2026
            </h3>
            <p className="label-mono text-primary">Nature Filmmaking / Video Editing</p>
          </div>
        </div>

        {/* Project grid */}
        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={p.n}
              data-reveal
              className="reveal group relative overflow-hidden bg-background"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} project thumbnail`}
                  loading="lazy"
                  width={720}
                  height={900}
                  className="h-full w-full object-cover opacity-70 transition-all duration-[800ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="label-mono absolute top-4 left-4 text-primary">{p.n}</span>
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="display-xl text-3xl md:text-4xl">{p.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {p.copy}
                  </p>
                </div>
              </div>
            </article>
          ))}
          <div className="hidden bg-background lg:block">
            <div className="flex h-full flex-col justify-between p-8">
              <MotionPath className="h-24 w-full" />
              <div>
                <p className="label-mono">More edits on request</p>
                <a
                  href="#contact"
                  className="display-xl mt-3 block text-3xl transition-colors hover:text-primary"
                >
                  Ask for full portfolio →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

const SKILLS = [
  "Nature Film Editing",
  "Wildlife Sequencing",
  "Landscape Edits",
  "Nature Reels",
  "Documentary Editing",
  "Cinematic Editing",
  "Color Grading",
  "Transitions",
  "Kinetic Typography",
  "Sound Sync",
];

export function About() {
  return (
    <section id="about" className="grain relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div data-reveal className="reveal relative">
          <div className="relative overflow-hidden border border-border">
            <img
              src={aboutPortrait}
              alt="AE.VIVEK editing nature footage at his studio desk"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <span className="pointer-events-none absolute inset-0 border-[10px] border-background/0" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="label-mono">AE.VIVEK — Studio</span>
            <span className="font-mono text-[0.6rem] tracking-widest text-primary">EST. 2026</span>
          </div>
        </div>

        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="display-xl max-w-2xl text-[clamp(2.4rem,6.4vw,5rem)]">
            The wild, in the <span className="text-primary">edit.</span>
          </h2>
          <p className="editorial mt-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            I'm AE.VIVEK, a nature videographer and video editor focused on transforming raw
            wilderness footage into immersive visual stories. I work across Premiere Pro, After
            Effects, and CapCut to craft wildlife films, landscape edits, nature reels, and
            outdoor documentaries.
          </p>

          <p className="label-mono mt-12">What I do</p>
          <ul className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2">
            {SKILLS.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 bg-background px-4 py-3 text-sm transition-colors hover:bg-card"
              >
                <KeyframeDiamond className="scale-75" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

const STEPS = [
  { n: "01", title: "Footage", copy: "Review and organize the raw field material." },
  { n: "02", title: "Story", copy: "Build the narrative and select the strongest moments in the wild." },
  { n: "03", title: "Edit", copy: "Create rhythm, pacing, cuts, transitions, and structure." },
  {
    n: "04",
    title: "Motion",
    copy: "Add After Effects motion graphics, animation, typography, and VFX.",
  },
  { n: "05", title: "Finish", copy: "Sound design, color, captions, final corrections, and export." },
];

export function Process() {
  return (
    <section id="process" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel>Process</SectionLabel>
        <h2 className="display-xl text-[clamp(2.2rem,6.6vw,5.4rem)]">
          Raw Footage <span className="text-primary">→</span> Final Cut
        </h2>
        <p className="editorial mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          From memory card to finished nature film — a calm, deliberate process.
        </p>

        <div className="relative mt-16">
          <span className="absolute top-3 left-0 hidden h-[1px] w-full bg-border md:block" />
          <div className="grid gap-10 md:grid-cols-5 md:gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                data-reveal
                className="reveal relative"
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <div className="mb-6 flex items-center gap-3 md:block">
                  <span className="relative z-10 block h-[7px] w-[7px] rotate-45 bg-primary md:mb-6" />
                  <span className="font-mono text-[0.65rem] tracking-[0.22em] text-primary">
                    {s.n}
                  </span>
                </div>
                <h3 className="display-xl text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

const SERVICES = [
  {
    n: "01",
    title: "Nature Reels",
    copy: "Instagram Reels and YouTube Shorts cut from wildlife and landscape footage.",
  },
  {
    n: "02",
    title: "Wildlife Films",
    copy: "Story-driven editing with music sync, pacing, color, and natural sound design.",
  },
  {
    n: "03",
    title: "Landscape Edits",
    copy: "After Effects animation, kinetic typography, transitions, and visual effects.",
  },
  {
    n: "04",
    title: "Nature Documentaries",
    copy: "Long-form CapCut and Premiere Pro edits for outdoor and environmental films.",
  },
];

export function Services() {
  return (
    <section id="services" className="grain relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel>Services</SectionLabel>
        <div className="mt-4 border-t border-border">
          {SERVICES.map((s, i) => (
            <a
              key={s.n}
              href="#contact"
              data-reveal
              className="reveal group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-5 gap-y-3 border-b border-border py-8 transition-colors duration-500 hover:bg-card md:grid-cols-[auto_minmax(0,1.1fr)_minmax(0,1fr)_auto] md:items-center md:px-4"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-mono text-[0.65rem] tracking-[0.22em] text-primary">{s.n}</span>
              <h3 className="display-xl text-[clamp(1.9rem,5vw,3.6rem)] transition-transform duration-500 md:group-hover:translate-x-2">
                {s.title}
              </h3>
              <p className="col-span-2 max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-1">
                {s.copy}
              </p>
              <span className="col-span-2 label-mono text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:col-span-1 md:text-right">
                Enquire →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSTAGRAM ---------------- */

const FEED = [reel2, reel4, reel3, reel1, reel5, reel6];

const REELS = [
  { id: "DbQahN4hZAD", title: "Latest nature reel edit" },
  { id: "DATL3ljvNHQ", title: "Cinematic wildlife reel edit" },
  { id: "C4Nvetjvk2b", title: "Landscape motion reel edit" },
];

export function Reels() {
  return (
    <section id="reels" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <SectionLabel>Watch</SectionLabel>
            <h2 className="display-xl text-[clamp(2.4rem,7vw,5.8rem)]">
              Nature in <span className="text-primary">motion.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[0.68rem] leading-relaxed tracking-[0.16em] text-muted-foreground uppercase">
            Real nature edits, straight from the feed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REELS.map((r, i) => (
            <div
              key={r.id}
              data-reveal
              className="reveal overflow-hidden border border-border bg-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${r.id}/embed`}
                title={r.title}
                loading="lazy"
                allowFullScreen
                scrolling="no"
                className="block h-[640px] w-full border-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Instagram() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <SectionLabel>Instagram</SectionLabel>
            <h2 className="display-xl text-[clamp(2.4rem,7vw,5.8rem)]">
              The wild, on the <span className="text-primary">feed.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <span className="label-mono text-foreground/80">@ae.vivekk</span>
            <MagneticButton href="https://www.instagram.com/ae.vivekk" variant="outline">
              View Instagram →
            </MagneticButton>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {FEED.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/ae.vivekk"
              data-reveal
              className="reveal group relative block aspect-[9/16] overflow-hidden border border-border"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={src}
                alt={`Vertical reel edit thumbnail ${i + 1}`}
                loading="lazy"
                width={720}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-background/30 transition-opacity duration-500 group-hover:opacity-0" />
              <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <PlayGlyph size={48} />
              </span>
              <span className="label-mono absolute bottom-3 left-3 text-[0.55rem] text-foreground/80">
                9:16
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
