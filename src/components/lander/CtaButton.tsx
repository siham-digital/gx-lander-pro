import { LANDER_CONFIG, buildCtaUrl, trackCtaClick } from "@/config/lander";

interface CtaButtonProps {
  variant?: "default" | "header" | "large";
  className?: string;
  showTrust?: boolean;
  showVpnDisclaimer?: boolean;
}

export function CtaButton({ 
  variant = "default", 
  className = "", 
  showTrust = false,
  showVpnDisclaimer = false 
}: CtaButtonProps) {
  const handleClick = () => {
    trackCtaClick();
  };

  const baseClasses = {
    default: "cta-button",
    header: "cta-button-header",
    large: "cta-button-large",
  };

  return (
    <div className="flex flex-col items-center">
      <a
        href={buildCtaUrl(LANDER_CONFIG.CTA_URL)}
        onClick={handleClick}
        className={`${baseClasses[variant]} ${className}`}
        rel="noopener noreferrer"
      >
        {LANDER_CONFIG.CTA_TEXT}
      </a>
      {(showTrust || showVpnDisclaimer) && (
        <div className="cta-trust-block">
          {showTrust && (
            <p className="cta-trust-text">Trusted by millions of gamers worldwide</p>
          )}
          {showVpnDisclaimer && (
            <p className="cta-disclaimer-text">
              * VPN feature availability and data limits may vary. Check official documentation for current terms.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
