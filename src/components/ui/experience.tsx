"use client";

import { motion } from "framer-motion";
import { SECTIONS } from "@/constants/strings";

// Experience timeline data
const experiences = [
  {
    period: "2021 - Present",
    title: "SDE",
    company: "Amazon Alexa",
    description: "Leading the development of scalable backend services for Alexa voice assistant, working with distributed systems handling millions of requests. Implementing AWS-based solutions including Lambda, DynamoDB, and SQS."
  },
  {
    period: "2018 - 2021",
    title: "Software Engineer",
    company: "Previous Company",
    description: "Designed and developed microservices architecture for a high-traffic application. Implemented continuous integration/deployment pipelines and contributed to system architecture decisions."
  },
  {
    period: "2016 - 2018",
    title: "Junior Developer",
    company: "First Company",
    description: "Contributed to backend API development and integration with third-party services. Improved existing systems and participated in code reviews and testing."
  }
];

export default function Experience() {
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
              key={index}
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
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}