import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Here's How We{" "}
            <span className="text-primary">Transform Your Authority</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A proven system that's generated 300M+ views and 25K+ leads for our
            media partners
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold">
                    Discovery & Strategic Positioning
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    We dive deep into your brand, audience, and goals. Then we
                    craft a custom media strategy designed to position you as
                    the undeniable authority in your space — while connecting
                    directly to revenue outcomes.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">Brand Analysis</Badge>
                    <Badge variant="outline">Audience Research</Badge>
                    <Badge variant="outline">Content Strategy</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold">
                    Full-Stack Content Production
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    From viral short-form to authority-building long-form — we
                    handle everything. Videography, editing, hooks,
                    storytelling, posting, and growth. You show up, we make you
                    shine.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">Professional Videography</Badge>
                    <Badge variant="outline">Strategic Editing</Badge>
                    <Badge variant="outline">Viral Optimization</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold">
                    Growth, Optimization & Scale
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    We don't just post and hope. We optimize for reach,
                    engagement, and conversions. We build funnels that turn
                    views into leads, and leads into revenue — creating a system
                    that scales with your business.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">Algorithm Mastery</Badge>
                    <Badge variant="outline">Funnel Building</Badge>
                    <Badge variant="outline">Revenue Tracking</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="hover:scale-105">
            Book Your Strategy Call
            <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
