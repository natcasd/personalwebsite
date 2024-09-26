import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import Providers from "./components/provider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Nathan DePiero's Website",
  description: "Nathan DePiero's personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EEZ1JY5G8L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EEZ1JY5G8L');
          `}
        </Script>
        <ChakraProvider>
          <Header />
          <Providers>{children}</Providers>
        </ChakraProvider>
      </body>
    </html>
  );
}
