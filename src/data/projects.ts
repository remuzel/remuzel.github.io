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
  // TODO - Add projects
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
