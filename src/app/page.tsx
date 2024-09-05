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
      {/* Additional scrollable sections */}
      <main>
        <section className="min-h-screen bg-slate-800 flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-white">Our Services</h2>
        </section>
        {/* Improved Contact Us Section */}
        <section className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white" placeholder="Your message here"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;