/**
 * Theme Constants
 * Centralized configuration for theme values used across the application
 */

// Light theme colors
export const LIGHT_THEME = {
  bg: 'var(--light-bg)',
  fg: 'var(--light-fg)',
  card: 'var(--light-card)',
  muted: 'var(--light-muted)',
  border: 'var(--light-border)',
  alexaBlue: 'var(--light-alexa-blue)',
  alexaBlueDark: 'var(--light-alexa-blue-dark)',
  alexaSecondary: 'var(--light-alexa-secondary)',
  alexaAccent: 'var(--light-alexa-accent)',
};

// Dark theme colors
export const DARK_THEME = {
  bg: 'var(--dark-bg)',
  fg: 'var(--dark-fg)',
  card: 'var(--dark-card)',
  muted: 'var(--dark-muted)',
  border: 'var(--dark-border)',
  alexaBlue: 'var(--dark-alexa-blue)',
  alexaSecondary: 'var(--dark-alexa-secondary)',
  alexaAccent: 'var(--dark-alexa-accent)',
};

// Animation constants
export const ANIMATIONS = {
  duration: {
    short: 0.2,
    medium: 0.3,
    long: 0.5,
  },
  transition: {
    ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier easing
    spring: { mass: 1, stiffness: 280, damping: 60 },
  },
};

// Routes
export const ROUTES = {
  home: "/",
  about: "/#about",
  experience: "/#experience",
  projects: "/projects",
  projectDetails: (id: string): string => `/projects/${id}`,
};
