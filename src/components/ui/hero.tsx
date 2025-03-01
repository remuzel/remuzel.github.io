"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { COMMON, NAV } from "@/constants/strings";

export default function Hero(): React.ReactElement {
  // For Alexa voice visualization animation
  const [voiceBars, setVoiceBars] = useState<number[]>(Array(10).fill(0.3));

  useEffect(() => {
    const interval = setInterval(() => {
      setVoiceBars(Array(10).fill(0).map(() => Math.random() * 0.7 + 0.3));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20">
      {/* Alexa Ring Background - Enhanced with outward animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border-4 border-[#00CAFF]/10 z-0">
        <motion.div
          className="absolute -inset-5 rounded-full border-4 border-[#00CAFF]/5 z-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            boxShadow: "0 0 10px rgba(0, 202, 255, 0.4)"
          }}
        />
        <motion.div
          className="absolute -inset-10 rounded-full border-4 border-[#00CAFF]/3 z-0"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          style={{
            boxShadow: "0 0 15px rgba(0, 202, 255, 0.3)"
          }}
        />
      </div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {COMMON.name}
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-muted text-center max-w-xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {COMMON.title}
      </motion.p>

      {/* Alexa Voice Visualization */}
      <motion.div
        className="flex justify-center items-end gap-1 my-8 h-20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {voiceBars.map((height, index) => (
          <motion.div
            key={index}
            className="w-1 bg-alexa-blue rounded-full"
            style={{ height: `${height * 100}%` }}
            animate={{ height: `${height * 100}%` }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      {/* Scroll indicator instead of buttons */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-sm">{NAV.scrollForMore}</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
