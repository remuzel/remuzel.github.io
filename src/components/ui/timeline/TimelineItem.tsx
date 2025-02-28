"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import styles from "./timeline.module.css";
import CompanyIcon from "./CompanyIcon";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  logo?: string;
  technologies?: string[];
  highlights?: string[];
}

export default function TimelineItem({
  date,
  title,
  company,
  description,
  logo,
  technologies,
  highlights,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-3 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Date section */}
      <div className="md:w-1/5 flex items-start">
        <div className="flex flex-col items-center md:items-end w-full">
          <div className="text-alexa-blue font-medium text-right pr-4 border-r border-border">
            <span>{date}</span>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="md:w-4/5">
        <motion.div 
          className={`p-6 bg-card-bg rounded-lg border border-border shadow-sm ${styles.timelineCard}`}
          whileHover={{ 
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div 
            className="cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            role="button"
            aria-expanded={isExpanded}
            aria-controls={`${title.replace(/\s+/g, '-').toLowerCase()}-details`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                {logo ? (
                  <div className="relative w-6 h-6 flex-shrink-0">
                    <Image 
                      src={logo} 
                      alt={`${company} logo`} 
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <CompanyIcon name={company} size={20} />
                )}
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <motion.button 
                className="text-sm text-alexa-blue hover:text-alexa-blue-dark transition-colors rounded-full w-6 h-6 flex items-center justify-center"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
                initial={false}
                animate={{ 
                  rotate: isExpanded ? 90 : 0,
                  backgroundColor: isExpanded ? "rgba(0, 202, 255, 0.1)" : "transparent"
                }}
                whileHover={{ 
                  backgroundColor: "rgba(0, 202, 255, 0.2)",
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "tween",
                  ease: [0.25, 0.1, 0.25, 1.0],
                  duration: 0.3
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                >
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </motion.button>
            </div>
            <p className="text-muted mb-4">{company}</p>
            <p className="text-foreground/80">{description}</p>
          </div>
          
          {/* Expanded content */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                id={`${title.replace(/\s+/g, '-').toLowerCase()}-details`}
                initial={{ height: 0, opacity: 0, scale: 0.98, marginTop: 0 }}
                animate={{ 
                  height: "auto", 
                  opacity: 1,
                  scale: 1,
                  marginTop: 24,
                  transition: {
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.35
                  }
                }}
                exit={{ 
                  height: 0, 
                  opacity: 0,
                  scale: 0.98,
                  marginTop: 0,
                  transition: {
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.25
                  }
                }}
                style={{ transformOrigin: "top center" }}
                className="border-t border-border pt-4 overflow-hidden"
              >
                {/* Technologies */}
                {technologies && technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-muted mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-alexa-blue/10 text-alexa-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Key highlights */}
                {highlights && highlights.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted mb-2">Key Highlights</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80">
                      {highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}