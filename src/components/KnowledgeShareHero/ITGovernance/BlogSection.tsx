"use client";

import { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiSearch,
} from "react-icons/fi";

import "./BlogSection.css";

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

/*
=========================================================
FALLBACK POSTS
=========================================================
These are only used if BlogSection is opened without
WordPress posts being passed from page.tsx.
*/

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "Business sustenance and scale",
    description:
      "It is astonishing to see how every industry has upgraded itself with thorough insight and knowledge about emerging technologies. A keen study of components, technology, and capital.",
    image: "/images/blog/business-sustenance.jpg",
    category: "Digital Innovation",
    date: "July 6, 2020",
    author: "Ashwin Gaidhan",
    slug: "business-sustenance-and-scale",
  },
  {
    id: 2,
    title: "The Business Resiliency Strategy",
    description:
      "This document describes the cause, the effect, the action and the method to build a sustainable business service model. Technology has ingrained so intricately with every business function.",
    image: "/images/blog/business-resiliency.jpg",
    category: "Digital Innovation",
    date: "February 28, 2021",
    author: "Ashwin Gaidhan",
    slug: "business-resiliency-strategy",
  },
  {
    id: 3,
    title: "Business sustenance and scale",
    description:
      "It is astonishing to see how every industry has upgraded itself with thorough insight and knowledge about emerging technologies. A keen study of components, technology, and capital.",
    image: "/images/blog/business-sustenance-2.jpg",
    category: "Strategy Paper",
    date: "July 6, 2020",
    author: "Ashwin Gaidhan",
    slug: "business-sustenance-scale-2",
  },
  {
    id: 4,
    title:
      "Comprehensive Change Management... the Pedestal to Transformation",
    description:
      "This article explores the role of comprehensive change management in supporting transformation and helping organizations navigate change effectively.",
    image: "/images/blog/change-management.jpg",
    category: "Change Management",
    date: "May 14, 2020",
    author: "Ashwin Gaidhan",
    slug: "comprehensive-change-management",
  },
];

/*
=========================================================
FRONTEND CATEGORIES
=========================================================
These are the categories shown to website visitors.
*/

const categories = [
  "All Articles",
  "Strategy Paper",
  "Digital Innovation",
  "Change Management",
  "Business",
  "Technology",
];

/*
=========================================================
WORDPRESS → WEBSITE CATEGORY MAPPING
=========================================================

WordPress categories:

AI & Automation       → Technology
Case Studies          → Business
Digital Innovation    → Digital Innovation
DIGITALFABRIC         → Strategy Paper
IT Governance         → Strategy Paper
New Age Tech          → Technology
POV & INFOBYTES       → Change Management
*/

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

/*
=========================================================
HTML ENTITY DECODER
=========================================================
WordPress sometimes returns:

&#038;
&amp;
&hellip;
&#8217;

This function converts them into normal text.
*/

function decodeHtmlEntities(value: string): string {
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
    .trim();
}

/*
=========================================================
NORMALIZE CATEGORY
=========================================================
Makes category comparison safer.
*/

function normalizeCategory(category: string): string {
  return decodeHtmlEntities(category)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export default function BlogSection({
  posts = defaultPosts,
}: BlogSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState("All Articles");

  const [search, setSearch] = useState("");

  /*
  ========================================================
  FILTER POSTS
  ========================================================
  */

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      const postCategory = normalizeCategory(
        post.category
      );

      /*
      -----------------------------------------------
      CATEGORY FILTER
      -----------------------------------------------
      */

      let categoryMatch = true;

      // All Articles = show everything
      if (activeCategory === "All Articles") {
        categoryMatch = true;
      } else {
        const allowedCategories =
          categoryMap[activeCategory] || [];

        categoryMatch = allowedCategories.some(
          (category) =>
            normalizeCategory(category) ===
            postCategory
        );
      }

      /*
      -----------------------------------------------
      SEARCH FILTER
      -----------------------------------------------
      */

      const title = decodeHtmlEntities(
        post.title
      ).toLowerCase();

      const description = decodeHtmlEntities(
        post.description
      ).toLowerCase();

      const category = decodeHtmlEntities(
        post.category
      ).toLowerCase();

      const searchMatch =
        !query ||
        title.includes(query) ||
        description.includes(query) ||
        category.includes(query);

      return categoryMatch && searchMatch;
    });
  }, [posts, activeCategory, search]);

  return (
    <section className="blog-section">
      <div className="blog-container">

        {/* =========================================
            HEADER
        ========================================= */}

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

        {/* =========================================
            FILTER BAR
        ========================================= */}

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

        {/* =========================================
            POSTS
        ========================================= */}

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
                post.author
              );

            const category =
              decodeHtmlEntities(
                post.category
              );

            return (
              <article
                className="blog-card"
                key={post.id}
              >

                {/* =================================
                    IMAGE
                ================================= */}

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

                {/* =================================
                    CONTENT
                ================================= */}

                <div className="blog-card-content">

                  {/* META */}

                  <div className="blog-meta">

                    <span>
                      {post.date.toUpperCase()}
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

          {/* =========================================
              EMPTY STATE
          ========================================= */}

          {filteredPosts.length === 0 && (
            <div className="blog-empty">
              <p>
                No articles found.
              </p>
            </div>
          )}

        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

      

      </div>
    </section>
  );
}