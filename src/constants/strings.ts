/**
 * Application Strings
 *
 * Centralized string constants for the entire application.
 * This approach makes it easier to:
 * 1. Maintain consistent wording
 * 2. Update text in one place
 * 3. Implement internationalization in the future
 */

// Common strings used across multiple components
export const COMMON = {
  name: "Remi Uzel",
  title: "Software Engineer at Anthropic",
  copyright: (year: number): string => `© ${year} Remi Uzel. All rights reserved.`,
  websiteUrl: "https://remuzel.github.io",
  claudeCredit: "Crafted with Claude Code",
  claudeUrl: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
}

// Navigation related strings
export const NAV = {
  home: "Home",
  about: "About",
  experience: "Experience",
  projects: "Projects",
  backToHome: "Back to Home",
  viewAllProjects: "View All Projects",
  viewDetails: "View Details",
  scrollForMore: "Scroll for more",
}

// Section titles
export const SECTIONS = {
  aboutMe: "About Me",
  experience: "Experience",
  education: "Education",
  projects: "Projects"
}

// Image alt texts
export const ALT = {
  logo: "Remi Uzel Logo",
  portrait: "Remi Uzel",
  project: (name: string): string => `${name} project screenshot`,
}

// Error messages
export const ERRORS = {
  notFound: {
    code: "404",
    title: "Project Not Found",
    message: "The project you're looking for doesn't exist or has been moved.",
  },
}

// Social media
export const SOCIAL = {
  github: "https://github.com/remuzel",
  linkedin: "https://linkedin.com/in/remi-uzel",
  platformName: {
    github: "GitHub",
    linkedin: "LinkedIn",
  },
}

// Aria labels for accessibility
export const ARIA = {
  toggleMenu: "Toggle Menu",
  toggleTheme: (theme: 'light' | 'dark'): string =>
    `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
  socialLink: (platform: string): string =>
    `Visit Remi Uzel's ${platform} profile`,
}

// About section content
export const ABOUT = {
  bio: [
    "I'm a Software Engineer at Anthropic, working on building safe and beneficial AI systems.",
    "Previously, I was a Senior Software Engineer (SDE III) at Amazon Alexa, where I led the launch of privacy-focused consent collection frameworks for european radio partners, and developed international features like Karaoke on Alexa; delighting 500k+ customers.",
    "I hold an MEng in Mathematics and Computer Science from Imperial College London, where my Master's thesis focused on network effects by modeling ride-sharing platforms.",
    "I want to maximise positive expectation of humanity's trajectory. My privacy compliance work has taught me that policy outcomes vary wildly, from cookie banner fatigue to genuine wins like USB-C standardization. I'm optimistic we can learn from both to develop AI governance frameworks that truly align with societal benefit.",
  ],
}

// Projects section content
export const PROJECTS = {
  intro: "Browse through my portfolio of projects and experiments",
  comingSoon: {
    title: "Coming Soon!",
    message: "Exciting projects are in the works. Check back soon to see what I've been building."
  },
  underConstruction: {
    title: "Projects Under Construction!",
    message: "I'm currently working on some exciting new projects to showcase here. In the meantime, feel free to explore my GitHub repositories!",
  }
}

// SEO and meta content
export const META = {
  // Basic metadata
  baseUrl: "https://remuzel.github.io",
  defaultTitle: "Remi Uzel | Portfolio",
  titleTemplate: "%s | Remi Uzel",
  description: "Portfolio of Remi Uzel, Software Engineer at Anthropic, specializing in AI systems, backend development, and distributed systems.",

  // Keywords
  keywords: [
    "software engineer",
    "Anthropic",
    "AI",
    "machine learning",
    "Claude",
    "backend engineer",
    "python developer",
    "cloud computing",
    "distributed systems",
    "AI safety"
  ],

  // Open Graph
  og: {
    type: "website",
    locale: "en_GB",
    siteName: "Remi Uzel Portfolio",
  },

  // Theme colors
  themeColors: {
    light: "#D97757",
    dark: "#1A1915"
  },

  // Assets
  assets: {
    logo: "/images/logo.png",
    favicon: "/images/logo.png"
  }
}
