import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Squares from "@/components/Squares";
import {
  CalendarMinusIcon,
  PlayIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function HeroSection() {
  return (
    <section className="section py-12 relative overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#006666"
          hoverFillColor="rgba(255, 102, 0, 0.05)"
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background/60 pointer-events-none" />

      {/* Container Layer */}
      <div className="container relative">
        {/* Content Layer - Hero gets max-w-6xl for wide visuals */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Logo */}
          <div className="text-center">
            <Image
              src="/images/organic-os-logo.png"
              alt="OrganicOS"
              width={200}
              height={67}
              priority
              className="h-14 w-auto mx-auto"
            />
          </div>

          {/* Main Headline + Subheadline */}
          <div className="text-center space-y-6 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              300,000,000+ views & 25,000+ inbound leads.{" "}
              <span className="bg-linear-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
                We did it in
              </span>{" "}
              <br />
              <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                one short form video.
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold underline">That's our impact.</span> We
              build organic media systems so that you can focus on what you do
              best.
            </p>
          </div>

          {/* VSL Video */}
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden bg-muted border-2 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20">
                  {/* Video Placeholder with Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6 p-8">
                      {/* Large Play Button */}
                      <button className="group relative w-24 h-24 md:w-28 md:h-28 mx-auto bg-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-primary/50">
                        <PlayIcon
                          weight="fill"
                          className="size-12 md:size-14 text-primary-foreground ml-1 group-hover:scale-110 transition-transform"
                        />
                        {/* Pulse Animation Ring */}
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                      </button>

                      {/* Video Title */}
                      <div className="space-y-2">
                        <p className="text-xl md:text-2xl font-bold text-foreground">
                          Watch: How We Generated 300M+ Views
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground">
                          See the exact strategy we use to build authority for
                          our clients
                        </p>
                      </div>

                      {/* Video Duration Badge */}
                      <Badge className="bg-background/90 backdrop-blur-sm text-foreground border-border">
                        <ClockIcon className="size-4 mr-2" />
                        3:47 min
                      </Badge>
                    </div>
                  </div>

                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/40" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="hover:scale-105">
                <CalendarMinusIcon className="size-5" />
                Book Your Strategy Call
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircleIcon
                  weight="fill"
                  className="size-5 text-primary"
                />
                <span className="font-medium">No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon
                  weight="fill"
                  className="size-5 text-primary"
                />
                <span className="font-medium">Free Strategy Session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon
                  weight="fill"
                  className="size-5 text-primary"
                />
                <span className="font-medium">Results-Driven Approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
