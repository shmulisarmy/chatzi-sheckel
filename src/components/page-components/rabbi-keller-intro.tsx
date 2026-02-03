
"use client";

import Image from "next/image";
import Link from 'next/link';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import React from 'react';
import { ThumbedVideo } from "../ThumbedVideo";

export function RabbiKellerIntro() {
    const rabbiImage = PlaceHolderImages.find(
        (p) => p.id === "rabbi-keller-portrait"
    );

    return (
        <div 
            className="rabbi-keller-intro | bg-secondary/5 py-12"
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
                                    <ThumbedVideo iframeSrc="https://drive.google.com/file/d/15-hHJ5IstaBmimqxM0Hdf2MjP_5tbac_/preview" thumbSrc={PlaceHolderImages.find(image => image.id === "rebbe-giving-dollar")?.imageUrl} />
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
