"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HexGrid } from "./HexGrid";
import { useTypewriter } from "@/hooks/useTypewriter";

export function BackgroundHexagons() {
  const cities = ["Seattle", "New York", "Boston", "New Delhi"];
  const typedCity = useTypewriter(cities, 200, 100, 3000);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <HexGrid className="z-10" />
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-left max-w-2xl mb-8 md:mb-0">
          <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight")}>
            Find the most Similar Location to{" "}
            <span className="text-sky-300 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-500">
              {typedCity}
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-neutral-300 font-light">
            Uncover urban parallels across the globe
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-2xl">
          <Image
            src="/hero.png"
            alt="Hero image"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}