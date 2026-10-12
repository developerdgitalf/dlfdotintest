"use client";

import { useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import "./TransformationOutcome.css";

interface TransformationOutcomeProps {
  image?: string;

  firstTitle?: string;
  firstText?: string;

  secondTitle?: string;
  secondText?: string;
}

export default function TransformationOutcome({
  image = "/images/transformation-outcome.png",

  firstTitle = "",
  firstText = `Enterprises have survived and thrived through time, utilizing the best possible technology and aggregated knowledge from every subject and object involved in value generation processes. However, today when these processes transition from one Medium (Physical) to another (Digital), are we recognizing the information, skill, process, and systems left behind only to decommission or disintegrate? These suddenly become obsolete or unnecessary.`,

  secondTitle = "",
  secondText = `Hence, the transformation strategy should also include the mechanism to repurpose all the residual enterprise attributes. And the new journey from Transformation to a future state will leave the enterprise in a shortfall of similar characteristics due to revised requirements.

Should the enterprises consider enterprise debt and deficit as critical change and transformation metrics?`,
}: TransformationOutcomeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const activeTitle = isHovered
    ? secondTitle
    : firstTitle;

  const activeText = isHovered
    ? secondText
    : firstText;

  return (
    <section className="transformation-outcome-section">
      <div className="transformation-outcome-container">

        {/* =========================================
            LEFT IMAGE
        ========================================= */}

        <div className="transformation-outcome-image">
          <img
            src={image}
            alt="One of many outcomes of transformation"
          />
        </div>

        {/* =========================================
            RIGHT INTERACTIVE CONTENT
        ========================================= */}

        <div
          className={`transformation-outcome-card ${
            isHovered ? "is-hovered" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered((current) => !current)}
          role="button"
          tabIndex={0}
          aria-pressed={isHovered}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              event.preventDefault();
              setIsHovered((current) => !current);
            }
          }}
        >

          <div className="transformation-outcome-card-line" />

          <div className="transformation-outcome-card-content">
            <div
              key={isHovered ? "second" : "first"}
              className="transformation-outcome-copy"
            >
              {activeTitle && (
                <h2>{activeTitle}</h2>
              )}

              <p>{activeText}</p>

              <a
                href="#contact"
                className="transformation-outcome-read-more"
                onClick={(event) =>
                  event.stopPropagation()
                }
              >
              

                {isHovered ? (
                  <FiArrowUpRight />
                ) : (
                  <FiArrowRight />
                )}
              </a>
            </div>
          </div>

          {/* Hover indicator */}

          <div className="transformation-outcome-hover-indicator">
            <span>
              {isHovered
                ? ""
                : ""}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}