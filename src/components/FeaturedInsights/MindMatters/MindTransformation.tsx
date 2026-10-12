"use client";

import "./MindTransformation.css";

import ImageZoom from "../../ImageZoom/ImageZoom";

const achievementCards = [
  "Discover enterprise processes and segment & catalog",

  "Defining the governance, conformance, and performance controls (VOI, ROI,)",

  "Assessment and prioritization of as-is business-technology-customer capabilities & gaps.",

  "Design and business & technology adoption roadmap with tangible outcomes & milestones.",

  "Design and business & technology adoption roadmap with tangible outcomes & milestones.",

  "Devise the skill & capability development path to transformation.",
];

export default function TIAchievements() {
  return (
    <section
      className="ti-achievements"
      aria-label="What will DIGITALFABRIC TI Framework help you achieve"
    >
      {/* =====================================================
          COMMON 1200PX CONTAINER
      ===================================================== */}

      <div className="ti-achievements__container">

        {/* ===================================================
            TOP FEATURE
        =================================================== */}

        <div className="ti-achievements__feature">

          {/* =================================================
              LEFT — CONTENT
          ================================================= */}

          <div className="ti-achievements__feature-content">
            <div className="ti-achievements__feature-inner">

              <p>
                Enterprises have survived and thrived through time,
                utilizing the best possible technology and aggregated
                knowledge from every subject and object involved in value
                generation processes. However, today when these processes
                transition from one Medium (Physical) to another (Digital),
                are we recognizing the information, skill, process, and
                systems left behind only to decommission or disintegrate?
                These suddenly become obsolete or unnecessary.
              </p>

              <p>
                Hence, the transformation strategy should also include the
                mechanism to repurpose all the residual enterprise
                attributes. And the new journey from Transformation to a
                future state will leave the enterprise in a shortfall of
                similar characteristics due to revised requirements.
              </p>

              <p>
                Should the enterprises consider enterprise debt and deficit
                as critical change and transformation metrics?
              </p>

            </div>
          </div>

          {/* =================================================
              RIGHT — IMAGE WITH ZOOM
          ================================================= */}

          <div className="ti-achievements__feature-image">

            <ImageZoom
              src="/images/insights/enterprise-debt-deficit.svg"
              alt="Digital transformation framework"
              className="ti-achievements__image"
            />

          </div>

        </div>

        {/* ===================================================
            ACHIEVEMENT CARDS
        =================================================== */}

      </div>
    </section>
  );
}