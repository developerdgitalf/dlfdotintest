"use client";

import { useEffect, useRef, useState } from "react";

import "./SocialPost.css";

import {
  FaLinkedinIn,
  FaRegHeart,
  FaRegComment,
  FaShareNodes,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

/* =========================================================
   TYPES
========================================================= */

type SocialPost = {
  id: number;
  image: string;
  description: string;
  time: string;
  followers: number;
  likes: number;
  comments: number;
  shares: number;
  link?: string;
};

type PlatformSectionProps = {
  title: string;
  posts: SocialPost[];
  type: "linkedin" | "articles";
  viewMoreLink: string;
};

type PostCardProps = {
  post: SocialPost;
  type: "linkedin" | "articles";
};


/* =========================================================
   LINKEDIN POSTS
   ALL 6 POSTS
========================================================= */

const linkedInPosts: SocialPost[] = [
  {
    id: 1,
    image: "/images/social/social-1.jpg",
    description:
      "Designing for what’s next means keeping people at the centre. Designing for what’s next means keeping people at the centre. Designing for what’s next means keeping people at the centre. Designing for what’s next means keeping people at the centre. Designing for what’s next means keeping people at the centre. Designing for what’s next means keeping people at the centre.",
    time: "2d",
    followers: 12345,
    likes: 128,
    comments: 6,
    shares: 12,
    link:
      "https://www.linkedin.com/company/digitalfabric/posts/",
  },

  {
    id: 2,
    image: "/images/social/social-2.jpg",
    description:
      "Technology is a powerful enabler. People make it meaningful.",
    time: "5d",
    followers: 12345,
    likes: 96,
    comments: 4,
    shares: 9,
    link:
      "https://www.linkedin.com/company/digitalfabric/posts/",
  },

  {
    id: 3,
    image: "/images/social/social-3.jpg",
    description:
      "Collaboration drives real change — onward, together.",
    time: "1w",
    followers: 12345,
    likes: 142,
    comments: 8,
    shares: 16,
    link:
      "https://www.linkedin.com/company/digitalfabric/posts/",
  },

  {
    id: 4,
    image: "/images/social/social-4.jpg",
    description:
      "Go-to-market strategy and brand positioning for a successful enterprise.",
    time: "3d",
    followers: 12345,
    likes: 78,
    comments: 4,
    shares: 10,
    link:
      "https://www.linkedin.com/company/digitalfabric/posts/",
  },

  {
    id: 5,
    image: "/images/social/social-5.jpg",
    description:
      "Strategic thinking, creativity and technology working together to create meaningful business growth.",
    time: "1w",
    followers: 12345,
    likes: 64,
    comments: 3,
    shares: 8,
    link:
      "https://www.linkedin.com/company/digitalfabric/posts/",
  },

  {
    id: 6,
    image: "/images/social/social-6.jpg",
    description:
      "Building stronger enterprises through focused strategy, powerful brands and digital transformation.",
    time: "2w",
    followers: 12345,
    likes: 82,
    comments: 6,
    shares: 13,
    link:
      "https://www.linkedin.com/company/digitalfabric/posts/",
  },
];


/* =========================================================
   ARTICLES
   RETAINED FOR FUTURE USE
   CURRENTLY NOT DISPLAYED
========================================================= */

const articlePosts: SocialPost[] = [
  {
    id: 1,
    image: "/images/social/article-2.png",
    description:
      "Why Building A Successful Enterprise AI Foundation Needs An Engineering Mindset",
    time: "3d",
    followers: 12345,
    likes: 78,
    comments: 4,
    shares: 10,
    link:
      "https://www.forbes.com/councils/forbestechcouncil/2026/06/01/why-building-a-successful-enterprise-ai-foundation-needs-an-engineering-mindset/",
  },

  {
    id: 2,
    image: "/images/social/article-3.png",
    description:
      "Reasons Behind Enterprise AI Failures.",
    time: "1w",
    followers: 1345,
    likes: 64,
    comments: 3,
    shares: 8,
    link:
      "https://www.forbes.com/councils/forbestechcouncil/2026/04/23/-how-ai-consulting-differs-from-traditional-it-consulting/",
  },
];


/* =========================================================
   FEATURED RELATED ARTICLES
   THREE CARDS UNDER MAIN FEATURE
========================================================= */

const featuredRelatedArticles = [
  {
    id: 1,
    image: "/images/social/article-2.png",
    title:
      "Why Building A Successful Enterprise AI Foundation Needs An Engineering Mindset",
    description:
      "The gap between a promising AI pilot and a production-grade capability is not a technology gap. It is a cognitive discipline gap. Closing it requires the kind of thinking that strong engineering teams bring to any mission-critical system.",
    date: "April 23, 2026",
    category: "FORBES TECHNOLOGY COUNCIL",
    link:
      "https://www.forbes.com/councils/forbestechcouncil/2026/06/01/why-building-a-successful-enterprise-ai-foundation-needs-an-engineering-mindset/",
  },

  {
    id: 2,
    image: "/images/social/article-3.png",
    title:
      "How AI Consulting Differs From Traditional IT Consulting",
    description:
      "The gap between a promising AI pilot and a production-grade capability is not a technology gap. It is a cognitive discipline gap. Closing it requires the kind of thinking that strong engineering teams bring to any mission-critical system.",
    date: "March 27, 2026",
    category: "FORBES TECHNOLOGY COUNCIL",
    link:
      "https://www.forbes.com/councils/forbestechcouncil/2026/04/23/-how-ai-consulting-differs-from-traditional-it-consulting/",
  },

  {
    id: 3,
    image: "/images/social/forbes-4.jpg",
    title:
      "5 Reasons Behind Enterprise AI Failures",
    description:
      "New perspectives on technology, people and strategy for stronger digital enterprises.",
    date: "March 18, 2026",
    category: "FORBES TECHNOLOGY COUNCIL",
    link:
      "https://www.forbes.com/councils/forbestechcouncil/2026/03/27/5-reasons-behind-enterprise-ai-failures/",
  },
];


/* =========================================================
   POST CARD
========================================================= */

function PostCard({
  post,
  type,
}: PostCardProps) {
  const descriptionRef =
    useRef<HTMLParagraphElement>(null);

  const [expanded, setExpanded] =
    useState(false);

  const [showSeeMore, setShowSeeMore] =
    useState(false);


  /* =======================================================
     DESCRIPTION OVERFLOW CHECK
  ======================================================= */

  useEffect(() => {
    const element = descriptionRef.current;

    if (!element) {
      return;
    }

    const checkOverflow = () => {
      const computedStyle =
        window.getComputedStyle(element);

      const lineHeight =
        parseFloat(computedStyle.lineHeight);

      if (
        !lineHeight ||
        Number.isNaN(lineHeight)
      ) {
        setShowSeeMore(false);
        return;
      }

      const originalDisplay =
        element.style.display;

      const originalOverflow =
        element.style.overflow;

      const originalWebkitLineClamp =
        element.style.webkitLineClamp;

      const originalWebkitBoxOrient =
        element.style.webkitBoxOrient;


      /* Temporarily remove clamp */

      element.style.display = "block";
      element.style.overflow = "visible";
      element.style.webkitLineClamp = "unset";
      element.style.webkitBoxOrient = "unset";


      const fullHeight =
        element.scrollHeight;

      const fiveLineHeight =
        lineHeight * 5;


      setShowSeeMore(
        fullHeight >
          fiveLineHeight + 1
      );


      /* Restore original styles */

      element.style.display =
        originalDisplay;

      element.style.overflow =
        originalOverflow;

      element.style.webkitLineClamp =
        originalWebkitLineClamp;

      element.style.webkitBoxOrient =
        originalWebkitBoxOrient;
    };


    const timer =
      window.setTimeout(
        checkOverflow,
        0
      );


    const resizeObserver =
      new ResizeObserver(() => {
        checkOverflow();
      });


    resizeObserver.observe(element);

    window.addEventListener(
      "resize",
      checkOverflow
    );


    return () => {
      window.clearTimeout(timer);

      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        checkOverflow
      );
    };
  }, [post.description]);


  return (
    <article className="social-post-card">

      {/* =====================================================
          POST HEADER
      ===================================================== */}

      <div className="social-post-header">

        <div className="social-post-profile">

          <div className="social-post-avatar">
            <img
              src="/images/df-icon.png"
              alt="DIGITALFABRIC"
              className="social-post-avatar-image"
            />
          </div>


          <div className="social-post-profile-info">

            <strong>
              DIGITALFABRIC®
            </strong>

            <span>
              {post.followers.toLocaleString()} followers
            </span>

            <span className="social-post-meta">
              {post.time} · ◉
            </span>

          </div>

        </div>


        <button
          type="button"
          className="social-post-more"
          aria-label="More options"
        >
          ···
        </button>

      </div>


      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <div className="social-post-description-wrap">

        <p
          ref={descriptionRef}
          className={`social-post-description ${
            expanded
              ? "is-expanded"
              : ""
          }`}
        >
          {post.description}
        </p>


        {showSeeMore && (
          <button
            type="button"
            className="social-post-see-more"
            onClick={() =>
              setExpanded(
                (previous) =>
                  !previous
              )
            }
            aria-expanded={expanded}
          >
            {expanded
              ? "See Less"
              : "See More"}
          </button>
        )}

      </div>


      {/* =====================================================
          POST IMAGE
      ===================================================== */}

      {type === "linkedin" ? (

        <a
          href={post.link || "#"}
          className="social-post-image-link"
          aria-label="View LinkedIn post"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div className="social-post-image-wrap">

            <img
              src={post.image}
              alt={post.description}
              className="social-post-image"
            />

          </div>

        </a>

      ) : (

        <div className="social-post-image-wrap">

          <img
            src={post.image}
            alt={post.description}
            className="social-post-image"
          />

        </div>

      )}


      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div className="social-post-actions">

        <button
          type="button"
          aria-label={`Like post, ${post.likes}`}
        >
          <FaRegHeart />

          <span>
            {post.likes}
          </span>
        </button>


        <button
          type="button"
          aria-label={`Comment on post, ${post.comments}`}
        >
          <FaRegComment />

          <span>
            {post.comments}
          </span>
        </button>


        <button
          type="button"
          aria-label={`Share post, ${post.shares}`}
        >
          <FaShareNodes />

          <span>
            {post.shares}
          </span>
        </button>

      </div>

    </article>
  );
}


