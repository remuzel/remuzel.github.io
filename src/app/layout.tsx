import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Remi Uzel",
  description: "Portfolio of Remi Uzel, Software Development Engineer at Amazon Alexa, specializing in backend systems, AWS cloud architecture, and distributed systems.",
  keywords: ["software engineer", "AWS", "Amazon", "Alexa", "backend engineer", "cloud computing", "distributed systems", "serverless"],
  authors: [{ name: "Remi Uzel", url: "https://remuzel.github.io" }],
  creator: "Remi Uzel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remuzel.github.io",
    title: "Remi Uzel | Portfolio",
    description: "Software Development Engineer at Amazon Alexa",
    siteName: "Remi Uzel Portfolio",
    images: [
      {
        url: "/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Remi Uzel"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remi Uzel | Portfolio",
    description: "Software Development Engineer at Amazon Alexa",
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