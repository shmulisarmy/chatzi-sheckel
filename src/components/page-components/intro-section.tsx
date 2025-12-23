
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Link } from 'lucide-react';
import { Button } from 'react-day-picker';
import { SHOPIFY_PREVIEW_URL } from '@/app/urls';

export function IntroSection() {
    const baseHamikdash = PlaceHolderImages.find(p => p.id === 'base-hamikdash');
    const coinImage = PlaceHolderImages.find(p => p.id === 'transparent-coin');

    return (
        <div className="bg-background py-16" style={{
            background: `linear-gradient(
                                160deg,
                                black 0%,
                                rgb(4, 4, 31) 100%
                            )
                            `, color: 'white'
        }}>
            <div className="container mx-auto max-w-4xl px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {baseHamikdash && (
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <Image
                                src={baseHamikdash.imageUrl}
                                alt={baseHamikdash.description}
                                data-ai-hint={baseHamikdash.imageHint}
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg object-cover w-full"
                            />
                        </div>
                    )}
                    <div className="w-full md:w-2/3">
                        <h2 className="font-headline text-3xl md:text-4xl  mb-4">On Shabbos Parshas Vayigash 5747 (1987)</h2>
                        <p className="text-lg">
                            the Rebbe spoke of the extraordinary moment we are living in, a time that calls for unity and preparation for the rebuilding of the Beis HaMikdash and the coming of Moshiach.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-lg  space-y-4 text-left">
                <h2 className="font-headline text-xl md:text-2xl  mb-4">Preparation is not only spiritual. At a certain point, it must become practical.</h2>
                    <p>If Moshiach were to come today, would we be ready for the very first mitzvah our nation will once again fulfill together; the Korban Tamid?</p>
                </div>

                <div className="mt-12">
                <h2 className="font-headline text-1xl md:text-2xl  mb-4">That mitzvah requires the Machatzis Hashekel.</h2>
                </div>
                
                <div className="mt-12 text-lg  space-y-4">
                     <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="space-y-4 order-2 md:order-1 md:w-1/2">
                            <p>This is not symbolic. It is a tangible halachic requirement, something that must already be in hand.</p>
                            <p>Rabbi Keller received a direct directive from the Rebbe to prepare himself to rule together with the Beis Din. This project is part of that charge: turning anticipation into readiness.</p>
                            <p>The Machatzis Hashekel enables each of us to move from hope to action: united, prepared, and ready.</p>
                        </div>
                        {coinImage && (
                            <div className="md:w-1/2 flex-shrink-0 order-1 md:order-2 "> 
                            <div className='flex justify-center'>

                                <Image
                                    src={coinImage.imageUrl}
                                    alt={coinImage.description}
                                    data-ai-hint={coinImage.imageHint}
                                    width={300}
                                    height={300}
                                    className=""
                                    />
                                    </div>
                                {/* <Link href={SHOPIFY_PREVIEW_URL}  target="_blank">
                <button  className="px-8 py-6 text-lg font-semibold    hover:bg-blue-700 transition-transform hover:scale-105"
                  style={{}}
                >
                    Order Your Coin Now
                </button>
            </Link> */}
                            <div className='flex justify-center pt-10'>


                        <button className=' bg-transparent text-lg font-semibold hover:bg-blue-800 text-white border-opacity-100 border   p-3 rounded-lg'>Order Your Coin Now</button>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
{/* 
                <div className="flex justify-center mt-16">
                    <ArrowDown className="w-12 h-12 text-muted-foreground/50 animate-bounce" />
                </div> */}
            </div>
        </div>
    );
}
