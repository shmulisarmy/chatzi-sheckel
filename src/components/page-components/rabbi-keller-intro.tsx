
"use client";

import Image from "next/image";
import Link from 'next/link';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect, useRef } from 'react';

export function RabbiKellerIntro() {
    const rabbiImage = PlaceHolderImages.find(
        (p) => p.id === "rabbi-keller-portrait"
    );
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [startParallax, setStartParallax] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        if (sectionRef.current) {
            setStartParallax(sectionRef.current.offsetTop);
        }
    }, []);

    useEffect(() => {
        if (!isLargeScreen) return;
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLargeScreen]);

    const parallaxOffset = isLargeScreen && scrollY > startParallax ? (scrollY - startParallax) * 0.2 : 0;
    const blur = isLargeScreen && scrollY > startParallax ? Math.min(((scrollY - startParallax) / 300), 5) : 0;
    const opacity = isLargeScreen && scrollY > startParallax ? Math.max(1 - ((scrollY - startParallax) / 500), 0.5) : 1;

    return (
        <div 
            ref={sectionRef}
            className="bg-secondary/5 py-12"
            style={isLargeScreen ? { 
                transform: `translateY(${parallaxOffset}px)`,
                filter: `blur(${blur}px)`,
                opacity: opacity,
                position: 'relative',
                zIndex: 0,
            } : {}}
        >
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <CardHeader className="p-0 mb-8">
                        {/* <CardTitle className="font-headline text-4xl text-center">
                            Who is Rabbi Keller?
                        </CardTitle> */}
                    </CardHeader>
                    <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch">
                        <div className="w-full lg:w-1/2 flex">
                            <div className="flex flex-col flex-1 h-full w-full justify-between p-6">
                                <CardContent className="p-0 w-full flex-1">
                                    <div className="flex flex-col sm:flex-row items-center gap-6 h-full">
                                        {rabbiImage && (
                                        <Image
                                            src={rabbiImage.imageUrl}
                                            alt={rabbiImage.description}
                                            data-ai-hint={rabbiImage.imageHint}
                                            width={150}
                                            height={150}
                                            className="rounded-lg object-cover shrink-0"
                                        />
                                        )}
                                        <div className="space-y-2 text-center sm:text-left text-foreground/90">
                                            <p>
                                                With a profound dedication to Torah and Mitzvos, Rabbi Keller
                                                has been a guiding light in the community for decades. His
                                                teachings emphasize the importance of preparing for the coming
                                                of Moshiach, not just spiritually, but through practical actions
                                                that strengthen our connection to the Bais Hamikdash.
                                            </p>
                                            <p>
                                                This campaign is a direct result of his vision to empower every
                                                individual to be ready to fulfill the Mitzvah of Machatzis
                                                Hashekel immediately, without delay, when the time comes.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="mt-6 flex justify-center">
                                    <Link href="/about" passHref>
                                        <Button size="lg" variant="outline" className="bg-transparent text-lg font-semibold">
                                            Learn more about Rabbi Keller
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/2 flex">
                            <div className="flex flex-col flex-1 h-full w-full p-6">
                                <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video mb-6 flex-1">
                                    <iframe style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0}} src="https://drive.google.com/file/d/1SofcE-GGlla-BZt3CACMhWQfV0u1N0h2/preview" title="272  Yud Zayin Av, 5751   Dollars Peninim   י ז מנחם אב תנש א" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                <div className="flex justify-center">
                                    <Link href="/the-rebbes-message" passHref>
                                        <Button size="lg" variant="outline" className="bg-transparent text-lg font-semibold">
                                            Learn more about the Rebbe's message
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
