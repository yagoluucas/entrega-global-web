import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr.Turtle",
  description: "Nossa empresa é dedicada a preservar a vida nos oceanos. Unimos doações de pessoas a empresas comprometidas com a proteção ambiental, promovendo ações de limpeza e conservação. Fornecemos notícias importantes sobre a vida marinha, indicamos locais de coleta de lixo e registramos denúncias ambientais para garantir um oceano mais saudável",
  icons: {
    icon:['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico?v=4" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
