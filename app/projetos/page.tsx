import { AnimatedList, type Item } from "@/components/AnimatedList";

const items: Item[] = [
  { id: 1, title: "Projeto Alpha",   desc: "E-commerce headless com checkout em uma página." },
  { id: 2, title: "Projeto Beta",    desc: "Dashboard de métricas em tempo real para SaaS." },
  { id: 3, title: "Projeto Gamma",   desc: "Landing page 3D com scroll cinematográfico." },
  { id: 4, title: "Projeto Delta",   desc: "App de agendamento com design system próprio." },
  { id: 5, title: "Projeto Épsilon", desc: "Portal institucional com CMS e busca." },
  { id: 6, title: "Projeto Zeta",    desc: "Catálogo de produtos com filtros animados." },
];

export default function Projetos() {
  return (
    <>
      <p className="kicker">Projetos</p>
      <h1 className="big">Trabalhos <em>recentes</em></h1>
      <AnimatedList items={items} />
    </>
  );
}
