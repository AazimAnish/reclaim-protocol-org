import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BackgroundVector } from "@/components/BackgroundVector";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Reclaim Protocol - Verify Any Data on the Internet",
  description: "Generate proofs of any data from any website in less than 6 seconds with Reclaim Protocol",
  icons: {
    icon: '/reclaim.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-transparent text-[#171717] overflow-x-hidden`}>
        <BackgroundVector />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}