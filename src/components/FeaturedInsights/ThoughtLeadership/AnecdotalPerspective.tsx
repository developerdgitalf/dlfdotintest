import "./AnecdotalPerspective.css";

interface PerspectiveCard {
  title: string;
  image?: string;
  link?: string;
}

interface AnecdotalPerspectiveProps {
  cards?: PerspectiveCard[];
}

const defaultCards: PerspectiveCard[] = [
  {
    title: "CHANGE MANAGEMENT",
    image: "/images/insights/management.png",
    link: "#",
  },
  {
    title: "MARKET SUSTAINABILITY",
    image: "/images/insights/market.png",
  },
  {
    title: "BUSINESS RESILIENCY",
    image: "/images/insights/business.png",
  },
  {
    title: "ORGANIZATIONAL BEHAVIOUR",
    image: "/images/insights/organization.png",
  },
];

export default function AnecdotalPerspective({
  cards = defaultCards,
}: AnecdotalPerspectiveProps) {
  return (
    <section
      className="anecdotal-perspective-section"
      aria-label="Anecdotal and experiential perspective"
    >
      <div className="anecdotal-perspective-container">

        {/* =====================================================
            CENTERED HEADING
        ===================================================== */}

        <div className="anecdotal-perspective-heading">
          <h2>
            ANECDOTAL &amp; EXPERIENTIAL
            <br />
            PERSPECTIVE
          </h2>
        </div>

        {/* =====================================================
            FULL WIDTH 4 CARD GRID
        ===================================================== */}

        <div className="anecdotal-perspective-cards">
          {cards.map((card, index) => (
            <article
              className="anecdotal-perspective-card"
              key={`${card.title}-${index}`}
            >
              {/* IMAGE */}

              <div className="anecdotal-perspective-image">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                  />
                )}
              </div>

              {/* CARD CONTENT */}

              <div className="anecdotal-perspective-card-content">
                <h3>{card.title}</h3>

                {card.link && card.link !== "#" && (
                  <a
                    href={card.link}
                    className="anecdotal-perspective-link"
                  >
                    Read More
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}