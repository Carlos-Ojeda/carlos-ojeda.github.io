import { useCallback } from 'react';
import { ANIMATION_CONFIG } from '../config/constants';

export const useSmoothScroll = () => {
  const animateScrollTo = useCallback((toY, durationMs = ANIMATION_CONFIG.scrollDuration) => {
    const startY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const distance = toY - startY;
    if (Math.abs(distance) < 1) return;

    const startTime = performance.now();
    // Smoother curve: easeInOutQuint gives softer start/end with same duration
    const easeInOutQuint = (t) => (t < 0.5
      ? 16 * t * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 5) / 2);

    let rafId = 0;
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = easeInOutQuint(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);

    // Cancel on user interrupt (wheel/touch) to feel responsive
    const cancel = () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', cancel, { passive: true });
      window.removeEventListener('touchstart', cancel, { passive: true });
    };
    window.addEventListener('wheel', cancel, { passive: true });
    window.addEventListener('touchstart', cancel, { passive: true });
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const absoluteY = window.pageYOffset + rect.top;
      const header = document.querySelector('.site-page-header');
      const headerOffset = header ? header.offsetHeight / 2 : 0;
      const targetY = Math.max(0, absoluteY - headerOffset);
      animateScrollTo(targetY, ANIMATION_CONFIG.scrollDuration);
    }
  }, [animateScrollTo]);

  return {
    animateScrollTo,
    scrollToSection
  };
};
