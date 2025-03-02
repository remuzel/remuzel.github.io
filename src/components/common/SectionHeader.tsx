"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = "" }: SectionHeaderProps): React.ReactElement {
  return (
    <motion.h2
      className={`text-3xl md:text-4xl font-bold mb-16 relative inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
      <span className="absolute -bottom-3 left-0 w-16 h-1 bg-alexa-blue"/>
    </motion.h2>
  );
}
