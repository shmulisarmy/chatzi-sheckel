"use client";

import React from 'react';
import { BuildingAnimation } from '@/components/page-components/building-animation';
import Header from '@/components/header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="animate-in fade-in duration-500">
        {/* --- Original Content Section --- */}
        <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
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
                </div>
                </div>
            </div>
        </div>
        
        {/* --- New Content Section --- */}
        <div className="bg-secondary/10 border-t border-border">
            <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
                 <div className="text-left space-y-8">
                        <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video">
                            <iframe style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0}} src="https://www.youtube.com/embed/SofcE-GGlla" title="The Rebbe's words to Rabbi Keller" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                    <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                        <p>The first book written by Rabbi Yosef Keller, published in 5748 (1988), is a comprehensive work explaining the calculations the Sanhedrin — the Rabbinical Court — used to determine the earliest night the new moon would be visible. This allowed them to anticipate when witnesses would come forward to testify that they had seen the new moon, as described in the Rambam’s laws of Kiddush HaChodesh (Sanctification of the New Moon).</p>
                        <p>Three years later, during the summer of 5751 (1991), Rabbi Yosef Keller's second book (Maimonides Laws of the Beis Hamikdash, according to Manuscripts, with commentary), was published.</p>
                        <p>When he presented this book to the Rebbe (and Rabbi Groner mentioned to the Rebbe that this is Rabbi Keller (son of Reb Yehuda Keller), author of the new book on the Beis Hamikdosh), The Rebbe gave him a dollar to give to charity, and told him:</p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6 my-8 border border-border bg-white">
                        <div className="space-y-4 text-lg">
                            <div className="grid grid-cols-[auto,1fr] gap-x-4 items-baseline">
                                <p className="font-bold text-right">The Rebbe:</p>
                                <p className="text-black font-semibold">הצלחה רבה</p>
                                <p className="text-right italic text-muted-foreground">Translation:</p>
                                <p className="italic text-muted-foreground">Great success;</p>
                            </div>
                            <div className="grid grid-cols-[auto,1fr] gap-x-4 items-baseline">
                                <p className="font-bold text-right">The Rebbe (giving an additional dollar):</p>
                                <p className="text-black font-semibold">און דאס איז פאר דעם ספר, דארף מען צאלן. זאל זיין בשורות טובות</p>
                                <p className="text-right italic text-muted-foreground">Translation:</p>
                                <p className="italic text-muted-foreground">And this is for the book, one needs to pay. It should be Good tidings.</p>
                            </div>
                            <div className="grid grid-cols-[auto,1fr] gap-x-4 items-baseline">
                                <p className="font-bold text-right">The Rebbe (continuing):</p>
                                <p className="text-black font-semibold">אין גיכען וועט מען דארפן טראכטן דינים פון קידוש החודש על פי הראיה. דאס קען מען איצטער ניט טאן, מען דארף האבן א בית דין סמוך.</p>
                                <p className="text-right italic text-muted-foreground">Translation:</p>
                                <p className="italic text-muted-foreground">Very soon we will need to deal with the laws of sanctifying the month based on the sighting of the new moon. This cannot be done now, [because] it requires a Rabbinical court whose ordination goes back to Moshe Rabbeinu.</p>
                            </div>
                            <div className="grid grid-cols-[auto,1fr] gap-x-4 items-baseline">
                                <p className="font-bold text-right">The Rebbe (to Rabbi Yehuda Keller):</p>
                                <p className="text-black font-semibold">זאל ער זעהן זיך צוגרייטן, זאל ער קענען פסק׳נען גלייך די שאלות.</p>
                                <p className="text-right italic text-muted-foreground">Translation:</p>
                                <p className="italic text-muted-foreground">He (Rabbi Yossi Keller) should prepare himself, so he should be able to rule immediately on the questions &lt;that will come up&gt;.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="font-headline text-2xl md:text-3xl">
                        Join us in this proactive step towards our collective future. Let's be prepared, together.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}
