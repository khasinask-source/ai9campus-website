import { Target, Zap, Clock } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "99.5%",
    label: "Accuracy",
    description: "AI-powered precision in all operations",
  },
  {
    icon: Zap,
    value: "80%",
    label: "Automation",
    description: "Reduced manual administrative tasks",
  },
  {
    icon: Clock,
    value: "15+ hrs",
    label: "Time Saved",
    description: "Per week per teacher on average",
  },
];

export function About() {
  return (
    <section id="about" className="bg-card py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Why AI9CAMPUS?</h2>
          <p className="mt-4 text-base text-muted-foreground">
            AI9CAMPUS is built by educators, for educators. Our platform combines cutting-edge 
            artificial intelligence with deep understanding of the Indian education system to 
            deliver solutions that truly make a difference.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl border border-border/50 bg-background p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-1 text-base font-bold text-foreground">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
