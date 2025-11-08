import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  WarningIcon,
  HourglassIcon,
  ClockIcon,
  TrendDownIcon,
  GearIcon,
  FireIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function PainAgitationSolutionSection() {
  return (
    <section className="section bg-linear-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {/* PAIN Section */}
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
                Your Business Is{" "}
                <span className="text-destructive">Bleeding</span> — and You're
                Just Watching?
              </h2>
            </div>

            <Card className="border-destructive/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-10">
                <div className="space-y-8 text-xl md:text-2xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                  <p className="text-foreground font-semibold">
                    You can feel it — no,{" "}
                    <span className="text-primary">you know it.</span>
                  </p>

                  <p>
                    The views are flat. The leads are cold.{" "}
                    <span className="text-destructive font-semibold">
                      The momentum is... gone.
                    </span>
                  </p>

                  <p>
                    You keep showing up, but it's like shouting into an empty
                    room.
                  </p>

                  <p className="text-muted-foreground italic text-lg md:text-xl">
                    "Anyone out there......?"
                  </p>

                  <p className="text-foreground/40 text-base md:text-lg tracking-widest">
                    ...
                  </p>

                  <p className="text-destructive font-semibold">
                    Didn't think so.
                  </p>

                  <div className="pt-4 space-y-6">
                    <p>
                      You're putting in the hours — but the growth?{" "}
                      <span className="text-destructive font-semibold">
                        It's not there.
                      </span>
                    </p>

                    <p className="text-foreground font-semibold">
                      Every day you wait, another opportunity slips through.
                    </p>

                    <p className="text-foreground font-semibold">
                      Another competitor takes the attention that{" "}
                      <span className="text-primary">
                        should have been yours.
                      </span>
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border space-y-6">
                    <p className="text-foreground font-bold">
                      And you know what's the craziest part?
                    </p>

                    <p className="text-primary font-semibold">You know it.</p>

                    <p>
                      You can see the gaps, the missed shots,{" "}
                      <span className="text-foreground font-semibold">
                        the untapped potential.
                      </span>
                    </p>

                    <p>
                      But instead of fixing it, you're hoping it'll{" "}
                      <span className="italic">"pick up soon."</span>
                    </p>

                    <p className="text-destructive font-bold text-2xl md:text-3xl pt-4">
                      It won't.
                    </p>

                    <p className="text-foreground font-semibold">
                      Because what's bleeding isn't just your numbers —{" "}
                      <span className="text-destructive font-bold">
                        it's your authority.
                      </span>
                    </p>

                    <p className="text-foreground font-bold text-2xl md:text-3xl">
                      And if you don't stop the bleed now,{" "}
                      <span className="text-destructive">
                        someone else will own your market tomorrow.
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AGITATION Section */}
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Every Second You Wait,{" "}
                <span className="text-destructive">
                  the Bleed Gets <span className="text-destructive">Worse</span>{" "}
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/40 bg-linear-to-br from-card to-destructive/5 border-pulse">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <WarningIcon
                      weight="duotone"
                      className="size-12 text-destructive"
                    />
                    <h3 className="font-bold text-xl text-foreground">
                      Ground Lost Daily
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Every day you hesitate, your competitors take ground.{" "}
                      <span className="text-foreground font-semibold">
                        They're not better — just faster.
                      </span>{" "}
                      <span className="text-destructive font-semibold">
                        Every second you stall is another lead you'll never get
                        back.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/40 bg-linear-to-br from-card to-destructive/5 border-pulse-delay-1">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <HourglassIcon
                      weight="duotone"
                      className="size-12 text-destructive"
                    />
                    <h3 className="font-bold text-xl text-foreground">
                      Perfection Kills Momentum
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      You keep polishing when you should be publishing.{" "}
                      <span className="text-destructive font-semibold">
                        "Perfect" is the slowest route to failure.
                      </span>{" "}
                      <span className="text-foreground font-semibold">
                        Speed wins. Always.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/40 bg-linear-to-br from-card to-destructive/5 border-pulse-delay-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <ClockIcon
                      weight="duotone"
                      className="size-12 text-destructive"
                    />
                    <h3 className="font-bold text-xl text-foreground">
                      No "Right Time"
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      You're not waiting for timing —{" "}
                      <span className="text-destructive font-semibold">
                        you're hiding behind it.
                      </span>{" "}
                      The right time was yesterday.{" "}
                      <span className="text-foreground font-semibold">
                        The next best time is right now.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/40 bg-linear-to-br from-card to-destructive/5 border-pulse-delay-3">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <TrendDownIcon
                      weight="duotone"
                      className="size-12 text-destructive"
                    />
                    <h3 className="font-bold text-xl text-foreground">
                      Stalled = Outpaced
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      You think you're waiting. You're not.{" "}
                      <span className="text-destructive font-semibold">
                        You're getting lapped.
                      </span>{" "}
                      Keep this pace, and{" "}
                      <span className="text-foreground font-semibold">
                        the market won't remember your name.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* SOLUTION Section */}
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Here's The Cure.{" "}
                <span className="text-transparent bg-linear-to-r from-secondary to-secondary/80 bg-clip-text">
                  Now We Heal.
                </span>
              </h2>
            </div>

            <Card className="border-secondary/30 bg-linear-to-br from-card via-secondary/5 to-secondary/10 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <Image
                      src="/images/organic-os-logo.png"
                      alt="Organic OS"
                      width={400}
                      height={100}
                      className="h-8 md:h-14 w-auto mx-auto"
                    />
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      At Organic OS, we don't slap bandages on broken
                      strategies.
                    </p>
                    <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                      We install systems that restore flow —{" "}
                      <span className="text-secondary">clarity</span>,{" "}
                      <span className="text-secondary">authority</span>, and{" "}
                      <span className="text-secondary">
                        growth that compounds
                      </span>
                      .
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground italic">
                      This isn't a quick fix. It's a reset.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-secondary/20 space-y-4 text-center max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground font-semibold">
                      You've seen what chaos costs.
                    </p>
                    <p className="text-xl md:text-2xl text-secondary font-bold">
                      Now you'll see what structure delivers.
                    </p>
                  </div>

                  <div className="pt-8 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground flex items-center justify-center gap-3">
                      <GearIcon
                        weight="duotone"
                        className="size-8 text-secondary"
                      />
                      How We Heal Your Brand
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-secondary/30 bg-linear-to-br from-card to-secondary/5">
                        <CardContent className="p-6 md:p-8">
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-secondary">
                              Clarity Restored
                            </h4>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                              No more confusion.{" "}
                              <span className="text-foreground font-semibold">
                                Every move has purpose, direction, and
                                measurable impact.
                              </span>{" "}
                              You know exactly where your brand is headed.
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-secondary/30 bg-linear-to-br from-card to-secondary/5">
                        <CardContent className="p-6 md:p-8">
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-secondary">
                              Momentum Rebuilt
                            </h4>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                              We turn your presence into a machine —{" "}
                              <span className="text-foreground font-semibold">
                                consistent, predictable, unstoppable.
                              </span>{" "}
                              You grow while you sleep.
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-secondary/30 bg-linear-to-br from-card to-secondary/5">
                        <CardContent className="p-6 md:p-8">
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-secondary">
                              Authority Amplified
                            </h4>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                              No more chasing.{" "}
                              <span className="text-foreground font-semibold">
                                You become the voice people trust and the name
                                they can't ignore.
                              </span>
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-secondary/30 bg-linear-to-br from-card to-secondary/5">
                        <CardContent className="p-6 md:p-8">
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-secondary">
                              Growth Secured
                            </h4>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                              <span className="text-secondary font-bold">
                                300M+ organic views. 25K+ leads.
                              </span>{" "}
                              Proven, repeatable outcomes that{" "}
                              <span className="text-foreground font-semibold">
                                move your business forward — not just your
                                metrics.
                              </span>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-secondary/20 text-center space-y-4 max-w-3xl mx-auto">
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                      The noise ends here.
                    </p>
                    <p className="text-xl md:text-2xl text-secondary font-semibold">
                      What starts now is control, clarity, and growth that
                      lasts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="relative max-w-7xl mx-auto">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-destructive/20 to-primary/20 blur-3xl opacity-30 rounded-3xl" />

            <Card className="relative border-2 border-primary/50 bg-linear-to-br from-card via-primary/10 to-destructive/10 shadow-2xl">
              <CardContent className="p-10 md:p-14">
                <div className="text-center space-y-8">
                  {/* Fire Icon */}
                  <div className="relative w-16 h-16 mx-auto">
                    <FireIcon
                      weight="duotone"
                      className="size-16 text-primary animate-pulse"
                    />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  </div>

                  {/* Headline */}
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                      Stop Bleeding.{" "}
                      <span className="text-transparent bg-linear-to-r from-primary to-destructive bg-clip-text">
                        Start Healing. Build Your Authority.
                      </span>
                    </h3>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                      Schedule your strategy call{" "}
                      <span className="text-destructive font-bold">
                        before someone else in your niche does.
                      </span>
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button size="lg" className="hover:scale-105">
                      Book Your Strategy Call
                      <ArrowRightIcon className="size-5" />
                    </Button>
                  </div>

                  {/* Urgency Indicator */}
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground italic">
                      ⚡ Limited slots available this month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
