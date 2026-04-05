import React from 'react';
import { Button, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useTranslations } from '../../../hooks/useTranslations';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

const MobileNavigation = ({ 
    isDrawerOpen, 
    setIsDrawerOpen, 
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
        <>
            <Button
                className="mobile-menu-button"
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open navigation menu"
            />
            <Drawer
                className="mobile-drawer"
                placement="right"
                closable
                onClose={() => setIsDrawerOpen(false)}
                open={isDrawerOpen}
                zIndex={DESIGN_SYSTEM.zIndex.drawer}
                bodyStyle={{ padding: 0 }}
            >
                <Menu
                    mode="inline"
                    onClick={onMenuClick}
                    selectedKeys={activeKey ? [activeKey] : []}
                    items={menuItems}
                />
            </Drawer>
        </>
    );
};

export default MobileNavigation;
