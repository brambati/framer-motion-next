# Framer Motion no Next.js

Código do vídeo **"Framer Motion no React"** do canal da [Digital Lift](https://digitallift.com.br).

Transições de página com `AnimatePresence`, listas em cascata com `staggerChildren` e card que vira modal com `layoutId`, no App Router do Next.js.

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`, navegue pelo menu e clique nos cards da página **Projetos**.

## O que tem aqui

| Arquivo | O que faz |
|---|---|
| `components/PageWrapper.tsx` | `motion.main` com `initial`, `animate` e `exit` em cada página |
| `components/PageTransition.tsx` | `AnimatePresence mode="wait"` com `key={pathname}` |
| `components/AnimatedList.tsx` | Lista com `staggerChildren: 0.08` e modal com `layoutId` |
| `components/Nav.tsx` | Menu com `<Link>` (navegação no cliente) |
| `app/layout.tsx` | Root layout com o menu e a transição |

## Os conceitos

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}   // estado ao montar
  animate={{ opacity: 1, y: 0 }}    // estado final
  exit={{ opacity: 0, y: -20 }}     // estado ao sair do DOM
  transition={{ duration: 0.35, ease: "easeOut" }}
/>
```

- **`exit` só funciona dentro de `AnimatePresence`**
- **`mode="wait"`**: a saída termina antes da entrada começar
- **`staggerChildren`**: definido no container, propagado para os filhos via variants
- **`layoutId`**: mesmo ID em dois elementos, o Framer anima posição, tamanho e borda

## Três detalhes do App Router (diferente do código simplificado do vídeo)

1. **O root layout não pode ter `"use client"`.** Por isso o `AnimatePresence` e o `usePathname` ficam em `components/PageTransition.tsx`, e o `layout.tsx` continua como Server Component.
2. **Use `<Link>` no menu, não `<a href>`.** Com `<a>`, o navegador recarrega a página inteira e a animação de saída nunca acontece.
3. **`FrozenRouter` no `PageWrapper`.** No App Router, o Next troca o conteúdo da rota na hora. O `FrozenRouter` mantém a página antiga na tela até o `exit` terminar.

## Stack

[Next.js 15](https://nextjs.org) (App Router) · [Framer Motion 11](https://motion.dev) · React 19 · TypeScript
