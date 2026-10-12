import React from "react";
import "./ServicesHero.css";
import { FiArrowRight } from "react-icons/fi";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="services-hero__container">
        <div className="services-hero__content">
          <h1>SERVICES</h1>

          <p>
            It is an enriching experience to be at the vortex of Digital
            transformation and drive it in real-time.
          </p>

         { /* <a href="#services-content" className="services-hero__button">
           
          <span>Explore Our Services</span>
            <FiArrowRight aria-hidden="true" />

          </a>
          
         */ }


        </div>
      </div>
    </section>
  );
};

export default ServicesHero;