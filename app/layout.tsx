import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configuration des polices Geist existantes
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Configuration pour la police Monoton
const monoton = localFont({
  src: "./fonts/Monoton-Regular.ttf",
  variable: "--font-monoton",
  weight: "400", // poids unique pour Monoton
});

// Configuration pour les différentes variantes de K2D
const k2d = localFont({
  src: [
    { path: "./fonts/K2D-Regular.ttf", weight: "400" },
    { path: "./fonts/K2D-Medium.ttf", weight: "500" },
    { path: "./fonts/K2D-SemiBold.ttf", weight: "600" },
    { path: "./fonts/K2D-Bold.ttf", weight: "700" },
    { path: "./fonts/K2D-ExtraBold.ttf", weight: "800" },
    { path: "./fonts/K2D-Italic.ttf", style: "italic" },
  ],
  variable: "--font-k2d",
});

export const metadata: Metadata = {
  title: "Architecture",
  description: "Bienvenue sur Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} ${k2d.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
