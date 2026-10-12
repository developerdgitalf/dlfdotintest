"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

import "./CapabilityCards2.css";

export interface CapabilityCardData {
  title: string;
  description?: string;
  link?: string;
}

interface CapabilityCards2Props {
  cards: CapabilityCardData[];
}

export default function CapabilityCards2({
  cards,
}: CapabilityCards2Props) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="capability-cards2-section">
      <div className="capability-cards2-container">
        <div className="capability-cards2-grid">
          {cards.map((card, index) => {
            const isActive = activeCard === index;
            const hasDescription = Boolean(card.description);

            return (
              <article
                key={`${card.title}-${index}`}
                className={`capability-card2 ${
                  isActive ? "is-active" : ""
                }`}
              >
                <div className="capability-card2-inner">

                  {/* Title */}
                  <h4>{card.title}</h4>

                  {/* Description */}
                  {hasDescription && (
                    <div
                      className={`capability-card2-details ${
                        isActive ? "is-open" : ""
                      }`}
                    >
                      <p>{card.description}</p>
                    </div>
                  )}

                  {/* Read More Button */}
                  <div className="capability-card2-actions">
                    {hasDescription ? (
                      <button
                        type="button"
                        className="capability-read-more"
                        onClick={() => toggleCard(index)}
                        aria-expanded={isActive}
                      >
                        <span>
                          {isActive ? "Close" : "Read More"}
                        </span>

                        <FiChevronDown
                          className={
                            isActive
                              ? "capability-chevron-open"
                              : ""
                          }
                        />
                      </button>
                    ) : (
                      <Link
                        href={card.link || "#"}
                        className="capability-read-more"
                      >
                        <span>Read More</span>
                        <FiChevronDown />
                      </Link>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}