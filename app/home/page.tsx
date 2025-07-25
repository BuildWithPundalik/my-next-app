'use client'

import Hero from "@/components/sections/home/hero";
import Services from "@/components/sections/home/services";
import Features from "@/components/sections/home/feature1";
import FeatureSection1 from "@/components/sections/home/feature2";
import FeatureSection2 from "@/components/sections/home/feature3";
import FeatureSection3 from "@/components/sections/home/feature4";
import { CtaStart } from "@/components/sections/home/ctastart";
import CompanyLogosSection from "@/components/sections/home/company_logos";
import Cta from "@/components/sections/cta";


export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <Services />
      <Features />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <CtaStart />
      <CompanyLogosSection />
      <Cta />
    </main>
  );
} 