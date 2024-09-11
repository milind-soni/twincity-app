import React from 'react';
import Navbar from "@/components/global/navbar";
import { BackgroundHexagons } from "@/components/ui/BackgroundHexagons";
import Image from 'next/image';

const Home = () => {
  const calendlyUrl = "https://cal.com/milind-soni-002qed/30min";

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
                Our analysis helps you understand your target audience and Geo-Target your ads for better impact.
              </p>
            </div>
            <div className="w-full max-w-4xl mb-8">
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
      <section className="min-h-screen bg-slate-1000 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="w-full mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white text-center">Enable your business with location intelligence for Quick Commerce</h2>
              <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
                Find out locations to setup touchpoints for your business to enable quick commerce, enabled by data driven decisions like demographic, traffic and population density
              </p>
            </div>
            </div>
            </div>
            </section>
      {/* Additional scrollable sections */}
      <main>
        {/* <section className="min-h-screen bg-slate-800 flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-white">Our Services</h2>
        </section> */}
        {/* Contact Us Section (now with Calendly link) */}
        <section className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 py-16">
          <h2 className="text-3xl font-semibold text-white text-center mb-8">Contact Us</h2>
          <p className="text-gray-300 text-center max-w-2xl mb-8">
            Have questions or ready to get started? Schedule a call with us to discuss how we can help your business leverage location intelligence.
          </p>
          <a 
            href={calendlyUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Schedule a Call
          </a>
        </section>
        {/* Book a Call Section */}
    
      </main>
    </div>
  );
}

export default Home;