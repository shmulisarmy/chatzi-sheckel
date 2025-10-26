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
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function ProductCheckout() {
  const [quantity, setQuantity] = React.useState(1);
  const price = 25.00;

  const productImages = PlaceHolderImages.filter(p => p.id.startsWith('product-image'));

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardContent className="p-0">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {productImages.map((image) => (
              <CarouselItem key={image.id}>
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    sizes="(max-width: 1023px) 90vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="p-6 space-y-6">
          <div className="space-y-1">
            <h2 className="font-headline text-2xl font-bold">The Machatzis Hashekel Coin</h2>
            <p className="text-muted-foreground">Genuine silver coin, minted according to tradition.</p>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium">Quantity</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 shrink-0" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-10 text-center text-lg font-semibold tabular-nums">{quantity}</span>
              <Button variant="outline" size="icon" className="h-8 w-8 shrink-0" onClick={() => handleQuantityChange(1)}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>
          
          <div className="flex items-baseline justify-between gap-4">
              <p className="text-lg font-medium">Price</p>
              <p className="font-headline text-4xl font-bold text-primary">${(price * quantity).toFixed(2)}</p>
          </div>
          
          <Link href="/checkout" passHref>
            <Button size="lg" className="w-full text-lg font-semibold transition-transform hover:scale-[1.02] active:scale-100" asChild>
              <a>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Continue to Checkout
              </a>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
