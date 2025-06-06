"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselContainerRef = useRef<HTMLUListElement>(null);
  const controls = useAnimation();

  // Animation for text and button with exact Framer settings
  const textAndButtonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 30,
      rotate: 0,
      skew: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      skew: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 50,
        mass: 1,
        delay: 0.1
      }
    }
  };

  // Animation for icon - same effect but starts after text/button completes
  // Estimating the text/button animation to take about 0.7s total (including delay)
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 30,
      rotate: 0,
      skew: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      skew: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 50,
        mass: 1,
        delay: 0.8 // Delay to start after text/button animation completes
      }
    }
  };

  // Define the client logos to display
  const clientLogos = [
    { src: "/carosal/Tmr.news.png", alt: "TMR.NEWS" },
    { src: "/carosal/fr Market.png", alt: "fr Market" },
    { src: "/carosal/p2p.me.svg", alt: "p2p.me" },
    { src: "/carosal/Intract.png", alt: "Intract" },
    { src: "/carosal/zkp2p.png", alt: "zkp2p" },
    { src: "/carosal/DeCharge.jpg", alt: "DeCharge" },
    { src: "/carosal/IBW.jpg", alt: "IBW" },
    { src: "/carosal/Vana.jpg", alt: "Vana" },
    { src: "/carosal/Metopia.jpeg", alt: "Metopia" },
    { src: "/carosal/Satoshi's Palace.svg", alt: "Satoshi's Palace" },
    { src: "/carosal/Honestly.png", alt: "Honestly" },
    { src: "/carosal/Stormbit.png", alt: "Stormbit" },
    { src: "/carosal/showdown.jpg", alt: "Showdown" },
    { src: "/carosal/Solana ID.jpg", alt: "Solana ID" },
    { src: "/carosal/Catoff.jpg", alt: "Catoff" },
    { src: "/carosal/Bounty Bay.jpg", alt: "Bounty Bay" },
    { src: "/carosal/Evolv.jpg", alt: "Evolve" },
    { src: "/carosal/jane.jpg", alt: "Jane" },
  ];

  useEffect(() => {
    // Initialize carousel animation
    const startAnimation = async () => {
      const logoWidth = 55; // Width of each logo
      const logoGap = 80; // Gap between logos
      const totalWidth = clientLogos.length * (logoWidth + logoGap); // Total width of all logos with gaps

      if (carouselContainerRef.current) {
        // First, ensure the animation starts from the initial position
        controls.set({ x: 0 });

        // Start the continuous animation
        controls.start({
          x: -totalWidth,
          transition: {
            duration: clientLogos.length * 1.5, // Slightly slower animation for better visibility
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
  }, [controls, clientLogos.length]);

  return (
    <>
      <section ref={sectionRef} className="flex flex-col relative w-full overflow-hidden gap-[20px] sm:gap-[30px] md:gap-[38px] pt-12 pb-4" id="hero">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-5 sm:gap-8 md:gap-4 px-4 sm:px-6 md:px-8 z-10">
          <div className="relative w-full flex flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textAndButtonVariants}
              className="w-full flex flex-col items-center justify-center"
            >
              <h1 className="font-['Poppins'] text-[38px] sm:text-[60px] md:text-[80px] font-semibold tracking-tight leading-[115%] text-center max-w-3xl">
                <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                  Verify<span className="text-[#0000EE] px-1 sm:px-2">Any Data</span>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    className="hidden sm:inline-block"
                  >
                    <Image
                      src="/heroIcon.svg"
                      width={84}
                      height={75}
                      alt="Hero icon"
                      className="inline-block w-[40px] h-auto sm:w-[70px] md:w-[84px]"
                      style={{ width: '100px', height: 'auto' }}
                    />
                  </motion.div>
                </div>
                <div>
                  on the Internet
                </div>
              </h1>

              {/* Hero icon for mobile - appears after title */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                className="sm:hidden mt-4 mb-2"
              >
                <Image
                  src="/heroIcon.svg"
                  width={70}
                  height={63}
                  alt="Hero icon"
                  style={{ width: '90px', height: 'auto' }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textAndButtonVariants}
            className="w-full text-center mt-0 sm:mt-1 md:mt-2"
          >
            <p className="font-['Poppins'] text-base sm:text-lg text-[#7a7a7a] -tracking-[0.01em] leading-[140%] px-2 sm:px-4">
              Generate proofs of any data from any website in less than 6 seconds
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textAndButtonVariants}
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

      {/* Clients Carousel Section */}
      <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-8 sm:py-12 md:py-2 w-full overflow-hidden" data-framer-name="Container">
        <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_15%,rgb(0,0,0)_85%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_15%,rgb(0,0,0)_85%,rgba(0,0,0,0)_100%)]">
          <section className="flex justify-center w-full max-w-full mx-auto">
            {/* Carousel container with specific dimensions */}
            <div className="w-[352px] h-[100px] sm:w-[1280px] sm:h-[190px] overflow-hidden relative">
              <motion.ul
                ref={carouselContainerRef}
                animate={controls}
                className="flex top-0 h-full place-items-center m-0 p-0 list-none gap-[30px] sm:gap-[40px] md:gap-[60px] lg:gap-[80px] relative flex-row will-change-transform"
              >
                {/* First set of logos */}
                {clientLogos.map((logo, index) => (
                  <li key={`first-${index}`}>
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]">
                      <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={55}
                          height={55}
                          className="block w-full h-full rounded-inherit object-center object-contain"
                          sizes="(max-width: 640px) 35px, (max-width: 768px) 45px, 55px"
                        />
                      </div>
                    </div>
                  </li>
                ))}

                {/* Second set of logos (duplicated) */}
                {clientLogos.map((logo, index) => (
                  <li key={`second-${index}`} aria-hidden="true">
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]">
                      <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={55}
                          height={55}
                          className="block w-full h-full rounded-inherit object-center object-contain"
                          sizes="(max-width: 640px) 35px, (max-width: 768px) 45px, 55px"
                        />
                      </div>
                    </div>
                  </li>
                ))}

                {/* Third set of logos for smoother looping */}
                {clientLogos.map((logo, index) => (
                  <li key={`third-${index}`} aria-hidden="true">
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]">
                      <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={55}
                          height={55}
                          className="block w-full h-full rounded-inherit object-center object-contain"
                          sizes="(max-width: 640px) 35px, (max-width: 768px) 45px, 55px"
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

        <div className="text-center pt-4 sm:pt-6 md:pt-8 font-['Poppins']" data-framer-name="Already chosen by the leaders">
          <Link
            href="/ecosystem"
            className="text-sm sm:text-base md:text-lg lg:text-[20px] text-[#bababa] hover:text-[#747575] transition-colors -tracking-[0.01em] font-normal leading-relaxed"
          >
            <u> Take a look at our happy customers -&gt; </u>
          </Link>
        </div>
      </div>
    </>
  );
};