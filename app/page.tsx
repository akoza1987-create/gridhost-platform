import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Games from "@/components/sections/Games";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Games />
      <Features />
    </main>
  );
}