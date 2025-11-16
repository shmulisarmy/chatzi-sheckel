import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

const SHOPIFY_PREVIEW_URL = "https://kizztqg68ma73w13-68110680175.shopifypreview.com/products_preview?preview_key=1d7442e0b9a1592ede792f5b7b15e3ab";

export default function Header() {
  return (
    <header className={cn(
      "sticky top-0 z-40 w-full shadow-md shadow-secondary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container flex h-16 items-center sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Coins className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold">Chatzi Shekel</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <MainNav />
          <Link href={SHOPIFY_PREVIEW_URL} passHref target="_blank">
            <Button variant="ghost" size="icon" className='hover:bg-accent'>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
