import { DESIGN_SYSTEM } from './designSystem';

// App Configuration
export const APP_CONFIG = {
  name: 'Carlos Ojeda',
  title: 'Machine Learning Engineer',
  avatar: 'https://avatars.githubusercontent.com/u/71744365?v=4',
  homepage: 'https://carlos-ojeda.github.io'
};

// Navigation Configuration
export const NAVIGATION = {
  sections: ['landing', 'about-me', 'projects', 'skills', 'contact'],
  scrollOffset: DESIGN_SYSTEM.components.header.scrollOffset
};

// Particles Configuration
export const PARTICLES_CONFIG = {
  fpsLimit: DESIGN_SYSTEM.components.particles.fpsLimit,
  fullScreen: false,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    }
  },
  particles: {
    color: {
      value: "transparent",
    },
    links: {
      color: DESIGN_SYSTEM.colors.text.inverse,
      distance: DESIGN_SYSTEM.components.particles.linkDistance,
      enable: true,
      opacity: DESIGN_SYSTEM.components.particles.linkOpacity,
      width: DESIGN_SYSTEM.components.particles.linkWidth,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: DESIGN_SYSTEM.components.particles.particleSpeed,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: DESIGN_SYSTEM.components.particles.densityArea,
      },
      value: DESIGN_SYSTEM.components.particles.particleCount,
    },
    opacity: {
      value: DESIGN_SYSTEM.components.particles.particleOpacity,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: DESIGN_SYSTEM.components.particles.particleSize,
    },
  },
  detectRetina: true,
};

// Animation Configuration
export const ANIMATION_CONFIG = {
  scrollDuration: DESIGN_SYSTEM.components.animations.scrollDuration,
  carouselSpeed: DESIGN_SYSTEM.components.animations.carouselSpeed
};

// Responsive Breakpoints
export const BREAKPOINTS = {
  mobile: DESIGN_SYSTEM.breakpoints.mobile,
  tablet: DESIGN_SYSTEM.breakpoints.tablet,
  desktop: DESIGN_SYSTEM.breakpoints.desktop
};
