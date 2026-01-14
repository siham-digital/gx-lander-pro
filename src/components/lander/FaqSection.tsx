import { useState } from "react";
import { LANDER_CONFIG } from "@/config/lander";

const faqs = [
  {
    question: `Is ${LANDER_CONFIG.BRAND_NAME} free?`,
    answer: `Yes, ${LANDER_CONFIG.BRAND_NAME} is completely free to download and use. There are no hidden fees or premium versions required to access the core features like CPU and RAM limiters.`,
  },
  {
    question: "Does it affect gaming performance?",
    answer: "The browser is designed to minimize its footprint while gaming. With the built-in resource limiters, you can cap how much CPU and RAM it uses, helping your games run smoother when the browser is open.",
  },
  {
    question: "Do I need extensions?",
    answer: "Most essential features are built-in, including an ad blocker, VPN, and resource controls. However, the browser supports Chrome extensions if you need additional functionality.",
  },
  {
    question: "Is it hard to set up?",
    answer: "Not at all. Installation takes just a few minutes, and the browser guides you through the initial setup. You can import bookmarks and settings from your current browser automatically.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="faq-button"
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
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
                  <div className="faq-content animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
