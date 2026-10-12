"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiSearch,
} from "react-icons/fi";

import "./NewAgeTechArticles.css";

/* =========================================================
   ARTICLE TYPE
========================================================= */

export interface NewAgeTechArticle {
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
  NewAgeTechArticle[]
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
    (post): NewAgeTechArticle => {
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

export default function NewAgeTechArticles() {
  const [articles, setArticles] =
    useState<NewAgeTechArticle[]>([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  /* =======================================================
     FETCH ARTICLES
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
          "Failed to load New Age Tech articles:",
          err
        );

        if (!cancelled) {
          setError(
            "Unable to load New Age Tech articles."
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
     NEW AGE TECH ONLY
     
     ALL MATCHING ARTICLES
     NO LIMIT
  ======================================================= */

  const newAgeTechArticles =
    useMemo(() => {
      return articles.filter(
        (article) =>
          article.category
            ?.trim()
            .toLowerCase() ===
          "new age tech"
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
        return newAgeTechArticles;
      }

      return newAgeTechArticles.filter(
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
      newAgeTechArticles,
      searchTerm,
    ]);


  return (
    <section
      className="new-age-tech-articles-section"
      aria-label="New Age Tech articles"
    >
      <div className="new-age-tech-articles-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="new-age-tech-articles-header">

          <div className="new-age-tech-articles-header-copy">

            <span className="new-age-tech-articles-eyebrow">
              KNOWLEDGE AREA
            </span>

            <h2>
              New Age Tech
            </h2>

            <p>
              Curated insights, research, and perspectives
              on emerging technologies, digital evolution,
              and the future of business and society.
            </p>

          </div>

        </div>


        {/* =========================================
            TOOLBAR
        ========================================= */}

        <div className="new-age-tech-articles-toolbar">

          <div className="new-age-tech-category-list">

            <button
              type="button"
              className="new-age-tech-category-button is-active"
              aria-pressed="true"
            >
              New Age Tech
            </button>

          </div>


          <div className="new-age-tech-search">

            <FiSearch
              aria-hidden="true"
            />

            <input
              type="search"
              placeholder="Search New Age Tech..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              aria-label="Search New Age Tech articles"
            />

          </div>

        </div>


        {/* =========================================
            COUNT
        ========================================= */}

        {!loading && !error && (
          <div className="new-age-tech-articles-count">
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
          <div className="new-age-tech-loading-state">

            <div className="new-age-tech-loading-spinner" />

            <p>
              Loading New Age Tech articles...
            </p>

          </div>
        )}


        {/* =========================================
            ERROR
        ========================================= */}

        {!loading && error && (
          <div className="new-age-tech-empty-state">

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
          <div className="new-age-tech-articles-grid">

            {filteredArticles.map(
              (article) => (
                <article
                  className="new-age-tech-article-card"
                  key={article.id}
                >

                  {/* IMAGE */}

                  <a
                    href={`/insights/${article.slug}`}
                    className="new-age-tech-article-image"
                    aria-label={`Read ${article.title}`}
                  >

                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="new-age-tech-image-placeholder">
                        <FiBookOpen
                          aria-hidden="true"
                        />
                      </div>
                    )}

                  </a>


                  {/* CONTENT */}

                  <div className="new-age-tech-article-content">

                    <div className="new-age-tech-article-meta">

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
                        NEW AGE TECH
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
                      className="new-age-tech-article-link"
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
              <div className="new-age-tech-empty-state">

                <FiBookOpen
                  aria-hidden="true"
                />

                <h3>
                  No New Age Tech articles found.
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
          <div className="new-age-tech-articles-cta">

            <div className="new-age-tech-articles-cta-icon">
              <FiBookOpen
                aria-hidden="true"
              />
            </div>


            <div className="new-age-tech-articles-cta-copy">

              <h3>
                Explore More New Age Tech Insights
              </h3>

              <p>
                Discover additional research,
                perspectives, and knowledge from
                DigitalFABRIC®.
              </p>

            </div>


            <a
              href="/featured-insights/articles-papers"
              className="new-age-tech-articles-cta-button"
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