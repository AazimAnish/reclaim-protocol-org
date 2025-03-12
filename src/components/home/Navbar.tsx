"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center mx-auto absolute top-0 left-0 px-16 py-10 z-50 bg-transparent">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/reclaim.png"
          alt="Reclaim Logo"
          width={169}
          height={40}
          priority
          className="object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div
        className="hidden md:flex rounded-full px-8 py-3.5 border border-[#0000EE] backdrop-blur-[10px]"
      >
        <div className="flex space-x-8">
          {["Documentation", "Github", "Ecosystem", "Dashboard"].map((item, index) => (
            <div
              key={index}
            >
              <Link
                href={item === "Documentation" ? "https://docs.reclaimprotocol.org/" :
                  item === "Github" ? "https://github.com/reclaimprotocol" :
                    item === "Ecosystem" ? "/ecosystem" :
                      "https://dev.reclaimprotocol.org/"}
                className="font-['Poppins'] text-[#0000EE]"
                target={item === "Documentation" || item === "Github" ? "_blank" : undefined}
                rel={item === "Documentation" || item === "Github" ? "noopener" : undefined}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Talk to our team button */}
      <motion.div
        whileHover={{
          backgroundColor: "#0000EE",
          color: "#FFFFFF",
          transition: { duration: 0.3 }
        }}
        className="rounded-full border border-[#0000EE] px-8 py-3.5 font-medium cursor-pointer bg-transparent"
      >
        <Link
          href="https://calendly.com/adithya-creatoros/let-s-talk-about-zktls"
          className="font-['Poppins'] whitespace-nowrap text-[#0000EE]"
        >
          Talk to our team
        </Link>
      </motion.div>

    </nav>
  );
};