import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "SkillSprint",
  description: "Excel your career sprint by sprint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy bg-lblack",
          inter.className
        )}
      >
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <Navbar />
          {children}
        </ClerkProvider>
        <Footer />
      </body>
    </html>
  );
}
