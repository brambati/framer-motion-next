"use client";
// Use <Link> (navegação no cliente). Com <a href> a página recarrega
// inteira e a animação de saída nunca acontece.
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className={pathname === l.href ? "ativo" : ""}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
