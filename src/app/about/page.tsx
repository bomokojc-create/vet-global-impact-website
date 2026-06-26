import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, Globe2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VET Global Impact's mission to support veterans and empower youth in the DRC through technology education.",
};

const team = [
  {
    name: "Founder",
    role: "Executive Director",
    bio: "A service-disabled veteran passionate about creating global impact through technology and community.",
  },
  {
    name: "Programs Director",
    role: "DRC Operations",
    bio: "Leading our youth tech training initiatives in Kinshasa and expanding our reach across the DRC.",
  },
  {
    name: "Veteran Liaison",
    role: "Veteran Services",
    bio: "Connecting veterans with mentorship and community engagement opportunities worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Our Story
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Founded by a U.S. veteran with roots in the Democratic Republic of Congo,
              VET Global Impact bridges two worlds through service, technology, and
              shared humanity.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-warm rounded-2xl p-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower U.S. veterans by providing purpose-driven community engagement
                  while simultaneously training youth in the Democratic Republic of Congo
                  with technology skills that create pathways to economic independence
                  and professional growth.
                </p>
              </div>
              <div className="bg-warm rounded-2xl p-10">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  A world where military service becomes a bridge to global humanitarian
                  impact, where veterans find renewed purpose, and where youth in
                  underserved communities gain the skills to build thriving futures
                  in the digital economy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Compassion", desc: "Leading with empathy in every interaction" },
                { icon: Users, title: "Community", desc: "Building bridges across borders and cultures" },
                { icon: Globe2, title: "Global Impact", desc: "Thinking globally while acting locally" },
                { icon: Award, title: "Excellence", desc: "Maintaining the highest standards of service" },
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                  <value.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-primary text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">
                Our Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center bg-warm rounded-2xl p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary/60" />
                  </div>
                  <h3 className="font-bold text-primary text-lg">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
