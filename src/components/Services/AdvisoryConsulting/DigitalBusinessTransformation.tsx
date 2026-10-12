import "./DigitalBusinessTransformation.css";

export default function DigitalBusinessTransformation() {
  return (
    <section
      className="digital-business-transformation"
      aria-labelledby="digital-business-transformation-title"
    >
      <div className="digital-business-transformation__container">
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="digital-business-transformation__content">
          <h2 id="digital-business-transformation-title">
            How Digital Business Transformation (DBX) can miss the target <br/> and lack momentum – TI
          
            
          </h2>

          <p>
            Company Profile: Amid the technology revolution and business transformations around 2015, An automation product company was formed to address the voids in the RPA (Robotic Process automation company) space and evolve as a strong contender in the technology space. The organization had built a versatile platform that hosts numerous proprietary automation components, functions, and capabilities at power with the prevailing competitors. The RPA firm was provisioning solutions to diversified business enterprises, including BFSI, HLS, Telecom, and Technology organizations (MSP, Product). The firm had expertise and solutions in Un-attended (RPA), attended (RDA), ML infused capabilities, chat, and custom solutions.
          </p>
        </div>

        {/* =====================================================
            RIGHT IMAGE
        ===================================================== */}
        <div className="digital-business-transformation__image">
          <img
            src="/images/services/target-missing.png"
            alt="Digital business transformation"
          />
        </div>
      </div>
    </section>
  );
}