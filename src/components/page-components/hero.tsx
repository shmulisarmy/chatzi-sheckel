"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Gem, ShieldCheck, Clock } from "lucide-react";

const heroImage = {
  id: "hero-background",
  description: "A grand, temple-like interior with large marble pillars and a divine light shining from above.",
  imageUrl: "https://picsum.photos/seed/hero2/1920/1080",
  imageHint: "temple interior light",
};

const Feature = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-sm">
    <Icon className="h-5 w-5 text-blue-300" />
    <span>{children}</span>
  </div>
);

export function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[500px] max-h-[800px] w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight text-shadow-lg">
            Be Ready for <span className="text-blue-400">Moshiach</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl max-w-2xl mx-auto text-neutral-200 text-shadow">
            The authentic Machatzis Hashekel coin, prepared according to tradition for the ultimate mitzvah.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Feature icon={Gem}>Genuine Silver Coin</Feature>
          <Feature icon={ShieldCheck}>Rabbinically Approved</Feature>
          <Feature icon={Clock}>Ready When Needed</Feature>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
            Order Your Coin Now
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold bg-white/10 border-white/50 backdrop-blur-sm hover:bg-white/20 transition-transform hover:scale-105">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
