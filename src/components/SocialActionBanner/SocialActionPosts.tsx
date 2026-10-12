"use client";

import "./SocialActionPosts.css";

import {
  FaLinkedinIn,
  FaNewspaper,
  FaRegHeart,
  FaRegComment,
  FaShareNodes,
  FaArrowRight,
} from "react-icons/fa6";

/* =========================================
   TYPES
========================================= */

type SocialPost = {
  id: number;
  image: string;
  title: string;
  description: string;
  hashtags: string;
  href: string;
};

/* =========================================
   LINKEDIN POSTS
========================================= */

const linkedInPosts: SocialPost[] = [
  {
    id: 1,
    image: "/images/social/social-1.jpg",
    title: "Digital Fabric Consulting",
    description:
      "Go-to-market strategy and brand positioning for a successful enterprise.",
    hashtags: "#DIGITALFABRIC® #business #growth",
    href: "#",
  },

  {
    id: 2,
    image: "/images/social/social-2.jpg",
    title: "Digital Fabric Consulting",
    description:
      "Strategic thinking, creativity and technology working together to create meaningful business growth.",
    hashtags: "#DIGITALFABRIC® #strategy #innovation",
    href: "#",
  },

  {
    id: 3,
    image: "/images/social/social-3.jpg",
    title: "Digital Fabric Consulting",
    description:
      "A Building stronger enterprises through focused strategy, powerful brands and digital transformation.",
    hashtags: "#DIGITALFABRIC® #enterprise #transformation",
    href: "#",
  },

  {
    id: 4,
    image: "/images/social/social-4.jpg",
    title: "Digital Fabric Consulting",
    description:
      "Go-to-market strategy and brand positioning for a successful enterprise.",
    hashtags: "#DIGITALFABRIC® #business #growth",
    href: "#",
  },

  {
    id: 5,
    image: "/images/social/social-5.jpg",
    title: "Digital Fabric Consulting",
    description:
      "Strategic thinking, creativity and technology working together to create meaningful business growth.",
    hashtags: "#DIGITALFABRIC® #strategy #innovation",
    href: "#",
  },

  {
    id: 6,
    image: "/images/social/social-6.jpg",
    title: "Digital Fabric Consulting",
    description:
      "Building stronger enterprises through focused strategy, powerful brands and digital transformation.",
    hashtags: "#DIGITALFABRIC® #enterprise #transformation",
    href: "#",
  },
];

/* =========================================
   ARTICLES
========================================= */

const articlePosts: SocialPost[] = [
  {
    id: 1,
    image: "/images/social/forbes-1.png",
    title:
      "Building Human–AI Harmony: The Target State for a Frontier Enterprise",
    description:
      "An exploration of how frontier enterprises can build a more effective and harmonious relationship between human intelligence and artificial intelligence.",
    hashtags: "Official Member, Forbes Technology Council",
    href:
      "https://www.forbes.com/councils/forbestechcouncil/2026/09/08/building-humanai-harmony-the-target-state-for-a-frontier-enterprise/",
  },
];

/* =========================================
   PROPS
========================================= */

type PostCardProps = {
  post: SocialPost;
};

/* =========================================
   PREMIUM LINKEDIN CARD
========================================= */

function PostCard({ post }: PostCardProps) {
  return (
    <article className="linkedinPremiumCard">

      {/* =====================================
          IMAGE
      ===================================== */}

      <a
        href={post.href}
        className="linkedinPremiumImageLink"
        aria-label={`View ${post.title}`}
      >
        <div className="linkedinPremiumImageWrap">

          <img
            src={post.image}
            alt={post.title}
            className="linkedinPremiumImage"
          />

        </div>
      </a>


      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="linkedinPremiumContent">

        {/* CATEGORY */}

        <span className="linkedinPremiumCategory">
          LINKEDIN POST
        </span>


        {/* TITLE */}

        <h2 className="linkedinPremiumTitle">
          {post.title}
        </h2>


        {/* DESCRIPTION */}

        <p className="linkedinPremiumDescription">
          {post.description}
        </p>


        {/* =================================
            AUTHOR
        ================================= */}

        <div className="linkedinPremiumAuthor">

          <div className="linkedinAuthorAvatar">

            <img
              src="/images/df-icon.png"
              alt="Digital Fabric Consulting"
            />

          </div>


          <div className="linkedinAuthorInfo">

            <h4>
              Digital Fabric Consulting
            </h4>

            <p>
              Strategic Brand & Growth Studio
            </p>

            <span>
              {post.hashtags}
            </span>

          </div>

        </div>


        {/* =================================
            BUTTON
        ================================= */}

        <a
          href={post.href}
          className="linkedinReadButton"
        >
          View on LinkedIn

          <FaArrowRight />
        </a>


        {/* =================================
            ACTIONS
        ================================= */}

        <div className="linkedinPremiumActions">

          <button
            type="button"
            aria-label="Like post"
          >
            <FaRegHeart />
          </button>


          <button
            type="button"
            aria-label="Comment on post"
          >
            <FaRegComment />
          </button>


          <a
            href={post.href}
            aria-label="Share post"
          >
            <FaShareNodes />
          </a>

        </div>

      </div>

    </article>
  );
}

