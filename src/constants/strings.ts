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
  title: "Software Development Engineer at Amazon Alexa",
  copyright: (year: number) => `© ${year} Remi Uzel. All rights reserved.`,
  websiteUrl: "https://remuzel.github.io",
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
  projects: "Projects"
}

// Image alt texts
export const ALT = {
  logo: "Remi Uzel Logo",
  portrait: "Remi Uzel",
  project: (name: string) => `${name} project screenshot`,
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
  toggleTheme: (theme: 'light' | 'dark') => 
    `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
  socialLink: (platform: string) => 
    `Visit Remi Uzel's ${platform} profile`,
}

// About section content
export const ABOUT = {
  bio: [
    "I'm a Software Development Engineer at Amazon Alexa, specializing in building scalable cloud services and tools that power conversational AI experiences.",
    "With expertise in distributed systems, cloud architecture, and backend development, I focus on creating robust and efficient solutions to complex technical challenges.",
    "My background combines strong computer science fundamentals with practical experience in designing and implementing microservices, data processing pipelines, and developer tools.",
    "I'm passionate about clean code, performance optimization, and building systems that make development faster and more reliable for engineering teams.",
  ],
}

// Projects section content
export const PROJECTS = {
  intro: "Browse through my portfolio of projects and experiments",
}

// SEO and meta content
export const META = {
  // Basic metadata
  baseUrl: "https://remuzel.github.io",
  defaultTitle: "Remi Uzel | Portfolio",
  titleTemplate: "%s | Remi Uzel",
  description: "Portfolio of Remi Uzel, Software Development Engineer at Amazon Alexa, specializing in backend systems, AWS cloud architecture, and distributed systems.",

  // Keywords
  keywords: [
    "software engineer",
    "AWS",
    "Amazon",
    "Alexa",
    "backend engineer",
    "cloud computing",
    "distributed systems",
    "serverless"
  ],

  // Open Graph
  og: {
    type: "website",
    locale: "en_GB",
    siteName: "Remi Uzel Portfolio",
  },

  // Theme colors
  themeColors: {
    light: "#00CAFF",
    dark: "#232F3E"
  },

  // Assets
  assets: {
    logo: "/images/logo.png",
    favicon: "/images/logo.png"
  }
}