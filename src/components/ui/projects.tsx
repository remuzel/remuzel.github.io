"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getLatestProjects } from "@/data/projects";
import { SECTIONS, NAV, SOCIAL } from "@/constants/strings";

export default function Projects() {
  // Get the 3 most recent projects
  const latestProjects = getLatestProjects(3);
  
  return (
    <section id="projects" className="py-20 md:py-32 bg-card-bg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {SECTIONS.projects}
            <span className="absolute -bottom-3 left-0 w-16 h-1 bg-alexa-blue"></span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/projects" 
              className="text-alexa-blue hover:text-alexa-blue-dark font-medium"
            >
              {NAV.viewAllProjects}
              <span className="ml-1 inline-block transform translate-y-px">→</span>
            </Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/80 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded-full bg-alexa-blue/10 text-alexa-blue"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-alexa-blue/5 text-alexa-blue/80">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <Link 
                  href={`/projects/${project.id}`} 
                  className="inline-block text-alexa-blue hover:text-alexa-blue-dark font-medium"
                >
                  {NAV.viewDetails}
                  <span className="ml-1 inline-block transform translate-y-px">→</span>
                </Link>
                
                <div className="flex items-center gap-3">
                  {project.github && (
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-alexa-blue transition-colors"
                      aria-label={SOCIAL.platformName.github}
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </motion.a>
                  )}
                  
                  {project.liveUrl && (
                    <motion.a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-alexa-blue transition-colors"
                      aria-label="Live Demo"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}