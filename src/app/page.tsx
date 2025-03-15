"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { Verifier } from "@/components/home/Verifier";
import { GoLive } from "@/components/home/GoLive";
import { Onchain } from "@/components/home/Onchain";
import { Blog } from "@/components/home/Blog";
import { Backed } from "@/components/home/Backed";
import { FAQ } from "@/components/home/FAQ";
import { useScroll, useTransform } from "framer-motion";
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
    ["translateY(140px) scale(1)", "translateY(140px) scale(3.5)"]
  );

  return (
    <div ref={pageRef} className="min-h-screen flex flex-col relative bg-transparent overflow-x-hidden">
      <main className="flex-1 w-full pt-[76px] sm:pt-[92px] md:pt-[108px] lg:pt-[124px]">
        <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-4">
          <HeroSection />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <Verifier />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <GoLive />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <Onchain />
        </div>
        <div className="mt-2 sm:mt-20 md:mt-24 lg:mt-14">
          <Blog />
        </div>
        <div className="mt-2 sm:mt-20 md:mt-24 lg:mt-14">
          <Backed />
        </div>
        <div className="mt-2 sm:mt-20 md:mt-24 lg:mt-14">
          <FAQ />
        </div>
      </main>

    </div>
  );
}