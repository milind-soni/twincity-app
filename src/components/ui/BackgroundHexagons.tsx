"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { HexGrid } from "./HexGrid";
import { useTypewriter } from "@/hooks/useTypewriter";

export function BackgroundHexagons() {
  const cities = ["California", "New York", "Boston", "Delhi"];
  const typedCity = useTypewriter(cities, 200, 100, 3000);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <HexGrid className="z-10" />
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="relative z-30 text-center max-w-4xl px-4">
        <h1 className={cn("text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight")}>
          Find the most Similar Location to{" "}
          <span className="text-sky-300 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-500">
            {typedCity}
          </span>
          
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto">
          Uncover urban parallels across the globe
        </p>
      </div>
    </div>
  );
}