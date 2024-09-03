import React from 'react';
import Navbar from "@/components/global/navbar";
import { BackgroundHexagons } from "@/components/ui/BackgroundHexagons";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section with HexGrid background */}
      <section className="relative h-screen">
        <BackgroundHexagons className="absolute inset-0" />
      </section>
      
      {/* Additional scrollable sections */}
      <main>
        <section className="min-h-screen bg-slate-900 flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-white">About Us</h2>
        </section>
        
        <section className="min-h-screen bg-slate-800 flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-white">Our Services</h2>
        </section>
        
        <section className="min-h-screen bg-slate-900 flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
        </section>
      </main>
    </div>
  );
}

export default Home;