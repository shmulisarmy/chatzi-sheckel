
"use client";

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { SHOPIFY_PRODUCT_URL } from "@/app/urls";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState, useEffect } from 'react';


const heroImage = {
  id: "hero-background",
  description: "A grand, temple-like interior with large marble pillars and a divine light shining from above.",
  imageUrl: "https://picsum.photos/seed/hero2/1920/1080",
  imageHint: "temple interior light",
};

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scale = 1 + scrollY / 3000;
  const blur = scrollY / 200;

  return (
    <div className="relative h-[80vh] min-h-[500px] max-h-[800px] w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={PlaceHolderImages.find(image => image.id === "kosel").imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
          style={{
            transform: `scale(${scale})`,
            filter: `blur(${blur}px)`,
            transition: 'transform 0.1s ease-out, filter 0.1s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Glassmorphism container */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h1 style={{
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.1,
    color: '#ffffff',
  }}
              className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight text-shadow-lg">
                Be Ready for Moshiach
                 {/* <span className="bg-gradient-to-r from-black via-blue-900 to-black bg-clip-text text-transparent">Moshiach</span> */}
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-xl max-w-2xl mx-auto text-neutral-200 text-shadow">
                The authentic Machatzis Hashekel coin, prepared according to tradition for when the time comes.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={SHOPIFY_PRODUCT_URL} passHref target="_blank">
                    <Button 
                      size="lg" 
                      className="px-8 py-6 text-lg font-semibold border-0 transition-transform hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(160deg, black 0%, rgb(4, 4, 31) 100%)`
                      }}
                    >
                        Order Your Coin Now
                    </Button>
                </Link>
                <Link href="/#sources" passHref>
                    <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold bg-white/10 border-white/50 backdrop-blur-sm hover:bg-white/20 transition-transform hover:scale-105">
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
