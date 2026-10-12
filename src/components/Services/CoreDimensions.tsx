import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import "./CoreDimensions.css";

const dimensions = [
  {
    id: "business",
    image: "/images/core-business.png",
    title: "All for business and Operating model",
  },
  {
    id: "technology",
    image: "/images/core-technology.png",
    title: "Technology & Platform strategy and competitive positioning",
  },
  {
    id: "advisory",
    image: "/images/core-advisory.png",
    title:
      "Practice research, advisory and benchmarking for service providers and enterprises",
  },
];

export default function CoreDimensions() {
  return (
    <section className="core-dimensions">
      <div className="site-container-small">
        <div className="core-dimensions__header">
          <h2>3 core dimensions</h2>
          <div className="core-dimensions__heading-line" />
        </div>

        <div className="core-dimensions__grid site-container-small">
          {dimensions.map((dimension) => (
            <article className="core-card" key={dimension.id}>
              <div className="core-card__image-wrap">
                <Image
                  src={dimension.image}
                  alt={dimension.title}
                  width={600}
                  height={400}
                  className="core-card__image"
                />
              </div>

              <div className="core-card__content">
                <div className="core-card__accent" />

                <h3>{dimension.title}</h3>

                <button
                  type="button"
                  className="core-card__link"
                  aria-label={`View more about ${dimension.title}`}
                >
                 {/* <span>View More</span> 
                  <FiArrowRight aria-hidden="true" />*/}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}