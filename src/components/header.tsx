
"use client";

import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SHOPIFY_PRODUCT_URL } from '@/app/urls';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React, { useState, useEffect } from 'react';


export default function Header({ scrollTriggerRef }: { scrollTriggerRef?: React.RefObject<HTMLDivElement> }) {
  const productImage = PlaceHolderImages.find(p => p.id === 'product-image-new-1');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!scrollTriggerRef?.current) {
        // On pages without a scroll trigger, default to a scrolled state (white header)
        // unless it's the home page, but we can't easily know that here.
        // A simple solution is to just have a solid header on other pages.
        setHasScrolled(true);
        return;
    }
    const triggerElement = scrollTriggerRef.current;


    // Check initial position on mount
    const handleInitialCheck = () => {
      if (hasScrolled) return;
      const rect = triggerElement.getBoundingClientRect();
      // If the top of the trigger element is already in the viewport or above it
      if (rect.top <= 100) { // Using a threshold, e.g., 100px from top
        setHasScrolled(true);
      }
    };

    handleInitialCheck();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setHasScrolled(true);
        }
      },
      { threshold: 0.1 } 
    );
      
    observer.observe(triggerElement);

    return () => {
        if (triggerElement) {
            observer.unobserve(triggerElement);
        }
    };
  }, [scrollTriggerRef, hasScrolled]);


  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300",
      hasScrolled ? "shadow-md shadow-secondary/20 bg-white text-foreground" : "text-white"
    )}
    style={!hasScrolled ? {
        background: `linear-gradient(180deg, black 0%, rgb(4, 4, 31) 60%)`
    } : {}}
    >
      <div className="container flex h-16 items-center sm:justify-between sm:space-x-0 px-4">
        <Link href="/" className="flex items-center space-x-2">
          {productImage && (
            <img
              src={productImage.imageUrl}
              alt="Chatzi Shekel coin"
              width={24}
              height={24}
              className={cn("h-6 w-6 transition-all")}
            />
          )}
          <span className="font-headline text-2xl font-bold">Chatzi Shekel</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <MainNav isDark={!hasScrolled} />
          <Link href={SHOPIFY_PRODUCT_URL} passHref target="_blank">
            <Button variant="ghost" size="icon" className={cn('hover:bg-accent', !hasScrolled && 'hover:bg-white/20')}>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>
        </div>
      </div>
       <div className={cn("absolute bottom-0 w-full h-[1px] transition-colors", hasScrolled ? 'bg-border' : 'bg-white/20')} />
    </header>
  );
}
