// app/layout.tsx — App Router do Next.js
// O root layout precisa ser Server Component, então a parte animada
// (AnimatePresence + usePathname) fica no componente PageTransition.
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Framer Motion no Next.js",
  description: "Page transitions, stagger e layoutId com Framer Motion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
