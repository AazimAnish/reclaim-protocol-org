"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

export const Onchain = () => {
    const carouselContainerRef = useRef<HTMLUListElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const controls = useAnimation();
    const headingControls = useAnimation();
    const buttonControls = useAnimation();

    const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
    const isButtonInView = useInView(buttonRef, { once: true, amount: 0.5 });
    const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Animation variants for heading
    const headingVariants = {
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

    // Animation for button - starts after heading animation
    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.4
            }
        }
    };

    // Define the blockchain logos to display
    const chainLogos = [
        { src: "/onchain/polygon.png", alt: "Polygon" },
        { src: "/onchain/base.png", alt: "Base" },
        { src: "/onchain/avalanche.png", alt: "Avalanche" },
        { src: "/onchain/arbitrum.png", alt: "Arbitrum" },
        { src: "/onchain/cosmos.png", alt: "Cosmos" },
        { src: "/onchain/near.png", alt: "Near" },
        { src: "/onchain/sui.png", alt: "Sui" },
        { src: "/onchain/cardano.png", alt: "Cardano" },
        { src: "/onchain/polkadot.png", alt: "Polkadot" },
        { src: "/onchain/neutron.png", alt: "Neutron" },
        { src: "/onchain/sei.png", alt: "Sei" },
        { src: "/onchain/starknet.png", alt: "Starknet" },
        { src: "/onchain/celo.png", alt: "Celo" },
        { src: "/onchain/bnb.png", alt: "BNB Chain" },
        { src: "/onchain/manta.png", alt: "Manta" },
        { src: "/onchain/aptos.png", alt: "Aptos" },
        { src: "/onchain/oasis.png", alt: "Oasis" },
        { src: "/onchain/op.png", alt: "Optimism" },
        { src: "/onchain/stellar.png", alt: "Stellar" },
        { src: "/onchain/lukso.png", alt: "Lukso" },
        { src: "/onchain/hedera.png", alt: "Hedera" },
        { src: "/onchain/celo2.png", alt: "Celo Alternate" },
        { src: "/onchain/aurora.png", alt: "Aurora" },
        { src: "/onchain/secret.png", alt: "Secret" },
        { src: "/onchain/diamante.png", alt: "Diamante" },
        { src: "/onchain/archway.png", alt: "Archway" },
        { src: "/onchain/arthera.png", alt: "Arthera" },
        { src: "/onchain/nibiru.png", alt: "Nibiru" },
        { src: "/onchain/redbelly.png", alt: "Redbelly" },
        { src: "/onchain/aleph.png", alt: "Aleph" },
    ];

    // Effect for heading animation
    useEffect(() => {
        if (isHeadingInView) {
            headingControls.start("visible");
        }
    }, [isHeadingInView, headingControls]);

    // Effect for button animation
    useEffect(() => {
        if (isButtonInView && isHeadingInView) {
            buttonControls.start("visible");
        }
    }, [isButtonInView, isHeadingInView, buttonControls]);

    // Effect for carousel animation - only starts when section is in view
    useEffect(() => {
        if (!isSectionInView) return;

        // Initialize carousel animation when in view
        const startAnimation = async () => {
            const logoWidth = 60; // Width of each logo
            const logoGap = 90; // Increased spacing between logos
            const totalWidth = chainLogos.length * (logoWidth + logoGap); // Total width of all logos with gaps

            if (carouselContainerRef.current) {
                // First, ensure the animation starts from the initial position
                controls.set({ x: 0 });

                // Start the continuous animation
                controls.start({
                    x: -totalWidth,
                    transition: {
                        duration: chainLogos.length * 1.5, // Same timing as HeroSection
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 0
                    }
                });
            }
        };

        startAnimation();

        // Clean up animation on unmount
        return () => {
            controls.stop();
        };
    }, [controls, chainLogos.length, isSectionInView]);

    return (
        <div className="w-full" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
                    {/* Heading */}
                    <div className="text-center">
                        <motion.h2
                            ref={headingRef}
                            initial="hidden"
                            animate={headingControls}
                            variants={headingVariants}
                            className="font-['Poppins'] text-[28px] sm:text-[36px] md:text-[48px] font-[500] tracking-tight leading-[55px] text-[#0000EE]"
                        >
                            Live and Growing <br className="hidden sm:inline" /> across many ecosystems, onchain
                        </motion.h2>
                    </div>

                    {/* Blockchain Logos Carousel */}
                    <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 w-full overflow-hidden mt-6 sm:mt-8 md:mt-10" data-framer-name="Container">
                        <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_15%,rgb(0,0,0)_85%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_15%,rgb(0,0,0)_85%,rgba(0,0,0,0)_100%)]">
                            <section className="flex justify-center w-full max-w-full mx-auto">
                                {/* Carousel container with specific dimensions */}
                                <div className="w-[386px] h-[74px] sm:w-[974px] sm:h-[74px] overflow-hidden relative">
                                    <motion.ul
                                        ref={carouselContainerRef}
                                        animate={controls}
                                        initial={{ x: 0 }}
                                        className="flex top-0 h-full place-items-center m-0 p-0 list-none gap-[60px] sm:gap-[70px] md:gap-[80px] relative flex-row will-change-transform"
                                    >
                                        {/* First set of logos */}
                                        {chainLogos.map((logo, index) => (
                                            <li key={`first-${index}`}>
                                                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[45px] h-[45px] sm:w-[65px] sm:h-[65px] flex items-center justify-center">
                                                    <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                                                        <Image
                                                            src={logo.src}
                                                            alt={logo.alt}
                                                            width={65}
                                                            height={65}
                                                            className="block max-w-full max-h-full object-contain"
                                                            sizes="(max-width: 640px) 45px, 65px"
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        ))}

                                        {/* Second set of logos (duplicated) for smooth looping */}
                                        {chainLogos.map((logo, index) => (
                                            <li key={`second-${index}`} aria-hidden="true">
                                                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[45px] h-[45px] sm:w-[65px] sm:h-[65px] flex items-center justify-center">
                                                    <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                                                        <Image
                                                            src={logo.src}
                                                            alt={logo.alt}
                                                            width={65}
                                                            height={65}
                                                            className="block max-w-full max-h-full object-contain"
                                                            sizes="(max-width: 640px) 45px, 65px"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        ))}

                                        {/* Third set of logos for smoother looping */}
                                        {chainLogos.map((logo, index) => (
                                            <li key={`third-${index}`} aria-hidden="true">
                                                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[45px] h-[45px] sm:w-[65px] sm:h-[65px] flex items-center justify-center">
                                                    <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                                                        <Image
                                                            src={logo.src}
                                                            alt={logo.alt}
                                                            width={65}
                                                            height={65}
                                                            className="block max-w-full max-h-full object-contain"
                                                            sizes="(max-width: 640px) 45px, 65px"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </motion.ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* View Chains Button */}
                    <div className="flex justify-center mt-4 mb-10">
                        <motion.div
                            ref={buttonRef}
                            initial="hidden"
                            animate={buttonControls}
                            variants={buttonVariants}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center font-['Poppins', 'Poppins Placeholder', sans-serif] font-[400] text-[#0000EE] text-[20px] leading-[26px] cursor-pointer"
                        >
                            <Link href="#" className="flex items-center">
                                <span>View Chains -&gt;</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};