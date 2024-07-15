import { type Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "~/components/theme-provider";
import { cn } from "~/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A simple task management application",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico"
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "bg-background text-foreground min-h-screen font-sans antialiased",
            inter.variable
          )}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
