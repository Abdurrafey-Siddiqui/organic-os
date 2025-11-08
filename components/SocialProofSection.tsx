import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, TrendUpIcon } from "@phosphor-icons/react/dist/ssr";

interface ClientTransformation {
  name: string;
  industry: string;
  before: {
    views: string;
    leads: string;
    status: string;
  };
  after: {
    views: string;
    leads: string;
    status: string;
  };
  timeframe: string;
}

const transformations: ClientTransformation[] = [
  {
    name: "Sarah Mitchell",
    industry: "Real Estate Agent",
    before: {
      views: "2,000",
      leads: "3-5",
      status: "Posting inconsistently",
    },
    after: {
      views: "850,000",
      leads: "120+",
      status: "Market authority",
    },
    timeframe: "90 days",
  },
  {
    name: "Marcus Chen",
    industry: "Financial Advisor",
    before: {
      views: "5,000",
      leads: "8-10",
      status: "Struggling to stand out",
    },
    after: {
      views: "1,200,000",
      leads: "200+",
      status: "Industry thought leader",
    },
    timeframe: "120 days",
  },
  {
    name: "Jennifer Rodriguez",
    industry: "Business Coach",
    before: {
      views: "1,500",
      leads: "2-4",
      status: "Chasing prospects",
    },
    after: {
      views: "950,000",
      leads: "180+",
      status: "Inbound only",
    },
    timeframe: "75 days",
  },
  {
    name: "David Thompson",
    industry: "Tech Consultant",
    before: {
      views: "3,000",
      leads: "5-7",
      status: "Invisible in market",
    },
    after: {
      views: "1,500,000",
      leads: "250+",
      status: "Go-to expert",
    },
    timeframe: "100 days",
  },
  {
    name: "Amanda Brooks",
    industry: "Fitness Entrepreneur",
    before: {
      views: "8,000",
      leads: "10-15",
      status: "Generic content",
    },
    after: {
      views: "2,100,000",
      leads: "340+",
      status: "Category leader",
    },
    timeframe: "110 days",
  },
  {
    name: "Robert Kim",
    industry: "Legal Services",
    before: {
      views: "1,000",
      leads: "1-3",
      status: "Zero visibility",
    },
    after: {
      views: "780,000",
      leads: "150+",
      status: "Recognized authority",
    },
    timeframe: "85 days",
  },
  {
    name: "Lisa Anderson",
    industry: "E-commerce Owner",
    before: {
      views: "4,000",
      leads: "6-8",
      status: "Lost in the noise",
    },
    after: {
      views: "1,800,000",
      leads: "290+",
      status: "Brand powerhouse",
    },
    timeframe: "95 days",
  },
  {
    name: "Michael Foster",
    industry: "Marketing Agency",
    before: {
      views: "6,000",
      leads: "12-15",
      status: "Struggling to scale",
    },
    after: {
      views: "2,500,000",
      leads: "420+",
      status: "Market dominator",
    },
    timeframe: "130 days",
  },
  {
    name: "Emma Wilson",
    industry: "Healthcare Provider",
    before: {
      views: "2,500",
      leads: "4-6",
      status: "Regional unknown",
    },
    after: {
      views: "1,100,000",
      leads: "210+",
      status: "National presence",
    },
    timeframe: "105 days",
  },
  {
    name: "James Patterson",
    industry: "SaaS Founder",
    before: {
      views: "7,000",
      leads: "15-20",
      status: "Paid ads dependent",
    },
    after: {
      views: "3,200,000",
      leads: "580+",
      status: "Organic growth engine",
    },
    timeframe: "140 days",
  },
];

export default function SocialProofSection() {
  return (
    <section className="section bg-linear-to-b from-background via-muted/10 to-background">
      <div className="container">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-base px-4 py-2">
              Real Results. Real People.
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              They Went From{" "}
              <span className="text-muted-foreground">Invisible</span> To{" "}
              <span className="text-transparent bg-linear-to-r from-secondary via-primary to-primary bg-clip-text">
                Unstoppable
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              These professionals were exactly where you are now. Here's what
              happened when they stopped waiting.
            </p>
          </div>

          {/* Transformations Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {transformations.map((client, index) => (
              <Card
                key={index}
                className="border-primary/20 bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    {/* Client Info */}
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {client.name}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {client.industry}
                      </p>
                    </div>

                    {/* Before & After Comparison */}
                    <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
                      {/* BEFORE */}
                      <div className="space-y-3">
                        <div className="text-center">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                            Before
                          </p>
                          <div className="p-5 md:p-6 rounded-lg bg-destructive/5 border border-destructive/20">
                            <div className="space-y-3">
                              <div>
                                <p className="text-3xl md:text-4xl font-bold text-destructive leading-none">
                                  {client.before.views}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  views/month
                                </p>
                              </div>
                              <div>
                                <p className="text-2xl md:text-3xl font-bold text-destructive/80 leading-none">
                                  {client.before.leads}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  leads/month
                                </p>
                              </div>
                              <div className="pt-3 border-t border-destructive/20">
                                <p className="text-xs text-muted-foreground italic">
                                  {client.before.status}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ARROW */}
                      <div className="flex justify-center">
                        <ArrowRightIcon
                          weight="bold"
                          className="size-10 text-primary"
                        />
                      </div>

                      {/* AFTER */}
                      <div className="space-y-3">
                        <div className="text-center">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                            After
                          </p>
                          <div className="p-5 md:p-6 rounded-lg bg-linear-to-br bg-primary/10 border-2 border-primary/30 shadow-lg">
                            <div className="space-y-3">
                              <div>
                                <p className="text-3xl md:text-4xl font-bold text-primary leading-none">
                                  {client.after.views}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  views/month
                                </p>
                              </div>
                              <div>
                                <p className="text-2xl md:text-3xl font-bold text-primary leading-none">
                                  {client.after.leads}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  leads/month
                                </p>
                              </div>
                              <div className="pt-3 border-t border-primary/30">
                                <p className="text-xs text-foreground font-semibold">
                                  {client.after.status}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeframe Badge */}
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <TrendUpIcon
                        weight="bold"
                        className="size-5 text-secondary"
                      />
                      <p className="text-sm md:text-base font-semibold text-secondary">
                        Transformed in {client.timeframe}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-6 pt-8">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Your transformation starts the moment you decide.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              These numbers aren't special. They're what happens when{" "}
              <span className="text-primary font-semibold">
                visibility meets strategy.
              </span>
            </p>
            <div className="pt-4">
              <Button size="lg" className="hover:scale-105">
                Book Your Strategy Call
                <ArrowRightIcon className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
