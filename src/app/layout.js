import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/client/components/header/Header";
import Footer from "@/client/components/footer/Footer";
import { Suspense } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sprint Lens by SAW",
  description: "Sprint Dashboard for Mood and ETAs",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Suspense>
          <Header />
        </Suspense>

        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
