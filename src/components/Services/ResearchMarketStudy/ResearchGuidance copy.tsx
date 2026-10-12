import {
  FiBarChart2,
  FiCheckSquare,
  FiLayers,
  FiSun,
  FiPlusSquare,
} from "react-icons/fi";

import "./ResearchGuidance.css";

interface GuidanceItem {
  title: string;
  description: string;
  position: string;
  icon: "confirmation" | "adoption" | "transformation" | "correction";
}

const guidanceItems: GuidanceItem[] = [
  {
    title: "Course Confirmation",
    description:
      "After extensive research, present an informed opinion based on facts and figures to help confirm the right course and strategic direction.",
    position: "top-left",
    icon: "confirmation",
  },
  {
    title: "Course Adoption",
    description:
      "Study new ecosystems and connect insights based on technologies and products to support timely and strategic decisions.",
    position: "top-right",
    icon: "adoption",
  },
  {
    title: "Course Transformation",
    description:
      "Based on executive decisions and market insights, identify the right direction and potential opportunities for future development.",
    position: "bottom-left",
    icon: "transformation",
  },
  {
    title: "Course Correction",
    description:
      "Steer the organization where required and assess possible changes or alternatives to maintain relevance and sustainable growth.",
    position: "bottom-right",
    icon: "correction",
  },
];

function GuidanceIcon({
  type,
}: {
  type: GuidanceItem["icon"];
}) {
  switch (type) {
    case "confirmation":
      return <FiCheckSquare />;

    case "adoption":
      return <FiSun />;

    case "transformation":
      return <FiLayers />;

    case "correction":
      return <FiPlusSquare />;

    default:
      return <FiBarChart2 />;
  }
}

export default function ResearchGuidance() {
  return (
    <section className="research-guidance-section">
      <div className="research-guidance-container">

        {/* Section Header */}
        <div className="research-guidance-header">
          <span className="research-guidance-eyebrow">
          </span>

          <h2>Research Guidance</h2>

          <div className="research-guidance-title-line" />

          
        </div>

        {/* Guidance Diagram */}
        <div className="research-guidance-layout">

          {/* Information Content */}
          <div className="guidance-content-grid">
            {guidanceItems.map((item) => (
              <article
                key={item.title}
                className={`guidance-item guidance-${item.position}`}
              >
                {/* Mobile Icon */}
                <div className="guidance-item-icon-mobile">
                  <GuidanceIcon type={item.icon} />
                </div>

                <div className="guidance-item-content">
                  <h3>{item.title}</h3>

                  <span className="guidance-small-line" />

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Central Circular Process */}
          <div className="research-process-center">
            <div className="research-process-ring" />

            <div className="process-icon process-icon-top-left">
              <FiCheckSquare />
            </div>

            <div className="process-icon process-icon-top-right">
              <FiSun />
            </div>

            <div className="process-icon process-icon-bottom-left">
              <FiLayers />
            </div>

            <div className="process-icon process-icon-bottom-right">
              <FiPlusSquare />
            </div>

            {/* Center Icon */}
            <div className="process-main-icon">
              <FiBarChart2 />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}