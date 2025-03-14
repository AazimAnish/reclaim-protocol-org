"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { Navbar } from "@/components/home/Navbar";
import { Verifier } from "@/components/home/Verifier";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start", "end start"]
  });

  // Transform values for the vector background based on scroll position
  const vectorOpacity = useTransform(scrollYProgress, [0, 0.5], [0.09, 0.045]);
  const vectorTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["translateY(140px) scale(1.4)", "translateY(500px) scale(5)"]
  );

  return (
    <div ref={pageRef} className="min-h-screen flex flex-col relative bg-transparent overflow-x-hidden">
      {/* Vector background with Framer Motion - Page-level background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1] flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-full h-full md:w-[90%] lg:w-[85%] xl:w-[80%]"
          data-framer-appear-id="18gw3o9"
          data-framer-name="Vector"
          style={{
            willChange: "transform",
            opacity: vectorOpacity,
            transform: vectorTransform
          }}
        >
          <div
            className="absolute inset-0 rounded-inherit"
            data-framer-background-image-wrapper="true"
          >
            <img
              decoding="async"
              src="/hero-bg.svg"
              alt=""
              className="block w-full h-full rounded-inherit object-center object-contain"
            />
          </div>
        </motion.div>
      </div>

      <Navbar />
      <main className="flex-1 w-full">
        <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-40">
          <HeroSection />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <Verifier />
        </div>
      </main>

    </div>
  );
}