/* =========================================================
   PLATFORM SECTION
========================================================= */

function PlatformSection({
  title,
  posts,
  type,
  viewMoreLink,
}: PlatformSectionProps) {

  return (
    <section className="social-platform-section">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="social-platform-header">

        <div className="social-platform-title">

          {type === "linkedin" ? (

            <span
              className="
                social-platform-icon
                linkedin-icon
              "
            >
              <FaLinkedinIn />
            </span>

          ) : null}


          <h2>
            {title}
          </h2>

        </div>


        <a
          href={viewMoreLink}
          className="social-platform-view-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More

          <FaArrowUpRightFromSquare />
        </a>

      </div>


      {/* =====================================================
          POSTS
      ===================================================== */}

      <div className="social-posts-grid">

        {posts.map((post) => (
          <PostCard
            key={`${type}-${post.id}`}
            post={post}
            type={type}
          />
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SocialPost() {

  return (
    <section className="social-action-section">

      <div className="social-action-container">


        {/* ===================================================
            INTRO
        =================================================== */}

        <div className="social-action-intro">

          <div className="social-action-intro-left">

            <span className="social-action-eyebrow">
              SOCIAL ACTION
            </span>


            <h1>
              Conversations, collaborations
              <br />
              and courageous ideas — from our
             
              team to the world.
            </h1>

          </div>


          <p className="social-action-intro-right">
          </p>

        </div>


        {/* ===================================================
            FEATURED FORBES
        =================================================== */}

        <article className="social-featured-card">


          {/* MAIN IMAGE */}

          <div className="social-featured-image">

            <img
              src="/images/social/forbes-1.png"
              alt="Human and AI collaboration"
            />

          </div>


          {/* MAIN CONTENT */}

          <div className="social-featured-content">

            <span className="social-featured-label">
              FEATURED IN
            </span>


            <div className="social-forbes-logo">
              Forbes
            </div>


            <h2>
              Building Human-AI Harmony:
              <br />
              The Target State for a Frontier
              <br />
              Enterprise
            </h2>


            <p>
              An exploration of how frontier
              enterprises can build a productive
              and sustainable relationship between
              humans and AI.
            </p>


            <span className="social-featured-divider" />


            <div className="social-featured-meta">

              <span>
                Ashwin Gaidhani
              </span>

              <span>|</span>

              <span>
                September 8, 2026
              </span>

            </div>


            <a
              href="https://www.forbes.com/councils/forbestechcouncil/2026/09/08/building-humanai-harmony-the-target-state-for-a-frontier-enterprise/"
              className="social-featured-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full article

              <FaArrowUpRightFromSquare />
            </a>

          </div>

        </article>


        {/* ===================================================
            THREE RELATED FORBES ARTICLES
        =================================================== */}

        <div className="social-featured-related-grid">

          {featuredRelatedArticles.map(
            (article) => (

              <article
                key={article.id}
                className="social-featured-related-card"
              >

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-featured-related-image-link"
                >

                  <div className="social-featured-related-image">

                    <img
                      src={article.image}
                      alt={article.title}
                    />

                  </div>

                </a>


                <div className="social-featured-related-content">

                  <span className="social-featured-related-category">
                    {article.category}
                  </span>


                  <h3>
                    {article.title}
                  </h3>


                  <p>
                    {article.description}
                  </p>


                  <div className="social-featured-related-meta">

                    <span>
                      Forbes
                    </span>

                    <span>|</span>

                    <span>
                      {article.date}
                    </span>

                  </div>


                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-featured-related-button"
                  >

                    <span>
                      Read the article
                    </span>

                    <FaArrowUpRightFromSquare />

                  </a>

                </div>

              </article>

            )
          )}

        </div>


        {/* ===================================================
            LINKEDIN — ALL 6 POSTS
        =================================================== */}

        <PlatformSection
          title="LinkedIn"
          type="linkedin"
          posts={linkedInPosts}
          viewMoreLink="https://www.linkedin.com/company/digitalfabric/posts/"
        />


        {/* ===================================================
            ARTICLES SECTION
            CURRENTLY HIDDEN
        =================================================== */}

        {/*
        <PlatformSection
          title="Articles"
          type="articles"
          posts={articlePosts}
          viewMoreLink="featured-insights/articles-papers"
        />
        */}


      </div>

    </section>
  );
}