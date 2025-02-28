"use client";

import { motion } from "framer-motion";
import { SECTIONS } from "@/constants/strings";
import { getAllExperiences } from "@/data/experiences";

export default function Experience() {
  const experiences = getAllExperiences();

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {SECTIONS.experience}
          <span className="absolute -bottom-3 left-0 w-16 h-1 bg-alexa-blue"></span>
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/4">
                <div className="text-alexa-blue font-medium">{exp.period}</div>
              </div>
              
              <div className="md:w-3/4">
                <div className="p-6 bg-card-bg rounded-lg border-l-4 border-alexa-blue shadow-sm">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-muted mb-4">{exp.company}</p>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4 mb-6">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-full bg-alexa-blue/10 text-alexa-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.highlights && (
                    <div className="mt-4">
                      <ul className="list-disc list-inside space-y-1 text-foreground/80">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
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