import type { Metadata } from "next";
import { Lato, Rufina } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
// import Footer from "@/components/footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "700", "400", "300"],
  preload: true,
  variable: "--font-lato",
});
const rufina = Rufina({
  subsets: ["latin"],
  weight: ["700", "400"],
  preload: true,
  variable: "--font-rufina",
});
export const metadata: Metadata = {
  title: "Food Zero",
  description: "Order Pizza Now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rufina.variable} ${lato.variable} antialiased`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
