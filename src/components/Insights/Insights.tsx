"use client";

import { useState } from "react";
import styles from "../../styles/Insights.module.css";

const panels = [
  {
    id: "prosight",
    logo: "/images/prosight_logo.png",
    alt: "ProSight",
    background: "dark",
    descriptions: [
      `PROSIGHT™ is a pure-play AI Service Management and AI practice consulting arm, created to help enterprises, GSIs, and Platform players move from AI chaos to clarity. It combines practitioner-led consulting, deep research, and proprietary frameworks such as AISWITCH™, AISTATE™, GREAI™, and Chip2Experience2Outcomes™ to help organizations govern, operationalize, scale, and continuously improve Enterprise AI capability across strategy, workforce, data, technology, culture, and outcomes.`,

      `Its core proposition is simple: AI without practice does not scale PROSIGHT builds the practice layer that converts AI investment into trusted adoption, sustainable capability, and business impact.`,
    ],
    link: "https://prosight-aism.com/",
  },

  {
    id: "researchfabric",
    logo: "/images/ResearchFabric_logo.png",
    alt: "ResearchFabric",
    background: "blue",
    descriptions: [
      `ResearchFabric™ is a practitioner-led technology and market intelligence firm focused on identifying where emerging technologies create real commercial opportunity. Its research spans transformative technologies such as Generative AI, Agentic AI, Quantum Computing, AI Engineering, Chipset Architecture and Digital Engineering, alongside the micro-markets and business segments shaped by their adoption.`,

      `Through its Technology Research and Micro-Market Research practices, ResearchFabric combines expert analysis, market sizing, competitive intelligence, forecasting and technology adoption insights to help enterprises, investors and strategy leaders make informed decisions. Its research draws on sources including patents, preprints, earnings calls and expert interviews, translating complex technology shifts into actionable business narratives.`,
    ],
    link: "https://researchfabric.com/",
  },
];

export default function Insights() {
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({
    prosight: 0,
    researchfabric: 0,
  });

  const changeSlide = (id: string, direction: number) => {
    const panel = panels.find((item) => item.id === id);

    if (!panel || panel.descriptions.length <= 1) {
      return;
    }

    setActiveSlides((current) => {
      const activeIndex = current[id] ?? 0;

      const nextIndex =
        (activeIndex + direction + panel.descriptions.length) %
        panel.descriptions.length;

      return {
        ...current,
        [id]: nextIndex,
      };
    });
  };

  return (
    <section className={styles.insightsSection}>
      {/* =========================================
          STATIC FULL-WIDTH BACKGROUND
      ========================================= */}

      <div
        className={styles.backgroundLayer}
        aria-hidden="true"
      >
        <div className={styles.leftBackground} />
        <div className={styles.rightBackground} />
      </div>

      {/* =========================================
          CENTERED CONTENT
      ========================================= */}

      <div className={styles.insightsContainer}>
        <div className={styles.insightsGrid}>
          {panels.map((panel) => {
            const activeSlide = activeSlides[panel.id] ?? 0;

            return (
              <article
                key={panel.id}
                className={`${styles.insightPanel} ${
                  panel.background === "dark"
                    ? styles.darkPanel
                    : styles.bluePanel
                }`}
              >
                <div className={styles.panelContent}>
                  {/* =========================================
                      LOGO
                  ========================================= */}

                  <div className={styles.logoWrap}>
                    <img
                      src={panel.logo}
                      alt={panel.alt}
                      className={styles.logo}
                    />
                  </div>

                  {/* =========================================
                      DESCRIPTION
                  ========================================= */}

                  <div className={styles.textSlider}>
                    <p
                      key={`${panel.id}-${activeSlide}`}
                      className={styles.description}
                    >
                      {panel.descriptions[activeSlide]}
                    </p>
                  </div>

                  {/* =========================================
                      MANUAL ARROW BUTTONS
                  ========================================= */}

                  {panel.descriptions.length > 1 && (
                    <div className={styles.sliderControls}>
                      {/* LEFT */}
                      <button
                        type="button"
                        className={styles.sliderArrow}
                        onClick={() =>
                          changeSlide(panel.id, -1)
                        }
                        aria-label={`Previous ${panel.alt} content`}
                      >
                        <span
                          className={`${styles.chevron} ${styles.chevronLeft}`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* RIGHT */}
                      <button
                        type="button"
                        className={styles.sliderArrow}
                        onClick={() =>
                          changeSlide(panel.id, 1)
                        }
                        aria-label={`Next ${panel.alt} content`}
                      >
                        <span
                          className={styles.chevron}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  )}

                  {/* =========================================
                      EXPLORE MORE
                  ========================================= */}

                  <a
                    href={panel.link}
                    className={styles.exploreButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Explore more</span>

                   
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}