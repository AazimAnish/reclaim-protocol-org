"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const BackgroundVector = () => {

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
        ["translateY(140px) scale(1.2)", "translateY(140px) scale(3.5)"]
    );

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1] flex items-center justify-center pointer-events-none">
            <motion.div
                className="relative w-full h-full md:w-[90%] lg:w-[85%] xl:w-[80%]"
                data-framer-appear-id="18gw3o9"
                data-framer-name="Vector"
                style={{
                    willChange: "transform",
                    opacity: vectorOpacity,
                    transform: vectorTransform,
                    transformOrigin: "bottom"
                }}
            >
                <div
                    className="absolute inset-0 rounded-inherit"
                    data-framer-background-image-wrapper="true"
                >
                    <Image
                        src="/hero-bg.svg"
                        alt=""
                        fill
                        className="block w-full h-full rounded-inherit object-center object-contain"
                        priority
                    />
                </div>
            </motion.div>
        </div>
    );
}; 