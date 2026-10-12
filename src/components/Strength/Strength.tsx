"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

import styles from "./Strength.module.css";

const expertiseCards = [
  {
    title: "Enterprise Governance & Business Management",
    description:
      "Formulating business strategy, CXO Advisory, and Digital business transformation initiatives. Guidance on formalizing, operationalizing and institutionalizing the technology.",
    image: "/images/expertise-governance.png",
    link: "/services/business-capability",
  },
  {
    title: "Digital Strategy & Emerging Technology Advisory",
    description:
      "Streamlining entire IT process landscape (On Prem-Cloud) to enhance productivity. Focus on process system integration, customer experience, Organizational & Technological change management. (DIGITAL Ops – AIOps).",
    image: "/images/expertise-digital.png",
    link: "/services/business-capability",
  },
  {
    title: "Strategic Marketing & Business/Product Positioning",
    description:
      "Analyst relations support, content strategy, Technology – Business – Thought leadership, and Market positioning (Product/Service). Technical & Business narrative articulation for right posturing and market fitment.",
    image: "/images/expertise-marketing.png",
    link: "/services/business-capability",
  },
  {
    title: "Industry Research & Market Intelligence",
    description:
      "Focused technology and practice research for real-time intelligence and market insights. Domain-focused studies capture business aspects and trends, along with sourcing advisory and partner selection guidance to fit the business need.",
    image: "/images/expertise-growth.png",
    link: "/services/business-capability",
  },
];

export default function Strength() {
  return (
    <section className={styles.strength}>
      <div className={styles.container}>

        {/* =========================================
            CENTERED SECTION HEADING
        ========================================= */}

        <div className={styles.heading}>
          <h2>
            Strength &amp; Expertise
          </h2>
        </div>

        {/* =========================================
            FOUR CARDS — SINGLE ROW
        ========================================= */}

        <div className={styles.cards}>
          {expertiseCards.map((card) => (
            <article
              className={styles.card}
              key={card.title}
            >
              {/* Card Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
                className={styles.cardImage}
              />

              {/* Dark Overlay */}
              <div className={styles.overlay} />

              {/* Normal Title */}
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
              </div>

              {/* Hover Content */}
              <div className={styles.hoverContent}>
                <div className={styles.hoverLine} />

                <p>
                  {card.description}
                </p>

                <a
                  href={card.link}
                  className={styles.hoverReadMore}
                >
                  <span>Read More</span>
                  
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}