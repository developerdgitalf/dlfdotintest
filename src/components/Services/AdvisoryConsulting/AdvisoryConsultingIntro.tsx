"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";

import "./AdvisoryConsultingIntro.css";

export default function AdvisoryConsultingIntro() {
  return (
    <section
      className="advisory-intro-section"
      aria-label="Advisory and Consulting"
    >

      {/* =====================================================
          ADVISORY
          SINGLE WHITE PANEL
      ===================================================== */}

      <div className="advisory-intro-wrapper">

        <div className="advisory-intro-panel advisory-intro-panel--light">

          {/* IMAGE */}

          <div className="advisory-intro-image">
            <ImageZoom
              src="/images/services/it-advisory.svg"
              alt="Advisory services"
              className="advisory-zoom-image"
            />
          </div>


          {/* CONTENT */}

          <div className="advisory-intro-content">

            <h2>
              Advisory
            </h2>

            <p>
              Advisory is more at the business side, engaging with
              leadership and executive segment to strategize a
              transformational roadmap at a corporate level. In contrast,
              consulting is focused on one or two domains, and more
              hands-on implementation experience is expected.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          CONSULTING
          SINGLE BLUE PANEL
      ===================================================== */}

      <div className="advisory-intro-wrapper advisory-intro-wrapper--dark">

        <div className="advisory-intro-panel advisory-intro-panel--dark">

          {/* IMAGE */}

          <div className="advisory-intro-image">

            <ImageZoom
              src="/images/services/design-consulting.svg"
              alt="Consulting services"
              className="consulting-zoom-image"
            />

          </div>


          {/* CONTENT */}

          <div className="advisory-intro-content advisory-intro-content--dark">

            <h2>
              Consulting
            </h2>

            <p>
              Our team has core expertise in the area of IT Service
              Management, Artificial Intelligence, Automation (RPA), and
              Dev Ops. Collectively as a group we all have worked on the
              concepts and in the operator, builder, and advisor capacity.
              Hence we sport a comprehensive understanding of the respective
              subjects and have contributed to the corresponding knowledge
              bodies in improvising the efficacy and applicability.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}