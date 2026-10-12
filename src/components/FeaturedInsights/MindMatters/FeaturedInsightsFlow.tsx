"use client";

import { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiZoomIn,
} from "react-icons/fi";

import "./FeaturedInsightsFlow.css";

/* =========================================================
   TYPES
========================================================= */

interface InsightBlock {
  id: string;
  theme: "light" | "blue";
  reverse?: boolean;
  title: string;
  descriptions: string[];
  image: string;
  imageAlt: string;
}

interface FeaturedInsightsFlowProps {
  blocks?: InsightBlock[];
}


/* =========================================================
   FEATURED INSIGHTS CONTENT
========================================================= */

const defaultBlocks: InsightBlock[] = [

  /* =====================================================
     NEW AGE FRAMEWORKS
  ===================================================== */

  {
    id: "new-age-frameworks",
    theme: "light",
    reverse: false,

    title: "New Age Frameworks",

    descriptions: [
      "The evolution of frameworks and practices is driven by the level of realization, resolution, and restoration of balance to maintain a thriving environment. The indications focus on quintessential attributes in every dimension, from professional to personal and psychological.",

      "Including new Stakeholders like employees, government bodies, investors, and specialized agencies assembled by world organizations in building a conscious and aware enterprise is the way forward. Time TO Realign",
    ],

    image: "/images/insights/new-age-frameworks.svg",
    imageAlt: "New Age Frameworks",
  },


  /* =====================================================
     LIFE OF WORK
  ===================================================== */

  {
    id: "life-of-work",
    theme: "blue",
    reverse: true,

    title: "Life of Work ™",

    descriptions: [
      "The work and life have a new definition, or should I say, needs a new one. The reconfigured methods architecture of executing and delivering value has not only challenged us but also the technology to adjust and up the game. Looks like this is a good discussion to have. The future of work, life, enterprise, technology... and so on. Do you think answering the questions below is simple? – Try it. My point – Which bucket does viewing this post fall into?",
    ],

    image: "/images/insights/life-of-work.svg",
    imageAlt: "Life of Work",
  },


  /* =====================================================
     AUTOMATION
  ===================================================== */

  {
    id: "automation",
    theme: "blue",
    reverse: false,

    title: "Automation",

    descriptions: [
      "Like – with great power comes great responsibilities…… <br/>Value : Serice Automation <br/> Volume: Process Automation",

      "Value : Service Automation",

      "Volume : Process Automation ",
    ],

    image: "/images/insights/automation-mindset.svg",
    imageAlt: "Automation",
  },


  /* =====================================================
     MINDSET MATTERS
  ===================================================== */

  {
    id: "mindset-matters",
    theme: "light",
    reverse: true,

    title: "MindMatters™",

    descriptions: [
      "Try looking at this infographic through a personal lens. Workplace = Home I Workforce = Family I Workflow = Routine I Workware = Set of practices and the corresponding expectations and related feelings. Fortunately, this is also our professional work design architecture encompassing people, processes, platforms, and partnerships.",

      "This takes us back to the question DEFINE WORK? – DEFINE LIFE? In my opinion, if we normalize the compensation expectation out of both life and work, these two terms won’t seem so different at all..",
    ],

    image: "/images/insights/mindset-matters.svg",
    imageAlt: "Mindset Matters",
  },


  /* =====================================================
     ART OF LEARNING
  ===================================================== */

  {
    id: "art-of-learning",
    theme: "light",
    reverse: false,

    title: "The Art of Learning",

    descriptions: [
      "Learning to Survive Vs. Learning to Thrive The ART OF TEACHING is more pragmatic and effective in animals and us Humans. The parent (Teacher) does not get to choose a student but extends the same teaching with variations and modifications as per the child’s nature and learning ability. We all have noticed the spotlight on LEARNING these days. No matter what, everyone is learning …Machine learning, Human Learning.",

      "Digital experience transformation has accelerated the relevance, application, and potential of LEARNING. Machines and humans stressing on ready to learn new skills have suddenly surged the importance of TEACHING or should I say CURATING. The classrooms’ dimensions have changed, and so has the definition of machines. However, the uncertainties in both Machine Learning & human learning are the same and can influence the outcome.",

      "(The efficacy of data/content: The ability to compute/consume and so on) LEARN FROM DATA & TEACH THE MACHINES are the most favorite expectations from the emerging capabilities. Now the time emphasizes the ART OF LEARNING ….. Everybody/thing is the source, and Everybody/thing is the Target.",
    ],

    image: "/images/insights/art-of-learning.svg",
    imageAlt: "The Art of Learning",
  },


  /* =====================================================
     DESIGN THINKING
  ===================================================== */

  {
    id: "design-thinking",
    theme: "blue",
    reverse: true,

    title: "The philosophy of design thinking for design solution.",

    descriptions: [
      "The design thinking process highlights the moments of truth, experience points, and interactional methods to deep-dive into the core process. In many cases, to your surprise, the solution might not or need not be part of this entire process identified during this exercise. Let’s perceive for an instance that design thinking is a mature version of problem management with a perspective where distinguishing a challenge is multidirectional and probabilistic. Consequently, the same set of parameter values and initial conditions might lead to a group of different outputs.",

      "This gets us to a thoughtful discussion of collective thinking and collaborative thinking, where the outputs are exclusive but are an integral part of solution definition. So, the big question: By increasing the span of thinking, can we improve the efficacy of the solution?",
    ],

    image: "/images/insights/design-thinking.svg",
    imageAlt: "Design Thinking",
  },


  /* =====================================================
     DIGITAL TRANSFORMATION / SCALE
  ===================================================== */

  {
    id: "digital-transformation",
    theme: "blue",
    reverse: false,

    title:
      "Enterprises talk about SCALE at large and very ambitiously, but seldom accomplished.",

    descriptions: [
      "Why? Choosing a starting point for scale initiative is very distracting. There are numerous real-time triggers like customer demands, business objectives, & Ops challenges. Which one to pick first is perplexing. This is similar to the service stabilization or improvement program and nothing close to SCALE. What? Building an enterprise process catalog is the foundational activity to aspire scale.",

      "Process segmentation (division into separate parts), and categorization (Grouping) will help you consolidate the processes with similar characteristics, actions, and outcomes to start building the corresponding MVPr (Minimum Viable Process).",

      "Building an enterprise process catalog is the foundational activity to aspire scale. Process segmentation (division into separate parts), and categorization (Grouping) will help you consolidate the processes with similar characteristics, actions, and outcomes to start building the corresponding MVPr (Minimum Viable Process).",

      "How? First, aggregate the processes to arrive at an MVPr. Then map comparable yet federated processes across other functions to the MVPr. This helps fast-track replication of the process or a part of it across every opportunity to save a significant portion of the time, effort, and investment.",

      "Multiplying the value achieved from the one-time effort. Scaling is about repurposing a one-time effort and extending that practice across the ecosystem by finding a fitment for that effort to enable other similar processes.",
    ],

    image: "/images/insights/scaling.svg",
    imageAlt: "Digital Transformation",
  },


  /* =====================================================
     CHANGE MANAGEMENT
  ===================================================== */

  {
    id: "change-management",
    theme: "light",
    reverse: true,

    title:
      "Technology change mgmt. – behavioral change mgmt. and organizational change mgmt. builds business resiliency.",

    descriptions: [
      "Change management is all about execution and the art of initiating deliberate change. Integrating systems and processes at every possible opportunity will increase transparency and enhance the efficacy of activities. We have transferred the risk of human error to the tools/systems, but there is still a need for constant caution. Management Change is around the leadership models and organizational structures we build to manage the work concept, including people, performance, and outcomes. A new and fresh perspective to the Management should empower resources to think, not just act and execute. Reward failure that promotes fearless and open innovation.",

      "Managing change is where the transformation initiatives are of a larger magnitude, touching almost every team, technique, and technology in the ecosystem. The leaders with such crucial responsibility should balance the emotional and technical facets. What matters is building a culture and nurturing our workforce. “Data” will show the direction, and “skill” is how we will achieve the objective.",
    ],

    image: "/images/insights/change-management.svg",
    imageAlt: "Change Management",
  },


  /* =====================================================
     ASKING QUESTIONS
  ===================================================== */

  {
    id: "asking-questions",
    theme: "light",
    reverse: false,

    title:
      "The lost or forgotten art of asking questions or the right questions for the right objective.",

    descriptions: [
      "Asking the right questions – to the right subject – at the right time – for the right action has multifarious consecutive outcomes. I have just quoted a few, but you can add additional variables. This is now acknowledged as a crucial skill and need of the time.",

      "Management change AI is based on the core foundation of asking the right question for which we are assembling all other components like data, algorithm, technique, and so on …. for an insight. We are rushing into finding the answers without understanding the question or its efficacy to the cause. Finding the answer to a misunderstood or misinterpreted question is the same as not having the answer but more questions. Do take a conscious effort in building the right set of questions (usually which are the simplest ones) to fulfill your business, technology, and social objectives.",
    ],

    image: "/images/insights/asking-questions.svg",
    imageAlt: "Asking Questions",
  },


  /* =====================================================
     CONTENT IMPACT
  ===================================================== */

  {
    id: "content-impact",
    theme: "blue",
    reverse: true,

    title:
      "Content has and always been the focal point of impact.",

    descriptions: [
      "Until we witnessed all the mediums and modes converging to one ubiquitous platform that hosts the same digital nature of data but with different types.",

      "A simple illustration of how I look at the logical relation of why, How, and what of the content to the segments that exist. I am not reserving any thoughts or locking the idea. This could be a very high-level intent mapping of what should be the takeaway for the end audience. What do you think?",
    ],

    image: "/images/insights/content-strategy.svg",
    imageAlt: "Content Impact",
  },


  /* =====================================================
     WORD AUTOMATION
  ===================================================== */

  {
    id: "word-automation",
    theme: "blue",
    reverse: false,

    title:
      "Word auto-mation – “Mation” is not a word in the English dictionary. In the first place, “Motion” made more sense and was more relevant.",

    descriptions: [
      "It is interesting to note that sometimes words transform and still don’t mean much, but the significance of a word when related to technology is business-changing.",
    ],

    image: "/images/insights/auto-auto.svg",
    imageAlt: "Word Automation",
  },


  /* =====================================================
     DESIGN CONSULTING
  ===================================================== */

  {
    id: "design-consulting",
    theme: "blue",
    reverse: true,

    title: "Design consulting",

    descriptions: [
      "The unilateral view (Impact – Risk – Cost) to a Bilateral view (Resiliency – Sustainability – Optimization). Every process carries specific accountability and performance constituent, which define the process efficacy and reliability. Here are the principal evaluators of a process that grants an opportunity to redesign the process in a new format. Cost of Process Execution – Emphasizes Productivity and efficiency of processing one transaction and the relative benefit for both parties (Service provider – Service consumer) Risk of Process Non-adherence – stresses the mandatory activities that are crucial and may cause an adverse consequence on the compliance, information, policy, and regulatory aspects. Impact of Process Disruption – relates to the inadequacy to complete a commitment that might act as a setback on brand reputation, customer loyalty, and commercial aspect.",

      "The unilateral view (Impact – Risk – Cost) to a Bilateral view (Resiliency – Sustainability – Optimization). Every process carries specific accountability and performance constituent, which define the process efficacy and reliability. Here are the principal evaluators of a process that grants an opportunity to redesign the process in a new format.",
    ],

    image: "/images/insights/design-consulting.svg",
    imageAlt: "Design Consulting",
  },
];


