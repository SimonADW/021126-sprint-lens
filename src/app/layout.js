import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/client/components/Header/Header";
import Footer from "@/client/components/Footer/Footer";
import { Suspense } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({  
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Sprint Lens by SAW",
  description: "Sprint Dashboard for Mood and ETAs",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
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
