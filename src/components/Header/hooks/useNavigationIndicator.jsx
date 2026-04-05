import { useCallback, useEffect, useRef, useState } from 'react';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

export const useNavigationIndicator = (activeKey) => {
    const menuRailRef = useRef(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0, top: 0, height: 0 });

    const computeIndicatorForElement = useCallback((element) => {
        if (!element || !menuRailRef.current) {
            return { left: 0, width: 0, top: 0, height: 0 };
        }
        const rail = menuRailRef.current;
        const railRect = rail.getBoundingClientRect();
        const itemRect = element.getBoundingClientRect();
        const insetY = 0; // match full item height

        // Measure the inner content (text) to center the pill around it
        const contentEl = element.querySelector('.ant-menu-title-content') || element.querySelector('a') || element;
        const contentRect = contentEl.getBoundingClientRect();
        const extraPadX = DESIGN_SYSTEM.components.header.indicatorPadding; // horizontal breathing space around the text (wider pill)

        const contentLeft = Math.max(0, contentRect.left - railRect.left);
        const contentWidth = Math.max(0, contentRect.width);

        const nextLeft = Math.max(0, contentLeft - extraPadX);
        const nextWidth = Math.max(0, contentWidth + extraPadX * 2);
        const nextHeight = Math.max(0, itemRect.height - insetY * 2);
        const nextTop = Math.max(0, itemRect.top - railRect.top + insetY);
        return { left: nextLeft, width: nextWidth, top: nextTop, height: nextHeight };
    }, []);

    useEffect(() => {
        const rail = menuRailRef.current;
        if (!rail) return;
        const menuElement = rail.querySelector('.ant-menu');
        if (!menuElement) return;

        const setToActive = () => {
            const selected = menuElement.querySelector('.ant-menu-item-selected');
            const fallback = menuElement.querySelector('.ant-menu-item');
            const geom = computeIndicatorForElement(selected || fallback);
            setIndicator(geom);
        };

        setToActive();

        const handleResize = () => setToActive();
        window.addEventListener('resize', handleResize);

        const handleMouseOver = (event) => {
            const targetItem = event.target.closest('.ant-menu-item');
            if (targetItem && menuElement.contains(targetItem)) {
                const geom = computeIndicatorForElement(targetItem);
                setIndicator(geom);
            }
        };

        const handleMouseLeave = () => setToActive();

        menuElement.addEventListener('mouseover', handleMouseOver);
        menuElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            menuElement.removeEventListener('mouseover', handleMouseOver);
            menuElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [activeKey, computeIndicatorForElement]);

    return { menuRailRef, indicator };
};
