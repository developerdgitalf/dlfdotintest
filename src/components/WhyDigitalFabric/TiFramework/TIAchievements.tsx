"use client";

import React from "react";
import Image from "next/image";

import "./TIAchievements.css";

const achievementCards = [
  "Discover enterprise processes <br/>and segment & catalog",

  "Defining the governance, conformance, <br/>and performance controls (VOI, ROI,)",

  "Assessment and prioritization of as-is  business-technology-customer<br/> capabilities & gaps.",

  "Design and business & technology adoption roadmap with tangible <br/> outcomes & milestones.",

  "Devise the skill & capability development <br/>path to transformation.",
];

export default function TIAchievements() {
  return (
    <section
      className="ti-achievements"
      aria-label="What will DIGITALFABRIC TI Framework help you achieve"
    >
      <div className="ti-achievements__container">

        {/* ===================================================
            TOP FEATURE
        =================================================== */}

        <div className="ti-achievements__feature">

          {/* LEFT — CONTENT */}

          <div className="ti-achievements__feature-content">
            <div className="ti-achievements__feature-inner">

              <h2>
                What will DIGITALFABRIC® – TI
                <br />
                Framework help you achieve?
              </h2>

              <p>
                DIGITALFABRIC® denotes the quintessential set of markers
                that guides you to efficiently institutionalize the digital
                foundation. A measurable goal &amp; execution guidance and
                mechanisms focusing on the friction and intricacies that
                are not customarily delivered is our framework formula with
                continuous improvement objective.
              </p>

              <p>
                The prescriptions will pave the path to assert the efficacy
                of onboarding the digital components to drive organizational
                goals and support effective transformation outcomes.
              </p>

            </div>
          </div>


          {/* RIGHT — IMAGE */}

          <div className="ti-achievements__feature-image">
            <Image
              src="/images/why/ti-achievements.png"
              alt="Digital transformation framework"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
              className="ti-achievements__image"
            />
          </div>

        </div>


        {/* ===================================================
            ACHIEVEMENT CARDS
        =================================================== */}

        <div className="ti-achievements__grid">

          {achievementCards.map((item, index) => (
            <article
              key={`${item}-${index}`}
              className="ti-achievements__card"
            >
              <p>
                {item
                  .split(/<br\s*\/?>/i)
                  .map((part, partIndex) => (
                    <React.Fragment key={partIndex}>
                      {partIndex > 0 && <br />}
                      {part.trim()}
                    </React.Fragment>
                  ))}
              </p>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}