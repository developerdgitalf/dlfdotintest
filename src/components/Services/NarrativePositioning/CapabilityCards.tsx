"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import "./CapabilityCards.css";

interface CardData {
  title: string;
  description: string;
  link: string;
}

const cards: CardData[] = [
  {
    title: "Business Capability Enablement",
    description:
      "Strengthening organizational capabilities through strategic frameworks, practical solutions, and focused business transformation.",
    link: "/business-capability",
  },
  {
    title: "Advisory & Consulting",
    description:
      "Providing strategic guidance and expert consulting to help organizations navigate challenges and unlock new opportunities.",
    link: "/advisory-consulting",
  },
  {
    title: "Research & Market Study",
    description:
      "Delivering meaningful market insights and research that support informed decisions, positioning, and sustainable growth.",
    link: "/research-market-study",
  },
];

export default function CapabilityCards() {
  return (
    <section className="capability-cards-section">
      <div className="capability-cards-container">
        <div className="capability-cards-grid">

          {cards.map((card) => (
            <article
              key={card.title}
              className="capability-card"
            >
              <div className="capability-card-inner">

                <h4>{card.title}</h4>

                <p className="capability-card-description">
                  {card.description}
                </p>

                <div className="capability-card-actions">
                  
                  <Link
                    href={card.link}
                    className="capability-link-button"
                  >
                    <span>Read More</span>
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}