/* =========================================================
   RENDER DESCRIPTION WITH BR SUPPORT
========================================================= */

function DescriptionWithBreaks({
  text,
}: {
  text: string;
}) {
  const parts = text.split(/<br\s*\/?>/gi);

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && <br />}
          {part}
        </span>
      ))}
    </>
  );
}


/* =========================================================
   COMPONENT
========================================================= */

export default function FeaturedInsightsFlow({
  blocks = defaultBlocks,
}: FeaturedInsightsFlowProps) {
  const [activeSlides, setActiveSlides] = useState<
    Record<string, number>
  >(() =>
    blocks.reduce<Record<string, number>>(
      (result, block) => {
        result[block.id] = 0;
        return result;
      },
      {}
    )
  );


  /* =======================================================
     ZOOMED IMAGE
  ======================================================= */

  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);


  /* =======================================================
     KEEP ACTIVE SLIDE VALID
  ======================================================= */

  useEffect(() => {
    setActiveSlides((current) => {
      const next = { ...current };

      blocks.forEach((block) => {
        const total = block.descriptions.length;

        if (total === 0) {
          next[block.id] = 0;
          return;
        }

        if (
          next[block.id] === undefined ||
          next[block.id] >= total
        ) {
          next[block.id] = 0;
        }
      });

      return next;
    });
  }, [blocks]);


  /* =======================================================
     CLOSE ZOOM WITH ESCAPE
  ======================================================= */

  useEffect(() => {
    if (!zoomedImage) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setZoomedImage(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [zoomedImage]);


  /* =======================================================
     MANUAL SLIDE CHANGE
  ======================================================= */

  const changeSlide = (
    block: InsightBlock,
    direction: number
  ) => {
    const total = block.descriptions.length;

    if (total <= 1) {
      return;
    }

    const current =
      activeSlides[block.id] ?? 0;

    const next =
      (current + direction + total) % total;

    setActiveSlides((state) => ({
      ...state,
      [block.id]: next,
    }));
  };


  /* =======================================================
     OPEN IMAGE ZOOM
  ======================================================= */

  const openImageZoom = (
    image: string,
    imageAlt: string
  ) => {
    setZoomedImage({
      src: image,
      alt: imageAlt,
    });
  };


  /* =======================================================
     CLOSE IMAGE ZOOM
  ======================================================= */

  const closeImageZoom = () => {
    setZoomedImage(null);
  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      className="featured-insights-flow-section"
      aria-label="Featured Insights"
    >
      <div className="featured-insights-flow-container">

        {blocks.map((block) => {
          const activeIndex =
            activeSlides[block.id] ?? 0;

          const description =
            block.descriptions[activeIndex];

          const hasCarousel =
            block.descriptions.length > 1;

          if (!description) {
            return null;
          }

          return (
            <article
              key={block.id}
              className={`
                featured-insights-flow-block
                ${block.reverse ? "is-reverse" : ""}
                ${
                  block.theme === "blue"
                    ? "is-blue"
                    : "is-light"
                }
                ${
                  hasCarousel
                    ? "has-carousel"
                    : "is-static"
                }
              `}
            >

              {/* =================================================
                  CONTENT PANEL
              ================================================= */}

              <div className="featured-insights-flow-panel">

                <div className="featured-insights-flow-panel-inner">

                  <h2>
                    {block.title}
                  </h2>


                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <div className="featured-insights-flow-description-wrap">

                    <p
                      key={`${block.id}-${activeIndex}`}
                      className="featured-insights-flow-description"
                    >
                      <DescriptionWithBreaks
                        text={description}
                      />
                    </p>

                  </div>


                  {/* =================================================
                      CHEVRON CONTROLS
                  ================================================= */}

                  {hasCarousel && (
                    <div
                      className="featured-insights-flow-controls"
                      aria-label={`${block.title} navigation`}
                    >

                      <button
                        type="button"
                        className="featured-insights-flow-chevron"
                        onClick={() =>
                          changeSlide(block, -1)
                        }
                        aria-label={`Previous ${block.title} content`}
                      >
                        <FiChevronLeft />
                      </button>


                      <button
                        type="button"
                        className="featured-insights-flow-chevron"
                        onClick={() =>
                          changeSlide(block, 1)
                        }
                        aria-label={`Next ${block.title} content`}
                      >
                        <FiChevronRight />
                      </button>

                    </div>
                  )}

                </div>

              </div>


              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="featured-insights-flow-image"
                role="button"
                tabIndex={0}
                onClick={() =>
                  openImageZoom(
                    block.image,
                    block.imageAlt
                  )
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();

                    openImageZoom(
                      block.image,
                      block.imageAlt
                    );
                  }
                }}
                aria-label={`Zoom ${block.imageAlt}`}
              >

                <img
                  src={block.image}
                  alt={block.imageAlt}
                />


                {/* =================================================
                    ZOOM LABEL
                ================================================= */}

                <span className="featured-insights-flow-zoom-label">
                  <FiZoomIn />
                  <span>Zoom</span>
                </span>

              </div>

            </article>
          );
        })}

      </div>


      {/* =========================================================
          FULLSCREEN IMAGE LIGHTBOX
      ========================================================= */}

      {zoomedImage && (
        <div
          className="featured-insights-flow-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Zoomed image: ${zoomedImage.alt}`}
          onClick={closeImageZoom}
        >

          <button
            type="button"
            className="featured-insights-flow-lightbox-close"
            onClick={closeImageZoom}
            aria-label="Close image zoom"
          >
            <FiX />
          </button>


          <div
            className="featured-insights-flow-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
            />
          </div>

        </div>
      )}

    </section>
  );
}