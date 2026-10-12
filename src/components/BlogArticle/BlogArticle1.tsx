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
              src="/images/blog/process/DF-Process.png"
              alt="The Process"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 820px"
            />

            <div className="blogHeroOverlay">
              <span>PROCESS</span>
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
              THE PROCESS
            </span>

            <h1>
              THE PROCESS
            </h1>

          </header>


          {/* =================================================
              ARTICLE CONTENT
          ================================================= */}

          <div className="blogArticleContent">

            {/* INTRODUCTION */}

            <p>
              Our entire, exclusive, and inclusive business ecosystem is a
              mesh of actions, reactions, interpretations, and conclusions
              that operates in a determined sequence called <strong>PROCESS</strong>.
            </p>

            <p>
              Processes connect every human and machine dimension of our
              enterprise. It is the central nervous system that carries and
              mobilize the <strong>information</strong> in the defined direction.
              Everything in the technology landscape is serving the process of
              <strong> capturing, storing, mapping, relating, and presenting</strong>.
              Again a perfect example of Digital transformation put to work
              at its full capacity.
            </p>


            {/* =================================================
                IMAGE 1
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/process/the-people.png"
                alt="Digital transformation process framework"
                width={1024}
                height={856}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            <p>
              In my view, DIGITAL TRANSFORMATION begins concurrently from
              both the ends of a straight line that represents a business
              entity.
            </p>


            <ul>
              <li>
                One end # External – WHO: Endusers-Customers ~ The
                beneficiaries (Value recipient)
              </li>

              <li>
                Other end # Internal – HOW: Business-support-technology
                processes ~ The Method (Value generation)
              </li>
            </ul>


            {/* =================================================
                PROCESS EVOLUTION
            ================================================= */}

            <p>
              Processes were physically dependent on people to execute
              specific actions based on business requirements developed by
              constant training and exercising. Eventually, the success
              factors were reliant on the intellect and intent of the
              individual executing these instructions.
            </p>

            <p>
              <strong>Now the processes are</strong> embedded into the
              systems (tool), which digitally guides you to perform the
              corresponding actions and prompts your intervention. Process
              experts are more and more involved in the development and
              designing of the process flow.
            </p>

            <p>
              We are foreseeing, if not already happening, components and
              modules for every process with configured metrics, computable
              SLA/OLA, and alert during every critical action.
            </p>


            {/* =================================================
                OPTIMIZATION
            ================================================= */}

            <p>
              Ultimately, all processes will be optimized as per the
              industry best practices, accepted response thresholds,
              service agreements, approved performance levels and tested
              business rules.
            </p>

            <p>
              We have enough data and established frameworks being followed
              across industries. This will lead to the standardization of
              almost all processes with automation as a critical lever to
              gradually transfer homogenous actions and engaging AI
              capabilities to handle the decision making powered by
              Analytics for inferencing and presenting the insights with a
              minimal human intrusion.
            </p>


            {/* =================================================
                PROCESS SEGMENTATION
            ================================================= */}

            <p>
              Most organizations should start with{" "}
              <strong>
                “Enterprise process segmentation”
              </strong>{" "}
              and{" "}
              <strong>
                “General Process segmentation”
              </strong>{" "}
              to begin the process transformation. This gives transparency
              in denoting the core characteristics to remodel the processes.
              This segmentation should already exist in the process catalog
              with objective attributes.
            </p>


            {/* =================================================
                IMAGE 2
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/process/segmentations.png"
                alt="Process segmentation"
                width={1024}
                height={456}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                HIGHLIGHT
            ================================================= */}

            <blockquote className="blogHighlight">
              This segmentation will help you calibrate your approach to
              build a realistic business case to start the process
              transformation. Every Organization holds or must hold a
              process catalog.
            </blockquote>


            {/* =================================================
                IMAGE 3
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/process/process-assessment.png"
                alt="Process assessment"
                width={1024}
                height={647}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                BUSINESS CASE
            ================================================= */}

            <p>
              The business case formulation will present an opportunity to
              simplify the processes to the highest level of relevance and
              amplifying the output without compromising accuracy.
            </p>

            <p>
              This simplified version of the process can be replicated in
              various functions and departments. This can improve the
              automation quality and velocity to realize faster benefits.
            </p>


            {/* =================================================
                IMAGE 4
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/process/simplify-amplify-multiply.png"
                alt="Simplify amplify multiply"
                width={1100}
                height={700}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                PROCESS DISCOVERY
            ================================================= */}

            <p>
              <strong>Process discovery – process mining</strong> is
              preferred in today&apos;s environment as it has matured.
              We have different versions for several purposes as a standard
              step before introducing automation/AI capabilities.
            </p>

            <p>
              These solutions play an essential role but address various
              aspects that I would like to highlight and then decide which
              is best to fill in the gap. One has to be very clear on how
              you will plan the usage, application, and relevance of these
              process information gathering solutions.
            </p>

            <p>
              Presently we have solutions that are encompassing a little
              of all or at least the majority functionalities. One has to
              choose from options like process capture, simulation, and
              evaluation platforms with discretion as you are not going to
              solve all your problems with one tool.
            </p>

            <p>
              And you do not want to end up having all of them with minimal
              use adding to a lofty expenditure and unmet ROI. Not to
              forget, all these various platforms have particular trained
              &amp; certified skillset requirements, which you will have to
              factor in when considering.
            </p>


            {/* =================================================
                IMAGE 5
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/process/process-discovery-mining.png"
                alt="Process discovery and process mining"
                width={1024}
                height={537}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                DIGITAL LEADER
            ================================================= */}

            <h2>
              A conclusive move for a Digital Leader
            </h2>

            <p>
              Every process carries specific accountability and performance
              constituent, which define the process efficacy and reliability.
              Here are the principal evaluators of a process that grants an
              opportunity to redesign the process in a new format.
            </p>


            {/* =================================================
                PROCESS EVALUATORS
            ================================================= */}

            <ul>
              <li>
                <strong>Cost of Process execution</strong> – emphasizes on
                Productivity and efficiency of processing one transaction
                and the relative value that it consumes to complete the
                iteration.
              </li>

              <li>
                <strong>Risk of a Process non-adherence</strong> – stresses
                on the mandatory activities that are crucial and may cause
                an adverse consequence on the compliance, information,
                policy, and regulatory aspects.
              </li>

              <li>
                <strong>Impact of the process disruption</strong> – relates
                to the inadequacy to complete a commitment that might act
                as a setback on brand reputation, customer loyalty, and
                commercial aspect.
              </li>
            </ul>


            <p>
              Cost of Process execution
            </p>

            <p>
              Risk of a Process non-adherence
            </p>

            <p>
              and Impact of the process disruption
            </p>


            {/* =================================================
                IMAGE 6
            ================================================= */}

            <figure className="blogContentFigure">
              <Image
                src="/images/blog/process/process-efficacy-reliability.png"
                alt="Process efficacy and reliability"
                width={1024}
                height={490}
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>


            {/* =================================================
                FINAL SECTIONS
            ================================================= */}

            <p>
              The three most critical place holders to prioritize high
              value and high impact processes to build service resiliency,
              uncompromised user experience, and business continuity.
            </p>

            <p>
              Suddenly the human aspect has gained prominence as the
              equation and relation of us (Humans) with technology have
              evolved from operator to disruptor. It is the skill that
              drives the technology, and talent lies with the people with
              a clarified-sanitized process.
            </p>

            <p>
              Technology has become the least common multiple of the entire
              living and non-living strata. Businesses, customers,
              technology partners, and consumers thrive through hyper
              collaboration and connected experiences due to integrated
              processes.
            </p>


            {/* =================================================
                FINAL QUOTE
            ================================================= */}

            <blockquote className="blogFinalStatement">
              The technology was an enabler decades ago. Then, it managed
              to become an Integrator a few years ago, and now it is the
              <strong> accelerator to transform expectations.</strong>
            </blockquote>


            {/* =================================================
                PREVIOUS / NEXT
            ================================================= */}

            <div className="blogPostNavigation">

              <Link href="/blog/the-people">
                <span>←</span>
                <strong>Previous Post</strong>
              </Link>

              <Link href="/blog/the-platform">
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
              <span>Process</span>
              <span>Digital</span>
              <span>Transformation</span>
              <span>Technology</span>
            </div>
          </section>

        </aside>

      </div>
    </section>
  );
}