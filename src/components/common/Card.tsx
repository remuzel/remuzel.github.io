"use client";

import type { MotionProps, Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps extends Omit<MotionProps, 'animate'> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  enableHover?: boolean;
  enableDefaultStyles?: boolean;
  component?: string;
  animate?: MotionProps['animate'] | Record<string, unknown>;
}

export default function Card({
  children,
  className = "",
  onClick,
  enableHover = true,
  enableDefaultStyles = true,
  component = "div",
  animate,
  ...motionProps
}: CardProps): React.ReactElement {
  const baseClasses = enableDefaultStyles ? "bg-background rounded-lg overflow-hidden shadow-sm border border-border p-6" : "";
  const hoverClasses = enableHover && enableDefaultStyles ? "hover:shadow-md transition-shadow" : "";

  const defaultHoverAnimation = enableHover && enableDefaultStyles
    ? { boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }
    : undefined;

  const Component = motion[component as keyof typeof motion];

  // Create a simple variant for array animations
  let animateValue = animate;
  let variants: Variants | undefined = undefined;

  if (animate && typeof animate === 'object' && !Array.isArray(animate)) {
    for (const [, value] of Object.entries(animate)) {
      if (Array.isArray(value)) {
        // If we find any array values in the animate object,
        // create a variant that can handle the array animation
        variants = {
          animate: {
            ...animate,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: motionProps.transition?.duration || 2,
              ...motionProps.transition
            }
          }
        };
        animateValue = "animate";
        break;
      }
    }
  }

  return (
    <Component
      className={`${baseClasses} ${hoverClasses} ${className}`}
      whileHover={motionProps.whileHover || defaultHoverAnimation}
      onClick={onClick}
      animate={animateValue}
      variants={variants}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
