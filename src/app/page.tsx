"use client";
import { InformationalSections } from '@/components/page-components/informational-sections';
import { ProductCheckout } from '@/components/page-components/product-checkout';
import { Hero } from '@/components/page-components/hero';
import React from 'react';
import Header from '@/components/header';
import DesignComment from '@/components/design-comment';
import { RabbiKellerIntro } from '@/components/page-components/rabbi-keller-intro';
import { IntroSection } from '@/components/page-components/intro-section';
import {Analytics}  from '@vercel/analytics/react';

DesignComment()
export default function Home() {
    const rabbiKellerRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
     <Analytics />
      <Header scrollTriggerRef={rabbiKellerRef} />
      <Hero />
      <IntroSection />
      <div ref={rabbiKellerRef}>
        <RabbiKellerIntro />
      </div>

      {/* Main Content Section (Sources & Product) */}
      <div className="relative z-10 bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="lg:p-8">
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
      </div>
    </>
  );
}
