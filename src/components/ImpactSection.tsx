"use client";

import { TrendingUp, BookOpen, Globe2, Award } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    metric: "85%",
    label: "Veterans report improved well-being",
    description: "Through our support programs and community connections",
  },
  {
    icon: BookOpen,
    metric: "200+",
    label: "Youth trained in technology",
    description: "In web development, data science, and digital literacy",
  },
  {
    icon: Globe2,
    metric: "3",
    label: "Cities in DRC reached",
    description: "Kinshasa, Lubumbashi, and expanding",
  },
  {
    icon: Award,
    metric: "95%",
    label: "Program completion rate",
    description: "Demonstrating strong engagement and results",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6">
            Measurable Change, Real Lives
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every number represents a life transformed, a community strengthened,
            and a future made brighter through our collective efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact) => (
            <div
              key={impact.label}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <impact.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {impact.metric}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {impact.label}
              </h3>
              <p className="text-sm text-gray-500">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-warm rounded-2xl p-6 md:p-8 border border-primary/10">
            <div className="text-left">
              <p className="font-semibold text-primary text-lg">
                Want to see our full impact report?
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Download our annual report for detailed insights into our programs.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              Request Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
