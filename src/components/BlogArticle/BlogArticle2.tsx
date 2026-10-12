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
              src="/images/blog/platform/platform-bg.png"
              alt="The Platform"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 820px"
            />

            <div className="blogHeroOverlay">
              <span>THE PLATFORM</span>
            </div>
          </div>


          {/* =================================================
              META
          ================================================= */}

          <div className="blogMeta">
            <span>May 12, 2020</span>

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
              THE PLATFORM
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
              Technology is the science of combining mindware (Purpose),
              hardware(metal), and software (programs) to answer real-life
              situations (not always challenges). Maturity of customer needs
              and the degree of product relevance call for innovation to
              design new results, use case, and aptitudes.
            </p>

            <p>
              Technology always had this bifold character where one facet
              matures to self improvise on the capability. The second where
              the matured capability turns into a domain that offshoots to
              become an independent function to merge with the adjacent
              heterogeneous alternatives.
            </p>


            {/* =================================================
                IMAGE 1 — THE PLATFORM
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/platform/the-platform.png"
                alt="The Platform"
                width={1024}
                height={856}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                DIGITAL FABRIC
            ================================================= */}

            <p>
              <strong>Digital FABRIC</strong> is all about this idea of the
              21st century to address extensive, complex, and novel
              circumstances. I have substituted technology with the Platform
              presenting the new personification of components that have a
              role as an individual and as part of a group.
              <strong>
                {" "}A platform should sport capability and comprehensiveness
                as its two most significant characteristics.
              </strong>
            </p>


            <blockquote className="blogHighlight">
              Most enterprises are switching from the technology-led mindset
              to developing a platform, which is the core foundation of the
              Digital transformation initiative and an essential ingredient
              of Digital FABRIC.
            </blockquote>


            {/* =================================================
                CAPABILITY
            ================================================= */}

            <h2>Capability</h2>

            <p>
              Technology has disposed itself from a singular point of
              expertise to multi-dimensional competencies that resolve many
              small but vital business aspects. Hence these capabilities are
              now the most relevant to our enterprises.
            </p>

            <p>
              One cannot achieve the entire objective (five senses complete
              the experience aspect in us and still need supplementing parts
              to form the body). Similarly, A platform is the assimilation
              of capabilities chosen and matured to a level of requirement
              and then used to compile the envisioned solution or product.
            </p>


            {/* =================================================
                IMAGE 2 — PLATFORM METHODOLOGY
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/platform/platform-methodology.png"
                alt="Platform methodology"
                width={1024}
                height={600}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                PLATFORM DEVELOPMENT
            ================================================= */}

            <p>
              Every enterprise should feverishly work towards building an
              exclusive personalized platform that constitutes of all other
              four work design constituents.
            </p>

            <p>
              Capabilities have moved away from a concentrated architecture
              to a diversified and segmented progression that is universal.
              Many illustrations suitably depict the transition of strategy
              and vision, which is led by the industry, technology, and
              consumers.
            </p>


            {/* =================================================
                FOUR PLATFORM OBSERVATIONS
            ================================================= */}

            <ol>
              <li>
                Amazon-AWZ, GCP, AZURE, ServiceNow, LinkedIn, Workday,
                Salesforce are coveted illustrations in their respective
                areas of a complete platform in the making.
              </li>

              <li>
                Not only the technology but new versions of frameworks are
                also stressing on onboarding and involving all stakeholders
                to ensure a holistic approach. (ITIL V4, SCRUM, IT4IT 2.1)
              </li>

              <li>
                There are no more rigid boundaries between technologies to
                isolate themselves; on the contrary, adversaries are forging
                new relations to address unprecedented times or unparalleled
                solutions. (X + AWS, Y + Wipro HOLMES)
              </li>

              <li>
                AI platform, Automation platform, Data platform, Cloud
                platforms are now practically converging into a utilitarian
                platform.
              </li>
            </ol>


            <p>
              Capabilities are symbiotic moving parts of the system that
              generate constant value to every transaction.
            </p>


            {/* =================================================
                COMPREHENSIVENESS
            ================================================= */}

            <h2>Comprehensiveness</h2>

            <p>
              If you carefully observe, the innermost layer (People) and
              outermost layer (Partnership) relies on the human connection,
              which cannot be emulated by any other entity. All other
              constituents (Process, Platform {`{Technology}`}, Product)
              are virtual and abiotic, which can endure digitally.
            </p>

            <p>
              Comprehensiveness is a strategic perspective that involves
              organizational change management to start building a platform
              to hold the institution&apos;s future aspirations.
            </p>

            <p>
              This has a lot to do with the leadership and vision to begin
              this work of defining future scope, including new affairs,
              diversification, disruption to create new dimensions of an
              imagined enterprise.
            </p>

            <p>
              The intention should be to build a techno-platform that is
              future proof and accommodating to almost any component that
              can add value.
            </p>


            {/* =================================================
                IMAGE 3 — MANAGE CHANGE
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/platform/manage-change.png"
                alt="Managing change through the digital platform"
                width={1024}
                height={562}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                THREE ATTRIBUTES
            ================================================= */}

            <p>
              These three attributes are bound with each other, and
              incorporation of all is imperative to build a comprehensive
              platform.
            </p>

            <p>
              We need an assemblage of individuals with the right skill set,
              mindset, and toolset with roles like enterprise architects,
              methodology experts, product specialists, and business markets
              economists to contribute to the framework.
            </p>

            <p>
              The architects of this Platform should envision the new
              possibilities of the future, which can unite and add a new
              perspective.
            </p>


            <p>
              The entire technology ecosystem is segmented into capability,
              functions, products, systems, and components with different
              maturity levels to form a hybrid offering that addresses more
              than one complicated challenges.
            </p>


            {/* =================================================
                PAST VS PRESENT
            ================================================= */}

            <h2>
              From Technology to Platform
            </h2>

            <p>
              <strong>Not so long ago</strong>, we chose and defined human
              resources and technology capability by the level-hands
              experience. The technology was segmented, and resources had
              to pick and choose to build an identity in that one function,
              which was only possible only after few years and few
              certifications.
            </p>

            <p>
              <strong>Not so far away</strong> – Almost all technology
              offerings have transformed into a cluster that is looking not
              only at directly related sub-domains but adjacent and
              complementing areas to create one output, which is part of a
              platform where multiple constituents collaborate to fulfill
              the final aspiration and experience as per time.
            </p>


            {/* =================================================
                IMAGE 4
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/platform/the-digital-platform.png"
                alt="The digital platform"
                width={1024}
                height={445}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                CLOSING
            ================================================= */}

            <p>
              The focus is not on how to run or use the technology, but to
              repurpose and interpret the right fitment and experience is
              the prominent skill in today&apos;s world.
            </p>

            <p>
              THE PLATFORM is about associating with the next best,
              smartest, and distinct things to recreate value proposition.
              Every constituent&apos;s end goal is to reside on one single
              <strong> Business Transformation platform</strong>, which is
              perfectly aligned, thoughtfully placed, and balanced work
              design constituent to keep an organization&apos;s initiatives
              and purpose relevant.
            </p>


            {/* =================================================
                REFERENCES
            ================================================= */}

            <div className="blogArticleFooter">

              <div className="blogArticleFooterLine" />

              <p>
                Related references:
              </p>

              <ol>
                <li>
                  Arriving @ the – Digital FABRIC
                </li>

                <li>
                  Digital FABRIC – Outlining Intricacies
                </li>

                <li>
                  Digital Fabric – The people: Being Digital and not Doing
                  Digital
                </li>

                <li>
                  Digital Fabric: The Process – It is all about PEOPLE &
                  PROCESS
                </li>
              </ol>

            </div>


            {/* =================================================
                PREVIOUS / NEXT
            ================================================= */}

            <div className="blogPostNavigation">

              <Link href="/blog/the-process">
                <span>←</span>
                <strong>Previous Post</strong>
              </Link>

              <Link href="/blog/the-ti-framework">
                <strong>Next Post</strong>
                <span>→</span>
              </Link>

            </div>


            {/* =================================================
                REPLY
            ================================================= */}

            <div className="blogReply">
              <h3>Leave a Reply</h3>

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

          {/* SEARCH */}

          <section className="blogSidebarBlock">
            <h3>Search</h3>

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


          {/* CATEGORIES */}

          <section className="blogSidebarBlock">

            <h3>Categories</h3>

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


          {/* RECENT POST */}

          <section className="blogSidebarBlock">

            <h3>Recent post</h3>

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


          {/* THE IDEOLOGY */}

          <section className="blogSidebarBlock">

            <h3>The Ideology</h3>

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


          {/* TAGS */}

          <section className="blogSidebarBlock">

            <h3>Tags</h3>

            <div className="blogTags">
              <span>Platform</span>
              <span>Technology</span>
              <span>Digital</span>
              <span>Transformation</span>
            </div>

          </section>

        </aside>

      </div>
    </section>
  );
}