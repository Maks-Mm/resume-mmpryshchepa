import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue, Bungee_Tint, Rubik_Glitch } from "next/font/google";
import { ThemeProvider } from './components/ThemeContext'; // Adjust the import path as necessary

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas-neue" });
const bungeeTint = Bungee_Tint({ weight: "400", subsets: ["latin"], variable: "--font-bungee-tint" });
const rubikGlitch = Rubik_Glitch({ weight: "400", subsets: ["latin"], variable: "--font-rubik-glitch" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${bebasNeue.variable}
          ${bungeeTint.variable}
          ${rubikGlitch.variable}
          antialiased
        `}
      >
       <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
