import { Button } from "@/components/ui/button";
import About from "@/components/sections/aboutus/about";
import TeamSection from "@/components/sections/aboutus/TeamSection";
import Description from "@/components/sections/aboutus/description";
import Cta from "@/components/sections/cta";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-16">
     
      <About />
      <Description/>
      <TeamSection />
      <Cta/>

      
    </main>
  );
}
