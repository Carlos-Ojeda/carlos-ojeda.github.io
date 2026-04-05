import React, { useCallback, useState } from 'react';
import { PageHeader } from 'antd';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useNavigationIndicator, useSmoothScroll, useResponsive } from './hooks';
import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
import { DESIGN_SYSTEM } from '../../config/designSystem';

const Header = () => {
    const sectionIds = ['landing', 'about-me', 'projects', 'skills', 'contact'];
    const activeKey = useScrollSpy(sectionIds, DESIGN_SYSTEM.components.header.scrollOffset);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { menuRailRef, indicator } = useNavigationIndicator(activeKey);
    const { scrollToSection } = useSmoothScroll();
    const { isMobile } = useResponsive();

    const handleMenuClick = useCallback(({ key }) => {
        scrollToSection(key);
        setIsDrawerOpen(false);
    }, [scrollToSection]);

    return (
        <div className="header-wrapper">
            <PageHeader
                className="site-page-header"
                title={<a href="#landing" className="brand-name">Carlos Ojeda</a>}
                avatar={{
                    src: 'https://avatars.githubusercontent.com/u/71744365?v=4',
                    size: DESIGN_SYSTEM.components.header.avatarSize
                }}
                extra={[
                    !isMobile && (
                        <DesktopNavigation
                            key="desktop-nav"
                            menuRailRef={menuRailRef}
                            indicator={indicator}
                            activeKey={activeKey}
                            onMenuClick={handleMenuClick}
                        />
                    ),
                    isMobile && (
                        <MobileNavigation
                            key="mobile-nav"
                            isDrawerOpen={isDrawerOpen}
                            setIsDrawerOpen={setIsDrawerOpen}
                            activeKey={activeKey}
                            onMenuClick={handleMenuClick}
                        />
                    )
                ].filter(Boolean)}
            />
        </div>
    );
};

export default Header;