
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { BadgeCheck, Minus } from 'lucide-react';

const endorsers = [
    {
        name: "Rabbi Yisroel Edelman",
        title: "Young Israel of Deerfield Beach, Florida",
    },
    {
        name: "Rabbi Aharon Lieberman",
        title: "Chabad of greater Fort Lauderdale, Florida",
    }
];

export function HaskomohSection() {
    const haskomohText = [
        "We are counted - because we count, and <span class=\"text-primary\">everyone counts!</span>",
        "Historically this was accomplished by presenting a Machatzis Hashekel to the Beis Hamikdash.",
        "Occasionally, we are presented with an opportunity to have the Zchus to fulfill a special Mitzvah.",
        "Rabbi Yossi Keller has undertaken an incredible project to reinvigorate the Mitzvah of Machatzis Hashekel in a meaningful and practical manner with the issuing of magnificent silver Half Shekel coins for this purpose. Their availability will surely bring renewed enthusiasm for this Mitzvah to a wider audience.",
        "The design and minting of such a coin at a price point available to everyone, involves significant financial expenditure. We urge your participation in this noble endeavor which will surely bring unity and pride to all of Klal Yisrael."
    ];
    
    const haskomohImage = PlaceHolderImages.find(p => p.id === 'signatures')

    return (
        <section id="haskomoh" className="mb-12 scroll-mt-24">
            <div>
                <Card className="shadow-lg border">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl flex items-center gap-3">
                            <BadgeCheck className="w-8 h-8 text-primary" />
                            Haskomoh
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-base leading-relaxed text-foreground/90">
                        <div className="space-y-4">
                            {haskomohText.map((paragraph, index) => (
                                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                            ))}
                        </div>

                        <div className="space-y-6">
                            {haskomohImage && (
                                 <Image
                                    src={haskomohImage.imageUrl}
                                    alt={haskomohImage.description}
                                    data-ai-hint={haskomohImage.imageHint}
                                    width={800}
                                    height={600}
                                    className="rounded-lg object-contain w-full"
                                />
                            )}
                            <div>
                                <h3 className="text-xl font-headline font-semibold mb-4">Endorsed by:</h3>
                                <ul className="space-y-3">
                                    {endorsers.map((endorser, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Minus className="h-5 w-5 text-primary mt-1 shrink-0"/>
                                            <div>
                                                <p className="font-bold text-lg">{endorser.name}</p>
                                                <p className="text-sm text-muted-foreground">{endorser.title}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
