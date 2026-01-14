import { LANDER_CONFIG } from "@/config/lander";
import { CtaButton } from "./CtaButton";

export function StickyHeader() {
  return (
    <header className="sticky-header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img
              src={LANDER_CONFIG.LOGO_URL}
              alt={LANDER_CONFIG.BRAND_NAME}
              className="h-8 w-auto"
              loading="eager"
            />
          </a>
          <CtaButton variant="header" />
        </div>
      </div>
    </header>
  );
}
