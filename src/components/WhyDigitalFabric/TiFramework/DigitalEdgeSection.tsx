"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./DigitalEdgeSection.css";

export default function DigitalEdgeSection() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* =========================================================
     MOUNT CHECK
  ========================================================= */

  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================================================
     ESC KEY + BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    if (isImageOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isImageOpen]);

  return (
    <>
      {/* =====================================================
          MAIN SECTION
      ===================================================== */}

      <section
        className="digital-edge-section"
        aria-label="Three Critical Dimensions"
      >
        <div className="digital-edge-section__container">

          {/* =================================================
              LEFT TEXT
          ================================================= */}

          <div className="digital-edge-section__text">
            <div className="digital-edge-section__text-inner">
              <p>
                3 CRITICAL DIMENSIONS of Business transformation initiatives
                that are covered in{" "}
                <span>DIGITALFABRIC® – TI Framework.</span>
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <button
            type="button"
            className="digital-edge-section__visual"
            onClick={() => setIsImageOpen(true)}
            aria-label="Open critical dimensions image in full screen"
          >
            <img
              src="/images/why/critical-dimensions.svg"
              alt="Digital Edge governance, conformance and performance framework"
              className="digital-edge-section__image"
            />

            <span
              className="digital-edge-section__image-overlay"
              aria-hidden="true"
            />
          </button>
        </div>
      </section>

      {/* =====================================================
          FULL SCREEN LIGHTBOX
      ===================================================== */}

      {mounted &&
        isImageOpen &&
        createPortal(
          <div
            className="digital-edge-image-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Full critical dimensions image"
            onClick={() => setIsImageOpen(false)}
          >
            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              className="digital-edge-image-modal__close"
              onClick={() => setIsImageOpen(false)}
              aria-label="Close full screen image"
            >
              <span aria-hidden="true">×</span>
            </button>

            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              className="digital-edge-image-modal__content"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src="/images/why/critical-dimensions.svg"
                alt="Digital Edge governance, conformance and performance framework"
                className="digital-edge-image-modal__image"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}