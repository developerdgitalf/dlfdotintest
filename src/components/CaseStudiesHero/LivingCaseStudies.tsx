"use client";

import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";
import "./LivingCaseStudies.css";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "DIGITALFABRIC® Approach Note",
    description:
      "A practical framework to help organizations align strategy, content, and execution for sustainable growth.",
    image: "/images/case-studies/case-study-01.png",
    alt: "DIGITALFABRIC approach case study",
  },
  {
    id: 2,
    title: "How Digital Business Transformation (DBX) can miss the target",
    description:
      "Exploring the gaps, challenges, and strategic considerations that can prevent digital transformation initiatives from achieving their intended objectives.",
    image: "/images/case-studies/case-study-02.png",
    alt: "Digital Business Transformation case study",
  },
  {
    id: 3,
    title: "Personalized Business & Content Strategy",
    description:
      "A focused approach to aligning business strategy, audience needs, and content for stronger engagement and measurable outcomes.",
    image: "/images/case-studies/case-study-03.png",
    alt: "Personalized business and content strategy",
  },
  {
    id: 4,
    title: "Building Strong Brands That Drive Results",
    description:
      "A strategic perspective on building stronger brands through clarity, positioning, consistency, and measurable business impact.",
    image: "/images/case-studies/case-study-04.png",
    alt: "Brand building case study",
  },
];

export default function LivingCaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCase = caseStudies[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? caseStudies.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === caseStudies.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      className="living-case-studies"
      aria-labelledby="living-case-studies-title"
    >
      <div className="living-case-studies__container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div className="living-case-studies__header">
          <div className="living-case-studies__eyebrow">
            <span />
            <span>OUR IMPACT IN ACTION</span>
            <span />
          </div>

          <h2 id="living-case-studies-title">
            LIVING CASE STUDIES
          </h2>

          <p>
            Real challenges. Strategic thinking. Measurable impact.
          </p>
        </div>

        {/* =========================================
            FEATURED CASE STUDY
        ========================================= */}
        <div className="living-case-studies__featured-wrap">

          {/* Previous */}
          <button
            type="button"
            className="living-case-studies__side-arrow living-case-studies__side-arrow--left"
            onClick={goPrevious}
            aria-label="Previous case study"
          >
            <FiChevronLeft />
          </button>

          {/* Main Card */}
          <div className="living-case-studies__featured">

            {/* Left Content */}
            <div className="living-case-studies__content">

              <h3>{activeCase.title}</h3>

              <div className="living-case-studies__line" />

              <p>{activeCase.description}</p>

              <a
                href="#"
                className="living-case-studies__cta"
              >
                <span>SHOW MORE</span>
                <FiArrowRight />
              </a>

            </div>

            {/* Right Image */}
            <div className="living-case-studies__image">
              <img
                src={activeCase.image}
                alt={activeCase.alt}
              />
            </div>

          </div>

          {/* Next */}
          <button
            type="button"
            className="living-case-studies__side-arrow living-case-studies__side-arrow--right"
            onClick={goNext}
            aria-label="Next case study"
          >
            <FiChevronRight />
          </button>

        </div>

        {/* =========================================
            PAGINATION DOTS
        ========================================= */}
        <div className="living-case-studies__dots">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              type="button"
              className={`living-case-studies__dot ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to case study ${index + 1}`}
              aria-current={
                activeIndex === index ? "true" : undefined
              }
            />
          ))}
        </div>

        {/* =========================================
            THUMBNAILS
        ========================================= */}
        <div className="living-case-studies__thumbnails">

          {caseStudies.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              type="button"
              className={`living-case-studies__thumbnail ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${caseStudy.title}`}
            >
              <div className="living-case-studies__thumbnail-copy">
                <h4>{caseStudy.title}</h4>
              </div>

              <div className="living-case-studies__thumbnail-image">
                <img
                  src={caseStudy.image}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}