export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  date: string; // ISO format date for easy sorting
  image?: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "alexa-skill-framework",
    title: "Alexa Skill Framework",
    description: "A serverless framework for building Alexa skills that simplifies development and deployment.",
    longDescription: `
      This framework provides a set of reusable components and utilities for building Alexa skills
      with AWS Lambda and DynamoDB. It includes pre-built handlers for common intents, middleware
      for logging and error handling, and an easy-to-use state management system.

      Key features:
      - Declarative intent handling
      - Built-in session management
      - Automatic persistence with DynamoDB
      - Middleware pipeline for cross-cutting concerns
      - Testing utilities with mock requests and responses
      
      The framework has been used to build several production skills, including a gaming skill
      with over 10,000 monthly active users and a smart home skill that integrates with IoT devices.
    `,
    tags: ["AWS Lambda", "DynamoDB", "Node.js", "Serverless", "Voice UI"],
    date: "2023-11-15",
    github: "https://github.com/remuzel/alexa-skill-framework",
    featured: true
  },
  {
    id: "cloud-data-pipeline",
    title: "Cloud Data Pipeline",
    description: "Scalable data processing pipeline using AWS services to handle millions of events daily.",
    longDescription: `
      This project is a robust data processing infrastructure built on AWS that ingests, processes,
      and analyzes large volumes of event data. The pipeline uses Kinesis for real-time data streaming,
      Lambda for processing, and S3 for storage, with analytics provided by Athena.
      
      The architecture handles over 50 million events per day with sub-second latency and includes:
      - Real-time data ingestion via Kinesis Data Streams
      - Stream processing with Lambda functions
      - Long-term storage in S3 with partitioning
      - Data transformation using AWS Glue
      - Interactive queries via Athena
      - Monitoring and alerting with CloudWatch
      
      The system is fully serverless, scales automatically with demand, and has built-in failover
      mechanisms to ensure data integrity even during service disruptions.
    `,
    tags: ["AWS", "Kinesis", "S3", "Lambda", "Glue", "Athena", "Big Data"],
    date: "2023-07-22",
    github: "https://github.com/remuzel/cloud-data-pipeline",
    featured: true
  },
  {
    id: "voice-ui-experiment",
    title: "Web Experiment: Voice UI",
    description: "Exploring modern web APIs for voice recognition and speech synthesis in browser applications.",
    longDescription: `
      This experimental project explores the capabilities of the Web Speech API for creating
      voice-driven user interfaces directly in the browser. It implements a responsive voice
      assistant that can understand natural language commands and respond with synthesized speech.
      
      Technical highlights:
      - Speech recognition using the Web Speech API
      - Voice synthesis with SSML support for natural intonation
      - Natural language processing with a custom intent matching system
      - Visualization of voice input with animated waveforms
      - Fully responsive design that works across devices
      - Offline capabilities using Service Workers
      
      The experiment demonstrates how voice interfaces can be implemented without relying on
      cloud services, improving privacy and reducing latency. The code is well-documented
      and designed to be easily adaptable for other web applications.
    `,
    tags: ["JavaScript", "Web Speech API", "UI/UX", "Accessibility", "Progressive Web App"],
    date: "2024-01-30",
    github: "https://github.com/remuzel/voice-ui-experiment",
    liveUrl: "https://voice-experiment.demo.com",
    featured: false
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    longDescription: `
      This project is my personal portfolio website, designed to showcase my work and skills
      in a clean, modern interface. Built with Next.js and Tailwind CSS, it features:
      
      - Responsive design that works on all devices
      - Dark/light mode based on system preferences
      - Interactive Alexa-themed animations
      - Server-side rendering for improved performance and SEO
      - Modern component-based architecture
      - Framer Motion animations for smooth transitions
      
      The site demonstrates best practices for modern web development, including
      accessibility considerations, performance optimization, and a componentized
      approach to UI development.
    `,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    date: "2024-02-27",
    github: "https://github.com/remuzel/remuzel.github.io",
    liveUrl: "https://remuzel.github.io",
    featured: true
  }
];

// Helper function to get the latest n projects
export function getLatestProjects(count: number = 3): Project[] {
  return projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Helper function to get featured projects
export function getFeaturedProjects(count: number = 3): Project[] {
  return projects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Helper function to get a specific project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
