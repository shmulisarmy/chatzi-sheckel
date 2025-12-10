"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sources", href: "/#sources" },
  { name: "FAQ", href: "/#faq" },
  { name: "Questionnaire", href: "/#questionnaire" },
];

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const productImage = PlaceHolderImages.find(p => p.id === 'product-image-new-1');

  const handleLinkClick = () => {
    setOpen(false);
  };
  
  const isCheckoutPage = pathname === '/checkout';

  const desktopNavItems = navItems.filter(item => item.href !== '/');
  
  if (isCheckoutPage) {
    return null; // Don't show nav items on checkout page for a focused experience
  }


  return (
    <>
      <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
        {desktopNavItems.map((item) => (
          <Button key={item.name} variant="ghost" asChild className={cn(
            'transition-colors font-semibold',
            'text-muted-foreground hover:text-foreground',
            (pathname === item.href || (pathname === '/' && item.href.startsWith('/#'))) && 'text-foreground'
          )}>
            <Link
              href={item.href}
            >
              {item.name}
            </Link>
          </Button>
        ))}
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-background text-foreground">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <Link href="/" className="flex items-center space-x-2 mb-8" onClick={handleLinkClick}>
             {productImage && (
                <Image
                  src={productImage.imageUrl}
                  alt="Chatzi Shekel coin"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
             )}
            <span className="font-headline text-2xl font-bold text-primary">Chatzi Shekel</span>
          </Link>
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={cn('text-lg font-medium rounded-md px-3 py-2 transition-colors hover:bg-accent', 
                  (pathname === item.href || (pathname ==='/' && item.href === '/')) ? 'bg-accent text-accent-foreground' : ''
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
