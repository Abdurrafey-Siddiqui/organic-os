import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-32 border-b border-border overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 102, 0, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 102, 0, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Urgency indicator */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-destructive/10 border border-destructive/30 backdrop-blur-sm">
              <Clock
                size={20}
                weight="bold"
                className="text-destructive animate-pulse"
              />
              <span className="text-sm md:text-base font-semibold text-destructive">
                The Market Moves. Make Your Move.
              </span>
            </div>
          </div>

          {/* Main headline with dramatic emphasis */}
          <div className="text-center space-y-8 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Still Thinking It Over?{" "}
              <span className="block mt-4 bg-gradient-to-r from-destructive via-primary to-secondary bg-clip-text text-transparent">
                While You Wait, the Market Moves.
              </span>
            </h2>

            {/* Subcopy with intentional line breaks for impact */}
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed">
              <p className="text-foreground font-medium">
                You&apos;ve seen the difference. You&apos;ve seen the proof.
                <br />
                <span className="text-primary font-bold">
                  The only thing left is action.
                </span>
              </p>

              <p className="text-muted-foreground">
                Because the truth is &mdash;{" "}
                <span className="text-foreground font-semibold">
                  waiting costs more than starting.
                </span>
              </p>

              <div className="pt-4 border-t border-border/50 max-w-2xl mx-auto">
                <p className="text-foreground font-medium">
                  At Organic OS, we don&apos;t chase quick wins.
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold">
                    We build systems that pay back every second you&apos;ve
                    already lost.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA with maximum emphasis */}
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              {/* Glowing effect behind button */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl blur-2xl opacity-50 animate-pulse" />

              <Button
                size="lg"
                className="relative group text-xl md:text-2xl px-12 py-8 h-auto bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105 font-bold border-2 border-primary-foreground/20"
              >
                Let&apos;s Build Your Authority Engine
                <ArrowRight
                  size={28}
                  weight="bold"
                  className="ml-3 transition-transform group-hover:translate-x-2"
                />
              </Button>
            </div>

            {/* Reassurance copy */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">No contracts.</span>
              </div>
              <span className="hidden sm:inline text-border">•</span>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">No pressure.</span>
              </div>
              <span className="hidden sm:inline text-border">•</span>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">
                  Just results that speak for themselves.
                </span>
              </div>
            </div>
          </div>

          {/* Optional: Subtle visual anchor at bottom */}
          <div className="flex justify-center mt-16">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
