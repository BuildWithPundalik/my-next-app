'use client'

import Hero from "@/components/sections/home/hero";
import Services from "@/components/sections/home/services";
import Features from "@/components/sections/home/features";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Cta />
    </main>
  );
} 