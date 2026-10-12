import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import "./ResearchInsights.css";

interface ResearchInsight {
  title: string;
  image: string;
  link?: string;
}

export default function ResearchInsights() {
  const insights: ResearchInsight[] = [
    {
      title:
        "Demystifying Enterprise Service Management – Beyond IT: IS Service Provider Lens Study Ranks Services and Solutions in the U.S.",
      image: "/images/services/n1.png",
      link:
        "https://isg-one.com/articles/demystifying-enterprise-service-management---beyond-it-isg-provider-lens-study-ranks-services-and-solutions-in-the-u.s",
    },
    {
      title:
        "Transforming Business Performance: The Workday Ecosystem",
      image: "/images/services/n2.png",
      link:
        "https://isg-one.com/research/articles/full-article/transforming-business-performance-the-workday-ecosystem",
    },
  ];

  return (
    <section className="research-insights-section">
      <div className="research-insights-container">
        <div className="research-insights-grid">

          {/* Top Left – Content */}
          <article className="research-insight-card research-insight-content">
            <div className="research-insight-content-inner">
              <span className="research-insight-line" />

              <h3>{insights[0].title}</h3>

              <Link
                href={insights[0].link || "#"}
                className="research-insight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Learn More</span>

                <span className="research-insight-arrow">
                  <FiArrowUpRight />
                </span>
              </Link>
            </div>
          </article>

          {/* Top Right – Image */}
          <article
            className="research-insight-card research-insight-image"
            style={{
              backgroundImage: `url("${insights[0].image}")`,
            }}
            aria-label="Enterprise service research"
          >
            <div className="research-image-overlay" />
          </article>

          {/* Bottom Left – Image */}
          <article
            className="research-insight-card research-insight-image"
            style={{
              backgroundImage: `url("${insights[1].image}")`,
            }}
            aria-label="Digital transformation research"
          >
            <div className="research-image-overlay" />
          </article>

          {/* Bottom Right – Content */}
          <article className="research-insight-card research-insight-content">
            <div className="research-insight-content-inner">
              <span className="research-insight-line" />

              <h3>{insights[1].title}</h3>

              <Link
                href={insights[1].link || "#"}
                className="research-insight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Read More</span>

                <span className="research-insight-arrow">
                  <FiArrowUpRight />
                </span>
              </Link>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}