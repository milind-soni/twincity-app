import React from 'react';
import Navbar from "@/components/global/navbar";
import { BackgroundHexagons } from "@/components/ui/BackgroundHexagons";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BackgroundHexagons />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16"> {/* Adjust pt-16 based on your Navbar height */}
          {/* Your main content goes here */}
        </main>
      </div>
    </div>
  );
}

export default Home;