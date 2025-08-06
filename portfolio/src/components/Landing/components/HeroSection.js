import React from 'react';
import SaluteAnimation from '../SaluteAnimation/SaluteAnimation';
import CTAButton from './CTAButton';
import { useTranslations } from '../../../hooks/useTranslations';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

const HeroSection = ({ onLearnMore, onExplore }) => {
    const { t } = useTranslations();
    const landingConfig = DESIGN_SYSTEM.components.landing;

    return (
        <div className="hero-section">
            <SaluteAnimation word={t('landing.greeting')}/>
            <h2 
                className="subtitle"
                style={{
                    fontSize: DESIGN_SYSTEM.typography.fontSize.xl,
                    color: DESIGN_SYSTEM.colors.text.light,
                    margin: `${DESIGN_SYSTEM.spacing.lg} 0`,
                    fontWeight: DESIGN_SYSTEM.typography.fontWeight.normal,
                    lineHeight: DESIGN_SYSTEM.typography.lineHeight.tight,
                    opacity: 0,
                    animation: `fadeInUp ${DESIGN_SYSTEM.components.animations.fadeInDuration} ${landingConfig.fadeInDelay.subtitle} forwards`,
                }}
            >
                {t('landing.subtitle')}
            </h2>
            <p 
                className="description"
                style={{
                    color: DESIGN_SYSTEM.colors.text.veryLight,
                    maxWidth: '600px',
                    margin: `0 auto ${DESIGN_SYSTEM.spacing.xl}`,
                    fontSize: DESIGN_SYSTEM.typography.fontSize.lg,
                    lineHeight: DESIGN_SYSTEM.typography.lineHeight.relaxed,
                    opacity: 0,
                    animation: `fadeInUp ${DESIGN_SYSTEM.components.animations.fadeInDuration} ${landingConfig.fadeInDelay.description} forwards`,
                }}
            >
                {t('landing.description')}
            </p>
            
            <div 
                className="cta-buttons"
                style={{
                    display: 'flex',
                    gap: DESIGN_SYSTEM.spacing.lg,
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginTop: DESIGN_SYSTEM.spacing.xl,
                    opacity: 0,
                    animation: `fadeInUp ${DESIGN_SYSTEM.components.animations.fadeInDuration} ${landingConfig.fadeInDelay.buttons} forwards`,
                }}
            >
                <CTAButton variant="primary" onClick={onLearnMore}>
                    {t('common.learnMore')}
                </CTAButton>
                <CTAButton variant="secondary" onClick={onExplore}>
                    {t('common.exploreFreely')}
                </CTAButton>
            </div>
        </div>
    );
};

export default HeroSection;
