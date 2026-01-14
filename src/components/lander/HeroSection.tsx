import { LANDER_CONFIG } from "@/config/lander";
import { CtaButton } from "./CtaButton";
import heroImage from "@/assets/hero-gaming-setup.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background glow effect */}
      <div className="hero-glow" aria-hidden="true" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              The Browser Built for <span className="text-primary text-glow">Gamers</span>
            </h1>
            
            <p className="section-subtitle mb-8 mx-auto lg:mx-0">
              Take control of your PC resources. {LANDER_CONFIG.BRAND_NAME} lets you limit CPU and RAM usage so your games run smoother.
            </p>
            
            {/* Benefit bullets */}
            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
              <li className="benefit-item">
                <svg className="benefit-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>CPU & RAM limiters for better performance</span>
              </li>
              <li className="benefit-item">
                <svg className="benefit-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Full control over your browsing experience</span>
              </li>
              <li className="benefit-item">
                <svg className="benefit-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Simple setup — ready in minutes</span>
              </li>
            </ul>
            
            {/* Soft credibility */}
            <p className="text-sm text-muted-foreground mb-8">
              Trusted by millions of gamers worldwide
            </p>
            
            <CtaButton />
          </div>
          
          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-lg overflow-hidden glow-primary-subtle">
              <img
                src={heroImage}
                alt="Gaming setup with performance monitoring"
                className="w-full h-auto rounded-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
