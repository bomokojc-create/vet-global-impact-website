import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Monitor, Globe2 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Veteran Support",
    description: "Comprehensive transition assistance, mental health resources, and community building for those who served.",
    image: "https://images.unsplash.com/photo-1529342877123-e6898e646846?q=80&w=800&auto=format&fit=crop",
    alt: "Veterans supporting each other",
  },
  {
    icon: Monitor,
    title: "Youth Tech Training",
    description: "Cutting-edge technology education for youth in the DRC \u2014 web development, data science, and more.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    alt: "Youth learning technology",
  },
  {
    icon: Globe2,
    title: "Global Bridge",
    description: "Connecting veteran mentors with young learners across continents for lasting impact.",
    image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=800&auto=format&fit=crop",
    alt: "Global connection and mentorship",
  },
];

export default function FeaturedBanner() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00379A]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#E21833] font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Our Focus Areas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00379A] leading-tight">
            Three Pillars of Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00379A]/20"
            >
              <div className="relative h-52 md:h-48 lg:h-56 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-5 h-5 text-[#00379A]" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#00379A] mb-2 group-hover:text-[#E21833] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E21833] hover:text-[#00379A] transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
