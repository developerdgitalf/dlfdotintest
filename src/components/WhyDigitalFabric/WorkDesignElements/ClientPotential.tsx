import Image from "next/image";
import "./ClientPotential.css";

export default function ClientPotential() {
  return (
    <section className="client-potential">
      <div className="site-container-small">
        <div className="client-potential-container">
          {/* Left Content */}
          <div className="client-potential-content">
            <h2>
              Helping our clients to transform
              <br />
              their business to full potential.
            </h2>

           {/*} <a href="#contact" className="client-potential-button">
              <span>Read More</span>
              <span className="client-potential-arrow">→</span>
            </a> */}
          </div>

          {/* Right Image */}
      
        </div>
      </div>
    </section>
  );
}