import { FiArrowRight } from "react-icons/fi";
import "./AdvisoryServices.css";

interface ServiceCard {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  className?: string;
}

const topCards: ServiceCard[] = [
  {
    title: "IT / Business / Service Strategy",
    description:
      "Align technology and business to create winning strategies that drive growth and value.",
    image: "/images/advisory/strategy.jpg",
    className: "advisory-card-strategy",
  },
  {
    title: "Management Consulting",
    description:
      "Solve complex challenges and improve performance and accelerate business impact.",
    image: "/images/advisory/management.jpg",
  },
  {
    title: "Execution Guidance",
    description:
      "Execute with confidence and deliver measurable outcomes.",
    image: "/images/advisory/execution.jpg",
  },
  {
    title: "IT Service Management",
    description:
      "Optimise services that enhance experience and drive efficiency.",
    image: "/images/advisory/it-service.jpg",
  },
  {
    title: "COE & Practice Building",
    description:
      "Build Centers of Excellence that scale capabilities and drive consistent impact.",
    image: "/images/advisory/coe.jpg",
  },
  {
    title: "C-Level Advisory",
    description:
      "Market leadership insights and strategic direction for today's leaders.",
    image: "/images/advisory/c-level.jpg",
  },
  {
    title: "Organizational Change",
    description:
      "Lead change with clarity and build organizations that adapt and thrive.",
    image: "/images/advisory/change.jpg",
  },
];

const bottomCards: ServiceCard[] = [
  {
    title: "Technology – Product – Solution Companies",
    description:
      "Helping tech companies innovate, scale and deliver greater customer value.",
  },
  {
    title: "Enterprise across all business verticals",
    description:
      "Solving industry-specific challenges with tailored strategies and solutions.",
  },
  {
    title: "GCC – Global Capability Centers",
    description:
      "Building high-performing GCCs that drive innovation and global impact.",
  },
  {
    title: "ITSP – IT Service Provider",
    description:
      "Helping service providers evolve, differentiate and grow in a competitive market.",
  },
];

export default function AdvisoryServices() {
  return (
    <section className="advisory-services-section">
      <div className="advisory-services-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}
        <div className="advisory-services-heading">
          <span>What We Do</span>

          <h2>IT Advisory &amp; Consulting</h2>

          <p>
            Strategic advisory and hands-on consulting to help you lead change,
            build a future-ready enterprise and create meaningful impact.
          </p>
        </div>

        {/* =========================================
            TOP SERVICES GRID
        ========================================= */}
        <div className="advisory-top-grid">
          {topCards.map((card, index) => (
            <article
              key={card.title}
              className={`advisory-service-card ${
                card.className || ""
              }`}
            >
              {card.image && (
                <div
                  className="advisory-card-background"
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                />
              )}

              <div className="advisory-card-overlay" />

              <div className="advisory-card-content">
                <span className="advisory-focus-label">Focus Area</span>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <a
                  href="#"
                  className="advisory-card-arrow"
                  aria-label={`Learn more about ${card.title}`}
                >
                  <FiArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================
            WIDE SERVICE CARDS
        ========================================= */}
        <div className="advisory-wide-grid">
          <article className="advisory-wide-card advisory-wide-marketing">
            <div
              className="advisory-wide-background"
              style={{
                backgroundImage:
                  "url('/images/advisory/strategic-marketing.jpg')",
              }}
            />

            <div className="advisory-wide-overlay" />

            <div className="advisory-wide-content">
              <h3>Strategic Marketing</h3>
              <span>Orientation – Positioning – GTM</span>

              <p>
                Crafting compelling narratives and go-to-market strategies that
                drive differentiation and create sustainable growth.
              </p>

              <a href="#" aria-label="Learn more about Strategic Marketing">
                <FiArrowRight />
              </a>
            </div>
          </article>

          <article className="advisory-wide-card advisory-wide-technology">
            <div
              className="advisory-wide-background"
              style={{
                backgroundImage:
                  "url('/images/advisory/technology-capabilities.jpg')",
              }}
            />

            <div className="advisory-wide-overlay" />

            <div className="advisory-wide-content">
              <h3>Technologies &amp; Capabilities Integration</h3>
              <span>Capability Building – Roadmap – Scale</span>

              <p>
                Integrating the right technologies and building future-ready
                capabilities to scale with confidence.
              </p>

              <a
                href="#"
                aria-label="Learn more about Technologies and Capabilities Integration"
              >
                <FiArrowRight />
              </a>
            </div>
          </article>
        </div>

        {/* =========================================
            BUSINESS TRANSFORMATION
        ========================================= */}
        <article className="advisory-transformation-card">
          <div
            className="advisory-transformation-background"
            style={{
              backgroundImage:
                "url('/images/advisory/business-transformation.jpg')",
            }}
          />

          <div className="advisory-transformation-overlay" />

          <div className="advisory-transformation-content">
            <h3>Business Transformation</h3>

            <span>Digital Strategy – Resiliency – Experience</span>

            <p>
              End-to-end transformation that modernizes your business, builds
              resilience and delivers exceptional experiences for customers and
              employees.
            </p>

            <a href="#" aria-label="Learn more about Business Transformation">
              <FiArrowRight />
            </a>
          </div>
        </article>

        {/* =========================================
            AUDIENCE / INDUSTRY CARDS
            NO BACKGROUND IMAGES
        ========================================= */}
        <div className="advisory-bottom-grid">
          {bottomCards.map((card) => (
            <article className="advisory-bottom-card" key={card.title}>
              <div className="advisory-bottom-icon">
                <span />
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <a
                href="#"
                className="advisory-bottom-arrow"
                aria-label={`Explore ${card.title}`}
              >
                <FiArrowRight />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}