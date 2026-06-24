"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Loader2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const valueProps = [
  { icon: Zap, title: "Live in days", body: "White-label the full brokerage stack under your own brand." },
  { icon: ShieldCheck, title: "Compliance built in", body: "KYC, audit trails, and role access ship in the box." },
  { icon: CalendarClock, title: "30-minute walkthrough", body: "See the CRM, IB portal, and MT5 flow on your workflow." },
];

export function HomeContact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !company.trim()) {
      toast({ variant: "destructive", title: "Add your name and company", description: "Both help us tailor the demo." });
      return;
    }
    if (!emailRegex.test(email)) {
      toast({ variant: "destructive", title: "Enter a valid work email", description: "We send the demo invite here." });
      return;
    }

    const [firstName, ...rest] = name.trim().split(/\s+/);
    const lastName = rest.join(" ") || "—";

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          companyEmail: email.trim(),
          companyName: company.trim(),
          mobile: "Requested via home quick form",
          country: "Not provided",
          website,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to send request");

      toast({ title: "Demo request sent", description: "Thanks. The Fivitech team will be in touch shortly." });
      setName("");
      setEmail("");
      setCompany("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Could not send request",
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-14 sm:px-6 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-primary/25"
      >
        <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div
          className="absolute left-0 top-0 -z-10 h-60 w-60 rounded-full blur-[120px]"
          style={{ background: "hsl(var(--cyan-accent) / 0.18)" }}
        />
        <div className="grid items-stretch gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center gap-7 p-8 sm:p-12">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Book a live demo
            </div>
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
              See Fivitech run on <span className="bg-gradient-text bg-clip-text text-transparent">your brokerage</span>
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {valueProps.map((prop) => (
                <div key={prop.title} className="space-y-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                    <prop.icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="text-sm font-bold">{prop.title}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{prop.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border/60 bg-background/40 p-8 backdrop-blur-sm sm:p-12 lg:border-l lg:border-t-0">
            <form className="flex h-full flex-col justify-center gap-4" onSubmit={handleSubmit} noValidate>
              <input
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                name="website"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
              <Input
                aria-label="Full name"
                placeholder="Full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                className="h-12 rounded-xl"
              />
              <Input
                aria-label="Work email"
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                className="h-12 rounded-xl"
              />
              <Input
                aria-label="Company name"
                placeholder="Company name"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                autoComplete="organization"
                className="h-12 rounded-xl"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group mt-1 h-12 w-full rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <>Book my demo <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No spam. Need to share more details?{" "}
                <a href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">Full contact form</a>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
