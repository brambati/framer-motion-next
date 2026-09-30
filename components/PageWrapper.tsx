"use client";
// Envolve cada página com animação de entrada e saída
import { motion } from "framer-motion";
import { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.35, ease: "easeOut" };

// No App Router, o Next troca o conteúdo da rota na hora.
// O FrozenRouter "congela" a página que está saindo para o exit poder rodar.
function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <FrozenRouter>{children}</FrozenRouter>
    </motion.main>
  );
}
