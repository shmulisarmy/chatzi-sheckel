"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { BadgeCheck } from 'lucide-react';

const endorsers = [
    {
        name: "Rabbi Yisroel Edelman",
        title: "Young Israel of Deerfield Beach, Florida",
        imageId: "rabbi-edelman-portrait",
    },
    {
        name: "Rabbi Aharon Lieberman",
        title: "Chabad of greater Fort Lauderdale, Florida",
        imageId: "rabbi-lieberman-portrait",
    },
];

const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const [node, setNode] = useState<HTMLElement | null>(null);

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(([entry]) => {
            setEntry(entry);
        }, options);

        const { current: currentObserver } = observer;

        if (node) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [node, options]);

    return [setNode, entry] as const;
};


export function HaskomohSection() {
    const [setNode, entry] = useIntersectionObserver({
        threshold: 0.2,
        triggerOnce: true,
    });
    const isVisible = entry?.isIntersecting;

    const haskomohText = [
        "We are counted - because we count, and everyone counts!",
        "Historically this was accomplished by presenting a Machatzis Hashekel to the Beis Hamikdash.",
        "Occasionally, we are presented with an opportunity to have the Zchus to fulfill a special Mitzvah.",
        "Rabbi Yossi Keller has undertaken an incredible project to reinvigorate the Mitzvah of Machatzis Hashekel in a meaningful and practical manner with the issuing of magnificent silver Half Shekel coins for this purpose. Their availability will surely bring renewed enthusiasm for this Mitzvah to a wider audience.",
        "The design and minting of such a coin at a price point available to everyone, involves significant financial expenditure. We urge your participation in this noble endeavor which will surely bring unity and pride to all of Klal Yisrael."
    ];

    return (
        <section id="haskomoh" className="mb-12 scroll-mt-24">
            <div ref={setNode}>
                <Card className={cn("shadow-lg border transition-opacity duration-1000 ease-in", isVisible ? "opacity-100" : "opacity-0")}>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl flex items-center gap-3">
                            <BadgeCheck className="w-8 h-8 text-primary" />
                            Haskomoh
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-base leading-relaxed text-foreground/90">
                        <div className="space-y-4">
                            {haskomohText.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-xl font-headline font-semibold mb-4">Endorsed by:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {endorsers.map((endorser, index) => {
                                    const image = PlaceHolderImages.find(p => p.id === endorser.imageId);
                                    return (
                                        <div key={index} className="flex flex-col items-center text-center gap-4">
                                            {image && (
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={`Portrait of ${endorser.name}`}
                                                    data-ai-hint={image.imageHint}
                                                    width={150}
                                                    height={150}
                                                    className="rounded-full object-cover aspect-square"
                                                />
                                            )}
                                            <div>
                                                <p className="font-bold text-lg">{endorser.name}</p>
                                                <p className="text-sm text-muted-foreground">{endorser.title}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
