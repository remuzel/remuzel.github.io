"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SECTIONS, ALT, ABOUT } from "@/constants/strings";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card-bg">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {SECTIONS.aboutMe}
          <span className="absolute -bottom-3 left-0 w-16 h-1 bg-alexa-blue"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] aspect-[4/5]">
              <div className="absolute inset-0 border-2 border-alexa-blue rounded-lg -translate-x-4 -translate-y-4 z-0"></div>
              <div className="relative h-full w-full rounded-lg overflow-hidden z-10 shadow-md">
                <Image
                  src="/images/photo.jpg"
                  alt={ALT.portrait}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {ABOUT.bio.map((paragraph, index) => (
              <p key={index} className={`text-lg ${index < ABOUT.bio.length - 1 ? 'mb-6' : ''}`}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}