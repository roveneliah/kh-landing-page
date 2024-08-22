import Image from "next/image";
import React from "react";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function LandingPage() {
  return (
    <div
      data-testid="landing-page-background"
      className={`min-h-screen flex items-center justify-center bg-cover bg-center ${ibmPlexMono.className}`}
      style={{
        background:
          'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url("/revolution.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-white w-full">
        <div className="absolute top-4 flex w-full flex-row justify-between px-8">
          <div className="flex flex-row space-x-4">
            <a
              href="https://krausehouse.mirror.xyz/-ygteS-daiuSrk-szUsbt_cavFbGCAHNKiwgLnkEEEM"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              learn more
            </a>
            <span>•</span>
            <a
              href="https://krausehouse.mirror.xyz/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              stay updated
            </a>
          </div>
          <p className="text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            SEASON 05 • REVOLUTION
          </p>
          <div className="flex flex-row space-x-4">
            <a
              href="https://app.krausehouse.club/mint"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              join the cause
            </a>
            <span>•</span>
            <a
              href="https://krausehousework.notion.site/Krause-House-Member-Dashboard-a00860761dd4486792aed12cc8187ce2"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              members
            </a>
          </div>
        </div>
        <div className="absolute bottom-[0%] left-1/2 transform -translate-x-1/2 w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col w-1/2 mb-24">
              <Image
                src="/logo.png"
                alt="Logo"
                width={1000}
                height={100}
                priority
                className="opacity-70"
              />
              <p className="text-lg">
                democratizing the future of sports ownership
              </p>
              <p className="text-lg">by the fans, for the fans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
