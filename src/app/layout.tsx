import type { Metadata } from "next";
import {Oxanium, Montserrat} from "next/font/google";
import './globals.css';

export const metadata: Metadata = {
  title: "devstage",
};

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500" , "600"],
  variable: "--font-oxanium",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400" , "600"],
  variable: "--font-montserrat",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 font-antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
       <main className="max-w-[1224px] mx-auto px-5 py-8 md:py-0">
        {children}
      </main>
      </body>
    </html>
  );
}
