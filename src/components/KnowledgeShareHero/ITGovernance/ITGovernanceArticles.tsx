"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiSearch,
} from "react-icons/fi";

import "./ITGovernanceArticles.css";

/* =========================================================
   ARTICLE TYPE
========================================================= */

export interface ITGovernanceArticle {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  slug: string;
}


/* =========================================================
   WORDPRESS TYPES
========================================================= */

interface WordPressAuthor {
  name: string;
}

interface WordPressFeaturedMedia {
  source_url: string;
}

interface WordPressTerm {
  name: string;
  taxonomy: string;
}

interface WordPressPost {
  id: number;

  date: string;

  slug: string;

  title: {
    rendered: string;
  };

  excerpt?: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  _embedded?: {
    author?: WordPressAuthor[];

    "wp:featuredmedia"?: WordPressFeaturedMedia[];

    "wp:term"?: WordPressTerm[][];
  };
}


/* =========================================================
   WORDPRESS API
========================================================= */

const WORDPRESS_API =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://wp.digitalfabric.in/wp-json/wp/v2";


/* =========================================================
   HTML ENTITY DECODER
========================================================= */

function decodeHtmlEntities(value: string): string {
  if (!value) {
    return "";
  }

  return value
    .replace(/&#038;/gi, "&")
    .replace(/&#38;/gi, "&")
    .replace(/&amp;/gi, "&")
    .replace(/&nbsp;/gi, " ")
    .replace(/&hellip;/gi, "…")
    .replace(/&#8230;/gi, "…")
    .replace(/&ldquo;/gi, '"')
    .replace(/&rdquo;/gi, '"')
    .replace(/&lsquo;/gi, "'")
    .replace(/&rsquo;/gi, "'")
    .replace(/&#8220;/gi, '"')
    .replace(/&#8221;/gi, '"')
    .replace(/&#8216;/gi, "'")
    .replace(/&#8217;/gi, "'")
    .replace(/&#8211;/gi, "–")
    .replace(/&#8212;/gi, "—")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


/* =========================================================
   WORDPRESS URL FIXER
========================================================= */

function fixWordPressUrl(value: string): string {
  if (!value) {
    return "";
  }

  return value
    .replace(
      /http:\/\/localhost:8888\/dfabric/gi,
      "https://wp.digitalfabric.in"
    )
    .replace(
      /https:\/\/localhost:8888\/dfabric/gi,
      "https://wp.digitalfabric.in"
    )
    .replace(
      /https:\/\/digitalfabric\.in\/new-old/gi,
      "https://wp.digitalfabric.in"
    )
    .replace(
      /http:\/\/digitalfabric\.in\/new-old/gi,
      "https://wp.digitalfabric.in"
    );
}


/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(value: string): string {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}


/* =========================================================
   FETCH WORDPRESS POSTS
========================================================= */

async function fetchWordPressArticles(): Promise<
  ITGovernanceArticle[]
> {
  const response = await fetch(
    `${WORDPRESS_API}/posts?per_page=100&_embed`
  );

  if (!response.ok) {
    throw new Error(
      `WordPress API error: ${response.status}`
    );
  }

  const posts: WordPressPost[] =
    await response.json();

  return posts.map(
    (post): ITGovernanceArticle => {
      const terms =
        post._embedded?.["wp:term"]?.flat() || [];

      const category =
        terms.find(
          (term) =>
            term.taxonomy === "category"
        )?.name || "";

      const author =
        post._embedded?.author?.[0]?.name ||
        "DigitalFabric";

      const featuredImage =
        post._embedded?.["wp:featuredmedia"]?.[0]
          ?.source_url || "";

      const rawExcerpt =
        post.excerpt?.rendered ||
        post.content.rendered ||
        "";

      return {
        id: post.id,

        title: decodeHtmlEntities(
          post.title.rendered
        ),

        excerpt: decodeHtmlEntities(
          rawExcerpt
        ),

        image: fixWordPressUrl(
          featuredImage
        ),

        category: decodeHtmlEntities(
          category
        ),

        date: post.date,

        author: decodeHtmlEntities(
          author
        ),

        slug: post.slug,
      };
    }
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ITGovernanceArticles() {
  const [articles, setArticles] =
    useState<ITGovernanceArticle[]>([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  /* =======================================================
     FETCH
  ======================================================= */

  useEffect(() => {
    let cancelled = false;

    async function loadArticles() {
      try {
        setLoading(true);
        setError("");

        const data =
          await fetchWordPressArticles();

        if (!cancelled) {
          setArticles(data);
        }
      } catch (err) {
        console.error(
          "Failed to load IT Governance articles:",
          err
        );

        if (!cancelled) {
          setError(
            "Unable to load IT Governance articles."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadArticles();

    return () => {
      cancelled = true;
    };
  }, []);


  /* =======================================================
     IT GOVERNANCE ONLY
     
     ALL MATCHING ARTICLES
     NO LIMIT
  ======================================================= */

  const itGovernanceArticles =
    useMemo(() => {
      return articles.filter(
        (article) =>
          article.category
            ?.trim()
            .toLowerCase() ===
          "it governance"
      );
    }, [articles]);


  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredArticles =
    useMemo(() => {
      const search =
        searchTerm
          .trim()
          .toLowerCase();

      if (!search) {
        return itGovernanceArticles;
      }

      return itGovernanceArticles.filter(
        (article) =>
          article.title
            .toLowerCase()
            .includes(search) ||
          article.excerpt
            .toLowerCase()
            .includes(search) ||
          article.author
            .toLowerCase()
            .includes(search)
      );
    }, [
      itGovernanceArticles,
      searchTerm,
    ]);


  return (
    <section
      className="it-governance-articles-section"
      aria-label="IT Governance articles"
    >

      <div className="it-governance-articles-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="it-governance-articles-header">

          <div className="it-governance-articles-header-copy">

            <span className="it-governance-articles-eyebrow">
              KNOWLEDGE AREA
            </span>

            <h2>
              IT Governance
            </h2>

            <p>
              Curated insights, research, and
              perspectives on IT governance,
              enterprise architecture, service
              management, and technology leadership.
            </p>

          </div>

        </div>


        {/* =========================================
            TOOLBAR
        ========================================= */}

        <div className="it-governance-articles-toolbar">

          <div className="it-governance-category-list">

            <button
              type="button"
              className="it-governance-category-button is-active"
              aria-pressed="true"
            >
              IT Governance
            </button>

          </div>


          <div className="it-governance-search">

            <FiSearch
              aria-hidden="true"
            />

            <input
              type="search"
              placeholder="Search IT Governance..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              aria-label="Search IT Governance articles"
            />

          </div>

        </div>


        {/* =========================================
            COUNT
        ========================================= */}

        {!loading && !error && (
          <div className="it-governance-articles-count">
            <span>
              {filteredArticles.length}
              {filteredArticles.length === 1
                ? " Article"
                : " Articles"}
            </span>
          </div>
        )}


        {/* =========================================
            LOADING
        ========================================= */}

        {loading && (
          <div className="it-governance-loading-state">

            <div className="it-governance-loading-spinner" />

            <p>
              Loading IT Governance articles...
            </p>

          </div>
        )}


        {/* =========================================
            ERROR
        ========================================= */}

        {!loading && error && (
          <div className="it-governance-empty-state">

            <FiBookOpen
              aria-hidden="true"
            />

            <h3>
              Unable to load articles
            </h3>

            <p>
              {error}
            </p>

          </div>
        )}


        {/* =========================================
            ARTICLE GRID
        ========================================= */}

        {!loading && !error && (
          <div className="it-governance-articles-grid">

            {filteredArticles.map(
              (article) => (
                <article
                  className="it-governance-article-card"
                  key={article.id}
                >

                  {/* IMAGE */}

                  <a
                    href={`/insights/${article.slug}`}
                    className="it-governance-article-image"
                    aria-label={`Read ${article.title}`}
                  >

                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="it-governance-image-placeholder">
                        <FiBookOpen
                          aria-hidden="true"
                        />
                      </div>
                    )}

                  </a>


                  {/* CONTENT */}

                  <div className="it-governance-article-content">

                    <div className="it-governance-article-meta">

                      {article.date && (
                        <span>
                          {formatDate(
                            article.date
                          ).toUpperCase()}
                        </span>
                      )}

                      {article.author && (
                        <>
                          <span>•</span>

                          <span>
                            BY{" "}
                            {article.author.toUpperCase()}
                          </span>
                        </>
                      )}

                      <span>•</span>

                      <span>
                        IT GOVERNANCE
                      </span>

                    </div>


                    <h3>
                      {article.title}
                    </h3>


                    {article.excerpt && (
                      <p>
                        {article.excerpt}
                      </p>
                    )}


                    <a
                      href={`/insights/${article.slug}`}
                      className="it-governance-article-link"
                    >

                      <span>
                        READ MORE
                      </span>

                      <FiArrowRight
                        aria-hidden="true"
                      />

                    </a>

                  </div>

                </article>
              )
            )}


            {/* =====================================
                EMPTY STATE
            ===================================== */}

            {filteredArticles.length === 0 && (
              <div className="it-governance-empty-state">

                <FiBookOpen
                  aria-hidden="true"
                />

                <h3>
                  No IT Governance articles found.
                </h3>

                <p>
                  {searchTerm
                    ? "Try a different search term."
                    : "No articles are currently available in this category."
                  }
                </p>

              </div>
            )}

          </div>
        )}


        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        {!loading && !error && (
          <div className="it-governance-articles-cta">

            <div className="it-governance-articles-cta-icon">

              <FiBookOpen
                aria-hidden="true"
              />

            </div>


            <div className="it-governance-articles-cta-copy">

              <h3>
                Explore More IT Governance Insights
              </h3>

              <p>
                Discover additional research,
                perspectives, and knowledge from
                DigitalFABRIC®.
              </p>

            </div>


            <a
              href="/featured-insights/articles-papers"
              className="it-governance-articles-cta-button"
            >

              <span>
                Explore All Articles
              </span>

              <FiArrowRight
                aria-hidden="true"
              />

            </a>

          </div>
        )}

      </div>

    </section>
  );
}