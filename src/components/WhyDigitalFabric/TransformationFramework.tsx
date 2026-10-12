"use client";

import { useState } from "react";
import "./TransformationFramework.css";

type FrameworkSection = {
  id: string;
  title?: string;
  image: string;
  imageAlt: string;
  description: string;
  highlight: string;
  tabTitle: string;
};

const sections: FrameworkSection[] = [
  {
    id: "ideology",
    title: "Why Now?",
    image: "/images/transformation-ideology.png",
    imageAlt: "Digital transformation network visualization",
    description:
      "There are many predicaments to the DX (Digital Transformation) not due to the actual value delivery, but the method and approach unilateral or skewed at every layer of work design constituent mentioned (5P’s). The right resource (People) at every layer plays a crucial role in the initiative’s success. I am pronouncing the inevitability of positioning People (humans) as the focal point of digital transformation.",
    highlight: "",
    tabTitle:
      "Develop a clear Digital Transformation Ideology, framework, and strategy.",
  },

  {
    id: "people",
    image: "/images/transformation-people.png",
    imageAlt: "People focused digital transformation",
    description:
      "Organizations are aspiring to start working on the DX Theme. The ones who already exist amid this business transformation initiative are yearning for an ideology to ADOPT – ADAPT – & ACCELERATE. The DIGITAL FABRIC offers this leverage by Simplifying the digital transformation initiative in all aspects and phases. Rationalizing, formulating -Implementing, and evaluating your Digital strategy.",
    highlight: "ADOPT – ADAPT – ACCELERATE.",
    tabTitle:
      "Explains that people are the focal point for successful transformation.",
  },
];

export default function TransformationFramework() {
  const [activeId, setActiveId] = useState("ideology");

  const activeSection =
    sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <section
      className="transformationFramework"
      aria-label="Digital Transformation Framework"
    >
      <div className="transformationFramework__container">

        {/* =====================================================
            UPPER INTERACTIVE CONTENT
        ===================================================== */}
        <div className="transformationFramework__content">

          {/* IMAGE */}
          <div className="transformationFramework__visual">
            <img
              key={activeSection.id}
              src={activeSection.image}
              alt={activeSection.imageAlt}
              className="transformationFramework__image"
            />
          </div>

          {/* CONTENT PANEL */}
          <div
            id={`framework-panel-${activeSection.id}`}
            key={`content-${activeSection.id}`}
            className="transformationFramework__panel"
            role="tabpanel"
            aria-labelledby={`framework-tab-${activeSection.id}`}
          >
            <div className="transformationFramework__panelContent">

              {/* TITLE ONLY WHEN AVAILABLE */}
              {activeSection.title && (
                <h2 className="transformationFramework__title">
                  {activeSection.title}
                </h2>
              )}

              {/* DESCRIPTION */}
              <p>{activeSection.description}</p>

              {/* HIGHLIGHT ONLY WHEN AVAILABLE */}
              {activeSection.highlight && (
                <strong>{activeSection.highlight}</strong>
              )}

            </div>
          </div>
        </div>

        {/* =====================================================
            INTERACTIVE TABS
        ===================================================== */}
        <div
          className="transformationFramework__tabs"
          role="tablist"
          aria-label="Transformation framework topics"
        >
          {sections.map((section, index) => {
            const isActive = section.id === activeId;

            return (
              <button
                key={section.id}
                id={`framework-tab-${section.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`framework-panel-${section.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`transformationFramework__tab ${
                  isActive
                    ? "transformationFramework__tab--active"
                    : ""
                } ${
                  index === 1
                    ? "transformationFramework__tab--light"
                    : ""
                }`}
                onClick={() => setActiveId(section.id)}
              >
                <span className="transformationFramework__tabLine" />

                <span className="transformationFramework__tabText">
                  {section.tabTitle}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}