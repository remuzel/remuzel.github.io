export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    id: "amazon-alexa",
    period: "2021 - Present",
    title: "SDE",
    company: "Amazon Alexa",
    description: "Leading the development of scalable backend services for Alexa voice assistant, working with distributed systems handling millions of requests. Implementing AWS-based solutions including Lambda, DynamoDB, and SQS.",
    technologies: ["AWS Lambda", "DynamoDB", "SQS", "Java", "TypeScript"],
    highlights: [
      "Designed and developed core services for Alexa voice assistant",
      "Led architecture decisions for system handling millions of daily requests",
      "Implemented performance optimizations resulting in 30% latency reduction",
      "Mentored junior engineers and established best practices"
    ]
  },
  {
    id: "previous-company",
    period: "2018 - 2021",
    title: "Software Engineer",
    company: "Previous Company",
    description: "Designed and developed microservices architecture for a high-traffic application. Implemented continuous integration/deployment pipelines and contributed to system architecture decisions.",
    technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB", "Redis"],
    highlights: [
      "Architected microservices platform serving 100K+ daily users",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Optimized database queries improving application performance",
      "Collaborated with product team to define technical requirements"
    ]
  },
  {
    id: "first-company",
    period: "2016 - 2018",
    title: "Junior Developer",
    company: "First Company",
    description: "Contributed to backend API development and integration with third-party services. Improved existing systems and participated in code reviews and testing.",
    technologies: ["Python", "Django", "PostgreSQL", "RESTful APIs"],
    highlights: [
      "Developed RESTful APIs for mobile and web applications",
      "Integrated payment processing and third-party services",
      "Improved test coverage and implemented automated testing",
      "Participated in regular code reviews and documentation"
    ]
  }
];

// Helper function to get all experiences in reverse chronological order
export function getAllExperiences(): Experience[] {
  return [...experiences];
}

// Helper function to get an experience by ID
export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(exp => exp.id === id);
}