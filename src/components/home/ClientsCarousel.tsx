"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export const ClientsCarousel = () => {
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

  const containerRef = useRef<HTMLUListElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Initialize animation
    const startAnimation = async () => {
      const logoWidth = 55; // Width of each logo
      const logoGap = 80; // Gap between logos
      const totalWidth = clientLogos.length * (logoWidth + logoGap); // Total width of all logos with gaps
      
      if (containerRef.current) {
        // First, ensure the animation starts from the initial position
        controls.set({ x: 0 });
        
        // Start the continuous animation
        controls.start({
          x: -totalWidth,
          transition: {
            duration: clientLogos.length * 1, // Slower animation (5 seconds per logo)
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
    <div className="px-52 py-20 w-full overflow-hidden" data-framer-name="Container">
      <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_15%,rgb(0,0,0)_85%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_15%,rgb(0,0,0)_85%,rgba(0,0,0,0)_100%)]">
        <section className="flex w-full h-full max-w-full max-h-full place-items-center m-0 px-10 pb-8 pt-4 list-none opacity-100 overflow-hidden">
          <motion.ul
            ref={containerRef}
            animate={controls}
            className="flex w-fit h-full max-h-full place-items-center m-0 p-0 list-none gap-[80px] relative flex-row will-change-transform"
          >
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <li key={`first-${index}`}>
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[55px] h-[55px]">
                  <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                    <img
                      decoding="async"
                      src={logo.src}
                      alt={logo.alt}
                      className="block w-full h-full rounded-inherit object-center object-contain"
                    />
                  </div>
                </div>
              </li>
            ))}
            
            {/* Second set of logos (duplicated) */}
            {clientLogos.map((logo, index) => (
              <li key={`second-${index}`} aria-hidden="true">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[55px] h-[55px]">
                  <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                    <img
                      decoding="async"
                      src={logo.src}
                      alt={logo.alt}
                      className="block w-full h-full rounded-inherit object-center object-contain"
                    />
                  </div>
                </div>
              </li>
            ))}
            
            {/* Third set of logos for smoother looping */}
            {clientLogos.map((logo, index) => (
              <li key={`third-${index}`} aria-hidden="true">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-[55px] h-[55px]">
                  <div className="absolute inset-0 flex items-center justify-center rounded-inherit" data-framer-background-image-wrapper="true">
                    <img
                      decoding="async"
                      src={logo.src}
                      alt={logo.alt}
                      className="block w-full h-full rounded-inherit object-center object-contain"
                    />
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </section>
      </div>

      <div className="text-center pt-10 font-['Poppins']" data-framer-name="Already chosen by the leaders">
        <Link
          href="/ecosystem"
          className="text-[20px] text-[#bababa] hover:text-[#747575] transition-colors -tracking-[0.01em] font-normal leading-[26px]"
        >
          <u> Take a look at our happy customers -&gt; </u>
        </Link>
      </div>
    </div>
  );
};