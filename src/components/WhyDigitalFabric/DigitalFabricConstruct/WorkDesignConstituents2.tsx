"use client";

import { useState } from "react";
import "./WorkDesignConstituents2.css";

type ConstituentId =
  | "people"
  | "process"
  | "platform"
  | "product"
  | "partnership";

type Constituent = {
  id: ConstituentId;
  label: string;
  shortDescription: string;
};

const constituents: Constituent[] = [
  {
    id: "people",
    label: "People",
    shortDescription:
      "People bring purpose, capability and human intelligence to every transformation. Their engagement creates the energy required to move an organization forward.",
  },
  {
    id: "process",
    label: "Process",
    shortDescription:
      "Process provides structure and direction. It connects the different parts of an organization and helps transformation become repeatable, measurable and sustainable.",
  },
  {
    id: "platform",
    label: "Platform",
    shortDescription:
      "Platform creates the digital foundation for scale. It enables technology, data and intelligence to work together as a connected ecosystem.",
  },
  {
    id: "product",
    label: "Product",
    shortDescription:
      "Product transforms ideas into meaningful outcomes. It connects organizational capability with customer value and measurable business impact.",
  },
  {
    id: "partnership",
    label: "Partnership",
    shortDescription:
      "Partnership extends organizational capability through collaboration, shared expertise and connected ecosystems that create greater collective value.",
  },
];

export default function WorkDesignConstituents2() {
  const [activeId, setActiveId] =
    useState<ConstituentId>("people");

  const activeItem =
    constituents.find((item) => item.id === activeId) ||
    constituents[0];

  return (
    <section className="work-constituents-section">
      <div className="work-constituents-container">
        <div className="work-constituents-grid">
          {/* ================= LEFT SIDE ================= */}
          <div className="constituents-visual">
            <div className="diagram-card">
              <div className="diagram-title">
                DIGITALFABRIC<sup>®</sup>
              </div>

              <svg
                className="fabric-diagram"
                viewBox="0 0 700 360"
                role="img"
                aria-label="Digital Fabric five constituent diagram"
              >
                {/* Centre convergence */}
                <circle
                  className="diagram-core"
                  cx="350"
                  cy="110"
                  r="48"
                />

                {/* PEOPLE */}
                <g
                  className={`wave-group ${
                    activeId === "people" ? "is-active people" : ""
                  }`}
                >
                  <path
                    className="fabric-wave wave-people"
                    d="M65 285 C125 55, 225 55, 350 210 C420 300, 485 280, 525 145"
                  />
                  <text
                    x="495"
                    y="135"
                    className="wave-label"
                  >
                    PEOPLE
                  </text>
                </g>

                {/* PROCESS */}
                <g
                  className={`wave-group ${
                    activeId === "process" ? "is-active process" : ""
                  }`}
                >
                  <path
                    className="fabric-wave wave-process"
                    d="M125 310 C175 45, 275 45, 385 210 C450 310, 525 285, 575 110"
                  />
                  <text
                    x="545"
                    y="100"
                    className="wave-label"
                  >
                    PROCESS
                  </text>
                </g>

                {/* PLATFORM */}
                <g
                  className={`wave-group ${
                    activeId === "platform" ? "is-active platform" : ""
                  }`}
                >
                  <path
                    className="fabric-wave wave-platform"
                    d="M195 325 C245 40, 340 45, 420 215 C485 315, 570 285, 630 75"
                  />
                  <text
                    x="590"
                    y="65"
                    className="wave-label"
                  >
                    PLATFORM
                  </text>
                </g>

                {/* PRODUCT */}
                <g
                  className={`wave-group ${
                    activeId === "product" ? "is-active product" : ""
                  }`}
                >
                  <path
                    className="fabric-wave wave-product"
                    d="M260 315 C300 55, 400 70, 465 220 C520 310, 610 295, 670 125"
                  />
                  <text
                    x="625"
                    y="115"
                    className="wave-label"
                  >
                    PRODUCT
                  </text>
                </g>

                {/* PARTNERSHIP */}
                <g
                  className={`wave-group ${
                    activeId === "partnership"
                      ? "is-active partnership"
                      : ""
                  }`}
                >
                  <path
                    className="fabric-wave wave-partnership"
                    d="M315 285 C365 80, 460 85, 510 220 C555 315, 640 310, 690 180"
                  />
                  <text
                    x="590"
                    y="170"
                    className="wave-label"
                  >
                    PARTNERSHIP
                  </text>
                </g>

                {/* Supporting labels */}
                <text x="15" y="245" className="support-label">
                  CULTURE FABRIC
                </text>
                <text x="80" y="300" className="support-label">
                  DATA FABRIC
                </text>
                <text x="145" y="340" className="support-label">
                  SYSTEMS FABRIC
                </text>

                <text x="275" y="235" className="support-label">
                  SOCIAL FABRIC
                </text>
                <text x="210" y="275" className="support-label">
                  CONSUMER FABRIC
                </text>
              </svg>
            </div>

            {/* Interactive category links */}
            <div className="constituent-links">
              {constituents.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`constituent-link ${
                    activeId === item.id ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <p className="interaction-hint">
              Hover over a constituent to explore its role
            </p>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="constituents-content">
            <span className="content-line" />

            <div className="content-copy">
              <p className="main-paragraph">
                The 5 waves in the logo represent 5 Work Design
                Constituents and the line holding the five waves
                denotes the entity, an organization empowered by
                these 5 work design constituents to transform the
                current state into a new state. There is a
                convergence point where all five independent waves
                meet and form a fabric-like structure perceived to
                be resilient and seamlessly integrated.
              </p>

              <div
                className="dynamic-paragraph"
                key={activeItem.id}
              >
                <span className="dynamic-label">
                  {activeItem.label}
                </span>

                <p>{activeItem.shortDescription}</p>
              </div>
            </div>

            <a href="#" className="read-more-link">
              Read More <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}