"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiSearch,
  FiX,
} from "react-icons/fi";

import "./AllBlog.css";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  author: string;
  slug: string;
}

const categories = [
  "Show All",
  "AI & Automation",
  "Case Studies",
  "Digital Innovation",
  "DIGITALFABRIC",
  "IT Governance",
  "New Age Tech",
  "POV & Infobytes",
];

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "Business sustenance and scale",
    description:
      "It is astonishing to see how every industry has upgraded itself with thorough insight and knowledge about emerging technologies.",
    image: "/images/blog/business-sustenance.jpg",
    category: "Digital Innovation",
    date: "July 6, 2020",
    author: "Ashwin Gaidhani",
    slug: "business-sustenance-and-scale",
  },
  {
    id: 2,
    title: "Innovation Management",
    description:
      "Innovation and digital transformation are perceived with similar viewpoints, but there is a prominent difference.",
    image: "/images/blog/innovation-management.jpg",
    category: "POV & Infobytes",
    date: "July 18, 2020",
    author: "Ashwin Gaidhani",
    slug: "innovation-management",
  },
  {
    id: 3,
    title: "3rd Cornerstone of Business Resiliency: Crisis Management",
    description:
      "Crisis management is a heuristic way of familiarizing unanticipated situations to restrain damage.",
    image: "/images/blog/crisis-management.jpg",
    category: "POV & Infobytes",
    date: "June 30, 2020",
    author: "Ashwin Gaidhani",
    slug: "crisis-management",
  },
  {
    id: 4,
    title: "2nd Cornerstone of Business Resiliency Strategy: Disaster Recovery",
    description:
      "Disaster recovery is a set of processes and tools for preparing your organization to deal with unexpected events.",
    image: "/images/blog/disaster-recovery.jpg",
    category: "POV & Infobytes",
    date: "June 18, 2020",
    author: "Ashwin Gaidhani",
    slug: "disaster-recovery",
  },
  {
    id: 5,
    title: "1st Cornerstone for Business Resilience Strategy: Business Continuity",
    description:
      "In today's world, everything is business, and it has to be available to sustain continuous operations.",
    image: "/images/blog/business-continuity.jpg",
    category: "POV & Infobytes",
    date: "June 11, 2020",
    author: "Ashwin Gaidhani",
    slug: "business-continuity",
  },
  {
    id: 6,
    title: "The Ninja Anecdote: Being Digital",
    description:
      "The following correlation struck me while watching a movie yesterday and reflecting on the digital world.",
    image: "/images/blog/ninja-anecdote.jpg",
    category: "POV & Infobytes",
    date: "May 21, 2020",
    author: "Ashwin Gaidhani",
    slug: "the-ninja-anecdote-being-digital",
  },
  {
    id: 7,
    title: "Segmenting General Intelligence",
    description:
      "Segmenting intelligence is a necessary activity to understand the impact of various environments.",
    image: "/images/blog/segmenting-general-intelligence.jpg",
    category: "AI & Automation",
    date: "May 17, 2020",
    author: "Ashwin Gaidhani",
    slug: "segmenting-general-intelligence",
  },
  {
    id: 8,
    title: "Automation Roadmap",
    description:
      "Here is my perspective of how automation has developed in the due course and where it is going.",
    image: "/images/blog/automation-roadmap.jpg",
    category: "AI & Automation",
    date: "May 17, 2020",
    author: "Ashwin Gaidhani",
    slug: "automation-roadmap",
  },
  {
    id: 9,
    title: "The Technology Trinity of Tomorrow",
    description:
      "Enterprises should future-proof businesses with the processes required to build a robust framework.",
    image: "/images/blog/technology-trinity.jpg",
    category: "POV & Infobytes",
    date: "May 17, 2020",
    author: "Ashwin Gaidhani",
    slug: "technology-trinity-of-tomorrow",
  },
  {
    id: 10,
    title: "The New Format: RESET_REBOOT_REFORM",
    description:
      "We thrive through this situation as we always have in many such instances in the past.",
    image: "/images/blog/reset-reboot-reform.jpg",
    category: "POV & Infobytes",
    date: "May 17, 2020",
    author: "Ashwin Gaidhani",
    slug: "reset-reboot-reform",
  },
  {
    id: 11,
    title: "The Approach",
    description:
      "The IT paradigm has moved from information technology-centric models to modern business operations.",
    image: "/images/blog/the-approach.jpg",
    category: "Digital Innovation",
    date: "May 16, 2020",
    author: "Ashwin Gaidhani",
    slug: "the-approach",
  },
  {
    id: 12,
    title: "Information Technology – Technology Information",
    description:
      "The time has come to reorganize the paradigm around the logical grouping of information technology.",
    image: "/images/blog/information-technology.jpg",
    category: "POV & Infobytes",
    date: "May 14, 2020",
    author: "Ashwin Gaidhani",
    slug: "information-technology",
  },
  {
    id: 13,
    title: "IT Sourcing Life Cycle",
    description:
      "Transformation is the extension of imagination and possibility that facilitates the technology journey.",
    image: "/images/blog/it-sourcing-life-cycle.jpg",
    category: "POV & Infobytes",
    date: "May 14, 2020",
    author: "Ashwin Gaidhani",
    slug: "it-sourcing-life-cycle",
  },
  {
    id: 14,
    title: "Enterprise Process Segmentation",
    description:
      "We all have perceived conventional business challenges and built frameworks that address them.",
    image: "/images/blog/enterprise-process-segmentation.jpg",
    category: "POV & Infobytes",
    date: "May 14, 2020",
    author: "Ashwin Gaidhani",
    slug: "enterprise-process-segmentation",
  },
  {
    id: 15,
    title: "Comprehensive Change Management: The Pedestal to Transformation",
    description:
      "Transformation requires a structured approach that helps organizations navigate meaningful change.",
    image: "/images/blog/change-management.jpg",
    category: "Digital Innovation",
    date: "May 14, 2020",
    author: "Ashwin Gaidhani",
    slug: "comprehensive-change-management",
  },
  {
    id: 16,
    title: "A Perspective on Retrospective Automation",
    description:
      "This article is published on SSOn and explores the evolving perspective of process automation.",
    image: "/images/blog/retrospective-automation.jpg",
    category: "AI & Automation",
    date: "May 14, 2020",
    author: "Ashwin Gaidhani",
    slug: "retrospective-automation",
  },
  {
    id: 17,
    title: "Innovation – An Obvious Ingredient of the Success Recipe",
    description:
      "Innovation is an integral part of almost every business strategy and helps organizations move forward.",
    image: "/images/blog/innovation-success.jpg",
    category: "Digital Innovation",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "innovation-success-recipe",
  },
  {
    id: 18,
    title: "(Take Analogy) Technology about Innovation",
    description:
      "A perspective on innovation, imagination and the ability to create possibilities for the future.",
    image: "/images/blog/technology-innovation.jpg",
    category: "Digital Innovation",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "technology-about-innovation",
  },
  {
    id: 19,
    title: "Déjà vu – Adopting New Technologies",
    description:
      "Every industry in the present world is trying to add the flavor of artificial intelligence and similar technologies.",
    image: "/images/blog/deja-vu.jpg",
    category: "AI & Automation",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "deja-vu-adopting-new-technologies",
  },
  {
    id: 20,
    title: "The Technology Rubik's Cube of Today, Solved Tomorrow",
    description:
      "The disruptive world is being put to the test and emerging technologies are creating ripples in all dimensions.",
    image: "/images/blog/rubiks-cube.jpg",
    category: "AI & Automation",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "technology-rubiks-cube",
  },
  {
    id: 21,
    title: "Enterprise Architecture – The Digital Makeover",
    description:
      "When organizations are ready for a transformation journey, they have to modernize systems and processes.",
    image: "/images/blog/enterprise-architecture.jpg",
    category: "IT Governance",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "enterprise-architecture-digital-makeover",
  },
  {
    id: 22,
    title: "Evaluating Enterprise Computing Systems: The Right Need",
    description:
      "Every technology, service and product company comprises multiple layers of systems and processes.",
    image: "/images/blog/enterprise-computing.jpg",
    category: "IT Governance",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "evaluating-enterprise-computing",
  },
  {
    id: 23,
    title: "Repositioning ITSM",
    description:
      "Methodologies and reference architectures are changing the way organizations build modern IT services.",
    image: "/images/blog/repositioning-itsm.jpg",
    category: "IT Governance",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "repositioning-itsm",
  },
  {
    id: 24,
    title: "Reshaping ITSM: Intelligently Transforming Service Management",
    description:
      "IT service management is evolving as organizations adapt to changing business requirements.",
    image: "/images/blog/reshaping-itsm.jpg",
    category: "IT Governance",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "reshaping-itsm",
  },
  {
    id: 25,
    title: "Technology Has a Newly Revised Job Description",
    description:
      "Technology has always been at the epicenter of entire business ecosystems and continues to evolve.",
    image: "/images/blog/technology-job-description.jpg",
    category: "Digital Innovation",
    date: "May 13, 2020",
    author: "Ashwin Gaidhani",
    slug: "technology-revised-job-description",
  },
  {
    id: 26,
    title: "You Don't Have to Be Technical to Get Into Technology",
    description:
      "Not everyone can become a great artist or a technologist, but there are many ways to contribute.",
    image: "/images/blog/get-into-technology.jpg",
    category: "New Age Tech",
    date: "May 12, 2020",
    author: "Ashwin Gaidhani",
    slug: "you-dont-have-to-be-technical",
  },
  {
    id: 27,
    title: "Did I Miss the Disruptive Technology Evolution?",
    description:
      "Recognizing sudden transformation across technology domains requires a broader perspective.",
    image: "/images/blog/disruptive-technology.jpg",
    category: "AI & Automation",
    date: "May 12, 2020",
    author: "Ashwin Gaidhani",
    slug: "disruptive-technology-evolution",
  },
];

