import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import "./KnowledgeShareCategories.css";

type CategoryCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  className: string;
};

const categories: CategoryCard[] = [
  {
    id: "transformation",
    title: "Transformation",
    description:
      "Transformation is a self-initiating continuous process that redesigns an entire persona of core business.",
    image: "/images/knowledge-share/transformation.png",
    href: "/knowledge-share/enterprises-transformation",   
    className: "knowledgeCategoryCard--large",
  },

  {
    id: "ai-automation",
    title: "Intelligent Automation",
    description:
      "Already....... Paradigms have changed. Expectations have evolved, and technology has progressed.",
    image: "/images/knowledge-share/ai-automation.jpg",
     href: "/knowledge-share/enterprises-transformation#ai-automation",
    className: "knowledgeCategoryCard--wide",
  },

  {
    id: "new-age-tech",
    title: "New Age Tech",
    description:
      "It is important to understand the technology in the right perspective. It is necessary to study the core nature of how and why technology is scaled out in a certain way.",
    image: "/images/knowledge-share/new-age-tech.jpg",
   href: "/knowledge-share/new-age-tech", 
    className: "knowledgeCategoryCard--small",
  },

  {
    id: "it-governance-",
    title: "IT Governance",
    description:
      "Abstraction of enterprise service management has changed from a technology-centric and workflow-oriented concept to a comprehensive value-driven and growth accelerator theme.",
    image: "/images/knowledge-share/it-governance.png",
      href: "/knowledge-share/enterprises-transformation#it-governance",
    className: "knowledgeCategoryCard--small",
  },
];


/* =========================================================
   CATEGORY CARD
========================================================= */

function KnowledgeCategoryCard({
  card,
}: {
  card: CategoryCard;
}) {
  return (
    <article
      className={`knowledgeCategoryCard ${card.className}`}
    >
      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <img
        src={card.image}
        alt=""
        className="knowledgeCategoryImage"
      />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="knowledgeCategoryContent">

        <h3>
          {card.title}
        </h3>


        <p>
          {card.description}
        </p>


        {/* =================================================
            READ MORE
        ================================================= */}

        <Link
          href={card.href}
          className="knowledgeCategoryLink"
        >
          <span>
            Read More
          </span>

          <span
            className="knowledgeCategoryArrow"
            aria-hidden="true"
          >
            <FiChevronRight />
          </span>
        </Link>

      </div>
    </article>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function KnowledgeShareCategories() {
  const transformation =
    categories.find(
      (item) => item.id === "transformation"
    )!;

  const aiAutomation =
    categories.find(
      (item) => item.id === "ai-automation"
    )!;

  const newAgeTech =
    categories.find(
      (item) => item.id === "new-age-tech"
    )!;

  const itGovernance =
    categories.find(
      id: "it-governance",
      
    )!;

  return (
    <section
      className="knowledgeCategorySection"
      aria-label="Knowledge Share Categories"
    >
      {/* =================================================
          SHARED CONTAINER
      ================================================= */}

      <div className="site-container site-container-small">

        <div className="knowledgeCategoryGrid">

          {/* =================================================
              LEFT — TRANSFORMATION
          ================================================= */}

          <KnowledgeCategoryCard
            card={transformation}
          />


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="knowledgeCategoryRight">

            {/* =================================================
                TOP — AI & AUTOMATION
            ================================================= */}

            <KnowledgeCategoryCard
              card={aiAutomation}
            />


            {/* =================================================
                BOTTOM ROW
            ================================================= */}

            <div className="knowledgeCategoryBottom">

              <KnowledgeCategoryCard
                card={newAgeTech}
              />

              <KnowledgeCategoryCard
                card={itGovernance}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}