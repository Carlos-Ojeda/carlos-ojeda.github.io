import React from 'react';
import { useTranslations } from '../../../hooks/useTranslations';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

const ScrollIndicator = ({ onClick }) => {
    const { t } = useTranslations();
    const landingConfig = DESIGN_SYSTEM.components.landing;

    return (
        <div 
            className="scroll-indicator" 
            onClick={onClick}
            style={{
                position: 'absolute',
                bottom: landingConfig.scrollIndicatorBottom,
                cursor: 'pointer',
                zIndex: 2,
                opacity: 0,
                animation: `fadeInUp ${DESIGN_SYSTEM.components.animations.fadeInDuration} ${landingConfig.fadeInDelay.scrollIndicator} forwards`,
                transition: DESIGN_SYSTEM.transitions.normal,
            }}
        >
            <div 
                className="scroll-arrow"
                style={{
                    width: landingConfig.scrollArrowWidth,
                    height: landingConfig.scrollArrowHeight,
                    background: DESIGN_SYSTEM.gradients.scrollArrow,
                    margin: `0 auto ${landingConfig.scrollArrowMargin}`,
                    animation: `scrollBounce ${DESIGN_SYSTEM.components.animations.scrollBounceDuration} ${landingConfig.fadeInDelay.scrollArrow}`,
                }}
            ></div>
            <span
                style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize.sm,
                    color: DESIGN_SYSTEM.colors.text.veryLight,
                    fontWeight: DESIGN_SYSTEM.typography.fontWeight.normal,
                }}
            >
                {t('common.scrollToExplore')}
            </span>
        </div>
    );
};

export default ScrollIndicator;
