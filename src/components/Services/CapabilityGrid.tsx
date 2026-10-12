import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import "./CapabilityGrid.css";

type Capability = {
  id: string;
  title: string;
  description: string;
  image: string;
  className: string;
  link: string;
};

const capabilities: Capability[] = [
  {
    id: "narrative",
    title: "Narrative & Positioning Strategy",
    description:
      "The new transformed market conditions and equations call for a reconditioned and crafted message. Without proper context, there is no connection, and when there is no connection, there is no conversion.",
    image: "/images/services/narrative-positioning-2.jpg",
    className: "capability-narrative",
    link: "/services/narrative-positioning-strategy",
  },
  {
    id: "business",
    title: "Business & Capability Enablement",
    description:
      "Aligning the organizational capabilities to secure market recognition, business resilience, and future relevance.",
    image: "/images/services/business-capability.jpg",
    className: "capability-business",
    link: "/services/business-capability",
  },
  {
    id: "advisory",
    title: "Advisory & Consulting",
    description:
      "Advisory is more at the business side, engaging with leadership and executive teams to strategize a transformation roadmap at a corporate level. In contrast, consulting is focused on the area domains, and more hands-on implementation experience is expected.",
    image: "/images/services/advisory-consulting.png",
    className: "capability-advisory",
    link: "/services/advisory-consulting",
  },
  {
    id: "research",
    title: "Research & Market Study",
    description:
      "Research and competitive evaluation are the forward-looking tools that help you strategize a sustainable future.",
    image: "/images/services/research-market.png",
    className: "capability-research",
    link: "/services/research-market-study",
  },
];

export default function CapabilityGrid() {
  return (
    <section className="capability-section">
      <div className="site-container-small">
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article
              key={capability.id}
              className={`capability-panel ${capability.className}`}
              style={{
                backgroundImage: `url("${capability.image}")`,
              }}
            >
              <div className="capability-overlay" />

              <div className="capability-content">
                <h3>{capability.title}</h3>

                <span
                  className="capability-line"
                  aria-hidden="true"
                />

                <p>{capability.description}</p>

                <Link
                  href={capability.link}
                  className="capability-link"
                >
                  <span>Read More</span>

                  <span
                    className="capability-arrow"
                    aria-hidden="true"
                  >
                    <FiChevronRight />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}