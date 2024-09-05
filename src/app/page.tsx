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
          <div className="flex flex-col items-center">
            <div className="w-full mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white text-center">Demographic Analysis</h2>
              <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
                Explore demographics which can bring the best footfall to your business.
                Our analysis helps you understand your target audience and optimize your
                marketing strategies for maximum impact.
              </p>
            </div>
            <div className="w-full max-w-4xl">
              <Image
                src="/dashcens.png"
                alt="Dashboard illustration"
                width={800}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full max-w-4xl mb-8">
              <Image
                src="/census.png"
                alt="Demographic analysis illustration"
                width={600}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
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