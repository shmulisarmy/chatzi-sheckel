import Link from 'next/link';
import { Coins, Mail, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const quickLinks = [
  { name: "Sources", href: "/#sources" },
  { name: "Rabbi Keller", href: "/#rabbi-keller" },
  { name: "FAQ", href: "/#faq" },
  { name: "Questionnaire", href: "/#questionnaire" },
];

const productFrontImage = PlaceHolderImages.find(
  (image) => image.id === 'product-image-new-1'
);

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-secondary-foreground/20">
            
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    {/* <Coins className="h-8 w-8 text-primary" /> */}
                    <img src={productFrontImage?.imageUrl} alt="Logo" width={32} height={32} className="h-8 w-8" />
                    <span className="font-headline text-3xl font-bold">Chatzi Shekel</span>
                </div>
                <p className="text-sm text-secondary-foreground/70 max-w-xs">
                    Preparing the Jewish community for Moshiach with authentic religious items and guidance.
                </p>
            </div>

            <div className="md:justify-self-center">
                <h3 className="font-headline text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    {quickLinks.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="text-base text-secondary-foreground/70 hover:text-primary transition-colors">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:justify-self-end">
                <h3 className="font-headline text-xl font-semibold mb-4">Contact</h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-secondary-foreground/70" />
                        <a href="mailto:mindel@chatzishekel.com" className="text-base text-secondary-foreground/70 hover:text-primary transition-colors">
                            mindel@chatzishekel.com
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-secondary-foreground/70" />
                        <a href="tel:+13472204282" className="text-base text-secondary-foreground/70 hover:text-primary transition-colors">
                            +1 (347) 220-4282
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="mt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Chatzi Shekel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
