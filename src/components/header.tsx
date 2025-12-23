
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MainNav } from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SHOPIFY_PRODUCT_URL } from '@/app/urls';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useEffect } from 'react';


export default function Header() {
  const productImage = PlaceHolderImages.find(p => p.id === 'product-image-new-1');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled > 100 ? 100 : scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full shadow-md shadow-secondary/20 bg-white"
      // bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container flex h-16 items-center sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt="Chatzi Shekel coin"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          )}
          <span className="font-headline text-2xl font-bold">Chatzi Shekel</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <MainNav />
          <Link href={SHOPIFY_PRODUCT_URL} passHref target="_blank">
            <Button variant="ghost" size="icon" className='hover:bg-accent'>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-border/50 h-[2px]">
        <div 
          className="bg-progress h-[2px]" 
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
    </header>
  );
}
