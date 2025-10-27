"use client";

import React from 'react';
import { BuildingAnimation } from '@/components/page-components/building-animation';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16 animate-in fade-in duration-500">
      <div className="flex flex-col items-center text-center pt-16">
        <BuildingAnimation />
        <div className="mt-12 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
          <p className="font-headline text-2xl md:text-3xl">
            As the times of Moshiach and the building of the Beis Hamikdash are closer each day, we must each do our part in being prepared...
          </p>
          <p>
            This project was inspired by the teachings of Rabbi Keller, who emphasizes that preparation for the final redemption is not merely a spiritual endeavor, but a practical one. Just as our ancestors contributed the Machatzis Hashekel for the construction and maintenance of the Tabernacle and later the Holy Temple, we too can take a tangible step to connect with this eternal Mitzvah.
          </p>
          <p>
            By acquiring a genuine silver Machatzis Hashekel coin, you are not just buying a piece of silver. You are acquiring a tool, a ready-to-use vessel to fulfill a biblical commandment at the earliest possible moment. You are making a statement that you are ready and waiting for the day when the service in the Beis Hamikdash is restored.
          </p>
          <p>
            Join us in this proactive step towards our collective future. Let's be prepared, together.
          </p>
        </div>
      </div>
    </div>
  );
}
