"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          About Me
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
                  alt="Remi Uzel"
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
            <p className="text-lg mb-6">
              Welcome to my portfolio! I'm a Software Development Engineer at Amazon Alexa with a passion for building scalable backend systems and cloud architectures.
            </p>
            
            <p className="text-lg mb-6">
              With extensive experience in AWS and distributed systems, I specialize in designing and implementing robust solutions that can handle millions of requests while maintaining high availability and performance.
            </p>
            
            <p className="text-lg mb-6">
              While my primary expertise is in backend development, I'm always exploring new technologies and approaches to broaden my skill set. This website itself is an example of my venture into frontend development.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with home automation projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}