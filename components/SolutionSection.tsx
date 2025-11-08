import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="text-base px-4 py-2">The OrganicOS System</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Most Agencies Deliver Content.{" "}
            <span className="text-primary">We Deliver Outcomes.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just a content agency. We're your{" "}
            <span className="text-foreground font-semibold">media partner</span>{" "}
            — building authority, generating inbound demand, and driving
            measurable revenue growth.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/50">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                1
              </div>
              <h3 className="text-2xl font-bold">
                Strategic Authority Building
              </h3>
              <p className="text-muted-foreground">
                We position you as the undeniable authority in your niche
                through strategic storytelling and brand positioning.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/50">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                2
              </div>
              <h3 className="text-2xl font-bold">Viral Content Production</h3>
              <p className="text-muted-foreground">
                From hooks to editing to videography — we create content
                designed to dominate algorithms and generate massive reach.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/50">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                3
              </div>
              <h3 className="text-2xl font-bold">Revenue-Connected Funnels</h3>
              <p className="text-muted-foreground">
                We connect content directly to lead generation, community
                growth, and revenue — because views without sales mean nothing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
