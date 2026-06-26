import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VET Global Impact privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Last updated: June 2026
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information you voluntarily provide when contacting us, donating,
                or signing up for our programs. This may include your name, email address,
                and message content.
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information solely to respond to inquiries, process donations,
                facilitate program participation, and send occasional updates about our work
                (with your consent).
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Data Protection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal
                information. We do not sell, trade, or share your data with third parties
                for marketing purposes.
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to access, correct, or delete your personal information
                at any time. Contact us at info@vetglobalimpact.com for any privacy-related
                requests.
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This website uses minimal, essential cookies for functionality. We do not
                use tracking cookies or third-party analytics that compromise your privacy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
