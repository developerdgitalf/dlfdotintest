import { FiArrowRight } from "react-icons/fi";

import "./ArticlesPapersGrid.css";

interface ArticlePaper {
  title: string;
  image?: string;
  link?: string;
}

interface ArticlesPapersGridProps {
  articles?: ArticlePaper[];
}

const defaultArticles: ArticlePaper[] = [
  {
    title: "Foster Innovation (T-HUB)",
    image: "/images/articles-papers/h1.jpg",
    link: "/documents/tech-handout/DF®_T-Hub.pdf",
  },
  {
    title: "WorkDay",
    image: "/images/articles-papers/h2.jpg",
    link: "/documents/tech-handout/DF®_WORKDAY.pdf",
  },
  {
    title: "Super Apps",
    image: "/images/articles-papers/h3.jpg",
    link: "/documents/tech-handout/DF®_Superapps.pdf",
  },
  {
    title: "Service Now",
    image: "/images/articles-papers/h4.jpg",
    link: "/documents/tech-handout/DF®_ServiceNow.pdf",
  },
  {
    title: "Cloud Computing",
    image: "/images/articles-papers/h5.jpg",
    link: "/documents/tech-handout/DF®_Navigating-through-the-cloud.pdf",
  },
  {
    title: "Low Code",
    image: "/images/articles-papers/h6.jpg",
    link: "/documents/tech-handout/DF®_Low-code.pdf",
  },
  {
    title: "Intelligent Automation",
    image: "/images/articles-papers/h7.jpg",
    link: "/documents/tech-handout/DF®_IPA.pdf",
  },
  {
    title: "Hyperscalers",
    image: "/images/articles-papers/h8.jpg",
    link: "/documents/tech-handout/DF®_Hyperscalers.pdf",
  },
  {
    title: "Generative AI",
    image: "/images/articles-papers/h9.jpg",
    link: "/documents/tech-handout/DF®_Generative-AI.pdf",
  },
  {
    title: "Future of Work",
    image: "/images/articles-papers/h10.jpg",
    link: "/documents/tech-handout/DF®_Future-of-work.pdf",
  },
  {
    title: "ESG-1",
    image: "/images/articles-papers/h11.jpg",
    link: "/documents/tech-handout/DF®_ESG1.pdf",
  },
  {
    title: "ESG-2",
    image: "/images/articles-papers/h12.jpg",
    link: "/documents/tech-handout/DF®_ESG2.pdf",
  },
  {
    title: "Transformation Trends 2023",
    image: "/images/articles-papers/h13.jpg",
    link: "/documents/tech-handout/DF®_Digital-Transformation-Trends-2023.pdf",
  },
  {
    title: "CyberSecurity",
    image: "/images/articles-papers/h14.jpg",
    link: "/documents/tech-handout/DF®_Cybersecurity.pdf",
  },
  {
    title: "AWS",
    image: "/images/articles-papers/h15.jpg",
    link: "/documents/tech-handout/DF®_aws.pdf",
  },
];

export default function ArticlesPapersGrid({
  articles = defaultArticles,
}: ArticlesPapersGridProps) {
  return (
    <section className="articles-papers-section">
      <div className="articles-papers-container">

        {/* INTRO */}

        <div className="articles-papers-intro">
          <p>
            Quick peek into the technology, businesses, and capability
            space to familiarize yourself with the latest trends, updates,
            citations, and insights.
          </p>
        </div>

        {/* GRID */}

        <div className="articles-papers-grid">
          {articles.map((article, index) => (
            <article
              className="articles-papers-card"
              key={`${article.title}-${index}`}
            >
              {/* IMAGE - CLICK TO OPEN PDF */}

              <a
                href={article.link || "#"}
                className="articles-papers-image-link"
                aria-label={`Open ${article.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="articles-papers-image">
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                    />
                  )}
                </div>
              </a>

              {/* CARD FOOTER */}

              <div className="articles-papers-card-footer">
                <h3>{article.title}</h3>

                <a
                  href={article.link || "#"}
                  className="articles-papers-arrow"
                  aria-label={`Open ${article.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* VIEW MORE */}


      </div>
    </section>
  );
}