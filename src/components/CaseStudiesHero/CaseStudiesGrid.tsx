"use client";

import { useState } from "react";
import "./CaseStudiesGrid.css";

type CaseStudy = {
  id: number;
  category: "B2B" | "B2C" | "D2C";
  title: string;
  description: string;
  image: string;
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: "B2B",
    title: "Narrating Position Strategy",
    description:
      "Go to market Strategy and brand positioning for a SaaS product expansion.",
    image: "/images/case-studies/case-study-01.jpg",
    href: "/success-stories/case-study-01",
  },
  {
    id: 2,
    category: "B2B",
    title: "Narrating Position Strategy",
    description:
      "Go to market Strategy and brand positioning for a SaaS product expansion.",
    image: "/images/case-studies/case-study-02.jpg",
    href: "/success-stories/case-study-02",
  },
  {
    id: 3,
    category: "B2C",
    title: "Narrating Position Strategy",
    description:
      "Go to market Strategy and brand positioning for a SaaS product expansion.",
    image: "/images/case-studies/case-study-03.jpg",
    href: "/success-stories/case-study-03",
  },
  {
    id: 4,
    category: "B2B",
    title: "Narrating Position Strategy",
    description:
      "Go to market Strategy and brand positioning for a SaaS product expansion.",
    image: "/images/case-studies/case-study-04.jpg",
    href: "/success-stories/case-study-04",
  },
  {
    id: 5,
    category: "D2C",
    title: "Narrating Position Strategy",
    description:
      "Go to market Strategy and brand positioning for a SaaS product expansion.",
    image: "/images/case-studies/case-study-05.jpg",
    href: "/success-stories/case-study-05",
  },
  {
    id: 6,
    category: "B2B",
    title: "Narrating Position Strategy",
    description:
      "Go to market Strategy and brand positioning for a SaaS product expansion.",
    image: "/images/case-studies/case-study-06.jpg",
    href: "/success-stories/case-study-06",
  },
  {
    id: 7,
    category: "B2C",
    title: "Narrating Position Strategy",
    description:
      "Go to market Strategy and brand positioning for a SaaS product expansion.",
    image: "/images/case-studies/case-study-07.jpg",
    href: "/success-stories/case-study-07",
  },
  {
    id: 8,
    category: "D2C",
    title: "Narrating Position Strategy",
    description:
      "Go to market Strategy and brand positioning for a SaaS product expansion.",
    image: "/images/case-studies/case-study-08.jpg",
    href: "/success-stories/case-study-08",
  },
];

const filters = ["All", "B2B", "B2C", "D2C"] as const;

export default function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <section className="caseStudiesGridSection">
      {/* Shared 1400px global container */}
      <div className="site-container">
        {/* Filters */}
        <div className="caseStudiesFilters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`caseStudiesFilter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="caseStudiesGrid">
          {filteredStudies.map((study) => (
            <article className="caseStudyCard" key={study.id}>
              <a href={study.href} className="caseStudyCardImage">
                <img src={study.image} alt={study.title} />
              </a>

              <div className="caseStudyCardContent">
                <span className="caseStudyCardCategory">
                  {study.category} SAAS
                </span>

                <h2>{study.title}</h2>

                <p>{study.description}</p>
              </div>

              <div className="caseStudyCardFooter">
                <a href={study.href}>
                  View Case Study <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}