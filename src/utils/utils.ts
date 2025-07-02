export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 1023;
}