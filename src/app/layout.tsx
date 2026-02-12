import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { COMMON, ALT, META } from "@/constants/strings";
import BrandProvider from "@/context/BrandContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(META.baseUrl),
  title: COMMON.name,
  description: META.description,
  keywords: META.keywords,
  authors: [{ name: COMMON.name, url: COMMON.websiteUrl }],
  creator: COMMON.name,
  openGraph: {
    type: META.og.type,
    locale: META.og.locale,
    url: META.baseUrl,
    title: META.defaultTitle,
    description: COMMON.title,
    siteName: META.og.siteName,
    images: [
      {
        url: META.assets.logo,
        width: 1200,
        height: 630,
        alt: ALT.portrait
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.defaultTitle,
    description: COMMON.title,
    images: [META.assets.logo],
  },
  icons: {
    icon: [
      {
        url: META.assets.favicon,
        type: "image/png"
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: META.themeColors.light },
    { media: "(prefers-color-scheme: dark)", color: META.themeColors.dark }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={META.baseUrl}/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BrandProvider>
          {children}
        </BrandProvider>
      </body>
    </html>
  );
}
