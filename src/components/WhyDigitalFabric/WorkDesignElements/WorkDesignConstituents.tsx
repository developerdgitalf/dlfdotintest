"use client";

import "./WorkDesignConstituents.css";

export default function WorkDesignConstituents() {
  return (
    <section
      className="work-design-constituents"
      aria-labelledby="work-design-constituents-title"
    >
      <div className="work-design-constituents__container">
        <div className="work-design-constituents__featured">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="work-design-constituents__content">

            <h3 id="work-design-constituents-title">
              A brief insight and description positioning and rationale of all the five critical elements.

              <br />
             
            </h3>
 {/*
            <div className="work-design-constituents__line" />

            <p>
              The building blocks of every organization that shape how work
              is designed, managed, delivered, and transformed in the digital
              enterprise.
            </p>*/}

          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="work-design-constituents__image">
            <img
              src="/images/why/idea.png"
              alt="Five work design constituents"
            />
          </div>

        </div>
      </div>
    </section>
  );
}