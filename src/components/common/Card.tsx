"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  enableHover?: boolean;
}

export default function Card({
  children,
  className = "",
  onClick,
  enableHover = true
}: CardProps): React.ReactElement {
  const baseClasses = "bg-background rounded-lg overflow-hidden shadow-sm border border-border p-6";
  const hoverClasses = enableHover ? "hover:shadow-md transition-shadow" : "";

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      whileHover={enableHover ? { boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
