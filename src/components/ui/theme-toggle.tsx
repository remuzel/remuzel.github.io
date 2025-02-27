"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  // Apply theme changes to document
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  const iconVariants = {
    initial: { scale: 0.6, opacity: 0, rotate: 0 },
    animate: { scale: 1, opacity: 1, rotate: 360, transition: { duration: 0.3 } },
    exit: { scale: 0.6, opacity: 0, transition: { duration: 0.3 } }
  };

  // Don't render anything during SSR to avoid hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent"></div>;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent transition-colors group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
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
            key="sun-icon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-foreground transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,1.0)] group-hover:scale-110"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </motion.svg>
        ) : (
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
            key="moon-icon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-foreground transition-all duration-300 group-hover:text-[#121920] group-hover:drop-shadow-[0_0_16px_rgba(18,25,32,0.9)] group-hover:scale-110"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}