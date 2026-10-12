import Image from "next/image";
import Link from "next/link";

import "./BlogArticle.css";

const categories = [
  { name: "AI & Automation", count: 7 },
  { name: "Case Studies", count: 3 },
  { name: "Digital Innovation", count: 8 },
  { name: "DIGITALFABRIC", count: 7 },
  { name: "IT Governance", count: 4 },
  { name: "New Age Tech", count: 1 },
  { name: "POV & INFOBYTES", count: 12 },
];

export default function BlogArticle() {
  return (
    <section className="blogArticlePage">
      <div className="blogArticleContainer">

        {/* =====================================================
            MAIN ARTICLE
        ===================================================== */}

        <article className="blogArticleMain">

          {/* =================================================
              HERO IMAGE
          ================================================= */}

          <div className="blogHeroImage">
            <Image
              src="/images/blog/product/the-product.png"
              alt="The Product"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 820px"
            />

            <div className="blogHeroOverlay">
              <span>THE PRODUCT</span>
            </div>
          </div>


          {/* =================================================
              META
          ================================================= */}

          <div className="blogMeta">
            <span>October 23, 2020</span>

            <span className="metaSeparator">•</span>

            <span>By Ashwin Gaidhani</span>

            <span className="metaSeparator">•</span>

            <span>DIGITALFABRIC</span>
          </div>


          {/* =================================================
              ARTICLE HEADER
          ================================================= */}

          <header className="blogArticleHeader">

            <span className="blogArticleCategory">
              DIGITALFABRIC
            </span>

            <h1>
              THE PRODUCT
            </h1>

          </header>


          {/* =================================================
              ARTICLE CONTENT
          ================================================= */}

          <div className="blogArticleContent">

            {/* =================================================
                INTRODUCTION
            ================================================= */}

            <p>
              The first encounter with this term was in the 3rd or 4th
              grade. Yes, multiplication. In today&apos;s world, this is
              how we function and is the foundation of every enterprise
              to multiply every attribute from physical to commercial.
              If you carefully analyze the word PRODUCT and its
              application from our childhood to date, it is about
              expecting something more significant.
            </p>


            {/* =================================================
                IMAGE 1 — PRODUCT EXPERIENCE
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/product/the-product-experience.png"
                alt="The Product Experience"
                width={1024}
                height={386}
                sizes="(max-width: 900px) 100vw, 820px"
              />

              <figcaption>
                The Product Experience
              </figcaption>
            </figure>


            {/* =================================================
                PRODUCT AS WORK DESIGN CONSTITUENT
            ================================================= */}

            <p>
              We all have understood the way products are used, and there
              is this new drive to focus on understanding how products are
              made, which is a very niche skill these days.
            </p>

            <p>
              Through DIGITALFABRIC™, Product is a crucial WORK DESIGN
              CONSTITUENT that has reshaped the way business ecosystems
              think and operate. I don&apos;t want to iterate the product
              management academic &amp; function manual here, but how the
              product layer completes and provides meaning to the whole
              effort put forth by the remaining four work design
              constituents (People – Process – Platform – Partnership).
            </p>


            {/* =================================================
                IMAGE 2 — PRODUCT LIFECYCLE
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/product/product-lifecycle.png"
                alt="Product lifecycle"
                width={1024}
                height={405}
                sizes="(max-width: 900px) 100vw, 820px"
              />

              <figcaption>
                Product Lifecycle
              </figcaption>
            </figure>


            {/* =================================================
                SERVICE TRANSFORMATION
            ================================================= */}

            <h2>
              Service Transformation – Product Formation
            </h2>

            <p>
              In the IT sector, we have been working on providing
              “solutions as a service” for decades. The technology and
              capability maturity has changed this paradigm into a
              “Service as a product” mindset.
            </p>


            {/* =================================================
                PRODUCT PRINCIPLES
            ================================================= */}

            <div className="blogIntelligenceList">

              <section className="blogIntelligenceItem">
                <h3>
                  PRODUCT INVITES INNOVATION MINDSET
                </h3>
              </section>


              <section className="blogIntelligenceItem">
                <h3>
                  PRODUCTS BUILD ORGANIZATIONS….AND NOT THE OTHER WAY
                </h3>
              </section>


              <section className="blogIntelligenceItem">
                <h3>
                  OPPORTUNITY TO INFUSE …CREATIVITY – CURIOSITY –
                  CUSTOMIZATION
                </h3>
              </section>


              <section className="blogIntelligenceItem">
                <h3>
                  PRODUCT FOR EVERY PERSONA
                </h3>
              </section>


              <section className="blogIntelligenceItem">
                <h3>
                  DISCRETE REVENUE STREAM
                </h3>
              </section>


              <section className="blogIntelligenceItem">
                <h3>
                  PRODUCTS EVOLVE WITH TIME – THEY NEVER DIE
                </h3>
              </section>

            </div>


            {/* =================================================
                FINAL QUOTE
            ================================================= */}

            <blockquote className="blogFinalStatement">
              The idea of a perfect product itself is incomplete and on
              the contrary, the product evolves constantly in every
              phase of applicability and relevance.
              <br />
              <br />
              – AG
            </blockquote>


            {/* =================================================
                PREVIOUS POST
            ================================================= */}

            <div className="blogPostNavigation">

              <Link href="/blog/the-ti-technology-information-approach">
                <span>←</span>
                <strong>Previous Post</strong>
              </Link>

            </div>


            {/* =================================================
                REPLY
            ================================================= */}

            <div className="blogReply">
              <h3>
                Leave a Reply
              </h3>

              <p>
                You must be logged in to post a comment.
              </p>
            </div>

          </div>
        </article>


        {/* =====================================================
            SIDEBAR
        ===================================================== */}

        <aside className="blogSidebar">

          {/* =================================================
              SEARCH
          ================================================= */}

          <section className="blogSidebarBlock">

            <h3>
              Search
            </h3>

            <div className="blogSearch">

              <input
                type="search"
                placeholder="Type keywords..."
                aria-label="Search"
              />

              <button
                type="button"
                aria-label="Search"
              >
                →
              </button>

            </div>

          </section>


          {/* =================================================
              CATEGORIES
          ================================================= */}

          <section className="blogSidebarBlock">

            <h3>
              Categories
            </h3>

            <ul className="blogSidebarList">

              {categories.map((category) => (
                <li key={category.name}>

                  <Link href="#">

                    <span>
                      {category.name}
                    </span>

                    <span>
                      ({category.count})
                    </span>

                  </Link>

                </li>
              ))}

            </ul>

          </section>


          {/* =================================================
              RECENT POST
          ================================================= */}

          <section className="blogSidebarBlock">

            <h3>
              Recent post
            </h3>

            <article className="blogRecentPost">

              <span className="recentDate">
                May 13, 2020
              </span>

              <Link href="/blog/technology-revised-job-description">
                “Technology” has a newly revised job description
              </Link>

              <span className="recentCategory">
                Digital Innovation
              </span>

              <span className="recentAuthor">
                By Ashwin Gaidhani
              </span>

            </article>

          </section>


          {/* =================================================
              THE IDEOLOGY
          ================================================= */}

          <section className="blogSidebarBlock">

            <h3>
              The Ideology
            </h3>

            <article className="blogRecentPost">

              <span className="recentDate">
                May 12, 2020
              </span>

              <Link href="/blog/the-ideology">
                The Ideology
              </Link>

              <span className="recentCategory">
                DIGITALFABRIC
              </span>

              <span className="recentAuthor">
                By Ashwin Gaidhani
              </span>

            </article>

          </section>


          {/* =================================================
              TAGS
          ================================================= */}

          <section className="blogSidebarBlock">

            <h3>
              Tags
            </h3>

            <div className="blogTags">
              <span>Product</span>
              <span>Innovation</span>
              <span>Digital</span>
              <span>Transformation</span>
              <span>Business</span>
            </div>

          </section>

        </aside>

      </div>
    </section>
  );
}