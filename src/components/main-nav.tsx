"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Coin } from "lucide-react";

const navItems = [
  { name: "Sources", href: "/#sources" },
  { name: "Who is Rabbi Keller", href: "/#rabbi-keller" },
  { name: "FAQ's", href: "/#faq" },
  { name: "Questionnaire", href: "/#questionnaire" },
];

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Close sheet on navigation to a new hash link
  const handleLinkClick = () => {
    setOpen(false);
  };
  
  const isCheckoutPage = pathname === '/checkout';

  if (isCheckoutPage) {
    return null; // Don't show nav items on checkout page for a focused experience
  }

  return (
    <>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="transition-colors hover:text-primary"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="flex items-center space-x-2 mb-8">
            <Coin className="h-6 w-6 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">MitzvahReady</span>
          </Link>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-lg font-medium transition-colors hover:text-primary"
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
