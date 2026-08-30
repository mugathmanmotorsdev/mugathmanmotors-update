declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function getFbq(): ((...args: unknown[]) => void) | null {
  if (typeof window === "undefined") return null;
  if (typeof window.fbq !== "function") return null;
  return window.fbq;
}

export function trackPageView(): void {
  const fbq = getFbq();
  if (!fbq || !PIXEL_ID) return;
  fbq("track", "PageView");
}

export function trackViewContent(product: { slug: string; name: string }): void {
  const fbq = getFbq();
  if (!fbq || !PIXEL_ID) return;
  fbq("track", "ViewContent", {
    content_ids: [product.slug],
    content_name: product.name,
    content_type: "product",
  });
}

export function trackLead(): void {
  const fbq = getFbq();
  if (!fbq || !PIXEL_ID) return;
  fbq("track", "Lead");
}