export function isMobile(): boolean {
  if (typeof window === 'undefined') return false; // segurança para SSR
  return window.innerWidth <= 768; // ou outro breakpoint que você quiser
}