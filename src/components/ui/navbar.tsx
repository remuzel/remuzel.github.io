"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import BrandToggle from "./brand-toggle";
import { ROUTES } from "@/constants/theme";
import { COMMON, NAV, ALT, SOCIAL, ARIA } from "@/constants/strings";

export default function Navbar(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md 
      ${isScrolled ? "bg-background/80 shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={ROUTES.home} className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 relative overflow-hidden rounded-md">
              <Image
                src="/images/logo.png"
                alt={ALT.logo}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-lg md:text-xl">{COMMON.name}</span>
          </Link>

          {/* Desktop Navigation - Simplified */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href={ROUTES.home}
              className="text-foreground/80 hover:text-alexa-blue transition-colors"
            >
              {NAV.home}
            </Link>
            <Link
              href={ROUTES.about}
              className="text-foreground/80 hover:text-alexa-blue transition-colors"
            >
              {NAV.about}
            </Link>
            <Link
              href={ROUTES.experience}
              className="text-foreground/80 hover:text-alexa-blue transition-colors"
            >
              {NAV.experience}
            </Link>
            <Link
              href={ROUTES.projects}
              className="text-foreground/80 hover:text-alexa-blue transition-colors"
            >
              {NAV.projects}
            </Link>

            {/* Social links and toggles */}
            <div className="flex items-center gap-3">
              <motion.a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-brand-primary transition-colors p-1"
                aria-label={SOCIAL.platformName.github}
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="hover:drop-shadow-[0_0_8px_rgba(var(--brand-primary-rgb),0.7)]">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </motion.a>
              <motion.a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-brand-primary transition-colors p-1"
                aria-label={SOCIAL.platformName.linkedin}
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="hover:drop-shadow-[0_0_8px_rgba(var(--brand-primary-rgb),0.7)]">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </motion.a>
              <div className="flex items-center gap-1 border-l border-border pl-3 ml-1">
                <BrandToggle/>
                <ThemeToggle/>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <BrandToggle/>
            <ThemeToggle/>
            <motion.a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-brand-primary transition-colors p-1"
              aria-label={SOCIAL.platformName.github}
              whileHover={{ scale: 1.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="hover:drop-shadow-[0_0_8px_rgba(var(--brand-primary-rgb),0.7)]">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </motion.a>
            <motion.a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-brand-primary transition-colors p-1"
              aria-label={SOCIAL.platformName.linkedin}
              whileHover={{ scale: 1.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="hover:drop-shadow-[0_0_8px_rgba(var(--brand-primary-rgb),0.7)]">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </motion.a>
            <button
              className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 ml-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={ARIA.toggleMenu}
            >
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 
                ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 
                ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 
                ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Simplified */}
      <div
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 flex flex-col justify-center items-center gap-8 
        ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <Link
          href={ROUTES.home}
          className="text-xl font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          {NAV.home}
        </Link>
        <Link
          href={ROUTES.about}
          className="text-xl font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          {NAV.about}
        </Link>
        <Link
          href={ROUTES.experience}
          className="text-xl font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          {NAV.experience}
        </Link>
        <Link
          href={ROUTES.projects}
          className="text-xl font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          {NAV.projects}
        </Link>
      </div>
    </header>
  );
}
