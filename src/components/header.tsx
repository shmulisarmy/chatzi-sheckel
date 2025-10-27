import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header({ isHeroVisible }: { isHeroVisible?: boolean }) {
  return (
    <header className={cn(
      "sticky top-0 z-40 w-full border-b transition-colors duration-300",
      isHeroVisible ? 'bg-transparent border-transparent text-white' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground'
    )}>
      <div className="container flex h-16 items-center sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Coins className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold">MitzvahReady</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <MainNav isHeroVisible={isHeroVisible} />
          <Button variant="ghost" size="icon" className={cn(
            isHeroVisible ? 'hover:bg-white/20' : 'hover:bg-accent'
          )}>
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
