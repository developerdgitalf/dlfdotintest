"use client";

import { FiArrowRight } from "react-icons/fi";
import "./IntroCloudDrivenNewDesign.css";

export default function IntroCloudDrivenNewDesign() {
  return (
    <section
      className="intro-cloud-driven-new-design"
      aria-labelledby="intro-cloud-driven-new-design-title"
    >
      <div className="intro-cloud-driven-new-design__container">

        <div className="intro-cloud-driven-new-design__featured">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="intro-cloud-driven-new-design__content">

            <h3 id="intro-cloud-driven-new-design-title">
        Cloud driving digitization, automation driving work optimization, analytics driving insights, and AI driving decision-making – are illustrations of transformation.
              <br />
         
            </h3>


             {/*
            <div className="intro-cloud-driven-new-design__line" />

            <p>
              A practical framework to help organizations align strategy,
              content, and execution for sustainable growth.
            </p>
            <a
              href="#"
              className="intro-cloud-driven-new-design__cta"
              onClick={(event) => event.preventDefault()}
            >
              <span>SHOW MORE</span>
              <FiArrowRight />
            </a>
*/}
          </div> 

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="intro-cloud-driven-new-design__image">
            <img
              src="/images/insights/cloud.jpg"
              alt="DigitalFABRIC digital network"
            />
          </div>

        </div>

      </div>
    </section>
  );
}