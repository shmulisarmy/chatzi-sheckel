
"use client";

import React from 'react';
import Header from '@/components/header';

export default function RebbesMessagePage() {
  return (
    <>
      <Header />
      <div className="animate-in fade-in duration-500">
        <div className="bg-secondary/10 border-t border-border">
            <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
                 <div className="text-left space-y-8">
                        <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video">
                            <iframe style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0}} src="https://drive.google.com/file/d/1SofcE-GGlla-BZt3CACMhWQfV0u1N0h2/preview" title="272  Yud Zayin Av, 5751   Dollars Peninim   י ז מנחם אב תנש א" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
