import React from 'react';
import Navbar from "@/components/global/navbar";
import { BackgroundHexagons } from "@/components/ui/BackgroundHexagons";
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section with HexGrid background */}
      <section className="relative h-screen">
        <BackgroundHexagons className="absolute inset-0" />
      </section>
      {/* Demographic Analysis Section */}
      <section className="min-h-screen bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-white">Demographic Analysis</h2>
              <p className="text-gray-300 mb-6">
                Explore demographics which can bring the best footfall to your business.
                Our analysis helps you understand your target audience and optimize your
                marketing strategies for maximum impact.
              </p>
              {/* You can add a button here if needed in the future */}
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image 
                src="/hero.png" 
                alt="Demographic analysis illustration"
                width={600}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Additional scrollable sections */}
      <main>
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