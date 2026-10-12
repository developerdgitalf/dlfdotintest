import "./OurExpertise.css";
import Link from "next/link";
import type { ReactNode } from "react";

interface ExpertiseCard {
  title: ReactNode;
  items: string[];
}

const expertiseCards: ExpertiseCard[] = [
  {
    title: (
      <>
        Enterprise AI Services
        <br />
        & Readiness
      </>
    ),
    items: [
      "Agentic Services & Platforms",
      "Orchestration Platforms",
      "Agentic Service architecture",
    ],
  },
  {
    title: (
      <>
        Enterprise Cloud
        <br />
        & Platforms
      </>
    ),
    items: [
      "GTM & Positioning",
      "Solution Discovery",
      "Hyperscalers & Workflow Platforms",
    ],
  },
  {
    title: "AI Engineering Services",
    items: [
      "AI Foundation",
      "Work Architecture",
      "Governance",
      "Solution/Product enhancements",
    ],
  },
  {
    title: (
      <>
        Forward Deployment
        <br />
        Engineering (FDE) Consulting
      </>
    ),
    items: [
      "Positioning",
      "Narrative",
      "Capability Setup",
      "Delivery Model",
    ],
  },
];

export default function OurExpertise() {
  return (
    <section className="expertise-section">
      <div className="expertise-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="expertise-header">
          <h2>
            <strong>Our Expertise</strong>
          </h2>
        </div>

        {/* =====================================
            EXPERTISE CARDS
        ===================================== */}

        <div className="expertise-grid">
          {expertiseCards.map((card, index) => (
            <article
              className={`expertise-card expertise-card--${index + 1}`}
              key={index}
            >
              <h3>{card.title}</h3>

              <ul>
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* =====================================
            BOTTOM INFORMATION BAR
        ===================================== */}

        <div className="expertise-bottom">
          <div className="economics">
            Technology adoption and related AI Economics
          </div>

          <div className="bottom-link-item bottom-link-gcc">
            GCC
          </div>

          <div className="bottom-link-item bottom-link-gsi">
            GSI
          </div>

          <div className="bottom-link-item bottom-link-platform">
            TECHNOLOGY PLATFORM
          </div>
        </div>

        {/* =====================================
            EXPLORE BUTTON
        ===================================== */}

        <div className="expertise-button-wrapper">
          <Link
            href="/services"
            className="explore-button"
          >
            Explore More
       
          </Link>
        </div>

      </div>
    </section>
  );
}