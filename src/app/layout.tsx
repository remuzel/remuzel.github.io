import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { COMMON, ALT } from "@/constants/strings";
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
  metadataBase: new URL("https://remuzel.github.io"),
  title: COMMON.name,
  description: "Portfolio of Remi Uzel, Software Development Engineer at Amazon Alexa, specializing in backend systems, AWS cloud architecture, and distributed systems.",
  keywords: ["software engineer", "AWS", "Amazon", "Alexa", "backend engineer", "cloud computing", "distributed systems", "serverless"],
  authors: [{ name: COMMON.name, url: "https://remuzel.github.io" }],
  creator: COMMON.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remuzel.github.io",
    title: `${COMMON.name} | Portfolio`,
    description: COMMON.title,
    siteName: `${COMMON.name} Portfolio`,
    images: [
      {
        url: "/images/logo.png", 
        width: 1200,
        height: 630,
        alt: ALT.portrait
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMMON.name} | Portfolio`,
    description: COMMON.title,
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png"
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00CAFF" },
    { media: "(prefers-color-scheme: dark)", color: "#232F3E" }
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
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://remuzel.github.io" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}