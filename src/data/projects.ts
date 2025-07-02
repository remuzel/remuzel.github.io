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
    id: "polarsteps-mcp",
    title: "Polarsteps API & MCP Server",
    description: "An unofficial Polarstep API wrapper and MCP server enabling AI models to interact with personal travel data from Polarsteps.",
    longDescription: "What started as \"I wonder if I can get some data out of Polarsteps...\" became my first MCP server implementation. Figuring out the API and auth headers was straightforward enough, but then I fell down the rabbit hole of proper Python module structure. Such a long way from the simple scripted `uv run main.py` days!\n\nI ended up building both a Python wrapper for their APIs (and the massive JSON responses they return; thank you Pydantic, you beautiful beast) and a proper MCP server.\nHonestly not sure how useful this will be now that they just released their own LLM integration, but it marks my debut in the \"build MCP servers for everything\" phase of my life.\n\nStay tuned for the next one!",
    tags: ["Python", "MCP", "API Wrapper", "Travel"],
    date: "2025-07-01",
    image: "/images/logos/polarsteps.png",
    github: "https://github.com/remuzel/polarsteps-mcp",
    liveUrl: "https://news.polarsteps.com/news/polarsteps-summer-2025-release-is-here",
    featured: true
  },
  {
    id: "nasa-dsn",
    title: "NASA Deep Space Network Live",
    description: "Real-time visualization of NASA's Deep Space Network communications with spacecraft across the solar system.",
    longDescription: "This interactive dashboard provides a real-time view of NASA's Deep Space Network (DSN) - the global array of radio antennas that communicate with spacecraft exploring our solar system and beyond. The visualization shows which mission spacecraft are currently communicating with Earth and provides details on their distance, signal strength, and data transmission rates.",
    tags: ["Next.js", "XML", "NASA API", "Real-time Data", "Interactive Visualization", "Space"],
    date: "2025-03-31",
    image: "/images/logos/nasa.svg",
    liveUrl: "https://eyes.nasa.gov/apps/dsn-now/dsn.html",
    featured: false
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
