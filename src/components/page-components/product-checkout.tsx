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
import { Minus, Plus, Truck, Lock, ShieldCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function ShippingMessage({ itemsToAdd }: { itemsToAdd: number }) {
  const costToAdd = (itemsToAdd * 60).toFixed(2);
  
  if (itemsToAdd <= 0) {
    return (
      <Badge variant="secondary" className="w-full justify-center border border-green-500/50 bg-green-50 text-green-700 font-normal py-1.5 text-xs gap-2">
        <Truck className="h-4 w-4" />
        You've unlocked free shipping!
      </Badge>
    );
  }

  return (
    <Button variant="outline" className="w-full border-dashed h-auto py-1 text-muted-foreground font-normal text-xs">
       Add ${15.00.toFixed(2)} more for free shipping
    </Button>
  );
}

export function ProductCheckout() {
  const [quantity, setQuantity] = React.useState(1);

  const price = 60.00;
  const freeShippingThreshold = 75.00;
  const itemsForFreeShipping = Math.ceil(freeShippingThreshold / price);
  const itemsToAdd = itemsForFreeShipping - quantity;
  const total = price * quantity;

  const productImages = PlaceHolderImages.filter(p => p.id.startsWith('product-image'));

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <Card className="overflow-hidden shadow-lg border">
      <CardContent className="p-0">
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
                    sizes="(max-width: 1023px) 90vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="p-3 space-y-2">
          <div className="space-y-0.5">
            <h2 className="font-headline text-base font-bold">The Machatzis Hashekel</h2>
            <p className="text-muted-foreground text-xs">Genuine silver coin, minted according to tradition.</p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-headline text-lg font-bold">${price.toFixed(2)}</span>
            <span className="text-muted-foreground text-xs">per coin</span>
          </div>

          <ShippingMessage itemsToAdd={itemsToAdd} />
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Quantity</span>
              <div className="flex items-center gap-1 border rounded-md px-1 py-0.5">
                <Button variant="ghost" size="icon" className="h-5 w-5 shrink-0 rounded-sm" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  <Minus className="h-3 w-3" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <span className="w-5 text-center text-sm font-bold tabular-nums">{quantity}</span>
                <Button variant="ghost" size="icon" className="h-5 w-5 shrink-0 rounded-sm" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-3 w-3" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>

            <Separator />
            
            <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium">Total</span>
                <p className="font-headline text-base font-bold text-primary">${total.toFixed(2)}</p>
            </div>
          </div>
          
          <div className='space-y-1.5 pt-1'>
            <Link href={{ pathname: '/checkout', query: { quantity: quantity } }} passHref>
               <Button size="sm" className="w-full text-sm h-8 font-semibold transition-transform hover:scale-[1.02] active:scale-100">
                    Continue to Checkout
              </Button>
            </Link>
            <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                    <Lock className="h-3 w-3" />
                    <span>Secure checkout</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <Truck className="h-3 w-3" />
                    <span>Fast shipping</span>
                </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
