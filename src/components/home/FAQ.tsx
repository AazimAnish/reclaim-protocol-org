"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

// FAQ Data
const faqItems = [
  {
    id: 1,
    question: "Ok, tell me what is Reclaim Protocol again?",
    answer: "Sure. Here is what matters. If you use the Reclaim SDK, you can ask your users to prove certain identity and reputation they have on other websites. For example, you could ask the user to login into their bank and prove their bank balance. You could ask your user to login into Uber and prove that they've taken more than 50 rides this year. All of this happens without compromising security and without needing any change on the bank's or Uber's side. Not just Banks and Uber, you can connect to any website on the internet. Over 1000 already."
  },
  {
    id: 2,
    question: "Does Reclaim Protocol do an MITM attack?",
    answer: "No, Reclaim Protocol does not do an MITM (Man-in-the-Middle) attack. Instead, it uses a novel cryptographic architecture that preserves user security. The user's credentials and personal data never leave their device and are not accessible to Reclaim or any third party. The protocol only verifies the authenticity of specific claims from the source website without accessing or storing sensitive information."
  },
  {
    id: 3,
    question: "What are the trust assumptions here?",
    answer: "The trust assumptions are minimal. Users trust their own device (as they do for any application), and Reclaim provides a trustless infrastructure for verification. The user authenticates directly with the source website through their device, and Reclaim's protocol generates cryptographic proofs without accessing user credentials. These proofs are verified on-chain, ensuring that no single entity, including Reclaim, can manipulate the verification process."
  },
  {
    id: 4,
    question: "If the software is open sourced, why do I need to pay?",
    answer: "While our core protocol is open-sourced to ensure transparency and security, we offer premium services that enhance your experience with Reclaim. These include managed infrastructure, 24/7 technical support, SLA guarantees, enhanced analytics, security monitoring, and enterprise features. Our pricing model ensures we can continue developing and improving the protocol while providing reliable service for production deployments."
  },
  {
    id: 5,
    question: "Do my users have to install an app or chrome extension?",
    answer: "No, your users don't need to install any additional software. Reclaim Protocol works seamlessly within your existing web application. We've designed the user experience to be completely frictionless - all verification happens directly in the user's browser without requiring chrome extensions, app installations, or other additional steps."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default
  const [clickedIndex, setClickedIndex] = useState<number | null>(null); // Track click effect
  
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  const toggleFAQ = (index: number) => {
    // Set clicked index for feedback effect
    setClickedIndex(index);
    
    // Reset clicked index after a short delay (flicker effect)
    setTimeout(() => {
      setClickedIndex(null);
    }, 300);
    
    // Toggle the FAQ as usual
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.25, delay: 0.05 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.2 }
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="w-full py-6 sm:py-2 md:py-4"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Section heading - Centered */}
          <div 
            ref={titleRef}
            className="space-y-4 text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-['Poppins', 'Poppins Placeholder', sans-serif] font-normal text-[18px] leading-[25px] text-[#0000EE]"
            >
              FAQs
            </motion.p>
            
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={titleVariants}
              className="font-['Poppins', 'Poppins Placeholder', sans-serif] font-medium text-[44px] leading-[53px] text-[#0000EE]"
            >
              We've got the answers
            </motion.h2>
          </div>
          
          {/* FAQ items */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col space-y-5"
          >
            {faqItems.map((item, index) => (
              <div key={item.id} className="w-full overflow-hidden">
                {/* Question - White background with light grey on click */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className={`flex justify-between items-center cursor-pointer py-4 transition-colors duration-200 
                    ${clickedIndex === index ? 'bg-gray-200' : 'bg-white hover:bg-gray-50 active:bg-gray-100'} 
                    ${activeIndex === index ? "rounded-t-[24px]" : "rounded-[24px]"}`
                  }
                >
                  <div className="font-['Poppins', 'Poppins Placeholder', sans-serif] font-normal text-[20px] leading-[26px] text-[#0000EE] px-6">
                    {item.question}
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center mr-4">
                    <motion.svg 
                      width="14" 
                      height="8"
                      viewBox="0 0 14 8" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                      <path 
                        d="M1 1L7 7L13 1" 
                        stroke="#7A7A7A" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                </div>
                
                {/* Answer */}
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`overflow-hidden ${clickedIndex === index ? 'bg-gray-200' : 'bg-white'}`}
                    >
                      <div className="font-['Poppins', 'Poppins Placeholder', sans-serif] font-normal text-[18px] leading-[25px] text-[rgba(122,122,122,0.9)] px-6 py-6">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Horizontal separator after the last question */}
            <div className="h-[1px] bg-[rgba(0,0,0,0.05)] w-full mt-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};