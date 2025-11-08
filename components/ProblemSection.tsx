import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            You're Creating Content... But Where Are The{" "}
            <span className="text-primary">Results?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most agencies promise views and engagement. But what you really need
            is{" "}
            <span className="text-foreground font-semibold">
              authority that drives revenue.
            </span>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
            <Card className="border-destructive/50">
              <CardContent className="p-6 space-y-3">
                <div className="text-destructive text-2xl">✗</div>
                <h3 className="font-semibold text-lg">Content Without ROI</h3>
                <p className="text-muted-foreground">
                  Other agencies create content that gets views but fails to
                  generate actual business results or inbound leads.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardContent className="p-6 space-y-3">
                <div className="text-destructive text-2xl">✗</div>
                <h3 className="font-semibold text-lg">
                  Struggling to Stand Out
                </h3>
                <p className="text-muted-foreground">
                  Your market is saturated. Real estate, finance, tech —
                  everyone's fighting for attention and losing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardContent className="p-6 space-y-3">
                <div className="text-destructive text-2xl">✗</div>
                <h3 className="font-semibold text-lg">
                  Disconnected Execution
                </h3>
                <p className="text-muted-foreground">
                  Strategy from one vendor, filming from another, editing from a
                  third. Nothing connects to your actual revenue goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardContent className="p-6 space-y-3">
                <div className="text-destructive text-2xl">✗</div>
                <h3 className="font-semibold text-lg">No Time to Execute</h3>
                <p className="text-muted-foreground">
                  You're already running a business. You don't have time for
                  strategy, filming, editing, posting, and growth.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Show Me The Solution
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
