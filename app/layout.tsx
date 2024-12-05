/* eslint-disable @typescript-eslint/no-unused-vars */
import {JetBrains_Mono} from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// COMPONENT IMPORT

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetbrainsMono",
});


export const metadata = {
  title: "urisat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JetbrainsMono.variable}bg-black-1`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
