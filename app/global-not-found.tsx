import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "The page you are looking for does not exist.",
  icons: {
    icon: "/profilepic.jpg",
  },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
     suppressHydrationWarning >
      <body className="h-full overflow-hidden bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="grid min-h-screen place-items-center px-6 py-12">
            <section className="w-full max-w-md text-center">
              <p className="font-mono text-sm text-muted-foreground">404</p>
              <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                The page you’re looking for doesn’t exist or may have moved.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block border border-foreground px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                Back to home
              </Link>
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
