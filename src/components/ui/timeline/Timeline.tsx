"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./timeline.module.css";

interface TimelineProps {
  children: ReactNode;
  title?: string;
}

export default function Timeline({ children, title }: TimelineProps) {
  return (
    <div className="relative">
      {title && (
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
          <span className="absolute -bottom-3 left-0 w-16 h-1 bg-alexa-blue"></span>
        </motion.h2>
      )}
      
      <div className="space-y-16 relative overflow-visible">
        {/* Main timeline container */}
        {children}
      </div>
    </div>
  );
}