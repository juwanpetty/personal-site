import { Geist, Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});
