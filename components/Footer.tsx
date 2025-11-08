import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/organic-os-logo.png"
              alt="OrganicOS"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 OrganicOS. Building authority, reach, and revenue for
            industry leaders.
          </p>
        </div>
      </div>
    </footer>
  );
}
