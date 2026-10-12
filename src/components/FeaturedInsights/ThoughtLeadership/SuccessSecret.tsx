import { FiArrowRight } from "react-icons/fi";

import "./SuccessSecret.css";

export default function SuccessSecret() {
  return (
    <section className="success-secret-section">
      <div className="success-secret-container">

        {/* =========================================
            LEFT IMAGE
        ========================================= */}

        <div className="success-secret-image">
          <img
            src="/images/thought-leadership/success-secret.png"
            alt="The Secret of Success"
          />
        </div>

        {/* =========================================
            RIGHT CONTENT
        ========================================= */}

        <div className="success-secret-content">
          <div className="success-secret-line" />

          <h2>The Secret of Success</h2>

          <h3>
           It is not what you learn but what you believe in makes you successful.
          </h3>

          <p>
            The chase to learn even more will leave us with little
            more information but, key action is to apply that learning
            and convert it to knowledge.
          </p>

          <a
            href="#contact"
            className="success-secret-button"
          >
            <span></span>
           
          </a>
        </div>

      </div>
    </section>
  );
}