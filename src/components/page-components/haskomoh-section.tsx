
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
    
    const haskomohImage = PlaceHolderImages.find(p => p.id === 'Haskomoh')
    return (
        <div className="mb-12 scroll-mt-24 bg-background p-4 rounded-lg border">
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
                        </div>
    )

}
