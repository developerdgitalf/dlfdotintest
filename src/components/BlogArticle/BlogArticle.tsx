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
              src="/images/blog/DF-People.png"
              alt="The People"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 820px"
            />

            <div className="blogHeroOverlay">
              <span> PEOPLE </span>
            </div>
          </div>


          {/* =================================================
              ARTICLE META
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
              THE PEOPLE
            </span>

            <h1>
              Culture – Value – Purpose
            </h1>

          </header>


          {/* =================================================
              ARTICLE CONTENT
          ================================================= */}

          <div className="blogArticleContent">

            <p>
              We are the creators of technology and will always be the
              father of new engineering concepts. At the same time, we
              have witnessed the technological evolution which has pushed
              the “People” component to its limits to evolve and outgrow
              the situation and stay relevant. The entire Digital Fabric
              structure&apos;s nucleus is secured by people who govern,
              direct and execute on all the other encompassing layers.
              Incertitude about technology is valid to an extent, but in
              the end, we have to span sideways to increase the familiarity
              and overcome this anxiety.
            </p>


            {/* =================================================
                THE PEOPLE IMAGE
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/the-people.png"
                alt="The PEOPLE"
                width={1024}
                height={856}
                sizes="(max-width: 900px) 100vw, 820px"
              />

              <figcaption>
                The PEOPLE
              </figcaption>
            </figure>


            <h2>The PEOPLE</h2>

            <p>
              We have to reprise the overall people&apos;s development
              and readiness for this long-spanning digital age.
            </p>


            {/* =================================================
                HIGHLIGHT QUOTE
            ================================================= */}

            <blockquote className="blogHighlight">
              <strong>Focus on our attributional biases</strong> is required
              to prepare ourselves. This is the time to embrace the paradigm
              shift and stay relevant for tomorrows approaching digital era.
            </blockquote>


            <p>
              I will emphasize the role and direction that we should choose
              and lead.
            </p>

            <p>
              Due to the hype and appreciated concentration of focus on the
              emerging technologies and specifically in the artificial
              intelligence (AI) domain, This has created a void in the human
              interpersonal aspect.
            </p>

            <p>
              The changing kinetics of the external forces drive the
              response attribute to be a level deeper in the human sentiment.
              There is a need to be prepared when there will be unacknowledged
              hostilities between humans and technology. We have to keep up
              with the pace of inclusivity and universality to nurture the
              following proficiencies to deal with technology deficit stress
              and deficiency.
            </p>

            <p>
              These skills will build us resilient and singular in
              characteristics to wield the ever growing the technology span.
            </p>


            {/* =================================================
                SEGMENTING INTELLIGENCE IMAGE
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/segmenting-intelligence.png"
                alt="Segmenting Intelligence"
                width={1024}
                height={732}
                sizes="(max-width: 900px) 100vw, 820px"
              />

              <figcaption>
                Segmenting Intelligence
              </figcaption>
            </figure>


            <p>
              Every aspect of work design constituent has an intelligence
              quotient as the human aspect is the driving force. Various
              sectors have generated new talents, roles, and skill sets that
              were absent a decade before. This is going to evolve even
              further, and we have to adapt to the future rushing state.
            </p>


            {/* =================================================
                INTELLIGENCE SECTIONS
            ================================================= */}

            <div className="blogIntelligenceList">

              <section className="blogIntelligenceItem">
                <h3>Data intelligence</h3>

                <p>
                  Upskilling to work with data and analyzing the data from
                  a perspective to see the implications, causes, and
                  foresight that one can describe. This does not need any
                  of the technical skills, just an interpretation,
                  translational, and critical thinking to pursue a solution
                  framework. I am pointing towards the idea of deriving
                  insights based on the result presented by an ML/Analytics
                  models.
                </p>
              </section>


              <section className="blogIntelligenceItem">
                <h3>Emotional intelligence</h3>

                <p>
                  Dealing sensitively with complex situations when there
                  are critical relations involved with employer, customers,
                  stakeholders, teams, groups, and individuals. This also
                  enables self-positioning in various socio-economic
                  situations to lead consciously, safeguarding every
                  entity&apos;s interest and benefit. Personal development
                  and upskilling curve where one usually gets ambiguous,
                  trained leaders can assist with proper guidance and
                  motivation.
                </p>
              </section>


              <section className="blogIntelligenceItem">
                <h3>Behavioral Intelligence</h3>

                <p>
                  Ability to conduct successful social interaction with
                  networks, collaboration abilities, and tactics of engaging
                  with stakeholders and partners to steer the conversations
                  and professional relations to an advantage. Especially in
                  the era of crowdsourcing where we are building ecosystems
                  and not habitats to create credible relational equity.
                  This is about managing other peoples/groups&apos; emotions
                  and tuning your own to complement this approach.
                </p>
              </section>


              <section className="blogIntelligenceItem">
                <h3>Promotional intelligence</h3>

                <p>
                  Understanding the markets, products, behavioral patterns
                  by qualitative exploration, and research. Product
                  management also has an aspect Sensitive to the
                  interactions and hearing what markets, customers are not
                  saying. Social awareness and self-awareness will place
                  you in a beneficial position to study the business
                  landscape and craft a winning strategy.
                </p>
              </section>

            </div>


            {/* =================================================
                ORGANIZATIONAL BEHAVIOUR
            ================================================= */}

            <h2>Organizational Behaviour</h2>

            <p>
              Organizational Behaviour as a knowledge domain was never so
              relevant and necessary. We should start delving into the
              fundamentals&apos; functional and instrumental aspects to
              achieve the above state of the self-actualized resource
              community.
            </p>


            {/* =================================================
                CORPORATE EDUCATION
            ================================================= */}

            <h2>Corporate Education</h2>

            <p>
              Corporate Education should build a curriculum to address all
              the above aspects regularly requested by the leaders and
              required by businesses. The skill gap is identified, but many
              virtual and focused education products in the market are
              failing to address the underlying cause. Global L&amp;D
              initiative is falling short against the backdrop of these
              multi-faceted technology skills. I believe that a human
              personal, educational environment with your peers is needed
              to experience the emotional, behavioral aspect during
              interactions.
            </p>


            {/* =================================================
                PEOPLE MANAGEMENT
            ================================================= */}

            <h2>People Management</h2>

            <p>
              People management has drastically changed from what it was
              2 decades ago to the present date. Expectations are very high
              and fragile when it comes to dealing with the present
              generation&apos;s aspirations. Nowadays a cross-evaluation
              is already in progress between the employee and employer and
              both take the culture &amp; value very seriously.
            </p>


            {/* =================================================
                CULTURE AND VALUES
            ================================================= */}

            <h2>Culture and Values</h2>

            <p className="blogLeadStatement">
              Culture and Values: There is more to these words when we use
              them in our conversation.
            </p>


            <figure className="blogContentFigure">
              <Image
                src="/images/blog/culture-values.png"
                alt="Culture and Values"
                width={1024}
                height={547}
                sizes="(max-width: 900px) 100vw, 820px"
              />

              <figcaption>
                Culture and Values
              </figcaption>
            </figure>


            <p>
              We should be conversant about the fact that these skills that
              we are instilling are for these to propagate and for the future
              ages. The demand for digitally-human skill cross-pollination
              is the state of the future.
            </p>

            <p>
              The operating technology is going to self-package itself and
              institutionalize in the ecosystem as a module with the call to
              action function. There will be less and less of learning the
              technology and a more in-depth understanding of dividends,
              applications, and impact on the ecosystem.
            </p>


            {/* =================================================
                FINAL STATEMENT
            ================================================= */}

            <blockquote className="blogFinalStatement">
              People are and will be the single most valuable entity in this
              technology revolution.
            </blockquote>


            {/* =================================================
                PREVIOUS / NEXT
            ================================================= */}

            <div className="blogPostNavigation">

              <Link href="/blog/outlining-intricacies">
                <span>←</span>
                <strong>Previous Post</strong>
              </Link>

              <Link href="/blog/the-process">
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
                    {category.name}
                    <span>({category.count})</span>
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
              <span>People</span>
              <span>Culture</span>
              <span>Digital</span>
              <span>Transformation</span>
            </div>
          </section>

        </aside>

      </div>
    </section>
  );
}