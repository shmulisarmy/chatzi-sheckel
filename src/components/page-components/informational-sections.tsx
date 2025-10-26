import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { WritingAnimation } from './writing-animation';

function SourcesSection() {
    const fullText = `The Rambam writes in the beginning of the laws of Shkalim (in Sefer Zmanim): “it contains one positive commandment: [The obligation] that every man give a half-shekel [to the Bais Hamikdash treasury] every year. This commandment is commandment # 171 in the Rambam’s enumeration of the Mitzvot in his introduction to the Mishneh Torah and in his book of commandments: The Positive Commandments. To give a Half-shekel each year, as stated: “..This shall be given by all those included in the census”. The Rambam writes in Hilchot Ysodei Hatorah (9:1): “It is clear and explicit in the Torah, that it is G-d’s commandment, remaining forever without change, addition, or diminishment, as it is stated: “All these matters which I command to you, you shall be careful to perform; You may not add to it or diminish from it” (Dvorim 13:1). [Reflecting the ninth of the Rambam’s thirteen principles of faith: “The Torah given by Moshe will not be nullified, and G-d will never grant another Torah in its place. One may not add to it or diminish it, neither the written law nor its explanation (the oral law)”]. And in the laws of Mlochim Umilchamoseihem (11:1) the Rambam writes that in the era of Moshiach, when the Jews return to Eretz Yisroel, establish dominion over the entire world, and rebuild the Bais Hamikdash, “[the observance of] all the laws will return to their previous state.. According to all the particulars mentioned by the Torah”. A prerequisite to fulfilling the Mitzvah of “Machatzis Hashekel”, is to mint a silver coin “Machatzis Hashekel” that people can contribute to the Beis Hamikdash once a year.`;
    
    const chars = fullText.split('');
    const staticText = chars.slice(0, 850).join('');
    const animatedText = chars.slice(850).join('');

    return (
        <section id="sources" className="mb-12 scroll-mt-24">
            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Sources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base leading-relaxed text-foreground/90">
                    <p>
                        {staticText}
                        <WritingAnimation text={animatedText} />
                    </p>
                </CardContent>
            </Card>
        </section>
    )
}

function RabbiKellerSection() {
    const rabbiImage = PlaceHolderImages.find(p => p.id === 'rabbi-keller-portrait');
    return (
        <section id="rabbi-keller" className="mb-12 scroll-mt-24">
            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Who is Rabbi Keller</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base leading-relaxed">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {rabbiImage && (
                          <Image
                              src={rabbiImage.imageUrl}
                              alt={rabbiImage.description}
                              data-ai-hint={rabbiImage.imageHint}
                              width={150}
                              height={150}
                              className="rounded-full object-cover aspect-square shrink-0"
                          />
                        )}
                        <div className="space-y-2 text-center sm:text-left text-foreground/90">
                            <p>With a profound dedication to Torah and Mitzvos, Rabbi Keller has been a guiding light in the community for decades. His teachings emphasize the importance of preparing for the coming of Moshiach, not just spiritually, but through practical actions that strengthen our connection to the Bais Hamikdash.</p>
                            <p>This campaign is a direct result of his vision to empower every individual to be ready to fulfill the Mitzvah of Machatzis Hashekel immediately, without delay, when the time comes. </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

