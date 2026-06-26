import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VET Global Impact terms of service and usage guidelines.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Last updated: June 2026
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using vetglobalimpact.com, you accept and agree to be
                bound by these terms. If you do not agree, please do not use this website.
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Use of Website</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This website is provided for informational purposes about VET Global Impact
                and its programs. Content may not be reproduced without permission.
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Donations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All donations are voluntary and tax-deductible as allowed by law.
                VET Global Impact is a registered 501(c)(3) non-profit organization.
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                VET Global Impact provides this website on an as-is basis without
                warranties of any kind. We are not liable for any damages arising
                from use of this website.
              </p>
              <h2 className="text-xl font-bold text-primary mt-8 mb-4">Contact</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about these terms, please contact us at
                info@vetglobalimpact.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
