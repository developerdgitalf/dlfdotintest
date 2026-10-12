
"use client";

import { useState } from "react";
import "./FeaturedInsightCategories.css";

type InsightCategory = {
  id: string;
  categoryTitle: string;
  heading: string;
  description: string;
  image: string;
  href: string;
};

const featuredInsights: InsightCategory[] = [
  {
    id: "mindset-matters",
    categoryTitle: "Mindset Matters ™",
    heading:
      "An edition on technology, business, behaviour and markets.",
    description:
      "A short crisp presentation with a brief explanation on a framework, methodology, corporate behavior, strategy and management. This is purely focused around the enterprises and industry and experiences during such initiatives.",
    image: "/images/insights/featured-insights-network.png",
    href: "/featured-insights/mindset-matters",
  },
  {
    id: "thought-leadership",
    categoryTitle: "Thought leadership papers",
    heading:
      "Management overview of a situation and an approach that could be a perspective or a tested formula.",
    description:
      "Experiences and expertise articulated to present a situation and solution. This also can be a futuristic and novel approach to organizational challenges. Thought leadership articles are usually applicative in nature.",
    image: "/images/insights/featured-insights-network-2.png",
    href: "featured-insights/thought-leadership",
  },
  {
    id: "research-market-study",
    categoryTitle: "Research & Market Study",
    heading:
      "Well-studied, backed with data or a case study, qualitative & quantitative analysis of a product, solution, service, or an enterprise.",
    description:
      "Research notes are technical and informative in nature, catering to patterns, insights, capabilities or a competitive study. knowledge articles refer to a specific subject followed by a deep-dive analysis for the wider audience.",
    image: "/images/insights/featured-insights-network-3.png",
    href: "/services/research-market-study",
  },
];

export default function FeaturedInsightCategories() {
  const [activeId, setActiveId] = useState("mindset-matters");

  const activeInsight =
    featuredInsights.find((item) => item.id === activeId) ??
    featuredInsights[0];

  return (
    <section className="featuredInsightSection">
      <div className="site-container-small">
        <div className="featuredInsightInner">

          {/* ================= SECTION HEADING ================= */}
          <div className="featuredInsightSectionHeader">
            <h2>
              A Brief Description and Peek Into
            </h2>
          </div>

          {/* ================= FEATURED IMAGE + CONTENT ================= */}
          <div className="featuredInsightFeature">

            {/* LEFT IMAGE */}
            <div className="featuredInsightImageWrap">
              <div className="featuredInsightCategoryLabel">
                {activeInsight.categoryTitle}
              </div>

              <img
                src={activeInsight.image}
                alt={activeInsight.categoryTitle}
                className="featuredInsightImage"
              />
            </div>

            {/* RIGHT EDITORIAL CONTENT */}
            <div className="featuredInsightContent">
              <div className="featuredInsightContentInner">
                <h3>{activeInsight.heading}</h3>

                <p>{activeInsight.description}</p>

                <a
                  href={activeInsight.href}
                  className="featuredInsightReadMore"
                >
                  <span>Read More</span>
                  <span
                    className="featuredInsightArrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* ================= CATEGORY NAVIGATION ================= */}
          <div className="featuredInsightTabs">
            {featuredInsights.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`featuredInsightTab ${
                  activeId === item.id ? "active" : ""
                }`}
                onClick={() => setActiveId(item.id)}
                aria-pressed={activeId === item.id}
              >
                <span className="featuredInsightTabLine" />

                <span className="featuredInsightTabTitle">
                  {item.categoryTitle}
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

