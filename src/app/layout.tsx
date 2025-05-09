import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@radix-ui/themes/styles.css';
import '@radix-ui/themes/styles.css';
import '@radix-ui/themes/layout.css';
import '@radix-ui/themes/tokens.css';
import '@radix-ui/themes/components.css';
import '@radix-ui/themes/utilities.css';
import "./globals.css";

import Provider from "./Provider";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Theme, ThemePanel } from "@radix-ui/themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nestify",
  description: "Home Rental Solution",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  const messages =await getMessages()



  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>

       
       <Theme accentColor="green" appearance="light">
        <Provider>
           {children}
           
        </Provider>

       
       </Theme>
       </NextIntlClientProvider>
      </body>
    </html>
  );
}
