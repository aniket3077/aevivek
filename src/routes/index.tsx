import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About, Instagram, Process, Reels, Services, Tools, Work } from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/components/site/useReveal";

const TITLE = "AE.VIVEK — Nature Videographer & Video Editor";
const DESCRIPTION =
  "AE.VIVEK turns raw wilderness footage into cinematic nature stories: wildlife films, landscape edits, nature reels, and outdoor documentaries.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Stats />
      <Tools />
      <Work />
      <Reels />
      <About />
      <Process />
      <Services />
      <Instagram />
      <Contact />
    </main>
  );
}
