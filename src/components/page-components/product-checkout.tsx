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
import { Minus, Plus, Truck, Lock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function ShippingMessage({ itemsToAdd }: { itemsToAdd: number }) {
  if (itemsToAdd <= 0) {
    return (
      <Badge variant="secondary" className="w-full justify-center border border-green-500/50 bg-green-50 text-green-700 font-normal py-1 text-xs gap-2">
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

            <div className="w-full @[500px]:w-1/2 flex flex-col p-4">
                <div className="space-y-2 flex-grow">
                <div className="space-y-0.5">
                    <h2 className="font-headline text-sm font-bold">The Machatzis Hashekel</h2>
                    <p className="text-muted-foreground text-[11px]">Genuine silver coin, minted according to tradition.</p>
                </div>

                <div className="flex items-baseline gap-1.5">
                    <span className="font-headline text-base font-bold">${price.toFixed(2)}</span>
                    <span className="text-muted-foreground text-[11px]">per coin</span>
                </div>

                <ShippingMessage itemsToAdd={itemsToAdd} />
                
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">Quantity</span>
                    <div className="flex items-center gap-1 border rounded-md px-1 py-0.5">
                        <Button variant="ghost" size="icon" className="h-4 w-4 shrink-0 rounded-sm" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                        <Minus className="h-2.5 w-2.5" />
                        <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-4 text-center text-xs font-bold tabular-nums">{quantity}</span>
                        <Button variant="ghost" size="icon" className="h-4 w-4 shrink-0 rounded-sm" onClick={() => handleQuantityChange(1)}>
                        <Plus className="h-2.5 w-2.5" />
                        <span className="sr-only">Increase quantity</span>
                        </Button>
                    </div>
                    </div>

                    <Separator />
                    
                    <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs font-medium">Total</span>
                        <p className="font-headline text-sm font-bold text-primary">${total.toFixed(2)}</p>
                    </div>
                </div>
                </div>
                
                <div className='space-y-1 pt-0'>
                <Link href={{ pathname: '/checkout', query: { quantity: quantity } }} passHref>
                    <Button size="sm" className="w-full text-xs h-8 font-semibold transition-transform hover:scale-[1.02] active:scale-100">
                        Continue to Checkout
                </Button>
                </Link>
                <div className="flex justify-center items-center gap-3 text-[10px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Lock className="h-2.5 w-2.5" />
                        <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Truck className="h-2.5 w-2.5" />
                        <span>Fast shipping</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
