"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ChainsPage() {
  // For staggered animations
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Chain data with name and image path
  const chains = [
    { name: "Base", image: "/chains/base.png" },
    { name: "Neutron", image: "/chains/neutron.png" },
    { name: "Sui", image: "/chains/sui.png" },
    { name: "Aleph Zero", image: "/chains/aleph.jpeg" },
    { name: "Aurora", image: "/chains/aurora.png" },
    { name: "LUKSO", image: "/chains/lukso.png" },
    { name: "Nibiru", image: "/chains/nibiru.png" },
    { name: "Starknet", image: "/chains/starknet.png" },
    { name: "Arthera", image: "/chains/arthera.png" },
    { name: "Sei", image: "/chains/sei.png" },
    { name: "Near", image: "/chains/near.png" },
    { name: "Arbitrum", image: "/chains/arbitrum.png" },
    { name: "Manta Network", image: "/chains/manta.png" },
    { name: "Polygon", image: "/chains/polygon.png" },
    { name: "Cosmos", image: "/chains/cosmos.png" },
    { name: "Celo", image: "/chains/celo.png" },
    { name: "Secret Network", image: "/chains/secret.png" },
    { name: "Hedera", image: "/chains/hedera.png" },
    { name: "Cardano", image: "/chains/cardano.png" },
    { name: "Avalanche", image: "/chains/avalanche.png" },
    { name: "Oasis Network", image: "/chains/oasis.png" },
    { name: "Optimism", image: "/chains/op.png" },
    { name: "BNB Chain", image: "/chains/bnb.png" },
    { name: "Polkadot", image: "/chains/polkadot.png" },
    { name: "Archway", image: "/chains/archway.png" },
    { name: "Diamante", image: "/chains/diamante.png" },
    { name: "Stellar", image: "/chains/stellar.png" },
    { name: "Redbelly", image: "/chains/redbelly.png" },
    { name: "Aptos", image: "/chains/aptos.png" }
  ];

  return (
    <div className="w-full pb-10">
      {/* Chain Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-5 md:px-5">
        {chains.map((chain, index) => (
          <motion.div
            key={chain.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isClient ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: Math.min(index * 0.01, 0.01),
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="bg-white rounded-[10px] p-4 shadow-[0px_0.6px_3px_-1.2px_rgba(0,0,238,0.067),0px_2.3px_11.4px_-2.3px_rgba(0,0,238,0.063),0px_10px_50px_-3.5px_rgba(0,0,238,0.03)]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
              transition: {
                duration: 0.05, // Reduced from 0.1 to 0.05 for faster effect
                scale: { duration: 0.05 }, // Specific timing for scale
                boxShadow: { duration: 0.1 } // Shadow can animate slightly slower
              }
            }}
            whileTap={{ scale: 1.02 }} 
          >
            <div className="flex flex-row items-center">
              <div className="relative w-[55px] h-[55px] flex items-center justify-center">
                <Image
                  src={chain.image}
                  alt={`${chain.name} logo`}
                  width={55}
                  height={55}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback for missing images
                    e.currentTarget.src = "/chains/placeholder.png";
                  }}
                />
              </div>
              <p className="font-['Poppins'] text-[20px] leading-[26px] font-normal text-[rgb(125,127,120)] ml-4">
                {chain.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}