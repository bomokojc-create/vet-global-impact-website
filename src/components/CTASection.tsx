import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Join Our Mission
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you are a veteran seeking community, a supporter wanting to make
            a difference, or an organization looking to partner, there is a place
            for you at VET Global Impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Donate Today
            </Link>
            <Link
              href="/get-involved"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
            >
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
