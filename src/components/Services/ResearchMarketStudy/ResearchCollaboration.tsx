import Image from "next/image";
import "./ResearchCollaboration.css";

interface ResearchCard {
  eyebrow: string;
  title: string;
  image: string;
  points: string[];
}

const researchCards: ResearchCard[] = [
  {
    eyebrow: "MARKET STUDY",
    title: "Market Study",
    image: "/images/services/r1.png",
    points: [
      "Emerging trends – Data references and analysis, evidence-based predictions.",
      "Current space & future state – Indicative / innovative / mainstream and disruptive vendors in the space.",
      "Adoption and institutionalization of technology/capabilities across industries, tools and tech stacks.",
    ],
  },
  {
    eyebrow: "CUSTOMER",
    title: "Customer",
    image: "/images/services/r2.png",
    points: [
      "How to choose a suitable product / technology / partner for your business.",
      "Vendor evaluations (compatibility – scalability – comprehensiveness – sustainability – partnership strengths).",
    ],
  },
  {
    eyebrow: "PRODUCTS",
    title: "Products",
    image: "/images/services/r3.png",
    points: [
      "The business vertical – Persona-focused solutions / products.",
      "Disruptive innovations in the space – How technology is transforming related products, capabilities, and services.",
      "Hybrid clouds, hardware-secured infrastructure, quantum information processing, and new-age technologies.",
    ],
  },
];

export default function ResearchCollaboration() {
  return (
    <section
      className="research-collaboration-section"
      aria-labelledby="research-collaboration-title"
    >
      <div className="research-collaboration-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div className="research-collaboration-header">
         
        
     

          <h2 id="research-collaboration-title">
            HOW WE COLLABORATE
          </h2>

          

          <p>
            We will be your Business – technology – market Advisors to the
            CMO&apos;s office to contribute to the strategy and roadmap.
          </p>
        </div>

        {/* =========================================
            THREE RESEARCH CARDS
        ========================================= */}
        <div className="research-collaboration-grid">
          {researchCards.map((card) => (
            <article
              className="research-collaboration-card"
              key={card.title}
            >
              {/* =====================================
                  FULL WIDTH IMAGE
              ===================================== */}
              <div className="research-card-image">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="research-card-image-element"
                />
              </div>

              {/* =====================================
                  CARD HEADING
              ===================================== */}
              <div className="research-card-copy">
               

                <h3>{card.title}</h3>

                <div className="research-card-line" />
              </div>

              {/* =====================================
                  NUMBERED POINTS
              ===================================== */}
              <ol className="research-card-points">
                {card.points.map((point, index) => (
                  <li key={`${card.title}-${index}`}>
                    <span className="research-point-number">
                      {index + 1}.
                    </span>

                    <span className="research-point-text">
                      {point}
                    </span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}