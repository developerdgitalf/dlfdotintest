import Link from "next/link";
import "./ClientCases.css";

type ClientCase = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const clientCases: ClientCase[] = [
  {
    id: "ardian",
    title: "ARDIAN",
    description:
      "Ardian Driving digital innovation through practical AI solutions.",
    image: "/images/client-cases/ardian.jpg",
    href: "/success-stories/ardian",
  },
  {
    id: "bp-france",
    title: "bpifrance",
    description:
      "BpifranceHow Bpifrance deployed agentic AI across 500 employees.",
    image: "/images/client-cases/bpifrance.jpg",
    href: "/success-stories/bpifrance",
  },
  {
    id: "four",
    title: "four",
    description:
      "FourHow agentic AI accelerates open innovation.",
    image: "/images/client-cases/four.jpg",
    href: "/success-stories/four",
  },
];

export default function ClientCases() {
  return (
    <section className="clientCasesSection">
      <div className="site-container-small">
        {/* Section Header */}
        <div className="clientCasesHeader">
          <div className="clientCasesHeading">
            <h2>Client cases</h2>

            <p>
              We translate client challenges into tangible results through the
              entire value chain of enterprises.
            </p>
          </div>

          <Link href="/success-stories" className="clientCasesAllLink">
            Read all cases
          </Link>
        </div>

        {/* Cases Grid */}
        <div className="clientCasesGrid">
          {clientCases.map((item) => (
            <article className="clientCaseCard" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="clientCaseImage"
              />

              <div className="clientCaseOverlay" />

              <div className="clientCaseContent">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link href={item.href} className="clientCaseReadMore">
                  Read the case <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}