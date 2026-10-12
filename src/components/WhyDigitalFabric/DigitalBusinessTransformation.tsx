"use client";

import React, { useState } from "react";
import {
  FiUsers,
  FiHeart,
  FiMonitor,
  FiX,
} from "react-icons/fi";

import "./DigitalBusinessTransformation.css";

interface DigitalBusinessTransformationProps {
  imageSrc?: string;
}

export default function DigitalBusinessTransformation({
  imageSrc = "/images/thought-leadership/digital-transformation.svg",
}: DigitalBusinessTransformationProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      {/* =========================================================
          DIGITAL BUSINESS TRANSFORMATION
          2 × 2 EDITORIAL GRID
      ========================================================= */}

      <section
        className="digitalBusinessTransformation"
        aria-labelledby="digital-transformation-title"
      >
        <div className="digitalTransformationGrid">

          {/* =====================================================
              BOX 1 — DIGITAL BUSINESS TRANSFORMATION
              INTERNAL 2-ROW LAYOUT
          ===================================================== */}

          <article className="transformationBlock transformationIntro">

            {/* =================================================
                ROW 1 — TITLE + INTRODUCTION
            ================================================= */}

            <div className="introTop">

              <span className="transformationAccent" />

              <h2 id="digital-transformation-title">
                DIGITAL BUSINESS
                <br />
                TRANSFORMATION
              </h2>

              <p>
                A conclusive move for a Digital Leader is to gain a
                comprehensive insight into the E2E processes that cover
                the customer&apos;s quintessential attributes (Consumer)
                and employee (Provider).
              </p>

            </div>


            {/* =================================================
                ROW 2 — EXPERIENCE / CONVENIENCE / INTERFACE
            ================================================= */}

            <div className="introAttributes">

              <div className="attributeGrid">

                {/* EXPERIENCE */}

                <div className="attributeItem">

                  <div className="attributeCircle">
                    <FiUsers className="attributeIcon" />
                  </div>

                  <h3>
                    EXPERIENCE
                  </h3>

                </div>


                {/* CONVENIENCE */}

                <div className="attributeItem">

                  <div className="attributeCircle">
                    <FiHeart className="attributeIcon" />
                  </div>

                  <h3>
                    CONVENIENCE
                  </h3>

                </div>


                {/* INTERFACE */}

                <div className="attributeItem">

                  <div className="attributeCircle">
                    <FiMonitor className="attributeIcon" />
                  </div>

                  <h3>
                    INTERFACE
                  </h3>

                </div>

              </div>


              {/* ATTRIBUTE DESCRIPTION */}

              <p className="attributesDescription">
                3 strategic attributes that deliver value
                to the customer.
              </p>

            </div>

          </article>


          {/* =====================================================
              BOX 2 — IMAGE
          ===================================================== */}

          <button
            type="button"
            className="transformationImage"
            onClick={() => setIsImageOpen(true)}
            aria-label="Open digital transformation image"
          >

            <img
              src={imageSrc}
              alt="Digital transformation and technology innovation"
            />

            <div className="imageOverlay" />

          </button>


          {/* =====================================================
              BOX 3 — DIGITAL TRANSFORMATION EXPLANATION
          ===================================================== */}

          <article className="transformationBlock transformationTextBox">

            <p>


          
Digital and now AI transformation succeeds when persona, business, and technology move as one system,
 aligning customer expectations with provider capabilities, differentiating experience beyond interface design, 
 and turning today’s  digital choices into the foundation for tomorrow’s inevitable enterprise reinvention.


            </p>

          </article>


          {/* =====================================================
              BOX 4 — DIGITAL TRANSFORMATION APPROACH
          ===================================================== */}

          <article className="transformationBlock transformationTextBox">

            <p>
             AI transformation becomes meaningful when enterprises place the right work-design constituents at the 
             right proximity and scale, integrating people, processes, data, platforms, and intelligent systems to 
             declutter complexity, embed AI into business workflows,
              and convert technology potential into trusted, adaptive, and measurable enterprise value.
            </p>

          </article>

        </div>
      </section>


      {/* =========================================================
          FULL IMAGE MODAL
      ========================================================= */}

      {isImageOpen && (
        <div
          className="imageModal"
          role="dialog"
          aria-modal="true"
          aria-label="Digital transformation image preview"
          onClick={() => setIsImageOpen(false)}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            className="imageModalClose"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image"
          >
            <FiX />
          </button>


          {/* MODAL IMAGE */}

          <div
            className="imageModalContent"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={imageSrc}
              alt="Digital transformation and technology innovation"
            />

          </div>

        </div>
      )}

    </>
  );
}