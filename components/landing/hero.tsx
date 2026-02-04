import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI for Smart Learning and Seamless School Operations
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Personalized AI-powered learning content and intelligent automation for schools
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="default" className="gap-2 bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="default" variant="outline" className="bg-transparent px-6 text-sm font-semibold border-2 border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <Image
              src="/social-media-banner-hd.jpeg"
              alt="AI in Education - Modern classroom with students using laptops for AI-powered learning, featuring Future Starts Here digital display with AI brain graphic"
              width={700}
              height={700}
              className="w-full rounded-3xl shadow-2xl ring-1 ring-border/50 object-cover"
              priority
            />
            <div className="absolute -right-4 -top-4 -z-10 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
