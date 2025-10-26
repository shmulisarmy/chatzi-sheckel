"use client";

import { useForm } from "react-hook-form";
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock } from "lucide-react";

const checkoutSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State is required." }),
  zip: z.string().min(5, { message: "A valid ZIP code is required." }),
  cardName: z.string().min(1, { message: "Name on card is required." }),
  cardNumber: z.string().min(16, { message: "A valid card number is required." }).max(16),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, { message: "Invalid expiry date (MM/YY)." }),
  cvc: z.string().min(3, { message: "CVC must be 3-4 digits." }).max(4),
});


function CheckoutOrderSummary() {
  const searchParams = useSearchParams();
  const quantity = parseInt(searchParams.get('quantity') || '1', 10);
  const price = 25.00;
  const subtotal = price * quantity;
  const freeShippingThreshold = 75.00;
  const shipping = subtotal >= freeShippingThreshold ? 0.00 : 5.00;
  const total = subtotal + shipping;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Machatzis Hashekel Coin x {quantity}</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className={shipping === 0 ? "text-green-600 font-semibold" : ""}>
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <Separator />
        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
};


export default function CheckoutPage() {
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  const searchParams = useSearchParams();
  const quantity = parseInt(searchParams.get('quantity') || '1', 10);
  const price = 25.00;
  const subtotal = price * quantity;
  const freeShippingThreshold = 75.00;
  const shipping = subtotal >= freeShippingThreshold ? 0.00 : 5.00;
  const total = subtotal + shipping;

  function onSubmit(values: z.infer<typeof checkoutSchema>) {
    console.log(values);
    alert("This is a mock checkout. Order submitted (not really)!");
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 animate-in fade-in duration-500">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold mb-2">Checkout</h1>
        <p className="text-muted-foreground mb-8">This is the checkout page. Complete your purchase to be ready for the mitzvah.</p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:gap-12">
        <div className="w-full lg:w-3/5">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="firstName" render={({ field }) => ( <FormItem><FormLabel>First Name</FormLabel><FormControl><Input placeholder="John" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => ( <FormItem><FormLabel>Last Name</FormLabel><FormControl><Input placeholder="Doe" {...field} /></FormControl><FormMessage /></FormItem> )} />
                  </div>
                  <FormField control={form.control} name="address" render={({ field }) => ( <FormItem><FormLabel>Address</FormLabel><FormControl><Input placeholder="123 Mitzvah Lane" {...field} /></FormControl><FormMessage /></FormItem> )} />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField control={form.control} name="city" render={({ field }) => ( <FormItem><FormLabel>City</FormLabel><FormControl><Input placeholder="Jerusalem" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="state" render={({ field }) => ( <FormItem><FormLabel>State / Province</FormLabel><FormControl><Input placeholder="CA" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="zip" render={({ field }) => ( <FormItem><FormLabel>ZIP / Postal Code</FormLabel><FormControl><Input placeholder="12345" {...field} /></FormControl><FormMessage /></FormItem> )} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">Payment Details</CardTitle>
                  <CardDescription>All transactions are secure and encrypted.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField control={form.control} name="cardName" render={({ field }) => ( <FormItem><FormLabel>Name on Card</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                  <FormField control={form.control} name="cardNumber" render={({ field }) => ( <FormItem><FormLabel>Card Number</FormLabel><FormControl><div className="relative"><CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input className="pl-10" placeholder="0000 0000 0000 0000" {...field} /></div></FormControl><FormMessage /></FormItem> )} />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="expiryDate" render={({ field }) => ( <FormItem><FormLabel>Expiration (MM/YY)</FormLabel><FormControl><Input placeholder="MM/YY" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="cvc" render={({ field }) => ( <FormItem><FormLabel>CVC</FormLabel><FormControl><Input placeholder="123" {...field} /></FormControl><FormMessage /></FormItem> )} />
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" size="lg" className="w-full text-lg">
                <Lock className="mr-2 h-5 w-5" />
                Pay ${total.toFixed(2)}
              </Button>
            </form>
          </Form>
        </div>

        <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
          <div className="lg:sticky lg:top-24">
             <React.Suspense fallback={<div>Loading...</div>}>
                <CheckoutOrderSummary />
              </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
