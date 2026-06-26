import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "VET Global Impact gave me a new sense of purpose after my service. Mentoring youth in technology in the DRC has been the most rewarding experience of my life.",
    name: "Marcus J.",
    role: "U.S. Army Veteran, Mentor",
  },
  {
    quote:
      "The tech training program changed my life completely. I now work as a web developer and can support my family. I am grateful for this opportunity.",
    name: "Patrick M.",
    role: "Program Graduate, Kinshasa",
  },
  {
    quote:
      "This organization truly understands the veteran experience and channels it into something beautiful. The global community they have built is incredible.",
    name: "Sarah T.",
    role: "U.S. Marine Corps Veteran",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
            Stories of Transformation
          </h2>
          <p className="text-blue-200 text-lg">
            Hear from the veterans and youth whose lives have been changed through
            our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-accent/60 mb-4" />
              <p className="text-blue-100 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-blue-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
