import { useState } from "react";
import { LANDER_CONFIG } from "@/config/lander";
import { CtaButton } from "./CtaButton";

const footerLinks = [
  {
    title: "Privacy Policy",
    content: `Your privacy matters. ${LANDER_CONFIG.BRAND_NAME} collects minimal data necessary to provide its services. For complete privacy information, please visit the official Opera website.`,
  },
  {
    title: "Terms of Service",
    content: `By using ${LANDER_CONFIG.BRAND_NAME}, you agree to Opera's terms of service. This landing page is for informational purposes. Please review the official terms on Opera's website before downloading.`,
  },
];

export function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="section-container">
        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Ready to Game Better?
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Join millions of gamers who've made the switch.
          </p>
          <CtaButton variant="large" />
        </div>
        
        {/* Footer Links Accordion */}
        <div className="max-w-xl mx-auto mb-10">
          {footerLinks.map((link, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="footer-accordion-button"
                aria-expanded={openIndex === index}
              >
                <span>{link.title}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-sm text-muted-foreground animate-fade-in-up">
                  {link.content}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Disclaimer */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="disclaimer-text mb-4">
            This is an independent landing page. {LANDER_CONFIG.BRAND_NAME} is a trademark of Opera Software. We are not affiliated with, endorsed by, or sponsored by Opera Software. All product names, logos, and brands are property of their respective owners. No performance guarantees are made. Results may vary based on individual system configurations.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
