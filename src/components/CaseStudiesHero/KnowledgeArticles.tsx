"use client";

import "./KnowledgeArticles.css";

interface KnowledgeArticle {
  id: number;
  title: React.ReactNode;
  description: string;
  pdf: string;
  theme: "beige" | "navy";
}

const articles: KnowledgeArticle[] = [
  {
    id: 1,
    title: (
      <>
        RESET – REBOOT
        <br />
        – REFORM
      </>
    ),
    description:
      "We thrive through this situation as we always have in many such instances in the past. In these times – every one of us has a crucial role to play, and every single contribution matters most, and so does technology..... and here is my take on it.",
    pdf: "/documents/DIGITALFABRIC®-THE-NEW-FORMAT.pdf",
    theme: "beige",
  },

  {
    id: 2,
    title: (
      <>
        TECHNOLOGY TRINITY
        <br />
        OF TOMORROW
      </>
    ),
    description:
      "Enterprises should future-proof businesses with these three processes in mind, we would have built a robust framework that can sustain and prevail during any exigency. The NEW TOP 3 IT Service Management processes have emerged and pronounced their significance. There are numerous use-cases under each attribute.",
    pdf: "/documents/DIGITALFABRIC®-BUSINESS-RESILIENCY-STRATEGY.pdf",
    theme: "navy",
  },

  {
    id: 3,
    title: (
      <>
        RENEW – REPURPOSE
        <br />
        – RESONATE
      </>
    ),
    description:
      "View on techno-economic imbalance due to compelled transformation.",
    pdf: "/documents/DIGITALFABRIC®-RENEW-REPURPOSE-RESONATE.pdf",
    theme: "beige",
  },

  {
    id: 4,
    title: (
      <>
        THE CAUSE – THE EFFECT
        <br />
        – THE ACTION
      </>
    ),
    description:
      "This document describes THE CAUSE – THE EFFECT – THE ACTION and THE METHOD to build a sustainable business service model. When devising a strategy to advance towards your organization’s vision – mission & objective, every applicable and relevant technology infusion should be considered sane evaluation and fitment.",
    pdf: "/documents/DIGITALFABRIC®-TECHNOLOGY-TRINITY-OF-TOMORROW.pdf",
    theme: "navy",
  },
];

export default function KnowledgeArticles() {
  return (
    <section
      className="knowledge-articles-section"
      aria-labelledby="knowledge-articles-title"
    >
      <div className="knowledge-articles-container">
        {/* SECTION HEADING */}

        <div className="knowledge-articles-header">
          <span className="knowledge-articles-header-line" />

          <h2 id="knowledge-articles-title">
            Articles that talk about business resiliency, transformation, and
            readiness.
          </h2>
        </div>

        {/* ARTICLES */}

        <div className="knowledge-articles-list">
          {articles.map((article) => (
            <article
              key={article.id}
              className={`knowledge-article knowledge-article-${article.theme} ${
                article.id % 2 === 0 ? "knowledge-article-reverse" : ""
              }`}
            >
              {/* TEXT PANEL */}

              <div className="knowledge-article-content">
                <div className="knowledge-article-content-inner">
                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <a
                    href={article.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-article-button"
                  >
                    VIEW / DOWNLOAD
                  </a>
                </div>
              </div>

              {/* PDF VIEWER */}

              <div className="knowledge-article-pdf">
                <iframe
                  src={`${article.pdf}#toolbar=1&navpanes=0&scrollbar=1`}
                  title="Article PDF"
                  loading="lazy"
                />

                <div className="knowledge-article-pdf-overlay">
                  <a
                    href={article.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${article.id} PDF`}
                  >
                    OPEN PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}