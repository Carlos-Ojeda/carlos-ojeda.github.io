import React, { useCallback } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import HeroSection from './components/HeroSection';
import ScrollIndicator from './components/ScrollIndicator';
import LanguageSelector from '../LanguageSelector';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { DESIGN_SYSTEM } from '../../config/designSystem';

const Landing = () => {
    const { scrollToSection } = useSmoothScroll();
    const landingConfig = DESIGN_SYSTEM.components.landing;
    
    const handleLearnMore = useCallback(() => {
        scrollToSection('about-me');
    }, [scrollToSection]);

    const handleExplore = useCallback(() => {
        scrollToSection('projects');
    }, [scrollToSection]);

    return (
        <div 
            className="landing" 
            id="landing"
            style={{
                height: landingConfig.height,
                maxHeight: landingConfig.maxHeight,
            }}
        >
            <div 
                className="landing-language-selector"
                style={{
                    position: 'absolute',
                    top: landingConfig.languageSelectorTop,
                    right: landingConfig.languageSelectorRight,
                    zIndex: DESIGN_SYSTEM.zIndex.modal,
                }}
            >
                <LanguageSelector />
            </div>
            
            <ParticlesBackground />

            <div 
                className="landing-content"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: landingConfig.contentMaxWidth,
                    padding: landingConfig.contentPadding,
                    width: '100%',
                    marginBottom: landingConfig.contentBottomMargin,
                }}
            >
                <HeroSection 
                    onLearnMore={handleLearnMore}
                    onExplore={handleExplore}
                />
            </div>
            
            <ScrollIndicator onClick={handleLearnMore} />
        </div>
    );
};

export default Landing;