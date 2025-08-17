import { useCallback } from 'react';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

export const useSmoothScroll = () => {
    const animateScrollTo = useCallback((toY, durationMs = DESIGN_SYSTEM.components.animations.scrollDuration) => {
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

    const getHeaderOffset = useCallback(() => {
        const header = document.querySelector('.site-page-header');
        return header ? header.offsetHeight/2 : 0;
    }, []);

    const scrollToSection = useCallback((sectionKey) => {
        const element = document.getElementById(sectionKey);
        if (element) {
            const rect = element.getBoundingClientRect();
            const absoluteY = window.pageYOffset + rect.top;
            const targetY = Math.max(0, absoluteY - getHeaderOffset());
            animateScrollTo(targetY, DESIGN_SYSTEM.components.animations.scrollDuration);
        }
    }, [animateScrollTo, getHeaderOffset]);

    return { scrollToSection };
};
