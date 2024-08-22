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
        <div className="absolute top-1 flex w-full flex-row items-baseline justify-between px-8">
          <div className="absolute w-24 h-24 overflow-hidden ">
            <Image
              src="/logo-small.png"
              alt="Logo"
              layout="fill"
              objectFit="cover"
              objectPosition="left"
            />
          </div>

          <p className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xl">
            SEASON 05 • REVOLUTION
          </p>

          <div className="absolute top-6 right-16 overflow-hidden">
            <div className="flex flex-row text-gray-200 items-center space-x-6">
              <a
                href="https://krausehouse.mirror.xyz/"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Updates
              </a>
              <a
                href="https://app.krausehouse.club/mint"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Membership
              </a>
              <div className="bg-white hover:opacity-60 transition-all text-black py-2 px-3 rounded-lg">
                <a
                  href="https://app.krausehouse.club/collection"
                  className="rounded-lg transition-all"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Owner{"'"}s Box
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0%] left-[50%] transform -translate-x-1/2 w-full">
          <div className="flex flex-col items-start justify-center pl-16">
            <div className="flex flex-col w-1/2 mb-24">
              <div className="pl-4">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={500}
                  height={100}
                  priority
                  className="opacity-70"
                />
              </div>
              <div className="flex flex-col pl-8">
                <p className="text-lg text-left">
                  Democratizing sports ownership. By the fans, for the fans.
                </p>
                <div className="flex flex-row space-x-4 pt-4">
                  <a
                    href="https://krausehouse.mirror.xyz/-ygteS-daiuSrk-szUsbt_cavFbGCAHNKiwgLnkEEEM"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Vision
                  </a>
                  <span>•</span>
                  <a
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                  <span>•</span>
                  <a
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Next Steps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
