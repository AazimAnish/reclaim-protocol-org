"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ref for title animation
  const titleRef = useRef<HTMLDivElement>(null);

  // Get current path to determine active button
  const pathname = usePathname();
  const isEcosystemActive = pathname === "/ecosystem";
  const isChainsActive = pathname === "/chains";

  return (
    <div className="min-h-screen flex flex-col relative bg-transparent overflow-x-hidden">
      <main className="flex-1 w-full pt-[76px] sm:pt-[92px] md:pt-[108px] lg:pt-[12px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-24 md:pt-32 lg:pt-35">
          <div className="flex flex-col items-center gap-12 sm:gap-16">
            {/* Animated Heading */}
            <div
              ref={titleRef}
              className="w-full text-center max-w-full mx-auto px-2 sm:px-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                className="font-['Poppins'] font-[500] text-[28px] sm:text-[44px] md:text-[54px] text-[#0000EE] leading-[1.2] sm:leading-[1.2] md:leading-[65px] max-w-max text-center mx-auto tracking-tight"
              >
                <span className="block">Live and Growing</span>
                <span className="block">across many ecosystems, onchain</span>
              </motion.h1>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.4, 0.0, 0.2, 1]
              }}
              className="flex flex-row gap-6 items-center"
            >
              {/* Chains Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className={`rounded-[30px] border px-8 py-3.5 font-normal cursor-pointer group w-[150px] flex justify-center ${isChainsActive
                  ? "border-[#0000EE] border-[3px]"
                  : "border-[#A1A1FF] border-[1px]"
                  }`}
              >
                <Link
                  href="/chains"
                  className={`font-['Poppins'] whitespace-nowrap transition-colors duration-300 ${isChainsActive ? "text-[#0000EE]" : "text-[#7D7DFF]"
                    }`}
                >
                  Chains
                </Link>
              </motion.div>

              {/* Ecosystem Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className={`rounded-[30px] border px-8 py-3.5 font-normal cursor-pointer group w-[150px] flex justify-center ${isEcosystemActive || (!isChainsActive && !isEcosystemActive)
                  ? "border-[#0000EE] border-[3px]"
                  : "border-[#A1A1FF] border-[1px]"
                  }`}
              >
                <Link
                  href="/ecosystem"
                  className={`font-['Poppins'] whitespace-nowrap transition-colors duration-300 ${isEcosystemActive || (!isChainsActive && !isEcosystemActive)
                    ? "text-[#0000EE]"
                    : "text-[#7D7DFF]"
                    }`}
                >
                  Ecosystem
                </Link>
              </motion.div>
            </motion.div>

            {/* Render children content here */}
            <div className="w-full">
              {children}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
} 