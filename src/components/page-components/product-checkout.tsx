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
import { Minus, Plus, ShoppingCart, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Confetti } from '@/components/confetti';

function ShippingMessage({ itemsToAdd }: { itemsToAdd: number }) {
  if (itemsToAdd <= 0) {
    return (
      <Badge variant="secondary" className="border border-green-500/50 bg-green-50 text-green-700 -rotate-2 transform">
        <Sparkles className="mr-2 h-4 w-4 text-green-500" />
        You've unlocked free shipping!
      </Badge>
    );
  }

  return (
    <div className="border border-dashed border-muted-foreground/50 rounded-md p-2 text-center text-sm text-muted-foreground -rotate-1 transform bg-background">
      <span>Add <strong>{itemsToAdd}</strong> more item{itemsToAdd > 1 ? 's' : ''} to get <strong>free shipping</strong>!</span>
    </div>
  );
}

export function ProductCheckout() {
  const [quantity, setQuantity] = React.useState(1);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [hasShownConfetti, setHasShownConfetti] = React.useState(false);
  const prevQuantityRef = React.useRef(quantity);

  const price = 25.00;
  const freeShippingThreshold = 75.00;
  const itemsForFreeShipping = Math.ceil(freeShippingThreshold / price);
  const itemsToAdd = itemsForFreeShipping - quantity;
  const total = price * quantity;
  const shippingCost = total >= freeShippingThreshold ? 0 : 5.00;

  const productImages = PlaceHolderImages.filter(p => p.id.startsWith('product-image'));

  React.useEffect(() => {
    if (prevQuantityRef.current < itemsForFreeShipping && quantity >= itemsForFreeShipping && !hasShownConfetti) {
      setShowConfetti(true);
      setHasShownConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000); // Confetti lasts 4 seconds
    }
    prevQuantityRef.current = quantity;
  }, [quantity, hasShownConfetti, itemsForFreeShipping]);


  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <Card className="overflow-hidden shadow-lg relative">
      {showConfetti && <Confetti />}
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

          <ShippingMessage itemsToAdd={itemsToAdd} />
          
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
              <p className="text-lg font-medium">Subtotal</p>
              <p className="font-headline text-4xl font-bold text-primary">${total.toFixed(2)}</p>
          </div>
          
          <Link href={{ pathname: '/checkout', query: { quantity: quantity } }} passHref>
             <Button size="lg" className="w-full text-lg font-semibold transition-transform hover:scale-[1.02] active:scale-100">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Continue to Checkout
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
