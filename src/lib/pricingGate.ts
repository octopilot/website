import { createEffect, createMemo } from 'solid-js';
import { useLocation } from '@solidjs/router';

const PRICING_PARAM = 'show_pricing';
const STORAGE_KEY = 'show_pricing';
const COOKIE_NAME = 'show_pricing';

function hasPricingCookie(): boolean {
  if (typeof document === 'undefined' || !document.cookie) return false;
  return document.cookie.split(';').some((s) => s.trim() === `${COOKIE_NAME}=1`);
}

/**
 * Gate for the pricing page: visible when any of:
 * - URL has ?show_pricing=1
 * - Cookie show_pricing=1 (set by server when request has X-Show-Pricing: 1 header)
 * - sessionStorage was set (after visiting with param or cookie).
 * Used to hide pricing while finalizing; remove this gate when going public.
 */
export function usePricingVisible(): () => boolean {
  const location = useLocation();

  createEffect(() => {
    const q = new URLSearchParams(location.search);
    if (q.get(PRICING_PARAM) === '1' && typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
  });

  return createMemo(() => {
    const q = new URLSearchParams(location.search);
    const fromUrl = q.get(PRICING_PARAM) === '1';
    const fromStorage =
      typeof sessionStorage !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === '1';
    const fromCookie = hasPricingCookie();
    return fromUrl || fromStorage || fromCookie;
  });
}
