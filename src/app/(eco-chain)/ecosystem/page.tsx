"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EcosystemPage() {
  // Ecosystem partners data
  const partners = [
    {
      name: "zkp2p",
      icon: "/ecosystem/zkp2p2.png",
      description: "zkp2p is a consumer goods marketplace that leverages Reclaim Protocol's TLSProxy for verifying users Ticketmaster data from Ticketmaster",
      visitUrl: "https://zkp2p.xyz/",
      demoUrl: "#"
    },
    {
      name: "CSFloat",
      icon: "/ecosystem/csfloat.png",
      description: "Using Reclaim to prove ownership of Counter Strike items on Steam profiles. CSfloat is a Counterstrike skin/item trading platform.",
      visitUrl: "https://csfloat.com/",
      demoUrl: "https://www.youtube.com/watch?v=Dlwc-xSNuQI&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=12"
    },
    {
      name: "Satoshi's Palace",
      icon: "/ecosystem/satoshi.png",
      description: "A gaming platform that uses zkFetch to retrieve Bitcoin price data from the CoinMarketCap API and then proves this data on-chain",
      visitUrl: "https://satoshispalace.casino/",
      demoUrl: "https://www.youtube.com/watch?v=pWF3M05DDP8&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=15"
    },
    {
      name: "Tmr.news",
      icon: "/ecosystem/tmr.png",
      description: "An innovate prediction market on future news headlines using Reclaim's Zkfetch",
      visitUrl: "https://tmr.news/",
      demoUrl: "#"
    },
    {
      name: "Vana",
      icon: "/ecosystem/vana2.jpg",
      description: "Reclaim helps Vana get access to data from multiple websites",
      visitUrl: "https://www.vana.org/",
      demoUrl: "#"
    },
    {
      name: "p2p.me",
      icon: "/ecosystem/p2p.png",
      description: "An on-ramp/off-ramp for India where users can buy and sell crypto with INR, they use reclaim for KYC purposes via Aadhar portal.",
      visitUrl: "https://app.p2p.me/",
      demoUrl: "https://www.youtube.com/watch?v=wWLfqEWXDnE&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=11"
    },
    {
      name: "zkBring",
      icon: "/ecosystem/zkbring.png",
      description: "Airdrop platform that targets users based on their web2 activity.",
      visitUrl: "https://zkbring.com/",
      demoUrl: "https://x.com/MikhailDobs/status/1886763257312018607"
    },
    {
      name: "Payy",
      icon: "/ecosystem/payy.png",
      description: "A zk-wallet using reclaim for onramping and offramping",
      visitUrl: "https://payy.link/",
      demoUrl: "#"
    },
    {
      name: "Solana ID",
      icon: "/ecosystem/solanaid.png",
      description: "Solana ID is an identity aggregator on Solana that uses Reclaim to prove your ownership of your identities across web2 platforms",
      visitUrl: "https://www.solana.id/",
      demoUrl: "https://www.youtube.com/watch?v=MtT1ZBSJa64&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=10"
    },
    {
      name: "zkMe",
      icon: "/ecosystem/zkme.png",
      description: "An Identity layer that leverages Reclaim Protocol for accessing verified Credit Scores from applications in a privacy preserving manner",
      visitUrl: "https://t.co/tfna7aQG6P",
      demoUrl: "#"
    },
    {
      name: "Metopia",
      icon: "/ecosystem/metopia.png",
      description: "Dynamic attestation through non-transferable badges and incentivization through onchain reputation",
      visitUrl: "https://metopia.xyz/",
      demoUrl: "#"
    },
    {
      name: "3Jane",
      icon: "/ecosystem/3jane.png",
      description: "A credit-based money market using Reclaim to verify personnel via their identity using sites like coinbase",
      visitUrl: "https://www.3jane.xyz/",
      demoUrl: "#"
    },
    {
      name: "Icebreaker",
      icon: "/ecosystem/icebreaker.png",
      description: "A professional onchain network using Reclaim for getting proof of work of profiles",
      visitUrl: "https://www.icebreaker.xyz/",
      demoUrl: "https://x.com/reclaimprotocol/status/1868576711706894652"
    },
    {
      name: "Bondex",
      icon: "/ecosystem/bondex.png",
      description: "A professional onchain network using Reclaim for getting proof of work of profiles",
      visitUrl: "https://bondex.app/",
      demoUrl: "#"
    },
    {
      name: "fr Market",
      icon: "/ecosystem/fr.png",
      description: "Fr Market, a prediction market on top of zkTLS for music charts, uses the zkfetch module to put the Youtube Music chart stats onchain and allows folks to predict which music video will reach the top charts.",
      visitUrl: "https://www.fr.market/",
      demoUrl: "https://www.youtube.com/watch?v=m2wQuCMj6Z0&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=17"
    },
    {
      name: "Honestly",
      icon: "/ecosystem/honestly2.png",
      description: "Honestly is Bumble for makeup and uses Reclaim Protocol for acquiring data to curate products and getting feedback.",
      visitUrl: "https://askhonestly.ai",
      demoUrl: "https://www.youtube.com/watch?v=fYhvvGM_QgA&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=9"
    },
    {
      name: "Raize Club",
      icon: "/ecosystem/raize.png",
      description: "Prediction Marketplace on Starknet using Reclaim's zkfetch to settle prediction outcomes onchain",
      visitUrl: "https://www.raize.club/",
      demoUrl: "#"
    },
    {
      name: "Stormbit",
      icon: "/ecosystem/stormbit2.png",
      description: "Stormbit provides the infrastructure for complex and flexible lending operations using zkTLS to enable advanced risk assessment and custom loan agreements.",
      visitUrl: "https://stormbit.finance/",
      demoUrl: "#"
    },
    {
      name: "Showdown",
      icon: "/ecosystem/showdown.png",
      description: "Showdown is a game streaming platform using Reclaim for proof of streaming and secondary KYC",
      visitUrl: "https://showdown.win/",
      demoUrl: "https://www.youtube.com/watch?v=8ZUxXoZCw_M&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=5&pp=iAQB"
    },
    {
      name: "Catoff",
      icon: "/ecosystem/catoff.png",
      description: "P2P wager platform, where they use reclaim to prove the results of activities digitally, whether its steps, twitter impressions, github commits etc to decide on the winner.",
      visitUrl: "https://game.catoff.xyz/",
      demoUrl: "https://www.youtube.com/watch?v=K3oOkiPHAvc&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=6"
    },
    {
      name: "Intract",
      icon: "/ecosystem/intract2.png",
      description: "Intract is a questing platform using Reclaim for Proof of Personhood",
      visitUrl: "https://www.intract.io/",
      demoUrl: "https://www.youtube.com/watch?v=n4Hzwe5s7sg&list=PLMl4DDeHR104mRI94U0ysnZHwIDfl8Cum&index=14"
    },
    {
      name: "Evolv",
      icon: "/ecosystem/evolv.png",
      description: "Web2 Questing platform using reclaim for proof of activities on web2 platforms",
      visitUrl: "https://evolv.world/",
      demoUrl: "#"
    },
    {
      name: "Bounty Bay",
      icon: "/ecosystem/bountybay.png",
      description: "A decentralized Marketplace for Fair-exchanges using reclaim for proof of activities",
      visitUrl: "https://t.me/bountybay_bot",
      demoUrl: "#"
    },
    {
      name: "codedestate",
      icon: "/ecosystem/codedestate.png",
      description: "A real-estate tokenization platform that uses Reclaim to prove ownership of Land in Dubai via their Land portals",
      visitUrl: "https://codedestate.com/",
      demoUrl: "https://www.loom.com/share/2af9fee9431c4a4983224ebd3937db8d?sid=29e96d2f-be1c-4874-aea1-ebd32ce43811"
    },
    {
      name: "MusicScan.ai",
      icon: "/ecosystem/musicscan.png",
      description: "zkp2p is a consumer goods marketplace that leverages Reclaim Protocol's TLSProxy for verifying users Ticketmaster data from Ticketmaster",
      visitUrl: "https://www.musicscan.ai/",
      demoUrl: "#"
    },
    {
      name: "IBW",
      icon: "/ecosystem/ibw.png",
      description: "Earn a 50% discount on your ticket price by proving your contributions on Github",
      visitUrl: "https://indiablockchainweek.com/",
      demoUrl: "https://x.com/reclaimprotocol/status/1851236340861714793/video/1"
    },
    {
      name: "Swifey.ai",
      icon: "/ecosystem/swifey.jpg",
      description: "Verify your credentials before going on that date.",
      visitUrl: "https://linktr.ee/Swifeyai",
      demoUrl: "#"
    },
    {
      name: "Zeru Finance",
      icon: "/ecosystem/zeru.jpg",
      description: "Bring your off-chain Credit Scores on-chain with Reclaim Protocol.",
      visitUrl: "https://zeru.finance/",
      demoUrl: "#"
    },
    {
      name: "Fit Club",
      icon: "/ecosystem/fitclub.jpg",
      description: "Earn $FIT for verifying your Strava data.",
      visitUrl: "https://fitclub.tech",
      demoUrl: "https://x.com/fitclubonbase/status/1888950135071088714"
    }
  ];

  return (
    <div className="w-full">
      {/* Partner Cards Grid */}
      <div className="px-4 md:px-8 mb-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.name}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: Math.min(index * 0.05, 1),
                duration: 0.5
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div>
                {/* Header: Icon + Name */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 relative flex-shrink-0 mr-4 overflow-hidden rounded-md flex items-center justify-center">
                    <Image
                      src={partner.icon}
                      alt={`${partner.name} logo`}
                      width={56}
                      height={56}
                      className="object-contain max-w-full max-h-full"
                      onError={(e) => {
                        e.currentTarget.src = "/reclaim.png";
                      }}
                    />
                  </div>
                  <h3 className="font-['Poppins'] text-[26px] leading-[31px] font-[500] text-[#0000EE]">
                    {partner.name}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="font-['Poppins'] text-[14px] leading-[18px] font-[400] text-[#B0B0B0] mb-6">
                  {partner.description}
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <Link 
                  href={partner.visitUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0000EE] text-white font-['Poppins'] text-[16px] leading-[21px] font-[500] py-2 px-6 rounded-lg hover:bg-[#0000CC] transition-colors"
                >
                  Visit
                </Link>
                <Link 
                  href={partner.demoUrl !== "#" ? partner.demoUrl : ""} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`font-['Poppins'] text-[16px] leading-[21px] font-[500] py-2 px-6 rounded-lg border transition-colors ${
                    partner.demoUrl !== "#" 
                      ? "bg-white text-[#0000EE] border-[#0000EE] hover:bg-[#F8F8FF] cursor-pointer" 
                      : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                  }`}
                  onClick={(e) => {
                    if (partner.demoUrl === "#") {
                      e.preventDefault();
                    }
                  }}
                >
                  Watch demo
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}