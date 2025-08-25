import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pesos que você quer usar
});

export const metadata: Metadata = {
  title: "Astem",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} flex flex-col`}
      >
      <Header />
        <main className="flex-1">
          {children}
        </main>
      <Footer />
      
      </body>
    </html>
  );
}
