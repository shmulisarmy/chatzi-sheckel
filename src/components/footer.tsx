import Link from 'next/link';
import { Coins } from 'lucide-react';

const navItems = [
  { name: "About", href: "/about" },
  { name: "Sources", href: "/#sources" },
  { name: "Rabbi Keller", href: "/#rabbi-keller" },
  { name: "FAQ", href: "/#faq" },
  { name: "Questionnaire", href: "/#questionnaire" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 border-b border-muted-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex items-center space-x-2">
                    <Coins className="h-8 w-8 text-primary" />
                    <span className="font-headline text-3xl font-bold">MitzvahReady</span>
                </div>
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
                    {navItems.map((item) => (
                    <div key={item.name} className="px-5 py-2">
                        <Link href={item.href} className="text-base text-secondary-foreground/80 hover:text-primary transition-colors">
                        {item.name}
                        </Link>
                    </div>
                    ))}
                </nav>
            </div>
        </div>
        <div className="mt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date().getFullYear()} MitzvahReady. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
