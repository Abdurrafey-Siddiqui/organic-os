import { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";

interface ComparisonPoint {
  other: ReactNode;
  us: ReactNode;
}

const comparisonPoints: ComparisonPoint[] = [
  {
    other: (
      <>
        Focus on <em>content output</em> &mdash; they &quot;make videos&quot;
        and hope they perform.
      </>
    ),
    us: (
      <>
        Focus on <em>business outcomes</em> &mdash; every piece of content is
        engineered to drive authority, leads, and revenue.
      </>
    ),
  },
  {
    other: (
      <>
        Treat you like a client &mdash; take your brief, deliver edits, and move
        on.
      </>
    ),
    us: (
      <>
        Partner with you as a <strong>media ally</strong> &mdash; we think like
        owners, not service providers. Your win is our win.
      </>
    ),
  },
  {
    other: (
      <>
        Disconnected process &mdash; one team for filming, another for editing,
        nobody owning the results.
      </>
    ),
    us: (
      <>
        Full-stack system &mdash; strategy, production, storytelling, and growth
        all under one roof, perfectly aligned.
      </>
    ),
  },
  {
    other: <>Create content that looks good but fades fast.</>,
    us: (
      <>
        Build media assets that <strong>compound visibility</strong> and
        generate long-term demand.
      </>
    ),
  },
  {
    other: <>Focus on vanity metrics &mdash; likes, views, impressions.</>,
    us: (
      <>
        Focus on <strong>authority metrics</strong> &mdash; inbound calls,
        booked deals, brand dominance.
      </>
    ),
  },
  {
    other: <>Follow trends to stay relevant.</>,
    us: (
      <>
        <strong>Set trends</strong> with original storytelling and data-backed
        growth frameworks.
      </>
    ),
  },
  {
    other: <>Deliver and disappear.</>,
    us: (
      <>
        Execute end-to-end &mdash; from viral clips to funnels, paid media, and
        even TV campaigns.
      </>
    ),
  },
  {
    other: <>Think creatively but not commercially.</>,
    us: (
      <>
        <strong>Bridge creativity and business</strong> &mdash; every post
        connects to pipeline, profit, and positioning.
      </>
    ),
  },
  {
    other: <>Offer a service.</>,
    us: (
      <>
        <strong>Build a system.</strong>
      </>
    ),
  },
  {
    other: <>Think short-term.</>,
    us: (
      <>
        <strong>Think legacy.</strong>
      </>
    ),
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 border-b border-border bg-linear-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-secondary/20 text-secondary border-secondary/40 text-base px-4 py-2">
              The Clear Difference
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              How Organic OS Leaves Traditional Agencies Behind
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your choice isn&apos;t between agencies. It&apos;s between
              settling for activity and owning a media engine that compounds
              authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {comparisonPoints.map((point, index) => (
              <Card
                key={index}
                className="border-border/60 bg-card/90 backdrop-blur-sm shadow-xl shadow-black/10"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
                    <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-destructive/20 text-destructive">
                          <XCircle size={24} weight="fill" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-widest text-destructive/70">
                            What Others Do
                          </p>
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {point.other}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-primary/40 bg-linear-to-br from-primary/10 via-primary/5 to-secondary/10 p-6 shadow-lg shadow-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-primary text-primary-foreground">
                          <CheckCircle size={24} weight="fill" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                            What We Do
                          </p>
                          <p className="text-base md:text-lg text-foreground leading-relaxed">
                            {point.us}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-5 pt-10">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to graduate from content vendors to a growth partner?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Organic OS builds the assets, infrastructure, and campaigns that
              keep you ahead while competitors chase the algorithm.
            </p>
            <div className="pt-2">
              <Button
                size="lg"
                className="group text-lg md:text-xl px-10 py-6 h-auto bg-primary hover:bg-primary/90 border-2 border-primary/50 shadow-2xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
              >
                Book Your Strategy Intensive
                <ArrowRight
                  size={24}
                  weight="bold"
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
