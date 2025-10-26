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
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Minus, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function ShippingMessage({ itemsToAdd }: { itemsToAdd: number }) {
  if (itemsToAdd <= 0) {
    return (
      <Badge variant="secondary" className="w-full justify-center border border-green-500/50 bg-green-50 text-green-700 font-normal">
        You've unlocked free shipping!
      </Badge>
    );
  }

  return (
    <div className="border border-dashed border-muted-foreground/50 rounded-md p-2 text-center text-sm text-muted-foreground bg-background">
      {itemsToAdd === 1 ? (
        <span>Just <strong>one</strong> more item to get <strong>free shipping</strong>!</span>
      ) : (
        <span>Add <strong>{itemsToAdd}</strong> more items to get <strong>free shipping</strong>!</span>
      )}
    </div>
  );
}

export function ProductCheckout() {
  const [quantity, setQuantity] = React.useState(1);

  const price = 25.00;
  const freeShippingThreshold = 75.00;
  const itemsForFreeShipping = Math.ceil(freeShippingThreshold / price);
  const itemsToAdd = itemsForFreeShipping - quantity;
  const total = price * quantity;

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
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold">The Machatzis Hashekel Coin</h2>
            <p className="text-muted-foreground text-base">Genuine silver coin, minted according to tradition to be ready for the mitzvah when Moshiach arrives.</p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-headline text-4xl font-bold">${price.toFixed(2)}</span>
            <span className="text-muted-foreground">per coin</span>
          </div>

          <ShippingMessage itemsToAdd={itemsToAdd} />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-muted-foreground">Quantity</span>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-9 w-9 shrink-0 rounded-md" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <span className="w-10 text-center text-2xl font-bold tabular-nums">{quantity}</span>
                <Button variant="outline" size="icon" className="h-9 w-9 shrink-0 rounded-md" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>

            <Separator />
            
            <div className="flex items-baseline justify-between gap-4">
                <span className="text-base font-medium text-muted-foreground">Total</span>
                <p className="font-headline text-3xl font-bold text-primary">${total.toFixed(2)}</p>
            </div>
          </div>
          
          <Link href={{ pathname: '/checkout', query: { quantity: quantity } }} passHref>
             <Button size="lg" className="w-full text-lg font-semibold transition-transform hover:scale-[1.02] active:scale-100 btn-shine p-0 h-12">
                <span className="w-full h-full flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90">
                  Continue to Checkout
                </span>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}