import "./ResearchStudyCards.css";

const researchStudies = [
  {
    title: "Market Research",
    subtitle: "Customer Behavior & Adoption Metrics",
    image: "/images/services/research-as-service.png",
  },
  {
    title: "Practice Research",
    subtitle: "Services & Solutions",
    image: "/images/services/n1.png",
  },
  {
    title: "Technology Research",
    subtitle: "Capability & Components",
    image: "/images/services/n2.png",
  },
  {
    title: "Product Research",
    subtitle: "Functionality & Ownership",
    image: "/images/services/abstract6.jpeg",
  },
];

export default function ResearchStudyCards() {
  return (
    <section
      className="research-study-section"
      aria-labelledby="research-study-title"
    >
      <div className="research-study-container">

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}
        <div className="research-study-intro">
          <p id="research-study-title">
            The research studies cover the domain/technology/product landscape with directive, informative, and perspective descriptions of the customer and markets, respectively.
          </p>
        </div>

        {/* =====================================================
            RESEARCH CARDS
        ===================================================== */}
        <div className="research-study-grid">
          {researchStudies.map((study) => (
            <article className="research-study-card" key={study.title}>
              {/* IMAGE */}
              <div className="research-study-card__image">
                <img
                  src={study.image}
                  alt={study.title}
                />
              </div>

              {/* CONTENT */}
              <div className="research-study-card__content">
                <div className="research-study-card__title-row">
                  <h3>{study.title}</h3>

                
                </div>

                <p>{study.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}