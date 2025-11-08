import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactFormSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Benefits */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Ready to{" "}
                  <span className="text-primary">
                    Transform Your Authority?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Book a free strategy call and discover how we can help you
                  dominate your industry.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">What happens next:</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-primary flex-shrink-0">✓</div>
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-semibold">
                        Step 1:
                      </span>{" "}
                      Fill out the form and we'll review your brand
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-primary flex-shrink-0">✓</div>
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-semibold">
                        Step 2:
                      </span>{" "}
                      We'll schedule a free 30-minute strategy call
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-primary flex-shrink-0">✓</div>
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-semibold">
                        Step 3:
                      </span>{" "}
                      Get a custom roadmap to authority and growth
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/10 border-primary/30">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Trusted by 50+ brands
                    </span>{" "}
                    across UAE, Saudi Arabia, and beyond. Join industry leaders
                    who've transformed their authority with OrganicOS.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right - Form */}
            <Card className="border-primary/50">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company / Brand Name *
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium">
                      Industry *
                    </label>
                    <Input
                      id="industry"
                      placeholder="e.g., Real Estate, Finance, Tech"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Tell us about your goals
                    </label>
                    <Textarea
                      id="message"
                      placeholder="What are you looking to achieve?"
                      rows={4}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 h-auto"
                  >
                    Book My Free Strategy Call
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    ✓ No credit card required • Free consultation • No
                    obligations
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
