"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { PageWrapper } from "./PageWrapper";

/*
  AnimatePresence: monitora filhos que entram e saem.
  mode="wait": aguarda a saída terminar antes da entrada.
  key={pathname}: quando o pathname muda, é um novo filho.
*/
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={pathname}>{children}</PageWrapper>
    </AnimatePresence>
  );
}
