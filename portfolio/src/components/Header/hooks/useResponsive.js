import { useEffect, useState } from 'react';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

export const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth <= DESIGN_SYSTEM.components.header.mobileBreakpoint;
    });

    useEffect(() => {
        const handleBreakpoint = () => {
            setIsMobile(window.innerWidth <= DESIGN_SYSTEM.components.header.mobileBreakpoint);
        };
        
        handleBreakpoint();
        window.addEventListener('resize', handleBreakpoint);

        return () => {
            window.removeEventListener('resize', handleBreakpoint);
        };
    }, []);

    return { isMobile };
};
