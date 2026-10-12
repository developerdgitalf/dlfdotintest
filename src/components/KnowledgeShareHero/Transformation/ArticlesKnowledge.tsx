"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiSearch,
} from "react-icons/fi";

import "./ArticlesKnowledge.css";

export interface KnowledgeArticle {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  slug: string;
}

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
   WORDPRESS DATE
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

async function fetchWordPressArticles(): Promise<KnowledgeArticle[]> {
  const response = await fetch(
    `${WORDPRESS_API}/posts?per_page=100&_embed`,
  );

  if (!response.ok) {
    throw new Error(
      `WordPress API error: ${response.status}`
    );
  }

  const posts: WordPressPost[] =
    await response.json();

  return posts.map((post): KnowledgeArticle => {

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
  });
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ArticlesKnowledge() {

  const [articles, setArticles] =
    useState<KnowledgeArticle[]>([]);

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
          "Failed to load WordPress articles:",
          err
        );

        if (!cancelled) {
          setError(
            "Unable to load articles from WordPress."
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
     DIGITAL INNOVATION ONLY
     
     NO LIMIT
  ======================================================= */

  const digitalInnovationArticles =
    useMemo(() => {

      return articles.filter((article) => {
        return (
          article.category
            ?.trim()
            .toLowerCase() ===
          "digital innovation"
        );
      });

    }, [articles]);


  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredArticles =
    useMemo(() => {

      const search =
        searchTerm.trim().toLowerCase();

      if (!search) {
        return digitalInnovationArticles;
      }

      return digitalInnovationArticles.filter(
        (article) => {

          return (
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

        }
      );

    }, [
      digitalInnovationArticles,
      searchTerm,
    ]);


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      className="articles-knowledge-section"
      aria-label="Digital Innovation articles"
    >

      <div className="articles-knowledge-container">


        {/* =========================================
            HEADER
        ========================================= */}

        <div className="articles-knowledge-header">

          <div className="articles-knowledge-header-copy">

            <span className="articles-knowledge-eyebrow">
              KNOWLEDGE AREA
            </span>

            <h2>
              Digital Innovation
            </h2>

            <p>
              Curated thoughts, strategies, and
              knowledge focused on digital innovation,
              transformation, technology, and
              long-term business value.
            </p>

          </div>

        </div>


        {/* =========================================
            TOOLBAR
        ========================================= */}

        <div className="articles-knowledge-toolbar">

          <div className="articles-category-list">

            <button
              type="button"
              className="articles-category-button is-active"
              aria-pressed="true"
            >
              Digital Innovation
            </button>

          </div>


          <div className="articles-search">

            <FiSearch
              aria-hidden="true"
            />

            <input
              type="search"
              placeholder="Search Digital Innovation..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              aria-label="Search Digital Innovation articles"
            />

          </div>

        </div>


        {/* =========================================
            ARTICLE COUNT
        ========================================= */}

        {!loading &&
          !error &&
          (
            <div className="articles-knowledge-count">
              <span>
                {filteredArticles.length}
                {filteredArticles.length === 1
                  ? " Article"
                  : " Articles"}
              </span>
            </div>
          )
        }


        {/* =========================================
            LOADING
        ========================================= */}

        {loading && (

          <div className="articles-loading-state">

            <div className="articles-loading-spinner" />

            <p>
              Loading Digital Innovation articles...
            </p>

          </div>

        )}


        {/* =========================================
            ERROR
        ========================================= */}

        {!loading && error && (

          <div className="articles-empty-state">

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

        {!loading &&
          !error &&
          (
            <div className="articles-knowledge-grid">

              {filteredArticles.map(
                (article) => (

                  <article
                    className="knowledge-article-card"
                    key={article.id}
                  >

                    {/* IMAGE */}

                    <a
                      href={`/insights/${article.slug}`}
                      className="knowledge-article-image"
                      aria-label={`Read ${article.title}`}
                    >

                      {article.image ? (

                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                        />

                      ) : (

                        <div className="knowledge-article-image-placeholder">

                          <FiBookOpen
                            aria-hidden="true"
                          />

                        </div>

                      )}

                    </a>


                    {/* CONTENT */}

                    <div className="knowledge-article-content">

                      {/* META */}

                      <div className="knowledge-article-meta">

                        {article.date && (
                          <span>
                            {formatDate(
                              article.date
                            ).toUpperCase()}
                          </span>
                        )}

                        {article.author && (
                          <>
                            <span>
                              •
                            </span>

                            <span>
                              BY{" "}
                              {article.author.toUpperCase()}
                            </span>
                          </>
                        )}

                        <span>
                          •
                        </span>

                        <span>
                          DIGITAL INNOVATION
                        </span>

                      </div>


                      {/* TITLE */}

                      <h3>
                        {article.title}
                      </h3>


                      {/* EXCERPT */}

                      {article.excerpt && (
                        <p>
                          {article.excerpt}
                        </p>
                      )}


                      {/* READ MORE */}

                      <a
                        href={`/insights/${article.slug}`}
                        className="knowledge-article-link"
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
                  EMPTY
              ===================================== */}

              {filteredArticles.length === 0 && (

                <div className="articles-empty-state">

                  <FiBookOpen
                    aria-hidden="true"
                  />

                  <h3>
                    No Digital Innovation articles found.
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
          )
        }


        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        {!loading && !error && (
          <div className="articles-knowledge-cta">

            <div className="articles-knowledge-cta-icon">

              <FiBookOpen
                aria-hidden="true"
              />

            </div>


            <div className="articles-knowledge-cta-copy">

              <h3>
                Explore More Insights
              </h3>

              <p>
                Discover additional articles,
                research, perspectives, and
                knowledge from DigitalFABRIC®.
              </p>

            </div>


            <a
              href="/featured-insights/articles-papers"
              className="articles-knowledge-cta-button"
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