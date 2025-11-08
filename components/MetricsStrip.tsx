export default function MetricsStrip() {
  return (
    <section className="py-12 border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary">
              300M+
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Organic Views
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary">
              25K+
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Leads Generated
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary">
              50+
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Success Stories
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary">
              5+
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Industries Dominated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
