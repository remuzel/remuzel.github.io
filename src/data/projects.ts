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
    id: "nasa-dsn",
    title: "NASA Deep Space Network Live",
    description: "Real-time visualization of NASA's Deep Space Network communications with spacecraft across the solar system.",
    longDescription: "This interactive dashboard provides a real-time view of NASA's Deep Space Network (DSN) - the global array of radio antennas that communicate with spacecraft exploring our solar system and beyond. The visualization shows which mission spacecraft are currently communicating with Earth and provides details on their distance, signal strength, and data transmission rates.",
    tags: ["Next.js", "XML", "NASA API", "Real-time Data", "Interactive Visualization", "Space"],
    date: "2025-03-31",
    image: "/images/logos/nasa.svg",
    liveUrl: "https://eyes.nasa.gov/apps/dsn-now/dsn.html",
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
export async function getProjectById(id: string): Promise<Project | undefined> {
  return projects.find(project => project.id === id);
}
