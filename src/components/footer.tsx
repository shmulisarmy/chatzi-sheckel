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
                <div className='mb-4'>
                    
                <h3 className="font-headline text-xl font-semibold ">Contact</h3>
                <p className="text-secondary-foreground/70 text-xs">by mail or whatsapp</p>
                </div>

                <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-secondary-foreground/70" />
                        <a href="mailto:mindel@chatzishekel.com" className="text-base text-secondary-foreground/70 hover:text-primary transition-colors">
                            mindel@chatzishekel.com
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <WhatsAppIcon />
                        <a href="https://wa.me/+13472204282" className="text-base text-secondary-foreground/70 hover:text-primary transition-colors">
                            +1 (347) 220-4282
                        </a>
                    </li>
                    {/* <p className="text-secondary-foreground/70 text-xs">for all your questions about Machatzis Hashekel </p> */}
                    <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-secondary-foreground/70" />
                        <a href="mailto:Questions@chatzishekel.com" className="text-base text-secondary-foreground/70 hover:text-primary transition-colors">
                            Questions@chatzishekel.com
                        </a>
                    </li>
                    {/* <p className="text-secondary-foreground/70 text-xs">for order related questions.</p> */}

                    <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-secondary-foreground/70" />
                        <a href="mailto:orders@chatzishekel.com" className="text-base text-secondary-foreground/70 hover:text-primary transition-colors">
                            orders@chatzishekel.com
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


function WhatsAppIcon(){
    return   <svg
    className="h-5 w-5 text-secondary-foreground/70"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        fill="#20A83E"
        d="M256,8.017C119.043,8.017,8.017,119.043,8.017,256c0,53.111,16.705,102.317,45.136,142.666L8.017,503.983l101.13-48.157c41.111,30.263,91.89,48.157,146.853,48.157c136.957,0,247.983-111.026,247.983-247.983S392.957,8.017,256,8.017z"
      />
      <circle fill="rgb(17, 23, 40)" cx="256" cy="256" r="205.228" />
      <circle fill="rgb(17, 23, 40)" cx="256" cy="256" r="179.574" />
      <path
        fill="#20A83E"
        d="M376.579,302.728l-60.466-12.093-28.686,28.686c-48.529-20.565-74.182-46.219-96.746-96.746l28.687-28.687-12.093-60.466-41.647-7.689c-9.111,2.07-17.77,6.64-24.865,13.735-13.8,13.8-15.717,32.968-12.883,50.983 6.41,40.749,26.25,95.264,61.008,130.159l.249.255.255.249c34.895,34.758,89.41,54.597,130.159,61.008 18.015,2.834,37.183.917,50.983-12.883 7.095-7.095,11.665-15.753,13.735-24.865z"
      />
      <path
        fill="#189433"
        d="M336.651,366.042c-40.749-6.41-95.264-26.25-130.159-61.008l-.255-.249-.249-.255c-34.758-34.895-54.597-89.41-61.008-130.159-2.331-14.817-1.441-30.41,6.624-43.159-3.876,2.213-7.534,4.949-10.843,8.257-13.8,13.8-15.717,32.968-12.883,50.983 6.41,40.749,26.25,95.264,61.008,130.159l.249.255.255.249c34.895,34.758,89.41,54.597,130.159,61.008 18.015,2.834,37.183.917,50.983-12.883 2.587-2.587,4.828-5.385,6.745-8.332-7.397,2.874-21.923,3.51-35.773,1.332z"
      />
    </g>
  </svg>

}


