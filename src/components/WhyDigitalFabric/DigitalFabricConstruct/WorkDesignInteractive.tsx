"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";

import "./WorkDesignInteractive.css";

export default function WorkDesignInteractive() {
  return (
    <section
      className="work-design-interactive"
      aria-label="Digital Fabric Work Design Constituents"
    >
      <div className="work-design-interactive__container">

        {/* =================================================
            TOP — IMAGE
            IMAGE CONTAINER MAX 1200PX
        ================================================= */}

        <div className="work-design-interactive__visual">
          <ImageZoom
            src="/images/why/digital-fabric-5-line.svg"
            alt="DIGITALFABRIC Work Design Constituents"
            className="work-design-interactive__image-wrapper"
          />
        </div>

        {/* =================================================
            BOTTOM — BLUE TEXT CONTENT
            FULL WIDTH BLUE BACKGROUND
        ================================================= */}

        <div className="work-design-interactive__content">

          {/* =================================================
              HEADING — 1200PX
          ================================================= */}

          <div className="work-design-interactive__heading">
            <strong>
              PEOPLE – PROCESS – PLATFORM – PRODUCT – PARTNERSHIP
            </strong>
          </div>

          {/* =================================================
              TEXT CONTENT — 1200PX
          ================================================= */}

          <div className="work-design-interactive__slide-content">

            <p className="work-design-interactive__paragraph">
              The 5 waves in the logo represent 5 Work Design Constituent and
              the line holding the five waves denotes the entity, an
              organization empowered by these 5 work design constituents to
              transform the current state into a new state. There is a
              convergence point where all five independent waves meet and form
              a fabric-like structure perceived to be resilient and seamlessly
              integrated.
            </p>

            <p className="work-design-interactive__paragraph">
              This is where all come together and intertwine to form a perfect
              arrangement that encompasses all elements and attributes of every
              work design constituent for every organization to develop a
              digital DNA.
            </p>

            <p className="work-design-interactive__paragraph">
              A minimum viable arrangement or the ideal state where all five
              work design constituents are well placed and unite to cover the
              ecosystem. It is imperative to include these 5 constituents as
              they are present in every organization in different compositions
              and capacities as per the organization’s nature. Compromising on
              any one component will distort the entire business transformation
              goal.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}