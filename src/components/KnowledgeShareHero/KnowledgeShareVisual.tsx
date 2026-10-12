"use client";

import "./KnowledgeShareVisual.css";

export default function KnowledgeShareVisual() {
  return (
    <section
      className="knowledge-share-visual"
      aria-label="Infobytes knowledge resources"
    >
      <div className="knowledge-share-visual__container">
        <img
          src="/images/knowledge-share/infobytes.png"
          alt="Infobytes knowledge resources including directional insights, mindshare, info-shots, patterns and statistics, anecdotes and diagrams"
          className="knowledge-share-visual__image"
        />
      </div>
    </section>
  );
}