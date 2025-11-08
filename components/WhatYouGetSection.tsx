import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";

export default function WhatYouGetSection() {
  return (
    <section className="py-20 md:py-32 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Partner With Us & Get{" "}
            <span className="text-primary">Everything You Need</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete media system — from strategy to execution to growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Strategic Content Planning",
              desc: "Custom strategies designed around your goals, audience, and industry",
            },
            {
              title: "Professional Videography",
              desc: "Cinematic production that makes you look like the authority you are",
            },
            {
              title: "Viral Short-Form Content",
              desc: "Hooks, edits, and strategies proven to generate millions of views",
            },
            {
              title: "Authority Long-Form Content",
              desc: "Deep-dive content that builds trust and positions you as the expert",
            },
            {
              title: "Growth & Funnel Systems",
              desc: "Convert views into leads and leads into paying customers",
            },
            {
              title: "End-to-End Execution",
              desc: "We handle everything so you can focus on running your business",
            },
          ].map((item, i) => (
            <Card key={i} className="border-primary/30">
              <CardContent className="p-6 space-y-3">
                <CheckIcon size={24} className="text-primary" />
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
