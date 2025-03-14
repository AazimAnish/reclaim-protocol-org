"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Blog post data
const blogPosts = [
    {
        id: 1,
        title: "zkTLS RFPs",
        date: "Sept 10, 2024",
        image: "/blog/zktls.png",
        url: "https://blog.reclaimprotocol.org/posts/zktls-rfps"
    },
    {
        id: 2,
        title: "Turbocharged ZK Proofs for Mobile",
        date: "Sept 18th, 2024",
        image: "/blog/mobile.jpeg",
        url: "https://blog.reclaimprotocol.org/posts/gnark-migration"
    },
    {
        id: 3,
        title: "Proxying is enough",
        date: "May 29, 2024",
        image: "/blog/proxying.png",
        url: "https://blog.reclaimprotocol.org/posts/proxying-is-enough"
    }
];

export const Blog = () => {
    // Refs for animation
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
    const isButtonInView = useInView(buttonRef, { once: true, amount: 0.5 });
    const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // State for current card and window size
    const [currentCard, setCurrentCard] = useState(1);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    // Animation variants
    const headingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.3 + i * 0.2
            }
        })
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.4
            }
        }
    };

    // Function to scroll to specific card
    const scrollToCard = (cardIndex: number) => {
        if (carouselRef.current) {
            const cardWidth = 347; // Width of each card
            const scrollPosition = cardWidth * (cardIndex - 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            setCurrentCard(cardIndex);
        }
    };

    // Handle scroll event to update current card
    const handleScroll = () => {
        if (carouselRef.current) {
            const scrollPosition = carouselRef.current.scrollLeft;
            const cardWidth = 347; // Width of each card
            const newCardIndex = Math.round(scrollPosition / cardWidth) + 1;
            if (newCardIndex !== currentCard) {
                setCurrentCard(newCardIndex);
            }
        }
    };

    // Touch event handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left
            if (currentCard < blogPosts.length) {
                scrollToCard(currentCard + 1);
            }
        }

        if (touchStart - touchEnd < -50) {
            // Swipe right
            if (currentCard > 1) {
                scrollToCard(currentCard - 1);
            }
        }
    };

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial width when component mounts
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    // Handle carousel scroll events
    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            return () => carousel.removeEventListener('scroll', handleScroll);
        }
    }, [currentCard]);

    // Determine layout based on window width
    const getLayoutClass = () => {
        if (windowWidth === 0) return "flex overflow-x-auto"; // Default for SSR
        
        // Custom breakpoints that account for the card width (347px) plus gap (24px)
        if (windowWidth >= 1100) {
            return "grid grid-cols-3"; // 3 cards fit with gap
        } else if (windowWidth >= 750) {
            return "grid grid-cols-2"; // 2 cards fit with gap
        } else {
            return "flex overflow-x-auto"; // Single scrollable card
        }
    };

    return (
        <section
            ref={sectionRef}
            id="blogs"
            className="w-full max-w-[1280px] h-auto min-h-[664.8px] mx-auto pb-2 sm:pb-24 md:pb-2 px-4 sm:px-16 md:px-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 md:gap-8">
                    {/* Section Title - Centered on mobile */}
                    <div className="text-center md:text-left space-y-4 w-full">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="font-['Poppins', 'Poppins Placeholder', sans-serif] font-normal text-[18px] leading-[25px] text-[#0000EE]"
                        >
                            Blogs
                        </motion.p>

                        <motion.h2
                            ref={headingRef}
                            initial="hidden"
                            animate={isHeadingInView ? "visible" : "hidden"}
                            variants={headingVariants}
                            className="font-['Poppins', 'Poppins Placeholder', sans-serif] font-normal text-[38px] leading-[42px] text-[#0000EE] max-w-4xl"
                        >
                            "Why Traditional Verification is Dead: The Future is Instant and AI-Driven"
                        </motion.h2>
                    </div>

                    {/* Blog Cards - Dynamic responsive layout */}
                    <div className="w-full relative">
                        <div
                            ref={carouselRef}
                            className={`${getLayoutClass()} scrollbar-hide snap-x snap-mandatory gap-6 pb-4`}
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {blogPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    custom={index}
                                    initial="hidden"
                                    animate={isSectionInView ? "visible" : "hidden"}
                                    variants={cardVariants}
                                    className="w-[347px] h-[434px] flex-shrink-0 snap-center mx-auto md:mx-0"
                                >
                                    <Link
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener"
                                        className="block group w-full h-full rounded-xl overflow-hidden transition-all duration-300 shadow-lg border border-gray-100 bg-white hover:bg-[#F0F0FF]"
                                    >
                                        {/* Image Section with Padding */}
                                        <div className="w-full h-[292px] p-2">
                                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(max-width: 750px) 100vw, (max-width: 1100px) 50vw, 347px"
                                                    className="object-cover object-center rounded-xl"
                                                />
                                            </div>
                                        </div>

                                        {/* Title & Date Section */}
                                        <div className="p-4 h-[132px] flex flex-col justify-between">
                                            <h3 className="font-['Poppins', 'Poppins Placeholder', sans-serif] text-[22px] font-semibold leading-[1.4em] text-[#0000EE] group-hover:text-[#A8A8FF] transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="font-['Poppins', 'Poppins Placeholder', sans-serif] text-[#7a7a7a] text-base leading-[150%] font-normal">
                                                {post.date}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination indicators - visible only when in carousel mode */}
                        {windowWidth < 750 && (
                            <div className="flex justify-center mt-4">
                                {blogPosts.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToCard(index + 1)}
                                        className={`w-2 h-2 mx-1 rounded-full transition-colors ${currentCard === index + 1 ? 'bg-[#0000EE]' : 'bg-gray-300'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Start Reading Button - Centered on mobile */}
                    <motion.div
                        ref={buttonRef}
                        initial="hidden"
                        animate={isButtonInView ? "visible" : "hidden"}
                        variants={buttonVariants}
                        className="flex justify-center w-full md:justify-start"
                    >
                        <Link
                            href="https://blog.reclaimprotocol.org/"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-2 text-[#0000EE] font-['Poppins', 'Poppins Placeholder', sans-serif] text-[18px] leading-[25px] font-normal hover:text-[#8F8FFF] transition-colors"
                        >
                            <span>Start reading</span>
                            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                                <path d="M8 12h8m0 0l-3.5-3.5M16 12l-3.5 3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};