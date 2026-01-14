import { useEffect, useState } from "react";
import { CtaButton } from "./CtaButton";

export function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent >= 35);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="mobile-sticky-cta">
      <CtaButton className="w-full" />
    </div>
  );
}
