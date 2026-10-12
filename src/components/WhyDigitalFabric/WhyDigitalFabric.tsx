"use client";

import "./WhyDigitalFabric.css";

export default function WhyDigitalFabric() {
  return (
    <section
      className="why-digital-fabric"
      aria-labelledby="why-digital-fabric-title"
    >
      <div className="why-digital-fabric__container">

        <div className="why-digital-fabric__featured">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="why-digital-fabric__content">

            <h3 id="why-digital-fabric-title">
              First, transform MENTALLY and then DIGITALLY
           
            </h3>

           {/* 
            <div className="why-digital-fabric__line" />

            <p>
              DIGITALFABRIC® is a ‘Being Digital &amp; Not Doing Digital®’
              ideology supported by a comprehensive framework that embeds
              five work design constituents — the building blocks of every
              organization.
            </p>*/} 

          </div> 

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="why-digital-fabric__image">
            <img
              src="/images/aboutus.jpg"
              alt="DIGITALFABRIC® framework"
            />
          </div>

        </div>

      </div>
    </section>
  );
}