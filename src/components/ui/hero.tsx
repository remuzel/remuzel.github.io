"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMMON, NAV } from "@/constants/strings";
import { useBrand } from "@/context/BrandContext";
import Card from "@/components/common/Card";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "circle" | "star";
}

function generateSparkles(): Sparkle[] {
  return Array.from({ length: 22 }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 30 + Math.random() * 120;
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      size: 3 + Math.random() * 6,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      type: Math.random() > 0.5 ? "star" : "circle",
    };
  });
}

function AnthropicVisual(): React.ReactElement {
  const sparkles = useMemo(() => generateSparkles(), []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] z-0">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute top-1/2 left-1/2"
          initial={{
            x: sparkle.x,
            y: sparkle.y,
            opacity: 0,
          }}
          animate={{
            x: [sparkle.x, sparkle.x + (Math.random() - 0.5) * 30, sparkle.x],
            y: [sparkle.y, sparkle.y + (Math.random() - 0.5) * 30, sparkle.y],
            opacity: [0.2, 0.85, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sparkle.delay,
          }}
        >
          {sparkle.type === "star" ? (
            <svg
              width={sparkle.size * 3}
              height={sparkle.size * 3}
              viewBox="0 0 24 24"
              fill="rgba(var(--brand-primary-rgb), 0.8)"
              style={{
                filter: `drop-shadow(0 0 ${sparkle.size * 1.5}px rgba(var(--brand-primary-rgb), 0.6))`,
              }}
            >
              <path d="M12 2l2 6.5L20.5 12 14 14l-2 8-2-8-6.5-2L10 8.5z"/>
            </svg>
          ) : (
            <div
              className="rounded-full"
              style={{
                width: sparkle.size,
                height: sparkle.size,
                background: `rgba(var(--brand-primary-rgb), 0.7)`,
                boxShadow: `0 0 ${sparkle.size * 3}px rgba(var(--brand-primary-rgb), 0.5)`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function AlexaVisual(): React.ReactElement {
  const [voiceBars, setVoiceBars] = useState<number[]>(Array(10).fill(0.3));

  useEffect(() => {
    const interval = setInterval(() => {
      setVoiceBars(Array(10).fill(0).map(() => Math.random() * 0.7 + 0.3));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animated Ring Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border-4 border-brand-primary/10 z-0">
        <motion.div
          className="absolute -inset-5 rounded-full border-4 border-brand-primary/5 z-0"
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
            boxShadow: "0 0 10px rgba(var(--brand-primary-rgb), 0.4)"
          }}
        />
        <motion.div
          className="absolute -inset-10 rounded-full border-4 border-brand-primary/5 z-0"
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
            boxShadow: "0 0 15px rgba(var(--brand-primary-rgb), 0.3)"
          }}
        />
      </div>

      {/* Voice Visualization */}
      <Card
        className="flex justify-center items-end gap-1 my-8 h-20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        enableDefaultStyles={false}
      >
        {voiceBars.map((height, index) => (
          <motion.div
            key={index}
            className="w-1 bg-brand-primary rounded-full"
            style={{ height: `${height * 100}%` }}
            animate={{ height: `${height * 100}%` }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </Card>
    </>
  );
}

export default function Hero(): React.ReactElement {
  const { brand, mounted } = useBrand();
  const isAlexa = mounted && brand === "alexa";

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20">
      <AnimatePresence mode="wait">
        {isAlexa ? (
          <motion.div
            key="alexa-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AlexaVisual/>
          </motion.div>
        ) : (
          <motion.div
            key="anthropic-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AnthropicVisual/>
          </motion.div>
        )}
      </AnimatePresence>

      <Card
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        enableDefaultStyles={false}
      >
        {COMMON.name}
      </Card>

      <Card
        className="mt-4 text-lg md:text-xl text-muted text-center max-w-xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        enableDefaultStyles={false}
      >
        {COMMON.title}
      </Card>

      {/* Scroll indicator */}
      <Card
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        enableDefaultStyles={false}
      >
        <p className="text-sm">{NAV.scrollForMore}</p>
        <Card
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
          enableDefaultStyles={false}
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
        </Card>
      </Card>
    </section>
  );
}
