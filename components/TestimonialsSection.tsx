import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted By Industry Leaders Across{" "}
            <span className="text-primary">The Middle East & Beyond</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "OrganicOS transformed our entire content strategy. We went from
                struggling for visibility to becoming the authority everyone
                reaches out to. The inbound leads alone paid for itself 10x
                over."
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                  AH
                </div>
                <div>
                  <div className="font-semibold">Ahmed Hassan</div>
                  <div className="text-sm text-muted-foreground">
                    CEO, Real Estate Firm
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Finally, an agency that understands business outcomes. They
                don't just make pretty videos — they build systems that generate
                revenue. Our leads increased by 400% in just 3 months."
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                  SM
                </div>
                <div>
                  <div className="font-semibold">Sarah Mohammed</div>
                  <div className="text-sm text-muted-foreground">
                    Founder, Tech Startup
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Working with OrganicOS feels like having an in-house media team
                that actually cares about results. They think like owners, not
                vendors. Best decision we made for our brand."
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                  KA
                </div>
                <div>
                  <div className="font-semibold">Khalid Al-Rashid</div>
                  <div className="text-sm text-muted-foreground">
                    Director, Automotive Group
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
