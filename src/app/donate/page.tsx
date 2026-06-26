import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Heart, Shield, CheckCircle, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support VET Global Impact's mission to empower veterans and train youth in DRC. Every donation makes a difference.",
};

const donationLevels = [
  {
    amount: "$25",
    title: "Supporter",
    description: "Provides one week of internet access for a student in DRC.",
  },
  {
    amount: "$50",
    title: "Advocate",
    description: "Covers training materials for one youth participant.",
  },
  {
    amount: "$100",
    title: "Champion",
    description: "Sponsors one month of instruction for a student.",
  },
  {
    amount: "$250",
    title: "Leader",
    description: "Funds equipment for a technology training station.",
  },
  {
    amount: "$500",
    title: "Visionary",
    description: "Supports a full semester of training for one student.",
  },
  {
    amount: "Custom",
    title: "Your Choice",
    description: "Every amount helps us expand our programs and reach.",
  },
];

export default function DonatePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Make a Difference Today
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Your generous donation directly supports veteran programs and youth
              technology education in the Democratic Republic of Congo.
            </p>
          </div>
        </section>

        {/* Donation Levels */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Choose Your Impact Level
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                100% of your donation goes directly to program support. We are
                committed to transparent stewardship of every dollar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {donationLevels.map((level) => (
                <div
                  key={level.title}
                  className="bg-warm rounded-2xl p-8 text-center hover:shadow-md transition-shadow border border-transparent hover:border-accent/20"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {level.amount}
                  </div>
                  <h3 className="font-semibold text-accent-dark text-lg mb-3">
                    {level.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{level.description}</p>
                </div>
              ))}
            </div>

            {/* Donate CTA */}
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <DollarSign className="w-5 h-5" />
                Donate Now
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                Contact us to arrange your donation. Online payment portal coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary">
                  Your Trust, Our Commitment
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Registered 501(c)(3) non-profit organization",
                  "100% transparent financial reporting",
                  "Tax-deductible donations",
                  "Regular impact updates to donors",
                  "Annual audited financial statements",
                  "Direct program funding (minimal overhead)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
