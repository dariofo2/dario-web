import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import localFont from 'next/font/local'

import "@/components/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import BootstrapClient from "@/components/bootstrapClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const montserratBlack = localFont({
  src: "../fonts/Montserrat/static/Montserrat-Black.ttf",
  variable: "--montserratBlack"
})

const montserrat = localFont({
  src: "../fonts/Montserrat/static/Montserrat-Regular.ttf",
  variable: "--montserrat"
})

const proximaNovaBlack = localFont({
  src: "../fonts/ProximaNova/proximanova_black.ttf",
  variable: "--proximaNovaBlack"
})

const proximaNova = localFont({
  src: "../fonts/ProximaNova/proximanova_regular.ttf",
  variable: "--proximaNova"
})

export const metadata: Metadata = {
  title: "Dario Web",
  description: "Dario-Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${montserrat.variable} ${montserratBlack.variable} ${proximaNovaBlack.variable} ${proximaNova.variable}`}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
