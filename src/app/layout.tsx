import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css"

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
        className={`${inter.className} min-h-screen`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
