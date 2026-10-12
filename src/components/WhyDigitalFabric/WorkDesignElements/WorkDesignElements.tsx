import "./WorkDesignElements.css";

type WorkElement = {
  number: string;
  title: string;
  description: string;
};

const workElements: WorkElement[] = [
  {
    number: "01",
    title: "People",
    description:
      "We are the creators of technology and will always be the father of new engineering concepts. At the same time, technological evolution has pushed the People component to evolve, outgrow situations, and stay relevant.",
  },
  {
    number: "02",
    title: "Process",
    description:
      "Our entire, exclusive, and inclusive business ecosystem is a mesh of actions, reactions, interpretations, and conclusions that operates in a determined sequence called PROCESS.",
  },
  {
    number: "03",
    title: "Platform",
    description:
      "Technology combines mindware, hardware, and software to answer real-life situations. The maturity of customer needs and product relevance calls for innovation, new results, use cases, and aptitudes.",
  },
  {
    number: "04",
    title: "Product",
    description:
      "Product is a crucial work design constituent that has reshaped the way business ecosystems think and operate, bringing meaning to the collective effort of the remaining work design constituents.",
  },
  {
    number: "05",
    title: "Partnership",
    description:
      "Partnership completes the connected ecosystem of work design constituents, helping organizations bring people, processes, platforms, and products together toward meaningful outcomes.",
  },
];

export default function WorkDesignElements() {
  return (
    <main className="work-design-page">
      {/* =====================================
          HERO
      ====================================== */}
     
      {/* =====================================
          INTRODUCTION
     
      {/* =====================================
          THE APPROACH
      ====================================== */}
    

      {/* =====================================
          FIVE ELEMENTS
      ====================================== */}
    

      {/* =====================================
          CLOSING STATEMENT
      ====================================== */}
     
    </main>
  );
}