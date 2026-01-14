import { LANDER_CONFIG } from "@/config/lander";
import { CtaButton } from "./CtaButton";

export function ExplanationSection() {
  return (
    <section>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">
            A browser that works with your PC — not against it.
          </h2>
          
          <p className="section-subtitle mx-auto mb-10">
            {LANDER_CONFIG.BRAND_NAME} gives you built-in tools to manage how much of your system resources the browser can use. Set limits, prioritize gaming, and browse without compromise.
          </p>
          
          {/* Feature highlights */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="card-elevated p-6 text-left">
              <div className="text-primary font-semibold text-lg mb-2">
                Designed for Multitasking
              </div>
              <p className="text-muted-foreground text-sm">
                Keep your streams, Discord, and guides open without impacting game performance.
              </p>
            </div>
            
            <div className="card-elevated p-6 text-left">
              <div className="text-primary font-semibold text-lg mb-2">
                Built-in VPN Available
              </div>
              <p className="text-muted-foreground text-sm">
                Access region-locked content with the optional VPN feature included in the browser.*
              </p>
            </div>
          </div>
          
          <CtaButton showVpnDisclaimer />
        </div>
      </div>
    </section>
  );
}
