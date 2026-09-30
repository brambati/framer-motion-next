// components/AnimatedList.tsx
// Lista com stagger automático nos filhos
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Variantes do container: propaga stagger para filhos
const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

// Variantes de cada item
const itemVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit:    { opacity: 0, y: -10 },
};

export interface Item { id: number; title: string; desc: string; }

export function AnimatedList({ items }: { items: Item[] }) {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <>
      {/* Lista com stagger */}
      <motion.ul
        className="card-list"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {items.map((item) => (
          <motion.li
            key={item.id}
            variants={itemVariants}
            className="card"
            // layoutId: conecta este card ao modal expandido
            layoutId={`card-${item.id}`}
            onClick={() => setSelected(item)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.li>
        ))}
      </motion.ul>

      {/* Modal com layoutId — o Framer anima a transição automaticamente */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-content"
              layoutId={`card-${selected.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selected.title}</h2>
              <p>{selected.desc}</p>
              <button
                className="btn-fechar"
                onClick={() => setSelected(null)}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
