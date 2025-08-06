import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                const scrollPosition = window.scrollY + offset;
                let currentSection = sectionIds[0];

                // Check from bottom to top to get the most recent section
                for (let i = sectionIds.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sectionIds[i]);
                    if (section) {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.offsetHeight;
                        
                        // Check if scroll position is within this section
                        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                            currentSection = sectionIds[i];
                            break;
                        }
                        // If we're past the section, this is our current section
                        else if (scrollPosition >= sectionTop) {
                            currentSection = sectionIds[i];
                        }
                    }
                }

                setActiveSection(currentSection);
            }, 50); // Reduced throttle for better responsiveness
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [sectionIds, offset]);

    return activeSection;
}; 