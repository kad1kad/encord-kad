// This file adds polyfills for Safari compatibility
if (typeof window !== 'undefined') {
  // IntersectionObserver polyfill for Safari
  if (!('IntersectionObserver' in window) || 
      !('IntersectionObserverEntry' in window) || 
      !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
    import('intersection-observer');
  }
  
  // ResizeObserver polyfill for Safari
  if (!('ResizeObserver' in window)) {
    import('resize-observer-polyfill');
  }
}
