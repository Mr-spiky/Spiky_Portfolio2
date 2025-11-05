import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Kumar - Full Stack Developer | Modern Web Solutions",
  description: "Passionate Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with clean code and innovative solutions.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Frontend", "Backend", "Shivam Kumar"],
  authors: [{ name: "Shivam Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Shivam Kumar - Full Stack Developer",
    description: "Passionate Full Stack Developer creating exceptional digital experiences",
    siteName: "Shivam Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Kumar - Full Stack Developer", 
    description: "Passionate Full Stack Developer creating exceptional digital experiences",
    creator: "@mrspiky",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={${inter.className} antialiased}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
