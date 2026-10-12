import "./PDFViewerSection.css";

interface PDFViewerSectionProps {
  pdfPath?: string;
}

export default function PDFViewerSection({
  pdfPath = "/documents/DF_Brand-Brochure-1.pdf",
}: PDFViewerSectionProps) {
  return (
    <section className="pdf-viewer-section">
      <div className="pdf-viewer-container">
        <iframe
          src={pdfPath}
          title="Digital is the new IT Fabric"
          className="pdf-viewer-frame"
        />
      </div>
    </section>
  );
}