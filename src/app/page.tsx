"use client";
import { InformationalSections } from '@/components/page-components/informational-sections';
import { ProductCheckout } from '@/components/page-components/product-checkout';
import { Hero } from '@/components/page-components/hero';
import React, { useEffect } from 'react';
import Header from '@/components/header';







export default function Home() {
  // useEffect(() => {
  //   const icon_rel_link = document.createElement("link");
  //   icon_rel_link.rel = "icon";
  //   icon_rel_link.href = "https://chatzishekel.com/favicon.ico";
  //   document.head.appendChild(icon_rel_link);
  // }, []);
  return (
    <>
      <Hero />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
            <div className="w-full lg:w-3/4 mt-8 lg:mt-0">
              <InformationalSections />
            </div>
            <div className="w-full lg:w-1/4">
              <div className="lg:sticky lg:top-24 @container">
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ProductCheckout />
                </React.Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
