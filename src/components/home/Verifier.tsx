"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const Verifier = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            // Set mobile mode when screen gets too small (768px is typical md breakpoint)
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        // Set up listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Error playing video:", error);
            });
        }
    }, []);

    // Client-side only rendering for video element
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden flex justify-center items-center ${isMobile ? 'bg-white' : ''}`}
        >
            {/* Background image container - hidden on mobile */}
            {!isMobile && (
                <div
                    ref={backgroundRef}
                    className="absolute inset-0 flex justify-center items-center"
                >
                    <div className="relative w-full h-full max-w-[1200px] flex justify-center items-center">
                        <Image
                            src="/verifier-bg/main-bg.png"
                            alt="Background"
                            width={981}
                            height={502}
                            className="object-contain max-w-full h-auto"
                            priority
                        />

                        {/* Decorative Elements positioned relative to background */}
                        <div className="absolute w-full h-full">
                            {/* LinkedIn logo */}
                            <div className="absolute top-[58%] left-[20%] transform rotate-6">
                                <Image
                                    src="/verifier-bg/linkedin.png"
                                    alt="LinkedIn"
                                    width={65}
                                    height={65}
                                    className="object-contain"
                                    style={{ transform: 'rotate(6deg)' }}
                                />
                            </div>

                            {/* X logo */}
                            <div className="absolute bottom-[25%] left-[27%] transform -rotate-4">
                                <Image
                                    src="/verifier-bg/x.png"
                                    alt="X"
                                    width={65}
                                    height={65}
                                    className="object-contain rounded-[10px]"
                                    style={{ transform: 'rotate(-4deg)' }}
                                />
                            </div>

                            {/* Uber logo */}
                            <div className="absolute top-[30%] left-[23%] transform rotate-[7deg] w-[78px] h-[78px] overflow-hidden rounded-[10px]">
                                <Image
                                    src="/verifier-bg/uber.png"
                                    alt="Uber"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* White line with circle */}
                            <div className="absolute top-[50%] right-[20%] w-[30%] h-[1px] bg-white flex items-center">
                                {/* White circle at the right end */}
                                <div className="w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center relative ml-auto border-4 border-[#0000EE]">
                                    {/* Horizontal rectangle with blue border inside the circle */}
                                    <div className="w-[60px] h-[50px] border-[6px] border-[#0000EE] flex relative rounded-[8px]">
                                        {/* Left side - Three parallel blue lines */}
                                        <div className="flex flex-col gap-y-[6px] pl-1 w-1/2 justify-center">
                                            <div className="w-[16px] h-[5px] bg-[#0000EE] rounded-md"></div>
                                            <div className="w-[16px] h-[5px] bg-[#0000EE] rounded-md"></div>
                                            <div className="w-[16px] h-[5px] bg-[#0000EE] rounded-md"></div>
                                        </div>
                                        {/* Right side - Centered Vertical rectangle with blue border */}
                                        <div className="w-1/2 flex justify-center items-center pr-1">
                                            <div className="w-[16px] h-[28px] border-[5px] border-[#0000EE] rounded-[3px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Phone frame and video container - always visible and centered */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="relative flex justify-center items-center">
                    {/* Responsive phone frame size */}
                    <div className="relative w-[240px] h-[500px] sm:w-[260px] sm:h-[540px] md:w-[280px] md:h-[580px] lg:w-[320px] lg:h-[650px]">
                        {/* Phone Frame */}
                        <Image
                            src="/verifier-bg/phone-frame.png"
                            alt="Phone Frame"
                            fill
                            className="object-contain pointer-events-none z-10"
                        />

                        {/* Video container - adjusted for frame borders */}
                        <div className="absolute top-[2.3%] left-[3.8%] right-[3.8%] bottom-[2.3%] 
                sm:top-[1.2%] sm:bottom-[1.2%] 
                md:top-[1.3%] md:bottom-[1.3%] 
                rounded-[30px] sm:rounded-[50px] md:rounded-[40px] overflow-hidden z-20">
                            <video
                                ref={videoRef}
                                src="/Reclaim Verifier.mp4"
                                className="w-full h-full object-cover"
                                suppressHydrationWarning
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/verifier-bg/main-bg.png"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};