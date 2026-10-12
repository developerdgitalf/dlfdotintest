"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import "./AndHow.css";

export default function AndHow() {
  const [isImageOpen, setIsImageOpen] = useState(false);

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
    <section className="and-how-section">
      <div className="and-how-container">

        {/* LEFT CONTENT */}
        <div className="and-how-content">
          <h2>And How?</h2>

          <p>
            Using the most basic methods and experiential knowledge that I have
            acquired during my associations with multiple frameworks, and the
            guidance of best-in-class leaders to successfully lead and drive
            such initiatives from the front.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <button
          type="button"
          className="and-how-visual"
          onClick={() => setIsImageOpen(true)}
          aria-label="Open Digital transformation ecosystem image"
        >
          <Image
            src="/images/why/ecosystem.svg"
            alt="Digital transformation strategy and innovation"
            fill
            className="and-how-image"
            sizes="(max-width: 768px) 100vw, 60vw"
          />

          <span
            className="and-how-image-overlay"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* =========================================
          FULL SCREEN IMAGE MODAL
      ========================================= */}

      {isImageOpen && (
        <div
          className="and-how-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Full ecosystem image"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            type="button"
            className="imageModalClose"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image"
          >
            <FiX />
          </button>

          <div
            className="and-how-image-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src="/images/why/ecosystem.svg"
              alt="Digital transformation strategy and innovation"
              className="and-how-image-modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}