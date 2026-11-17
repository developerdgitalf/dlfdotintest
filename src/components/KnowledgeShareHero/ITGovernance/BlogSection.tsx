
"use client";

import { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiSearch,
} from "react-icons/fi";

import "./BlogSection.css";

// =========================================================
// BLOG POST INTERFACE
// =========================================================

export interface BlogPost {
  id: string | number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  author: string;
  slug: string;
}

interface BlogSectionProps {
  posts?: BlogPost[];
}

// =========================================================
// FRONTEND CATEGORIES
// =========================================================

const categories = [
  "All Articles",
  "Strategy Paper",
  "Digital Innovation",
  "Change Management",
  "Business",
  "Technology",
];

// =========================================================
// WORDPRESS CATEGORY MAPPING
// =========================================================

const categoryMap: Record<string, string[]> = {
  "Strategy Paper": [
    "IT Governance",
    "DIGITALFABRIC",
  ],

  "Digital Innovation": [
    "Digital Innovation",
  ],

  "Change Management": [
    "POV & INFOBYTES",
  ],

  Business: [
    "Case Studies",
  ],

  Technology: [
    "AI & Automation",
    "New Age Tech",
  ],
};

// =========================================================
// HTML ENTITY DECODER
// =========================================================

function decodeHtmlEntities(value: string = ""): string {
  return value
    .replace(/<[^>]*>/g, "")
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
    .trim();
}

// =========================================================
// NORMALIZE CATEGORY
// =========================================================

function normalizeCategory(category: string = ""): string {
  return decodeHtmlEntities(category)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

// =========================================================
// BLOG SECTION COMPONENT
// =========================================================

export default function BlogSection({
  posts = [],
}: BlogSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState("All Articles");

  const [search, setSearch] = useState("");

  // =======================================================
  // FILTER ARTICLES
  // =======================================================

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      // All Articles displays every received post.
      let categoryMatch = activeCategory === "All Articles";

      if (!categoryMatch) {
        const postCategory = normalizeCategory(
          post.category
        );

        const allowedCategories =
          categoryMap[activeCategory] || [];

        categoryMatch = allowedCategories.some(
          (category) =>
            normalizeCategory(category) === postCategory
        );

        // Also allow direct category matches.
        if (!categoryMatch) {
          categoryMatch =
            normalizeCategory(activeCategory) ===
            postCategory;
        }
      }

      // Search across title, description and category.
      const title = decodeHtmlEntities(
        post.title
      ).toLowerCase();

      const description = decodeHtmlEntities(
        post.description
      ).toLowerCase();

      const category = decodeHtmlEntities(
        post.category
      ).toLowerCase();

      const author = decodeHtmlEntities(
        post.author
      ).toLowerCase();

      const searchMatch =
        !query ||
        title.includes(query) ||
        description.includes(query) ||
        category.includes(query) ||
        author.includes(query);

      return categoryMatch && searchMatch;
    });
  }, [posts, activeCategory, search]);

  // =======================================================
  // RENDER
  // =======================================================

  return (
    <section className="blog-section">
      <div className="blog-container">

        {/* HEADER */}

        <header className="blog-header">
          <h2>
            Articles &amp; knowledge papers
          </h2>

          <p>
            Curated thoughts, strategies, and knowledge
            that drive transformation, innovation, and
            long-term value.
          </p>
        </header>

        {/* CATEGORY FILTER AND SEARCH */}

        <div className="blog-toolbar">

          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blog-category ${
                  activeCategory === category
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* SEARCH */}

          <div className="blog-search">
            <FiSearch aria-hidden="true" />

            <input
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search articles"
            />
          </div>

        </div>

        {/* ARTICLE GRID */}

        <div className="blog-grid">

          {filteredPosts.map((post) => {
            const title = decodeHtmlEntities(
              post.title
            );

            const description =
              decodeHtmlEntities(
                post.description
              );

            const author =
              decodeHtmlEntities(
                post.author || "DigitalFabric"
              );

            const category =
              decodeHtmlEntities(
                post.category || "Business"
              );

            return (
              <article
                className="blog-card"
                key={post.id}
              >

                {/* ARTICLE IMAGE */}

                <div className="blog-card-image">
                  <img
                    src={
                      post.image ||
                      "/images/blog/business-sustenance.jpg"
                    }
                    alt={title}
                    loading="lazy"
                  />
                </div>

                {/* ARTICLE CONTENT */}

                <div className="blog-card-content">

                  {/* META INFORMATION */}

                  <div className="blog-meta">

                    <span>
                      {post.date?.toUpperCase() || ""}
                    </span>

                    <span>•</span>

                    <span>
                      BY {author.toUpperCase()}
                    </span>

                    <span>•</span>

                    <span>
                      {category.toUpperCase()}
                    </span>

                  </div>

                  {/* TITLE */}

                  <h3>
                    {title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p>
                    {description}
                  </p>

                  {/* READ MORE */}

                  <a
                    href={`/insights/${post.slug}`}
                    className="blog-read-more"
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
            );
          })}

          {/* EMPTY STATE */}

          {filteredPosts.length === 0 && (
            <div className="blog-empty">
              <p>
                {posts.length === 0
                  ? "Articles are currently unavailable. Please try again later."
                  : "No articles found."}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
