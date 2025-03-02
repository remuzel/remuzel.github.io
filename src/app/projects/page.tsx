import Link from "next/link";
import { projects } from "@/data/projects";
import { ROUTES } from "@/constants/theme";
import { COMMON, NAV, SECTIONS, PROJECTS, SOCIAL, ARIA, META } from "@/constants/strings";

export const metadata = {
  title: `${SECTIONS.projects} | ${COMMON.name}`,
  description: 'Browse through my portfolio of projects, including AWS backend services, web experiments, and more.',
  openGraph: {
    title: `${SECTIONS.projects} | ${META.defaultTitle}`,
    description: PROJECTS.intro,
  },
  twitter: {
    title: `${SECTIONS.projects} | ${META.defaultTitle}`,
    description: PROJECTS.intro,
  }
};

export default function ProjectsPage(): React.ReactElement {
  // Sort projects by date (newest first)
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{SECTIONS.projects}</h1>
          <p className="text-muted mb-10">{PROJECTS.intro}</p>

          <Link
            href={ROUTES.home}
            className="inline-flex items-center mb-12 text-muted hover:text-alexa-blue transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            {NAV.backToHome}
          </Link>

          <div className="space-y-8">
            {sortedProjects.length > 0 ? (
              sortedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card-bg rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <div className="text-sm text-muted">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-alexa-blue/10 text-alexa-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <Link
                      href={ROUTES.projectUrl(project.id)}
                      className="inline-block text-alexa-blue hover:text-alexa-blue-dark font-medium"
                    >
                      {NAV.viewDetails}
                      <span className="ml-1 inline-block transform translate-y-px">→</span>
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-alexa-blue transition-colors"
                          aria-label={ARIA.socialLink(SOCIAL.platformName.github)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-alexa-blue transition-colors"
                          aria-label="Live Demo"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-card-bg rounded-lg border border-border shadow-sm p-12 text-center">
                <h3 className="text-3xl font-bold mb-5 text-alexa-blue">{PROJECTS.underConstruction.title}</h3>
                <p className="text-foreground/80 mb-2 max-w-xl mx-auto">
                  {PROJECTS.underConstruction.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
