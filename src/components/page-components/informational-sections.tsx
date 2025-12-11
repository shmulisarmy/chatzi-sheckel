
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, ArrowUp, Mail, ArrowUpRight } from "lucide-react";
import { HaskomohSection } from "./haskomoh-section";
import { SHOPIFY_PREVIEW_URL } from "@/app/urls";
import React, { useState, useEffect, useRef } from "react";

function useDynamicShadow() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transform: "perspective(1000px) rotateX(0deg)",
    transition: "box-shadow 0.1s linear, transform 0.1s linear",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const { top, height } = cardRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const cardCenterY = top + height / 2;
        const viewportCenterY = viewportHeight / 2;
        const difference = cardCenterY - viewportCenterY;

        const normalized = Math.max(
          -1,
          Math.min(1, difference / (viewportHeight / 2))
        );

        const offsetY = 15 - normalized * 10;
        const blur = 20 - Math.abs(normalized * 10);
        const spread = -3 - normalized * 2;
        const newShadow = `0px ${offsetY}px ${blur}px ${spread}px rgba(0,0,0,0.1)`;

        const rotateX = -normalized * 0.5; // Tilt from -2deg to 2deg
        const newTransform = `perspective(1000px) rotateX(${rotateX}deg)`;

        setStyle((prev) => ({
          ...prev,
          boxShadow: newShadow,
          transform: newTransform,
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref: cardRef, style };
}

function SourcesSection() {
  const shadowProps = useDynamicShadow();
  return (
    <section id="sources" className="mb-12 scroll-mt-24">
      <Card {...shadowProps}>
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Sources
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed text-foreground/90">
          <p>The Rambam writes:</p>
          <ol className="list-decimal list-outside space-y-2 pl-6">
            <li>
              There is a positive commandment that every Jewish man gives a
              half-shekel [to the Bais Hamikdash treasury], as stated in the
              Torah: “..This shall be given by all those included in the
              census”.
            </li>
            <li>
              It is clear and explicit in the Torah, that G-d’s commandments
              remain forever without change, addition, or diminishment; one may
              not add to it or diminish from it.
            </li>
            <li>
              In the era of Moshiach, when the Jews return to Eretz Yisroel, and
              rebuild the Bais Hamikdash; [the observance of] all the laws will
              return to their previous state.. according to all the particulars
              mentioned by the Torah.
            </li>
            <li>
              A Jewish man must give the half-shekel all at once (and not a
              portion of it at one time, and the remainder in a separate
              donation to the Beis Hamikdash).
            </li>
          </ol>

          <p>
            Therefore, a prerequisite to fulfilling the Mitzvah of “Machatzis
            Hashekel” is to mint a silver “Machatzis Hashekel” coin that people
            can contribute to the Beis Hamikdosh once a year.
          </p>

          <p>
            We pray each day: והשב העבודה לדביר ביתך .. ותחזינה עינינו בשובך
            לציון ברחמים (restore the service to Your holy Sanctuary.. May our
            eyes behold Your merciful return to Zion). When Moshiach comes and
            The Beis Hamikdosh is rebuilt, the Kohanim will bring the communal
            sacrifices that are financed by every member of Klal Yisroel
            (obligatory for Men who are thirteen years and older; optional for
            boys under the age of thirteen and for women) contributing a
            Machatzis Hashekel (a half-shekel) once a year (which pays: for the
            Communal offerings).
          </p>

          <div className="pt-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="text-left font-headline text-2xl font-semibold hover:no-underline py-2">
                  Weight of the Half-Shekel
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3">
                  <p>A half-shekel weighs one quarter of an ounce of silver.</p>
                  <ul className="list-disc space-y-3 pl-5 mt-3">
                    <li>
                      <strong>According to Rashi:</strong>
                      <ul className="list-circle space-y-1 pl-5 mt-1">
                        <li>
                          An ounce (Kolonia standard): 450 barley grains
                          (~29.16 grams)
                        </li>
                        <li>
                          Shekel is ½ of the Kolonia standard of the ounce= 225
                          grains (~14.58 g)
                        </li>
                        <li>Half-shekel = 112.5 grains (~7.29 g)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Other Opinions:</strong>
                      <ul className="list-circle space-y-1 pl-5 mt-1">
                        <li>
                          Lekach Tov / Rabbeinu Tam: Machatzis HaShekel ≈ 108
                          grains (~7 g)
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>The Rambam rules (Hilchos Shkolim 1:5):</strong>
                      <p className="pl-5 mt-1">
                        One may never give less than the weight of Moshe
                        Rabbeinu’s half-shekel.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Some interpret the Rif (in the beginning of the first
                        chapter of Kidushin) that:
                      </strong>
                      <ul className="list-circle space-y-1 pl-5 mt-1">
                        <li>
                          A Shekel in time of Moshe Rabeinu = 320 wheat grains,
                          a half of a Troy Ounce: 15.552 gram
                        </li>
                        <li>
                          A Half-Shekel in time of Moshe Rabeinu = 160 wheat
                          grains, which is a quarter of a Troy ounce: 7.776 gram
                        </li>
                      </ul>
                      <p className="pl-5 mt-1">
                        But according to the Rambam’s interpretation in the Rif
                        (as explained by his son, Rabbi Avrohom), the weight of
                        a half a shekel in times of Moshe Rabeinu is slightly
                        less than 160 wheat grains.
                      </p>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <p className="pt-2">
            The mitzvah of the annual contribution of Machatzis Hashekel for the
            Korbonos Tzibur [described ibid 30:12-13] must be fulfilled by any
            child who reaches the age of 13 years old (see Ramban Exodus 30:12;
            Tosfos Yom Tov Shkolim 1:4).
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

function FaqSection() {
  const [showAll, setShowAll] = useState(false);
  const faqs = [
    {
      question:
        "Don’t we already give “Machatzis Hashekel” every year before Purim?",
      answer: [
        { type: "strong", content: "Short answer:" },
        {
          type: "p",
          content:
            "What we give before Purim is only a commemoration—not the actual mitzvah.",
        },
        { type: "strong", content: "Clear explanation:" },
        {
          type: "p",
          content:
            "The true biblical mitzvah of Machatzis Hashekel applies only when Korbonos are brought on the Mizbeiach. Every Jewish man was commanded to give a real silver half-shekel each year to fund the communal sacrifices.",
        },
        {
          type: "p",
          content:
            "In exile, since we cannot fulfill that mitzvah, the R’ma writes that we give three half-coins of local currency before Purim to remember the original mitzvah.",
        },
        { type: "strong", content: "This campaign is different." },
        {
          type: "p",
          content:
            "It is about setting aside a silver coin that weighs not less than the weight of a half-shekel during the time of Moshe Rabeinu (which according to the Rif is a quarter of a Troy ounce); so that when Moshiach comes and Korbonos Tzibur resume, you are ready to fulfill the actual biblical mitzvah immediately.",
        },
      ],
    },
    {
      question: "If it’s so important, why is it only being introduced now?",
      answer: [
        { type: "strong", content: "Response:" },
        {
          type: "p",
          content:
            "Recently, Rabbis the world over joined the campaign (initiated by the Lubavitcher Rebbe) for all Jews to prepare themselves for the coming of Moshiach.",
        },
        {
          type: "p",
          content:
            "When Moshiach comes, the first communal korban will be brought immediately. To participate, each man must already have his Machatzis Hashekel ready.",
        },
      ],
    },
    {
      question:
        "Why must every Jew give a Machatzis Hashekel? Why not let each person fund his own korban?",
      answer: [
        {
          type: "p",
          content: "Because communal offerings are not private donations.",
        },
        {
          type: "p",
          content:
            "Private sacrifices (such as a Korbon Chagigah that individuals bring on Yom Tov, a Pesach offering, or any voluntary offering) are paid for by the individual who brings that sacrifice.",
        },
        {
          type: "p",
          content:
            "But Korbonos Tzibur (communal offerings) [like the daily Tamid; the Musaf offerings of Shabbos, Yom Tov, and Rosh Chodesh; the Lechem Haponim; and the daily Ktores] must be funded equally by all Jewish men.",
        },
        {
          type: "p",
          content:
            "The Torah requires that every man contribute one half-shekel each year, so all share equally in the Korbonos Tzibur); therefore, Rabbi Yosef Keller, took upon himself the task to make the Machatzis Hashekel available to those who want to purchase it so that they can donate it the day we start bringing the sacrifices after the coming of Moshiach.",
        },
      ],
    },
    {
      question:
        "Who says we will still use a half-shekel in the times of Moshiach? Maybe the system will change.",
      answer: [
        { type: "strong", content: "The Rambam is explicit:" },
        {
          type: "p",
          content:
            "Every Jewish man is obligated to give a half-shekel each year (Maimonides, beginning of the laws of Shkalim; see also: laws of kings and their wars 11:1).",
        },
        {
          type: "p",
          content:
            "This is one of the 613 mitzvos (Maimonides, Book of Commandments: Positive Commandment #171).",
        },
        {
          type: "p",
          content:
            "Torah law never changes (Maimonides, the laws of The Basics of the Torah, 9:1), as it says: “You shall not add to it or subtract from it” (Dvorim 13:1).",
        },
        {
          type: "p",
          content:
            "The Rambam further states (in laws of kings and their wars, ib) that when Moshiach comes and the Beis Hamikdash is rebuilt, all mitzvos will return exactly as they were; this applies also to the annual Machatzis Hashekel obligation.",
        },
      ],
    },
    {
      question:
        "Do we have to wait for the full Beis Hamikdash to be rebuilt before bringing sacrifices?",
      answer: [
        { type: "strong", content: "No." },
        {
          type: "p",
          content:
            "The Talmud teaches that sacrifices may begin on the Mizbeiach even before the full rebuilding of the Beis Hamikdash.",
        },
        {
          type: "p",
          content:
            "Once the Mizbeiach is standing and the place is sanctified, communal offerings can begin immediately even on the very day Moshiach comes.",
        },
      ],
    },
    {
      question:
        "From what age is a Jewish male obligated to give Machatzis Hashekel?",
      answer: [
        {
          type: "p",
          content:
            "Although the original census in the desert counted men aged twenty and older, the mitzvah of the annual Machatzis Hashekel applies from age thirteen.",
        },
      ],
    },
    {
      question: "Are women and children obligated to give Machatzis Hashekel?",
      answer: [
        { type: "strong", content: "No, they are not obligated." },
        {
          type: "p",
          content:
            "However, if they choose to participate, their coins are accepted and counted, and they fulfilled the Miitzvoh of giving a Machatzis Hashekel (Rambam laws of Shkolim 1:7; see also Rambam’s sefer Hamitzvos #171 (Rabbi Kapech’s and Rabbi Heler’s editions)).",
        },
      ],
    },
    {
      question:
        "When the Jews were in the desert, where did they even get silver coins to fulfill the Mitzvah of giving it?",
      answer: [
        {
          type: "strong",
          content: "Silver shekels already existed in earlier generations:",
        },
        {
          type: "p",
          content: "Avraham used them to purchase the Me’aras Hamachpelah.",
        },
        { type: "p", content: "Yosef was sold for silver shekels." },
        {
          type: "p",
          content:
            "These coins circulated in Egypt and the Jews took them along with them during the Exodus From Mitzrayim (named Egypt by the Greeks and Romans). Additional coins were acquired through trade with neighboring nations in the desert.",
        },
      ],
    },
    {
      question:
        "What types of coins did Jews historically use for the Machatzis Hashekel?",
      answer: [
        {
          type: "p",
          content:
            "Rabbi Yehudoh states in Tractate Shkolim: “When Israel ascended to Eretz Yisroel from the babylonian exile (in the times of the Kohen Gadol: Yhoshua ben Yhotzadak, Zerubbabel and Nechemiah), they used Median and Persian gold coins called darkonos as their standard coin for the Machatzis Hashekel; later, after the collapse of the Persian-Median empire, they reverted to using a sela; still later, when Israel was dominated by the Roman Empire, they reverted to using coins called T’iva. They wished to contribute only a dinar for their Machatzis Hashekel obligation [and they refused to accept it upon themselves (to contribute less than the ten gerah required in the Torah)].",
        },
        {
          type: "p",
          content:
            "Darkon (plural: Darkonos) - is a Golden dinar (that weighs 24 Karats (a third of a gold shekel)).",
        },
        {
          type: "p",
          content:
            "Sela (plural: Slo’im) - is the equivalent of the holy shekel mentioned in the Torah, which is equal to four silver dinars",
        },
        {
          type: "p",
          content:
            "Tiv’a (plural: Tiv’im) - is Half a sela (i.e. the Roman shekel which is half the weight of a holy shekel).",
        },
        {
          type: "p",
          content:
            "[The phrase they wished to contribute only a dinar - refers to a quarter of a selah (i.e. a silver dinar), and they refused to accept it upon themselves (to contribute less than the ten gerah required in the Torah)].",
        },
        {
          type: "p",
          content:
            "The Darkonos were minted by the persian government; During the era that The Chashmonaim ruled over Israel (following the Miraculous victories of Yehuda the Maccabi and his brothers: Yochanan and Shimon), the holy shekel (which was equivalent to the sela which the Romans first minted during the final years of the 2nd Beis Hamikdash) was minted in Tyre (located in Lebanon) by the local gentiles, the Roman shekel and the silver dinar were minted by the Roman government.",
        },
        {
          type: "p",
          content:
            "From this we can deduce that there is no Halachic requirement that the silver coin used for Machatzis Hashekel be minted by a Jewish person, only that its weight and metal content comply with halachic standards.",
        },
      ],
    },
    {
      question: "How will the coins be collected when Moshiach comes?",
      answer: [
        {
          type: "p",
          content:
            "Once the Mizbeiach is built, every Jewish community will appoint a trusted treasurer who collects the half-shekel coins and brings them to the Lishkah (the chamber where the coins collected for the Korbonos Tzibur are kept).",
        },
        {
          type: "p",
          content:
            "The treasurers outside Israel may exchange the silver coins for gold coins (that have a set exchange rate with the silver coins), so that it is easier for the treasurer to bring it to Jerisalem.",
        },
      ],
    },
    {
      question: "How often must one give Machatzis Hashekel?",
      answer: [
        { type: "strong", content: "Once a year." },
        {
          type: "p",
          content: "The new year for Korbonos begins at Rosh Chodesh Nissan.",
        },
        {
          type: "p",
          content:
            "Before that, on the first of Adar, the Beis Din announces that every adult male must set aside his half-shekel for that year.",
        },
      ],
    },
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);
  const shadowProps = useDynamicShadow();

  return (
    <section id="faq" className="mb-12 scroll-mt-24">
      <Card {...shadowProps}>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>
            About purchasing a Machatzis Hashekel now so it can be donated when
            Moshiach comes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {displayedFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 text-base leading-relaxed text-foreground/90">
                  {faq.answer.map((item, i) =>
                    item.type === "strong" ? (
                      <p key={i} className="font-bold">
                        {item.content}
                      </p>
                    ) : (
                      <p key={i}>{item.content}</p>
                    )
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 text-center">
            {!showAll && faqs.length > 3 && (
              <Button onClick={() => setShowAll(true)} variant="outline">
                Show More
              </Button>
            )}
            {showAll && (
              <Button onClick={() => setShowAll(false)} variant="outline">
                <ArrowUp className="mr-2 h-4 w-4" />
                Show Less
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function ContactSection() {
  const shadowProps = useDynamicShadow();
  return (
    <section id="questionnaire" className="mb-12 scroll-mt-24">
      <Card {...shadowProps}>
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-3">
            <Mail className="w-8 h-8 text-primary" />
            Have a Question?
          </CardTitle>
          <CardDescription>
            If your question isn&apos;t answered in the{' '}
            <Link href="/#faq" className="text-foreground underline">
              FAQ
            </Link>
            , feel free to reach out.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p className="text-foreground/90">
              You can email us directly at:
            </p>
            <a href="mailto:mindel@chatzishekel.com" className="inline-flex items-center gap-2 rounded-md bg-secondary/80 px-4 py-2 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary">
              mindel@chatzishekel.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export function InformationalSections() {
  return (
    <div id="rabbi-keller" className="flex flex-col">
      <SourcesSection />
      <HaskomohSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
