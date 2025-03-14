"use client";

import { motion } from "framer-motion";

export default function EcosystemPage() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-8 shadow-md mb-8"
      >
        <h2 className="text-2xl font-['Poppins'] font-medium mb-4 text-[#0000EE]">
          Reclaim Protocol Ecosystem
        </h2>
        <p className="text-gray-700 mb-6 font-['Poppins']">
          The Reclaim Protocol ecosystem spans multiple blockchains and enables secure, private verification of data across the web. Our technology allows users to prove they own or have access to certain information without revealing the actual data.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#A1A1FF] rounded-lg p-6">
            <h3 className="text-xl font-['Poppins'] font-medium mb-2 text-[#7D7DFF]">
              For Developers
            </h3>
            <p className="text-gray-600 mb-4 font-['Poppins']">
              Build powerful, privacy-preserving applications across multiple blockchains using Reclaim Protocol.
            </p>
            <ul className="list-disc list-inside text-gray-600 font-['Poppins']">
              <li>Easy integration with existing applications</li>
              <li>Cross-chain compatibility</li>
              <li>Privacy-first architecture</li>
            </ul>
          </div>
          
          <div className="border border-[#A1A1FF] rounded-lg p-6">
            <h3 className="text-xl font-['Poppins'] font-medium mb-2 text-[#7D7DFF]">
              For Users
            </h3>
            <p className="text-gray-600 mb-4 font-['Poppins']">
              Maintain control over your personal data while still being able to prove ownership or access.
            </p>
            <ul className="list-disc list-inside text-gray-600 font-['Poppins']">
              <li>Protect your privacy online</li>
              <li>Seamless verification experience</li>
              <li>Works across multiple platforms and chains</li>
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Additional ecosystem content can be added here */}
    </div>
  );
} 