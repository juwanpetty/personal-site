import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme";
import { inter, jetBrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning>
      <body
        className={cn(
          "text-gray-12 dark:bg-gray-1 bg-white font-sans antialiased",
          inter.variable,
          jetBrainsMono.variable,
        )}
      >
        <ThemeProvider>
          <div className="isolate">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
