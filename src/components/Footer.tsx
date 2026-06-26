import Link from "next/link";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Patriotic stripe */}
      <div className="patriotic-stripe"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-lg">VET Global Impact</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering U.S. veterans and transforming lives through technology
              education in the Democratic Republic of Congo.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 text-green-300 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              501(c)(3) Non-Profit
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Programs", href: "/programs" },
                { name: "Get Involved", href: "/get-involved" },
                { name: "Donate", href: "/donate" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Our Programs</h3>
            <ul className="space-y-3">
              {[
                "Veteran Support Services",
                "Youth Tech Training (DRC)",
                "Community Development",
                "Mentorship Programs",
              ].map((program) => (
                <li key={program} className="text-gray-300 text-sm">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span>info@vetglobalimpact.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>Texas, United States</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span>Contact via form</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            \u00a9 {new Date().getFullYear()} VET Global Impact. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-accent" /> for impact
          </p>
        </div>
      </div>
    </footer>
  );
}
