import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { Coin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Coin className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">MitzvahReady</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
