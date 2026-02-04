import { Check, GraduationCap, Users, Heart, Building } from "lucide-react";

const solutions = [
  {
    icon: GraduationCap,
    title: "For Teachers",
    points: [
      "Automated lesson planning and content creation",
      "Smart grading and assessment tools",
      "Real-time student progress tracking",
      "Reduced administrative workload",
    ],
  },
  {
    icon: Users,
    title: "For Students",
    points: [
      "Personalized learning paths",
      "Interactive AI-powered study materials",
      "Instant doubt resolution",
      "Progress tracking and achievements",
    ],
  },
  {
    icon: Heart,
    title: "For Parents",
    points: [
      "Real-time attendance notifications",
      "Academic progress updates",
      "Direct communication with teachers",
      "Fee and event reminders",
    ],
  },
  {
    icon: Building,
    title: "For Management",
    points: [
      "Comprehensive analytics dashboard",
      "Automated administrative tasks",
      "Staff performance insights",
      "Financial and operational reports",
    ],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-gradient-to-b from-background to-muted/30 py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Solutions for Schools</h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-muted-foreground">
            Tailored AI solutions for every stakeholder in the education ecosystem
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <solution.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{solution.title}</h3>
              </div>
              <ul className="space-y-2">
                {solution.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="h-2.5 w-2.5 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
