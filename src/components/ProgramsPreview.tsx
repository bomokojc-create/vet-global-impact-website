import Link from "next/link";
import { Monitor, Shield, Users, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Shield,
    title: "Veteran Transition Support",
    description:
      "Comprehensive programs helping veterans transition to civilian life with purpose, community connections, and professional development opportunities.",
    color: "bg-primary/5",
    iconBg: "bg-primary/10",
  },
  {
    icon: Monitor,
    title: "Youth Tech Academy (DRC)",
    description:
      "Intensive technology training for youth in the Democratic Republic of Congo, covering web development, data analytics, and digital entrepreneurship.",
    color: "bg-accent/5",
    iconBg: "bg-accent/10",
  },
  {
    icon: Users,
    title: "Global Mentorship Network",
    description:
      "Connecting veterans with youth mentees across borders, creating meaningful relationships that foster growth, leadership, and cultural exchange.",
    color: "bg-primary/5",
    iconBg: "bg-primary/10",
  },
];

export default function ProgramsPreview() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">
              How We Make a Difference
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-primary/20"
            >
              <div
                className={`w-14 h-14 ${program.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <program.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.description}
              </p>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
