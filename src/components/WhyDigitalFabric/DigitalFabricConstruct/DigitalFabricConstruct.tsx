"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";

import "./DigitalFabricConstruct.css";

export default function DigitalFabricConstruct() {
  return (
    <main className="digital-fabric-construct">

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="digital-fabric-construct__intro">
        <div className="digital-fabric-construct__intro-container">
          <p className="digital-fabric-construct__intro-text">
            DIGITAL FABRIC is a “Being Digital &amp; Not Doing Digital”
            ideology supported by a comprehensive framework that embeds FIVE
            WORK DESIGN CONSTITUENTS (The building blocks of every
            organization).
          </p>
        </div>
      </section>

      {/* =====================================================
          IMAGE SECTION
      ===================================================== */}

      <section className="digital-fabric-construct__image-section">
        <div className="digital-fabric-construct__image-container">
          <div className="digital-fabric-construct__image-box">
            <ImageZoom
              src="/images/why/digital-fabric-5-line.svg"
              alt="DIGITALFABRIC Work Design Constituents"
              className="digital-fabric-construct__image"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BLUE CONTENT SECTION
      ===================================================== */}

      <section className="digital-fabric-construct__content">
        <div className="digital-fabric-construct__content-container">

          {/* =================================================
              HEADING BOX
          ================================================= */}

          <div className="digital-fabric-construct__heading-box">
            <h2 className="digital-fabric-construct__title">
              PEOPLE – PROCESS – PLATFORM – PRODUCT – PARTNERSHIP
            </h2>
          </div>

          {/* =================================================
              TEXT CONTENT
          ================================================= */}

          <div className="digital-fabric-construct__text">

            <p>
              The 5 waves in the logo represent 5 Work Design Constituent and
              the line holding the five waves denotes the entity, an
              organization empowered by these 5 work design constituents to
              transform the current state into a new state. There is a
              convergence point where all five independent waves meet and form
              a fabric-like structure perceived to be resilient and seamlessly
              integrated.
            </p>

            <p>
              This is where all come together and intertwine to form a perfect
              arrangement that encompasses all elements and attributes of every
              work design constituent for every organization to develop a
              digital DNA.
            </p>

            <p>
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
      </section>

    </main>
  );
}