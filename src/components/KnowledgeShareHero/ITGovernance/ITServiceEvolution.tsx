import {
  FiCpu,
  FiShare2,
} from "react-icons/fi";

import "./ITServiceEvolution.css";

interface ServiceColumn {
  id: string;
  title: string;
  highlight: string;
  icon: "evolution" | "new-face";
  paragraphs: string[];
}

const columns: ServiceColumn[] = [
  {
    id: "it-service-evolution",
    title: "The Evolution of",
    highlight: "AI Service Management",
    icon: "evolution",
    paragraphs: [
      "The abstraction of enterprise service management has changed from a technology-centric and workflow-oriented concept to a comprehensive value-driven and growth accelerator theme.",

      "The rise in innovation, solution development, and novel methodologies enabled by the emerging technologies is wielding the new skillset, mindset, and toolset for the future enterprise. Analytics, Automation and Artificial Intelligence have found a befitting role to amplify and enhance the experience quotient at every touchpoint aligned with the enterprise client's expectation.",
    ],
  },
  {
    id: "it-service-new-face",
    title: "The New Face of",
    highlight: "AI Service Management",
    icon: "new-face",
    paragraphs: [
      "The new face of IT service management and its capabilities are just around us and growing. IT service management is NOT far from being touched by the spell of emerging technologies, which has changed the processes, performance, and service expectations.",

      "But this is going to take some serious effort and acceptance for what is changing in this turf. Read on to evaluate that perspective and prepare for the new.",

      "IT service management holds the key to efficient Operations, delivery, and support of managed services. It is imperative to observe and take note of evolving concepts, subjects, and practices in the ITSM domain. The overall strategy will be owned and governed by the leaders with the reference point set to the Digital transformation.",
    ],
  },
];

function ServiceIcon({
  type,
}: {
  type: ServiceColumn["icon"];
}) {
  if (type === "new-face") {
    return <FiShare2 aria-hidden="true" />;
  }

  return <FiCpu aria-hidden="true" />;
}

export default function ITServiceEvolution() {
  return (
    <section className="it-service-evolution-section">
      <div className="it-service-evolution-container">

        <div className="it-service-evolution-grid">
          {columns.map((column, index) => (
            <article
              key={column.id}
              className={`it-service-column ${
                index === 1 ? "it-service-column-right" : ""
              }`}
            >
              {/* =====================================
                  HEADER
              ===================================== */}

              <div className="it-service-column-header">
                <div className="it-service-icon">
                  <ServiceIcon type={column.icon} />
                </div>

                <h2>
                  <span>{column.title}</span>
                  <strong>{column.highlight}</strong>
                </h2>
              </div>

              {/* Blue divider */}

              <div className="it-service-divider">
                <span />
              </div>

              {/* =====================================
                  CONTENT
              ===================================== */}

              <div className="it-service-copy">
                {column.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${column.id}-paragraph-${paragraphIndex}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Center glow */}

              {index === 0 && (
                <span
                  className="it-service-center-glow"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}