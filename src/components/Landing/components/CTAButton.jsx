import React from 'react';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

const CTAButton = ({ 
    variant = 'primary', 
    onClick, 
    children, 
    className = '' 
}) => {
    const buttonConfig = DESIGN_SYSTEM.components.buttons.cta;
    
    const getButtonStyles = () => {
        const baseStyles = {
            minWidth: buttonConfig.minWidth,
            padding: buttonConfig.padding,
            border: 'none',
            borderRadius: buttonConfig.borderRadius,
            fontSize: DESIGN_SYSTEM.typography.fontSize.base,
            fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
            cursor: 'pointer',
            transition: DESIGN_SYSTEM.transitions.normal,
            textTransform: buttonConfig.textTransform,
            letterSpacing: buttonConfig.letterSpacing,
        };

        if (variant === 'primary') {
            return {
                ...baseStyles,
                background: DESIGN_SYSTEM.colors.primary.hover,
                color: DESIGN_SYSTEM.colors.text.inverse,
                boxShadow: DESIGN_SYSTEM.shadows.button,
            };
        }

        return {
            ...baseStyles,
            backgroundColor: DESIGN_SYSTEM.colors.background.buttonSecondary,
            color: DESIGN_SYSTEM.colors.text.light,
        };
    };

    return (
        <button 
            className={`cta-${variant} ${className}`}
            onClick={onClick}
            style={getButtonStyles()}
        >
            {children}
        </button>
    );
};

export default CTAButton;
