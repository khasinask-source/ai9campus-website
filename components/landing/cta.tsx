import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-12 lg:py-16">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-balance text-2xl font-extrabold tracking-tight text-primary-foreground sm:text-3xl">
          Ready to transform your school with AI?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85">
          Join hundreds of schools across India that are already using AI9CAMPUS to 
          revolutionize their learning and operations.
        </p>
        <div className="mt-6">
          <Button
            size="default"
            className="gap-2 bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/40 hover:scale-105"
          >
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="absolute left-1/4 top-0 -z-0 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 -z-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
    </section>
  );
}
