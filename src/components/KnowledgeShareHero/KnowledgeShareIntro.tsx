"use client";

import "./KnowledgeShareIntro.css";

export default function KnowledgeShareIntro() {
  return (
    <section
      className="knowledgeShareIntro"
      aria-label="Knowledge Area information"
    >
      <div className="knowledgeShareIntro__container">

        <div className="knowledgeShareIntro__content">
          <p>
            Changes are taking place as we are locked on one. I am sharing a
            view on a topic that I have been working closely with and/or the
            compelling areas in and around my personal and professional career
            – a brief explanatory note will end up being part of this page.
          </p>
        </div>

        <div className="knowledgeShareIntro__content">
          <p>
            Benchmarking study, Research papers, and an unvarnished view on a
            concept – function – or event will be published here. Also,
            infographics and slides will be a part of knowledge documents to
            help deliver a point most simplistically.
          </p>
        </div>

      </div>
    </section>
  );
}