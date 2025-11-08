import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function ResultsSection() {
  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Real Results. Real Revenue.{" "}
            <span className="text-primary">Real Authority.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We've helped entrepreneurs, thought leaders, and brands across real
            estate, finance, automotive, tech, and more achieve breakthrough
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary">Case Study</Badge>
                <h3 className="text-2xl font-bold">
                  From Unknown to Industry Authority
                </h3>
                <p className="text-muted-foreground text-lg">
                  A single short-form video strategy generated{" "}
                  <span className="text-primary font-bold">
                    300M+ organic views
                  </span>{" "}
                  and{" "}
                  <span className="text-primary font-bold">
                    25,000+ qualified leads
                  </span>{" "}
                  — positioning our client as the go-to expert in their
                  industry.
                </p>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">300M+</div>
                  <div className="text-sm text-muted-foreground">
                    Organic Views
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">25K+</div>
                  <div className="text-sm text-muted-foreground">
                    Leads Generated
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary">Success Story</Badge>
                <h3 className="text-2xl font-bold">
                  End-to-End Media Domination
                </h3>
                <p className="text-muted-foreground text-lg">
                  From viral short-form content to long-form authority pieces,
                  paid ads, and even TV commercials — we built a{" "}
                  <span className="text-secondary font-bold">
                    complete media empire
                  </span>{" "}
                  that generated consistent inbound demand.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Authority Built</span>
                  <span className="text-foreground font-semibold">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Inbound Leads</span>
                  <span className="text-foreground font-semibold">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Revenue Growth</span>
                  <span className="text-foreground font-semibold">✓</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Get Results Like These
          </Button>
        </div>
      </div>
    </section>
  );
}