function FaqSection() {
    return (
        <section id="faq" className="mb-12 scroll-mt-24">
            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Frequently Asked Questions</CardTitle>
                    <CardDescription>
                        About the campaign to purchase a Machatzis Hashekel so one can donate it when Moshiach comes.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">Isn’t Machatzis Hashekel something that all observant yidden engage in every year the day before purim?</AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4 text-base leading-relaxed text-foreground/90">
                                <p><strong>Response:</strong> There is a biblical Mitzvah that applies exclusively during the time when we bring Korbonos on the Mizbeiach, even more so when the Beis Hamikdash is rebuilt, that every man give a half-shekel silver coin to the Bais Hamikdash treasury every year to finance the Korbonos.</p>
                                <p>During the time of Golus (=the exile), the Rema (Orach Chayim 694:1) writes that that on Erev Purim before Mincha one should give for poor people 3 halves of the local coin to commemorate the Machatzis Hashekel that was given for the Beis Hamikdash.</p>
                                <p>The present campaign is about setting aside a silver coin that weighs not less than the weight of a half-shekel during the time of Moshe Rabeinu (which according to the Rif is a quarter of a Troy ounce), so we can be ready to give it for the purpose of Korbonos Tzibur as soon as Moshiach comes and the Bais Hamikdash or the Mizbeach is rebuilt; fulfilling the biblical Mitzvah of giving a Machatzis Hashekel for this purpose once a year.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">If it’s so important, why is it only being introduced now?</AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4 text-base leading-relaxed text-foreground/90">
                                <p><strong>Response:</strong> following the attack of the terrorists against Israel on Shmini Atzeres and Simchas Torah 5784 (2023), Rabbis the world over joined the campaign initiated by the Lubavitcher Rebbe for all Jews to prepare themselves for the coming of Moshiach, when his identity will be revealed to the entire world according to the criteria codified by the Rambam in his code of Jewish law (laws of Kings and their wars,11:4), and he will redeem us from the exile.</p>
                                <p>On the day that Moshiach comes we will recite five blessings, and we will need a Machatzish Hashekel to participate in the financing of the communal sacrifices (קרבנות ציבור); therefore, Rabbi Yosef Keller, who was told by the Rebbe (on sunday, the 17h of Menachem Av, 5751) that he should prepare himself to rule on commandments that will be fulfilled properly when Moshiach comes and there is a proper Bais Din (like קידוש החודש על פי הראיה), took upon himself the task to make the Machatzis Hashekel available to those who want to purchase it so that they can donate it the day we start bringing the sacrifices after the coming of Moshiach.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">Let every individual who wants to offer sacrifices pay for his own sacrifices. Why does every Jew have to bring a Machatzis Hashekel to pay for the Korbonos ?</AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4 text-base leading-relaxed text-foreground/90">
                                <p><strong>Response:</strong> the sacrifices that an individual is obligated to bring every Yom Tov, as well as the Pesach that one brings on Erev Pesach, or any Korbon that an individual either chooses to bring or is obligated to bring, are paid for by that individual.</p>
                                <p>However,communal offerings that are brought on behalf of the nation as a whole [the daily Tamid offerings [one lamb in the morning and another in the afternoon], and the Musaf offerings of Shabbos, Rosh Chodesh and Yom tov; the Lechem Haponim that is constantly on the Shulchon (and distributed to the Kohanim on Shabbos), and the Ktores offered on behalf of the Jewish people each day], since they are communal offerings, they must be paid for by the community.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </section>
    )
}

function QuestionnaireSection() {
    return (
        <section id="questionnaire" className="mb-12 scroll-mt-24">
            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Questionnaire</CardTitle>
                    <CardDescription>Have a question not listed here? Ask us directly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="question">Your Question</Label>
                            <Textarea id="question" placeholder="Type your question here..." />
                        </div>
                        <Button type="submit" className="w-full md:w-auto">Submit Question</Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    )
}

function FinalCtaSection() {
    return (
        <section id="final-cta" className="mb-12 text-center">
            <Card className="shadow-lg bg-primary/10 border-primary/20">
                <CardContent className="p-8 md:p-12 space-y-6">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                        Ready to Fulfill the Mitzvah?
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-primary/90">
                        The time is now. Acquire your Machatzis Hashekel coin and be prepared for the coming of Moshiach.
                    </p>
                    <div className="flex justify-center">
                        <Link href={{ pathname: '/checkout', query: { quantity: 1 } }} passHref>
                           <Button size="lg" className="text-lg font-semibold transition-transform hover:scale-105 active:scale-100 py-6 px-10">
                               Start Preparing for Moshiach Today
                               <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export function InformationalSections() {
    return (
        <div className="flex flex-col">
            <SourcesSection />
            <RabbiKellerSection />
            <FaqSection />
            <QuestionnaireSection />
            <FinalCtaSection />
        </div>
    )
}
