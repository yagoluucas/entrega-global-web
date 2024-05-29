import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr.Turtle",
  description: "Nossa empresa é dedicada a preservar a vida nos oceanos. Unimos doações de pessoas a empresas comprometidas com a proteção ambiental, promovendo ações de limpeza e conservação. Fornecemos notícias importantes sobre a vida marinha, indicamos locais de coleta de lixo e registramos denúncias ambientais para garantir um oceano mais saudável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
