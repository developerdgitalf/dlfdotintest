import "./DigitalTransformationRoadmap.css";

interface DigitalTransformationRoadmapProps {
  image?: string;
}

export default function DigitalTransformationRoadmap({
  image = "/images/thought-leadership/digital-it-roadmap.png",
}: DigitalTransformationRoadmapProps) {
  return (
    <section className="digital-roadmap-section">
      <div className="digital-roadmap-container">

        {/* =========================================
            LEFT 50% - CONTENT
        ========================================= */}

        <div className="digital-roadmap-left">
          <div className="digital-roadmap-text">
            <p>
              We have seen the transformation of IT in the course of time that
              has rechristened itself – Which is the natural trajectory as we
              acknowledge it. The roadmap has been through the obvious
              maturity of process – practice digitization and systems
              modernization. Most of the tasks and activities that were manual
              and system dependent and needed intervention. In due course
              tools have automated or sophisticated.
            </p>
          </div>
        </div>

        {/* =========================================
            RIGHT 50% - IMAGE ONLY
        ========================================= */}

        <div className="digital-roadmap-right">
          <div className="digital-roadmap-image">
            <img
              src={image}
              alt="Digital transformation roadmap"
            />
          </div>
        </div>

      </div>
    </section>
  );
}