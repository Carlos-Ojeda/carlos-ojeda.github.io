// ========================================
// CENTRALIZED DESIGN SYSTEM
// ========================================
// This file contains all design tokens and variables
// Modify values here to update the entire application

export const DESIGN_SYSTEM = {
  // ========================================
  // COLOR PALETTE
  // ========================================
  colors: {
    // Primary Colors
    primary: {
      main: '#1890ff',
      dark: '#096dd9',
      light: '#40a9ff',
      hover: 'rgba(9, 109, 217, 0.9)',
      shadow: 'rgba(24, 144, 255, 0.3)',
      shadowHover: 'rgba(24, 144, 255, 0.4)',
      indicator: 'rgba(24, 144, 255, 0.16)',
      dotActive: 'rgba(24, 144, 255, 0.8)',
      dotHover: 'rgba(24, 144, 255, 0.6)',
    },
    
    // Secondary Colors
    secondary: {
      main: '#f8f9fa',
      light: '#ffffff',
      dark: '#e8e8e8',
    },
    
    // Accent Colors
    accent: {
      success: '#52c41a',
      warning: '#faad14',
      error: '#ff4d4f',
    },
    
    // Text Colors
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
      muted: '#999999',
      inverse: '#ffffff',
      light: '#e0e0e0',
      veryLight: '#b0b0b0',
    },
    
    // Background Colors
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#f5f5f5',
      dark: '#001529',
      darkSecondary: '#003a70',
      chatBubble: '#f7f9fc',
      hoverLight: '#f0f8ff',
      overlayLight: 'rgba(255, 255, 255, 0.1)',
      overlayDark: 'rgba(0, 0, 0, 0.1)',
      buttonSecondary: 'rgba(224, 224, 224, 0.1)',
      dotInactive: '#9a9a9a',
      carouselDots: 'rgb(96, 120, 143)',
    },
    
    // Border Colors
    border: {
      light: '#e8e8e8',
      medium: '#d9d9d9',
      primary: '#1890ff',
      subtle: 'rgba(0, 0, 0, 0.06)',
      overlayLight: 'rgba(255, 255, 255, 0.2)',
      overlayDark: 'rgba(255, 255, 255, 0.1)',
      transparent: 'transparent',
    },
  },

  // ========================================
  // GRADIENTS
  // ========================================
  gradients: {
    primary: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
    secondary: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
    whiteCard: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    chatBubble: 'linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%)',
    dark: 'linear-gradient(135deg, #000d1a 0%, #002a4a 100%)',
    footer: 'linear-gradient(135deg, #001529 0%, #003a70 100%)',
    scrollArrow: 'linear-gradient(to bottom, #e0e0e0, transparent)',
    particles1: 'radial-gradient(circle at 30% 20%, rgba(24, 144, 255, 0.05) 0%, transparent 50%)',
    particles2: 'radial-gradient(circle at 70% 80%, rgba(24, 144, 255, 0.03) 0%, transparent 50%)',
    divider: 'linear-gradient(90deg, rgba(49, 109, 238, 0.01), rgba(0, 49, 156, 0.057), rgba(49, 109, 238, 0.01))',
    loading: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
  },

  // ========================================
  // TYPOGRAPHY
  // ========================================
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '28px',
      '2xl': '42px',
    },
    
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.8,
    },
    
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // ========================================
  // SPACING
  // ========================================
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
  },

  // ========================================
  // BORDER RADIUS
  // ========================================
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '50%',
  },

  // ========================================
  // SHADOWS
  // ========================================
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.06)',
    md: '0 4px 20px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.12)',
    xl: '0 12px 40px rgba(0, 0, 0, 0.15)',
    button: '0 4px 12px rgba(24, 144, 255, 0.3)',
    buttonHover: '0 4px 8px rgba(24, 144, 255, 0.4)',
    secondaryHover: '0 4px 15px rgba(224, 224, 224, 0.07)',
  },

  // ========================================
  // TRANSITIONS
  // ========================================
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },

  // ========================================
  // Z-INDEX
  // ========================================
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    drawer: 2000,
  },

  // ========================================
  // BREAKPOINTS
  // ========================================
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
  },

  // ========================================
  // COMPONENT-SPECIFIC VARIABLES
  // ========================================
  components: {
    // Header
    header: {
      height: '80px',
      scrollOffset: 100,
      mobileBreakpoint: 768,
      indicatorPadding: 16,
      avatarSize: 'large',
    },

    // Landing
    landing: {
      height: 'calc(100svh - 80px)',
      maxHeight: 'calc(100svh - 80px)',
      languageSelectorTop: '24px',
      languageSelectorRight: '24px',
      languageSelectorMobileTop: '16px',
      languageSelectorMobileRight: '16px',
      contentMaxWidth: '800px',
      contentPadding: '0 20px',
      contentMobilePadding: '0 16px',
      contentBottomMargin: '60px',
      scrollIndicatorBottom: '40px',
      scrollIndicatorMobileBottom: '32px',
      scrollArrowWidth: '2px',
      scrollArrowHeight: '30px',
      scrollArrowMargin: '8px',
      scrollBounceDistance: '10px',
      scrollBounceDistanceSmall: '5px',
      fadeInDelay: {
        subtitle: '2.2s',
        description: '3.5s',
        buttons: '4.5s',
        scrollIndicator: '6s',
        scrollArrow: '6.5s',
      },
      fadeInDistance: '30px',
    },

    // Buttons
    buttons: {
      cta: {
        minWidth: '140px',
        minWidthMobile: '120px',
        padding: '14px 28px',
        paddingMobile: '12px 24px',
        borderRadius: '8px',
        transformHover: 'translateY(-2px)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
      contact: {
        height: '48px',
        width: '100%',
      },
    },

    // Cards
    cards: {
      borderRadius: '12px',
      transformHover: 'translateY(-6px)',
      transition: '0.3s ease',
    },

    // Forms
    forms: {
      inputBorderRadius: '8px',
      focusShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
    },

    // Tags
    tags: {
      margin: '4px',
      padding: '6px 12px',
      borderRadius: '4px',
      transformHover: 'translateY(-2px)',
      iconMargin: '6px',
    },

    // Contact
    contact: {
      iconSize: '48px',
      iconFontSize: '28px',
      iconMobileFontSize: '18px',
    },

    // Sections
    sections: {
      padding: '80px 32px',
      paddingMobile: '48px 16px',
      headerMarginBottom: '48px',
      headerMarginBottomMobile: '32px',
      subtitleMarginBottom: '48px',
      subtitleMarginBottomMobile: '32px',
    },

    // Particles
    particles: {
      fpsLimit: 60,
      particleCount: 30,
      particleSize: 3,
      particleSpeed: 3,
      linkDistance: 200,
      linkOpacity: 0.5,
      linkWidth: 1,
      particleOpacity: 0.5,
      densityArea: 800,
    },

    // Animations
    animations: {
      scrollDuration: 350,
      carouselSpeed: 3000,
      fadeInDuration: '1s ease-out',
      scrollBounceDuration: '2s infinite',
      loadingDuration: '1.5s infinite',
    },
  },

  // ========================================
  // RESPONSIVE FONT SIZES
  // ========================================
  responsiveFontSizes: {
    mobile: {
      sectionTitle: '20px', // Reduced from 28px
      sectionSubtitle: '14px', // Reduced from 16px
      cardTitle: '16px', // Reduced from 20px
      cardDescription: '14px', // Reduced from 16px
      contactInfoTitle: '12px', // Reduced from 14px
      contactInfoText: '12px', // Reduced from 14px
      contactIcon: '18px', // Reduced from 28px
      button: '13px', // Reduced from default
      input: '13px', // Reduced from 14px
      formLabel: '12px', // Reduced from 14px
      tag: '11px', // Reduced from default
      landingSubtitle: '22px', // Reduced from 28px
      landingDescription: '14px', // Reduced from 16px
      landingButton: '13px', // Reduced from 14px
      scrollIndicator: '12px', // Reduced from 14px
    },
  },
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get CSS variable value
export const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName);
};

// Set CSS variable value
export const setCSSVariable = (variableName, value) => {
  document.documentElement.style.setProperty(variableName, value);
};

// Get responsive value
export const getResponsiveValue = (desktopValue, mobileValue, breakpoint = 768) => {
  return window.innerWidth <= breakpoint ? mobileValue : desktopValue;
};

// Get component-specific value
export const getComponentValue = (component, property) => {
  return DESIGN_SYSTEM.components[component]?.[property];
};

// Get color value
export const getColor = (category, variant = 'main') => {
  return DESIGN_SYSTEM.colors[category]?.[variant];
};

// Get spacing value
export const getSpacing = (size) => {
  return DESIGN_SYSTEM.spacing[size];
};

// Get typography value
export const getTypography = (category, variant) => {
  return DESIGN_SYSTEM.typography[category]?.[variant];
};

export default DESIGN_SYSTEM;
