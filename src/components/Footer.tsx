"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden bg-white py-8 sm:py-12">
      {/* Background pattern instead of image */}
      <div className="absolute inset-0 pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 relative z-10">
          {/* Logo */}
          <div>
            <Image 
              src="/reclaim.png" 
              alt="Reclaim Protocol" 
              width={140}
              height={40}
              className="h-auto object-contain"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-6 text-center sm:text-left">
            <Link 
              href="https://reclaimprotocol.notion.site/Privacy-Policy-Reclaim-Protocol-115275b816cb80ab94b8ca8616673658?pvs=4" 
              target="_blank"
              rel="noopener"
              className="font-['Poppins', 'Poppins Placeholder', sans-serif] text-[16px] leading-[21px] text-[#0000EE] hover:text-[#A8A8FF] transition-colors"
            >
              Privacy & Cookie Policy
            </Link>
            <Link 
              href="https://reclaimprotocol.notion.site/Terms-of-Service-Reclaim-Protocol-13c275b816cb80b1a5ade76c6f2532dd?pvs=4" 
              target="_blank"
              rel="noopener"
              className="font-['Poppins', 'Poppins Placeholder', sans-serif] text-[16px] leading-[21px] text-[#0000EE] hover:text-[#A8A8FF] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="https://github.com/reclaimprotocol" 
              target="_blank"
              rel="noopener"
              className="font-['Poppins', 'Poppins Placeholder', sans-serif] text-[16px] leading-[21px] text-[#0000EE] hover:text-[#A8A8FF] transition-colors"
            >
              Github
            </Link>
            <Link 
              href="https://drive.google.com/file/d/1LS9cJbOtcUQB7t84yQf4BuPyxiV7c6Vc/view" 
              target="_blank"
              rel="noopener"
              className="font-['Poppins', 'Poppins Placeholder', sans-serif] text-[16px] leading-[21px] text-[#0000EE] hover:text-[#A8A8FF] transition-colors"
            >
              Litepaper
            </Link>
            <Link 
              href="https://drive.google.com/file/d/1wmfdtIGPaN9uJBI1DHqN903tP9c_aTG2/view" 
              target="_blank"
              rel="noopener"
              className="font-['Poppins', 'Poppins Placeholder', sans-serif] text-[16px] leading-[21px] text-[#0000EE] hover:text-[#A8A8FF] transition-colors"
            >
              Whitepaper
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 items-center z-10">
            <Link href="https://x.com/reclaimprotocol" target="_blank" rel="noopener" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#0000EE] hover:fill-[#A8A8FF] transition-colors">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/reclaimprotocol/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#0000EE] hover:fill-[#A8A8FF] transition-colors">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </Link>
            <Link href="https://www.youtube.com/@ReclaimProtocol" target="_blank" rel="noopener" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#0000EE] hover:fill-[#A8A8FF] transition-colors">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};