import { MessageSquare, FileCheck, BookOpen, LayoutDashboard, FileBarChart } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: MessageSquare,
    title: "AttendanceAI",
    subtitle: "WhatsApp Integration",
    description: "Automated attendance tracking with instant WhatsApp notifications to parents and management.",
  },
  {
    icon: FileCheck,
    title: "ExamAI",
    subtitle: "Automated Assessment",
    description: "AI-powered exam creation, grading, and comprehensive performance analytics.",
  },
  {
    icon: BookOpen,
    title: "ClassroomAI",
    subtitle: "AI Study Content",
    description: "Personalized learning materials and interactive content tailored to each student's needs.",
  },
  {
    icon: LayoutDashboard,
    title: "PrincipalAI",
    subtitle: "Dashboard",
    description: "Real-time insights and comprehensive school management dashboard for principals.",
  },
  {
    icon: FileBarChart,
    title: "AdminAI",
    subtitle: "AI Reports",
    description: "Intelligent reporting and administrative automation for seamless school operations.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-card py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Core Features</h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-muted-foreground">
            Comprehensive AI solutions designed for modern schools
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <Image
            src="/4-20wheels.jpeg"
            alt="AI9CAMPUS ecosystem showing PrincipalAI Dashboard at center connected to AttendanceAI, AdminAI, ClassroomAI, and ExamAI modules"
            width={700}
            height={525}
            className="w-full max-w-3xl rounded-2xl shadow-xl ring-1 ring-border/50"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-background p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
              <p className="mb-1 text-xs font-semibold text-accent">{feature.subtitle}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
