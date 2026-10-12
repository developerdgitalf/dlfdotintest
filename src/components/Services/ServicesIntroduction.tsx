"use client";

import "./ServicesIntroduction.css";

export default function ServicesIntroduction() {
  return (
    <section
      className="services-introduction"
      aria-labelledby="services-introduction-title"
    >
      <div className="services-introduction__container">
        <div className="services-introduction__featured">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="services-introduction__content">

            <h3 id="services-introduction-title">
                      We are seeing the new times that are bringing out new strengths in us and, at the same time, driving us to embrace the transformation mindset.
  </h3>
 <br /><h3 id="services-introduction-title">
               <br />
              The situation has proven that location and infrastructure are no more constraints to run business and leverage remote forms of support to enable enterprises to improvise their positioning and strategy.
            </h3>


           {/*  <div className="services-introduction__line" /> */}

          
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="services-introduction__image">
            <img
              src="/images/services/services-introduction.jpg"
              alt="DIGITALFABRIC® services"
            />
          </div>

        </div>
      </div>
    </section>
  );
}