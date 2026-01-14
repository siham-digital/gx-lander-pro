import { LANDER_CONFIG, buildCtaUrl, trackCtaClick } from "@/config/lander";

interface CtaButtonProps {
  variant?: "default" | "header" | "large";
  className?: string;
}

export function CtaButton({ variant = "default", className = "" }: CtaButtonProps) {
  const handleClick = () => {
    trackCtaClick();
  };

  const baseClasses = {
    default: "cta-button",
    header: "cta-button-header",
    large: "cta-button-large",
  };

  return (
    <a
      href={buildCtaUrl(LANDER_CONFIG.CTA_URL)}
      onClick={handleClick}
      className={`${baseClasses[variant]} ${className}`}
      rel="noopener noreferrer"
    >
      {LANDER_CONFIG.CTA_TEXT}
    </a>
  );
}