export default function AllBlog() {
  const [activeCategory, setActiveCategory] =
    useState("Show All");

  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return defaultPosts.filter((post) => {
      const categoryMatch =
        activeCategory === "Show All" ||
        post.category.toLowerCase() ===
          activeCategory.toLowerCase();

      const searchMatch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <section className="all-blog-section">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="all-blog-hero">
        <div className="all-blog-container">

          <span className="all-blog-eyebrow">
            INSIGHTS &amp; PERSPECTIVES
          </span>

          <h1>
            Ideas that shape
            <br />
            <span>what comes next.</span>
          </h1>

          <p>
            Explore perspectives, technologies, strategies and
            ideas shaping the future of business and digital
            transformation.
          </p>

        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="all-blog-container">

        {/* FILTERS */}

        <div className="all-blog-toolbar">

          <div className="all-blog-categories">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`all-blog-category ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* SEARCH */}

          <div className="all-blog-search">

            <FiSearch />

            <input
              type="search"
              placeholder="Search insights..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search articles"
            />

            {search && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearch("")}
              >
                <FiX />
              </button>
            )}

          </div>

        </div>

        {/* RESULTS */}

        <div className="all-blog-results">

          <p>
            Showing{" "}
            <strong>
              {filteredPosts.length}
            </strong>{" "}
            insights
          </p>

        </div>

        {/* =====================================================
            BLOG GRID
        ===================================================== */}

        <div className="all-blog-grid">

          {filteredPosts.map((post) => (

            <article
              className="all-blog-card"
              key={post.id}
            >

              {/* IMAGE */}

              <Link
                href={`/blog/${post.slug}`}
                className="all-blog-image"
                aria-label={`Read ${post.title}`}
              >

                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="
                    (max-width: 700px) 100vw,
                    (max-width: 1100px) 50vw,
                    25vw
                  "
                />

                <span className="all-blog-image-overlay">
                  <FiArrowRight />
                </span>

              </Link>

              {/* CONTENT */}

              <div className="all-blog-content">

                <div className="all-blog-meta">

                  <span>
                    {post.date}
                  </span>

                  <span className="all-blog-dot">
                    •
                  </span>

                  <span>
                    By {post.author}
                  </span>

                </div>

                <span className="all-blog-post-category">
                  {post.category}
                </span>

                <h2>
                  <Link
                    href={`/blog/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p>
                  {post.description}
                </p>

                {/* READ MORE */}

                <Link
                  href={`/blog/${post.slug}`}
                  className="all-blog-read-more"
                >

                  <span>
                    READ MORE
                  </span>

                  <FiArrowRight />

                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* EMPTY STATE */}

        {filteredPosts.length === 0 && (

          <div className="all-blog-empty">

            <FiSearch />

            <h3>
              No insights found
            </h3>

            <p>
              Try another keyword or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("Show All");
              }}
            >
              Reset filters
            </button>

          </div>

        )}

      </div>

    </section>
  );
}