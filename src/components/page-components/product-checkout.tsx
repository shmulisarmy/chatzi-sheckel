"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart } from 'lucide-react';
import { SHOPIFY_PREVIEW_URL } from '@/app/urls';


export function ProductCheckout() {
  const price = 75.00;
  const productImages = PlaceHolderImages.filter(p => p.id.startsWith('product-image-new')).sort((a, b) => a.id.localeCompare(b.id));

  return (
    <Card className="overflow-hidden shadow-lg border @container">
      <CardContent className="p-0">
        <div className="flex flex-col @[500px]:flex-row">
            <div className="w-full @[500px]:w-1/2 p-4">
                <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                    {productImages.map((image) => (
                    <CarouselItem key={image.id}>
                        <div className="relative aspect-square bg-muted">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 20vw"
                            className="object-cover"
                        />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
                </Carousel>
            </div>

            <div className="w-full @[500px]:w-1/2 flex flex-col p-4 justify-between">
                <div className="space-y-2">
                    <h2 className="font-headline text-lg font-bold">The Machatzis Hashekel</h2>
                    <p className="text-muted-foreground text-sm">Genuine silver coin, minted according to tradition.</p>
                
                    <div className="flex items-baseline gap-1.5 pt-2">
                        <span className="text-xl font-bold">${price.toFixed(2)}</span>
                        <span className="text-muted-foreground text-xs">per coin</span>
                    </div>
                </div>
                
                <div className='pt-4'>
                    <Link href={SHOPIFY_PREVIEW_URL} passHref target="_blank">
                        <Button size="lg" className="w-full font-semibold transition-transform hover:scale-[1.02] active:scale-100">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
