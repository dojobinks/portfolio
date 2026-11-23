import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Bryle",
  description: "Personal website of Bryle",
  icons: {
    icon: "/profilepic.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}

     suppressHydrationWarning>

      <body className="h-full overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="h-dvh overflow-hidden">
      <div className="relative mx-auto flex h-full max-w-[1126px] flex-col rule-y">
        <div className="h-[60px]" />
        <div className="pointer-events-none absolute inset-x-0 top-[60px] h-0">
          <div className="absolute left-1/2 w-screen -translate-x-1/2 rule-x" />
          <span className="frame-node left-0 top-0" />
          <span className="frame-node left-full top-0" />
        </div>

        <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overscroll-contain lg:flex-row">
          <Sidebar />
          <div className="min-w-0 flex-1 space-y-16 px-5 py-8 sm:px-6">
            {children}
          </div>
        </main>

        <div className="relative h-[60px]">
          <div className="pointer-events-none absolute left-1/2 top-0 w-screen -translate-x-1/2 rule-x" />
          <span className="frame-node left-0 top-0" />
          <span className="frame-node left-full top-0" />
        </div>
      </div>
    </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
