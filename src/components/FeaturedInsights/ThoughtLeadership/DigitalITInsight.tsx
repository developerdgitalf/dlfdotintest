import "./DigitalITInsight.css";

interface InsightCard {
  image?: string;
  text: string;
  alt: string;
}

interface DigitalITInsightProps {
  cards?: InsightCard[];
}

const defaultCards: InsightCard[] = [
  {
    image: "/images/insights/featured-insights-network.png",
    text:
      "Hardware and on-prem infrastructure is migrating to CLOUD. Virtualizing not only the hardware but the OS layer in the form of HYPERVISOR.",
    alt: "Hardware and cloud infrastructure",
  },
  {
    image: "/images/insights/featured-insights-network-2.png",
    text:
      "The applications are being built on SaaS platforms that are customizable. API's & MICROSERVICE are transforming this at pace.",
    alt: "Applications and microservices",
  },
  {
    image: "/images/insights/featured-insights-network-3.png",
    text:
      "Support & Services framework is extending hybrid solutions where IT Ops are majorly driven by AUTOMATION and SMART capabilities.",
    alt: "Support and services automation",
  },
  {
    image: "/images/insights/featured-insights-network-4.png",
    text:
      "Performance & dashboarding is handled by DATA intelligence tools and ANALYTICS. This is driving productivity & cost optimization to a new level.",
    alt: "Data intelligence and analytics",
  },
];

export default function DigitalITInsight({
  cards = defaultCards,
}: DigitalITInsightProps) {
  return (
    <section
      className="digital-it-insight-section"
      aria-labelledby="digital-it-insight-heading"
    >
      <div className="digital-it-insight-container">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <h2
          id="digital-it-insight-heading"
          className="digital-it-insight-heading"
        >
          New <span className="digital-it-gold">IT</span> is{" "}
          <span className="digital-it-blue">DIGITAL</span> &amp; we know{" "}
          <span className="digital-it-teal">IT</span>
        </h2>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="digital-it-insight-grid">
          {cards.map((card, index) => (
            <article
              key={`digital-it-insight-${index}`}
              className="digital-it-insight-item"
            >
              {/* IMAGE */}

              <div className="digital-it-insight-image">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.alt}
                  />
                ) : (
                  <div
                    className="digital-it-insight-image-placeholder"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* TEXT CARD */}

              <div className="digital-it-insight-text-card">
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}