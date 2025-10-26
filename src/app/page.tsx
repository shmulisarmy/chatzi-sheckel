import { InformationalSections } from '@/components/page-components/informational-sections';
import { ProductCheckout } from '@/components/page-components/product-checkout';
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
        <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
          <InformationalSections />
        </div>
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-24">
            <React.Suspense fallback={<div>Loading...</div>}>
              <ProductCheckout />
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
