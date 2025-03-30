import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jeanne Grenet",
  description: "Welcome to my website",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <div className=" min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
