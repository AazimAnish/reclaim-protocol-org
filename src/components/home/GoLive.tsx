"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const GoLive = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-['Poppins'] text-[28px] sm:text-[36px] md:text-[48px] font-medium tracking-tight leading-[115%] text-[#0000EE]">
              Go Live into production <br className="hidden sm:inline" /> in less than 10 mins!
            </h2>
          </div>

          {/* Responsive YouTube Video Container */}
          <div className="w-[95%] max-w-[880px] relative" style={{ maxHeight: "532px" }}>
            <div className="relative w-full" style={{ paddingBottom: "60.48%" }}>
              {!isVideoPlaying ? (
                <>
                  <Image
                    src="/goLive-bg.webp"
                    fill
                    quality={100}
                    alt="Video Thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px]"
                    sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1024px) 75vw, 880px"
                  />
                  <button
                    aria-label="Play"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[68px] h-[48px] p-0 border-none bg-transparent cursor-pointer"
                    onClick={playVideo}
                  >
                    <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                      <path
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 
                        C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 
                        C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                        fill="#212121"
                        fillOpacity="0.8"
                      ></path>
                      <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                    </svg>
                  </button>
                </>
              ) : (
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-[15px]"
                  title="Youtube Video"
                  allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  src="https://www.youtube.com/embed/vtGwNUP8nWw?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1"
                  frameBorder="0"
                ></iframe>
              )}
            </div>
          </div>

          {/* Button with animation */}
          <motion.div
            whileHover={{
              backgroundColor: "#FFFFFF",
              color: "#0000EE",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex border border-[#0000EE] bg-[#0000EE] backdrop-blur-[10px] rounded-[50px] px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 font-['Poppins'] font-medium text-white text-sm sm:text-base cursor-pointer"
          >
            <Link href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener" className="text-inherit">
              Go Live in 10mins
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};