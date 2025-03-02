/**
 * Common animation presets for use with Framer Motion
 */

// Basic fade in animation from bottom
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
};

// Fade in from left
export const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true }
};

// Fade in from right
export const FADE_IN_RIGHT = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true }
};

// Basic fade in, no direction
export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
  viewport: { once: true }
};

// Staggered item animation for lists
export const getStaggeredFadeIn = (index: number, delay = 0.1): Record<string, unknown> => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: index * delay },
  viewport: { once: true }
});
