import Image from "next/image";
import "./DigitalFabricInsight.css";

export default function DigitalFabricInsight() {
  return (
    <section
      className="digital-fabric-insight"
      aria-labelledby="digital-fabric-insight-text"
    > 
      <div className="site-container">
        <div className="digital-fabric-insight-card">

          {/* =========================================
              LEFT IMAGE
          ========================================= */}
          <div className="digital-fabric-insight-image">
            <Image
              src="/images/why/insight-network.png"
              alt="Digital Fabric connected network"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="digital-fabric-insight-image-element"
              priority
            />
          </div>




          {/* =========================================
              RIGHT CONTENT
          ========================================= */}
          <div className="digital-fabric-insight-content">
           

            <p id="digital-fabric-insight-text">
              DIGITALFABRIC® is a Being Digital &amp; Not doing Digital®
              ideology supported by a comprehensive framework and guidance
              that embeds the Work Design Constituents (The building blocks
              <br/> of the organization).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}