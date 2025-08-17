import React from 'react';
import { Menu } from 'antd';
import { useTranslations } from '../../../hooks/useTranslations';

const DesktopNavigation = ({ 
    menuRailRef, 
    indicator, 
    activeKey, 
    onMenuClick 
}) => {
    const { t } = useTranslations();

    const menuItems = [
        { key: 'landing', label: t('header.nav.home') },
        { key: 'about-me', label: t('header.nav.about') },
        { key: 'projects', label: t('header.nav.projects') },
        { key: 'skills', label: t('header.nav.skills') },
        { key: 'contact', label: t('header.nav.contact') }
    ];

    return (
        <div className="menu-rail" ref={menuRailRef}>
            <div
                className="menu-indicator"
                style={{ 
                    left: `${indicator.left}px`, 
                    width: `${indicator.width}px`, 
                    top: `${indicator.top}px`, 
                    height: `${indicator.height}px` 
                }}
            />
            <Menu
                className="header-menu"
                mode="horizontal"
                onClick={onMenuClick}
                selectedKeys={activeKey ? [activeKey] : []}
                items={menuItems}
            />
        </div>
    );
};

export default DesktopNavigation;
