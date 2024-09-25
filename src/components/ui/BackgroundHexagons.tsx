"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HexGrid } from "./HexGrid";
import { useTypewriter } from "@/hooks/useTypewriter";

interface BackgroundHexagonsProps {
  className?: string;
}

export function BackgroundHexagons({ className }: BackgroundHexagonsProps) {
  const changingWords = [
    "Weather Twin",
    "Economic Twin",
    "Cultural Twin",
    "Demographic Twin"
  ];
  const typedWord = useTypewriter(changingWords, 100, 100, 3000);
  const calendlyUrl = "https://cal.com/milind-soni-002qed/30min";

  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-slate-900", className)}>
      <HexGrid className="absolute inset-0" />
      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between">
          <div className="text-left max-w-2xl mb-8 md:mb-0">
            <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight", "text-shadow")}>
              <span className="block">Find Your Location&apos;s</span>
              <span className="relative inline-block w-full h-[1.2em]">
                <span className="absolute inset-0 text-sky-300 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-500">
                  {typedWord}
                </span>
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-neutral-300 font-light text-shadow">
              Discover your next winning location using Data Driven Insights
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-6 py-3 bg-white hover:bg-gray-100 text-slate-900 text-sm font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 pointer-events-auto"
            >
              Schedule a Call
            </a>
          </div>
          <div className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-2xl pointer-events-auto">
            <Image
              src="/hero2.png"
              alt="Hero image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}