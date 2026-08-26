const STATS = [
  { value: "50K+", label: "Hours Watched" },
  { value: "98%", label: "Client Retention" },
  { value: "200+", label: "Nature Films Cut" },
  { value: "40+", label: "Wild Locations" },
];

export function Stats() {
  return (
    <section className="bg-foreground py-14 text-background md:py-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-12">
        {STATS.map((s) => (
          <div key={s.value} data-reveal className="reveal text-center">
            <p className="display-xl text-[clamp(2.4rem,5vw,3.6rem)]">{s.value}</p>
            <p className="label-mono mt-1 text-background/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
