import { Target, Heart, Lightbulb, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge the gap between military service and global humanitarian impact, supporting veterans in their transition while empowering youth in the DRC with technology skills for a brighter future.",
  },
  {
    icon: Heart,
    title: "Veteran Support",
    description:
      "We provide comprehensive support for U.S. veterans, helping them find purpose and community beyond their service through mentorship, resources, and global engagement opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Youth Tech Training",
    description:
      "Our programs in the Democratic Republic of Congo equip young people with cutting-edge technology skills, creating pathways to employment and entrepreneurship.",
  },
  {
    icon: Handshake,
    title: "Community Building",
    description:
      "We foster meaningful connections between veterans and global communities, creating a network of support, mentorship, and shared purpose that transcends borders.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6">
            Creating Impact Through Service
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            VET Global Impact connects the discipline and dedication of military
            veterans with communities in need, creating lasting change on both
            sides of the equation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
