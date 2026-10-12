import "./ITSMEcosystem.css";

interface ITSMEcosystemProps {
  image?: string;
}

export default function ITSMEcosystem({
  image = "/images/knowledge-share/itsm.svg",
}: ITSMEcosystemProps) {
  return (
    <section className="itsm-ecosystem-section">
      <div className="itsm-ecosystem-container">
        <img
          src={image}
          alt="ITSM Ecosystem"
          className="itsm-ecosystem-image"
        />
      </div>
    </section>
  );
}