import { useState, type FormEvent } from "react";
import { MagneticButton } from "./MagneticButton";
import { KeyframeDiamond } from "./EditingDecor";
import { sendContactEmail } from "@/lib/resend";

const FIELD =
  "w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      details: formData.get("details") as string,
    };

    try {
      const res = await sendContactEmail({ data });
      if (res.success) {
        setSent(true);
      } else {
        setErrorMsg(res.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="grain relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-4 flex items-center gap-3">
          <KeyframeDiamond />
          <p className="label-mono">Contact</p>
        </div>

        <h2 className="display-xl max-w-5xl text-[clamp(2.6rem,9vw,7.5rem)]">
          Have nature footage?
          <br />
          Let's make it <span className="text-primary">watchable.</span>
        </h2>

        <div className="mt-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="editorial max-w-md text-xl text-muted-foreground md:text-2xl">
              Available for nature film editing, wildlife reels, landscape edits, documentaries,
              and creative outdoor collaborations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="#contact-form">Start a Project</MagneticButton>
              <MagneticButton href="https://www.instagram.com/ae.vivekk" variant="outline">
                Instagram
              </MagneticButton>
            </div>

            <div className="mt-12 flex gap-[3px]">
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-6 w-full origin-bottom ${i % 5 === 0 ? "bg-primary/60" : "bg-secondary"}`}
                  style={{ height: `${8 + ((i * 11) % 22)}px` }}
                />
              ))}
            </div>
          </div>

          <form id="contact-form" className="grid gap-6 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="block">
              <span className="label-mono">Name</span>
              <input required name="name" className={FIELD} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="label-mono">Email</span>
              <input required type="email" name="email" className={FIELD} placeholder="you@email.com" />
            </label>
            <label className="block">
              <span className="label-mono">Project Type</span>
              <select name="projectType" defaultValue="" className={FIELD} required>
                <option value="" disabled>
                  Select
                </option>
                <option>Nature Reels / Short-Form</option>
                <option>Wildlife Film</option>
                <option>Landscape Edit</option>
                <option>Nature Documentary</option>
                <option>Social Media Content</option>
              </select>
            </label>
            <label className="block">
              <span className="label-mono">Budget</span>
              <select name="budget" defaultValue="" className={FIELD} required>
                <option value="" disabled>
                  Select
                </option>
                <option>Under $250</option>
                <option>$250 – $750</option>
                <option>$750 – $2000</option>
                <option>$2000+</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="label-mono">Project Details</span>
              <textarea
                required
                name="details"
                rows={4}
                className={`${FIELD} resize-none`}
                placeholder="Footage length, deadline, style references…"
              />
            </label>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary px-8 py-4 font-mono text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase transition-colors duration-300 hover:bg-foreground hover:text-background disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send Inquiry"}
              </button>
              {sent && (
                <p className="animate-fade-in label-mono text-primary">
                  Inquiry sent — I'll reply shortly.
                </p>
              )}
              {errorMsg && (
                <p className="animate-fade-in label-mono text-destructive">
                  {errorMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-[1400px] border-t border-border px-6 pt-8 md:px-12">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <span className="display-xl text-3xl">
            AE.<span className="text-primary">VIVEK</span>
          </span>
          <p className="label-mono">Nature Videographer | Video Editor — © 2026</p>
        </div>
      </footer>
    </section>
  );
}
