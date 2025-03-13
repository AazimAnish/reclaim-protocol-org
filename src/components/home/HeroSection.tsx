"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  // Animation for hero title
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <section ref={sectionRef} className="flex flex-col relative w-full overflow-hidden gap-[20px] sm:gap-[30px] md:gap-[38px] pt-20 sm:pt-24 md:pt-28" id="hero">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-5 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 z-10">
        <div className="relative w-full flex flex-col items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="w-full flex flex-col items-center justify-center"
          >
            <h1 className="font-['Poppins'] text-[38px] sm:text-[60px] md:text-[80px] font-semibold tracking-tight leading-[115%] text-center max-w-3xl">
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                Verify<span className="text-[#0000EE] px-1 sm:px-2">Any Data</span>
                <Image
                  src="/heroIcon.svg"
                  width={84}
                  height={75}
                  alt="Hero icon"
                  className="inline-block w-[40px] h-auto sm:w-[70px] md:w-[84px]"
                />
              </div>
              <div>
                on the Internet
              </div>
            </h1>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="w-full text-center mt-0 sm:mt-1 md:mt-2"
        >
          <motion.p
            className="font-['Poppins'] text-base sm:text-lg text-[#7a7a7a] -tracking-[0.01em] leading-[140%] px-2 sm:px-4"
            variants={textVariants}
          >
            Generate proofs of any data from any website in less than 6 seconds
          </motion.p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          whileHover={{
            backgroundColor: "#FFFFFF",
            color: "#0000EE",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex border border-[#0000EE] bg-[#0000EE] backdrop-blur-[10px] rounded-[50px] px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 font-['Poppins'] font-medium text-white text-sm sm:text-base cursor-pointer mt-4 sm:mt-5 md:mt-6"
        >
          <Link
            href="https://dev.reclaimprotocol.org/"
            target="_blank"
            rel="noopener"
            className="text-inherit"
          >
            Start Verifying
          </Link>
        </motion.div>
      </div>
    </section>
  );
};