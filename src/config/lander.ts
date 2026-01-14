// ============================================
// LANDER CONFIGURATION - EDIT THESE VALUES
// ============================================

export const LANDER_CONFIG = {
  // Brand Configuration
  LOGO_URL: "https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/logo/gx/opera-gx__logo--white.160608602ec9.svg",
  BRAND_NAME: "Opera GX",
  
  // CTA Configuration - Single destination URL for all CTAs
  CTA_URL: "https://osyvia.com/ogx/7155/",
  CTA_TEXT: "Download Opera GX",
  
  // A/B Testing
  PAGE_VARIANT: "A",
} as const;

// URL Parameter handling
export function buildCtaUrl(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl;
  
  const currentParams = new URLSearchParams(window.location.search);
  const targetUrl = new URL(baseUrl);
  
  // Parameters to preserve
  const paramsToPreserve = [
    'clickid',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'gclid',
    'fbclid',
  ];
  
  paramsToPreserve.forEach(param => {
    const value = currentParams.get(param);
    if (value && !targetUrl.searchParams.has(param)) {
      targetUrl.searchParams.set(param, value);
    }
  });
  
  return targetUrl.toString();
}

// Analytics tracking
export function trackCtaClick(): void {
  if (typeof window === 'undefined') return;
  
  const params = new URLSearchParams(window.location.search);
  
  // Initialize dataLayer if not exists
  (window as any).dataLayer = (window as any).dataLayer || [];
  
  (window as any).dataLayer.push({
    event: "lander_click",
    clickid: params.get('clickid') || '',
    utm_source: params.get('utm_source') || '',
    utm_campaign: params.get('utm_campaign') || '',
    page_variant: LANDER_CONFIG.PAGE_VARIANT,
  });
}

// Get tracking parameters for display/debug
export function getTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
}