/* =========================================
   FORBES ARTICLE CARD
========================================= */

function ForbesArticleCard({ post }: PostCardProps) {
  const isForbes = post.id === 1;

  return (
    <article className="forbesArticleCard">

      {/* =====================================
          IMAGE
      ===================================== */}

      <a
        href={post.href}
        target={isForbes ? "_blank" : undefined}
        rel={
          isForbes
            ? "noopener noreferrer"
            : undefined
        }
        className="forbesArticleImageLink"
        aria-label={`View ${post.title}`}
      >
        <div className="forbesArticleImageWrap">

          <img
            src={post.image}
            alt={post.title}
            className="forbesArticleImage"
          />

        </div>
      </a>


      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="forbesArticleContent">

        {/* CATEGORY */}

        <span className="forbesArticleCategory">
          {isForbes
            ? "FEATURED IN FORBES"
            : "ARTICLE"}
        </span>


        {/* TITLE */}

        <h2 className="forbesArticleTitle">
          {post.title}
        </h2>


        {/* DESCRIPTION */}

        <p className="forbesArticleDescription">
          {post.description}
        </p>


        {/* =================================
            AUTHOR
        ================================= */}

        <div className="forbesArticleAuthor">

          <div className="forbesAuthorAvatar">

            <img
              src="/images/our-team/ashwin-gaidhani.png"
              alt="Ashwin Gaidhani"
            />

          </div>


          <div className="forbesAuthorInfo">

            <h4>
              Ashwin Gaidhani
            </h4>

            <p>
              CEO & Chair, DIGITALFABRIC® Consulting
            </p>

            <span>
              Official Member, Forbes Technology Council
            </span>

          </div>

        </div>


        {/* =================================
            BUTTON
        ================================= */}

        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="forbesReadButton"
        >
          Read on Forbes

          <FaArrowRight />
        </a>


        {/* =================================
            ACTIONS
        ================================= */}

        <div className="forbesArticleActions">

          <button
            type="button"
            aria-label="Like article"
          >
            <FaRegHeart />
          </button>


          <button
            type="button"
            aria-label="Comment on article"
          >
            <FaRegComment />
          </button>


          <a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share article"
          >
            <FaShareNodes />
          </a>

        </div>

      </div>

    </article>
  );
}

/* =========================================
   PLATFORM SECTION
========================================= */

type PlatformSectionProps = {
  platform: "linkedin" | "articles";
  posts: SocialPost[];
};

function PlatformSection({
  platform,
  posts,
}: PlatformSectionProps) {
  const isLinkedIn = platform === "linkedin";

  return (
    <div className="socialPlatformSection">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="socialPlatformHeader">

        <div
          className={`socialPlatformLabel ${platform}`}
        >

          {isLinkedIn ? (
            <FaLinkedinIn className="socialPlatformIcon" />
          ) : (
            <FaNewspaper className="socialPlatformIcon" />
          )}

          <span>
            {isLinkedIn
              ? "LinkedIn"
              : "Articles"}
          </span>

        </div>


        <a
          href="https://www.linkedin.com/company/digitalfabric/posts/"
          className="socialPlatformViewMore"
        >
          View More

          <FaArrowRight />
        </a>

      </div>


      {/* =====================================
          LINKEDIN POSTS
          ALL 6 POSTS RENDER HERE
      ===================================== */}

      {isLinkedIn && (
        <div
          className="socialPostsGrid"
          aria-label="LinkedIn posts"
        >

          {posts.map((post) => (
            <PostCard
              key={`linkedin-${post.id}`}
              post={post}
            />
          ))}

        </div>
      )}


      {/* =====================================
          ARTICLES
      ===================================== */}

      {!isLinkedIn && (
        <div
          className="articlesPostsGrid"
          aria-label="Articles"
        >

          {posts.map((post) => (
            <ForbesArticleCard
              key={`article-${post.id}`}
              post={post}
            />
          ))}

        </div>
      )}

    </div>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function SocialActionPosts() {
  return (
    <section
      className="socialActionPostsSection"
    >

      <div className="site-container">

        {/* =================================
            LINKEDIN
        ================================= */}

        <PlatformSection
          platform="linkedin"
          posts={linkedInPosts}
        />


        {/* =================================
            ARTICLES
        ================================= */}

        <PlatformSection
          platform="articles"
          posts={articlePosts}
        />

      </div>

    </section>
  );
}