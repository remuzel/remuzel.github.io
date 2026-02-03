"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Brand = "anthropic" | "alexa";

export default function BrandToggle(): React.ReactElement | null {
  const [brand, setBrand] = useState<Brand>("anthropic");
  const [mounted, setMounted] = useState(false);

  // Initialize brand from localStorage
  useEffect(() => {
    setMounted(true);

    const savedBrand = localStorage.getItem("brand") as Brand | null;
    if (savedBrand && (savedBrand === "anthropic" || savedBrand === "alexa")) {
      setBrand(savedBrand);
    }
  }, []);

  // Apply brand changes to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (brand === "alexa") {
      root.classList.add("brand-alexa");
    } else {
      root.classList.remove("brand-alexa");
    }

    localStorage.setItem("brand", brand);
  }, [brand, mounted]);

  // Toggle between brands
  const toggleBrand = (): void => {
    setBrand(prevBrand => prevBrand === "anthropic" ? "alexa" : "anthropic");
  };

  const iconVariants = {
    initial: { scale: 0.6, opacity: 0, rotate: 0 },
    animate: { scale: 1, opacity: 1, rotate: 360, transition: { duration: 0.3 } },
    exit: { scale: 0.6, opacity: 0, transition: { duration: 0.3 } }
  };

  // Don't render anything during SSR to avoid hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent"/>;
  }

  return (
    <motion.button
      onClick={toggleBrand}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent transition-colors group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${brand === "anthropic" ? "Alexa" : "Anthropic"} theme`}
      title={`Currently: ${brand === "anthropic" ? "Anthropic" : "Alexa"} theme. Click to switch.`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {brand === "anthropic" ? (
          // Anthropic icon - sparkles/AI symbol
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            key="anthropic-icon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-brand-primary transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(var(--brand-primary-rgb),0.8)] group-hover:scale-110"
          >
            {/* Sparkles icon representing AI */}
            <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/>
            <path d="M5 19l1 3 1-3 3-1-3-1-1-3-1 3-3 1 3 1z"/>
            <path d="M19 12l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z"/>
          </motion.svg>
        ) : (
          // Alexa icon - voice/echo ring
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            key="alexa-icon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-brand-primary transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(var(--brand-primary-rgb),0.8)] group-hover:scale-110"
          >
            {/* Echo/voice ring icon */}
            <circle cx="12" cy="12" r="3"/>
            <circle cx="12" cy="12" r="7" strokeDasharray="4 2"/>
            <circle cx="12" cy="12" r="10" strokeDasharray="2 3" opacity="0.6"/>
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
