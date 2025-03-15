"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add background effect when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Documentation", "Github", "Ecosystem", "Dashboard"];

  return (
    <nav
      className={`w-full flex justify-between items-center mx-auto fixed top-0 left-0 px-8 py-10 sm:px-6 md:px-8 lg:px-16 sm:py-8 md:py-10 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/reclaim.png"
          alt="Reclaim Logo"
          width={169}
          height={40}
          priority
          className="object-contain md:w-[130px] lg:w-[169px]"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <div
        className="hidden md:flex rounded-full px-3 md:px-4 lg:px-8 py-3.5 border border-[#0000EE] backdrop-blur-[10px]"
      >
        <div className="flex md:space-x-4 lg:space-x-8">
          {navItems.map((item, index) => (
            <div
              key={index}
            >
              <Link
                href={item === "Documentation" ? "https://docs.reclaimprotocol.org/" :
                  item === "Github" ? "https://github.com/reclaimprotocol" :
                    item === "Ecosystem" ? "/ecosystem" :
                      "https://dev.reclaimprotocol.org/"}
                className="font-['Poppins'] text-[#0000EE] md:text-sm lg:text-base"
                target={item === "Documentation" || item === "Github" ? "_blank" : undefined}
                rel={item === "Documentation" || item === "Github" ? "noopener" : undefined}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Talk to our team button - visible on desktop */}
      <motion.div
        whileHover={{
          backgroundColor: "#0000EE",
          transition: { duration: 0.3 }
        }}
        className="hidden md:block rounded-full border border-[#0000EE] md:px-4 lg:px-8 py-3.5 font-medium cursor-pointer bg-transparent group"
      >
        <Link
          href="https://calendly.com/adithya-creatoros/let-s-talk-about-zktls"
          className="font-['Poppins'] whitespace-nowrap text-[#0000EE] md:text-sm lg:text-base group-hover:text-white transition-colors duration-300"
        >
          Talk to our team
        </Link>
      </motion.div>

      {/* Hamburger menu - visible on mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#0000EE] transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1.5'
            }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#0000EE] transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : 'mb-1.5'
            }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#0000EE] transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
        />
      </button>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 h-screen bg-white z-40 flex flex-col items-center pt-24"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navItems.map((item, index) => (
                <div key={index} className="w-full border-b border-gray-100 pb-4">
                  <Link
                    href={item === "Documentation" ? "https://docs.reclaimprotocol.org/" :
                      item === "Github" ? "https://github.com/reclaimprotocol" :
                        item === "Ecosystem" ? "/ecosystem" :
                          "https://dev.reclaimprotocol.org/"}
                    className="font-['Poppins'] text-[#0000EE] text-xl text-center block w-full"
                    target={item === "Documentation" || item === "Github" ? "_blank" : undefined}
                    rel={item === "Documentation" || item === "Github" ? "noopener" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </div>
              ))}

              {/* Talk to our team button in mobile menu */}
              <motion.div
                whileHover={{
                  backgroundColor: "#0000EE",
                  transition: { duration: 0.3 }
                }}
                className="rounded-full border border-[#0000EE] px-8 py-3.5 font-medium cursor-pointer bg-transparent group mt-4"
              >
                <Link
                  href="https://calendly.com/adithya-creatoros/let-s-talk-about-zktls"
                  className="font-['Poppins'] whitespace-nowrap text-[#0000EE] group-hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Talk to our team
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};