"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Array of investors/backers
const backers = [
  { id: 1, name: "YC", image: "/backed/1.jpg" },
  { id: 2, name: "Ryan", image: "/backed/2.jpg" },
  { id: 3, name: "Raj", image: "/backed/3.jpg" },
  { id: 4, name: "Phani", image: "/backed/4.jpg" },
  { id: 5, name: "Hashed", image: "/backed/5.jpg" },
  { id: 6, name: "Dragonfly", image: "/backed/6.jpg" },
  { id: 7, name: "Lemniscap", image: "/backed/7.jpg" },
  { id: 8, name: "Rahul", image: "/backed/8.jpg" },
  { id: 9, name: "Spartan", image: "/backed/9.png" },
  { id: 10, name: "Sandeep", image: "/backed/10.jpg" },
  { id: 11, name: "Coinbase", image: "/backed/11.jpg" },
  { id: 12, name: "Balaji", image: "/backed/12.jpg" },
];

export const Backed = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.3 });

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="cta" 
      className="w-full py-6 sm:py-2 md:py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-28">
        <div className="flex flex-col items-center gap-12 sm:gap-16">
          {/* Section Title */}
          <motion.h2
            ref={headingRef}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            variants={headingVariants}
            className="font-['Poppins', 'Poppins Placeholder', sans-serif] font-medium text-[44px] leading-[53px] text-[#0000EE] text-center"
          >
            Backed by the best
          </motion.h2>

          {/* Card with backers grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="w-full bg-[#FAFAFF] rounded-2xl overflow-hidden"
          >
            {/* Grid of backers */}
            <motion.div
              ref={gridRef}
              initial="hidden"
              animate={isGridInView ? "visible" : "hidden"}
              variants={gridVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 w-full px-6 sm:px-16 md:px-[120px] py-8 sm:py-12 md:py-[60px]"
              style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}
            >
              {backers.map((backer) => (
                <motion.div
                  key={backer.id}
                  variants={itemVariants}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={backer.image}
                      alt={backer.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-cover object-center"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 