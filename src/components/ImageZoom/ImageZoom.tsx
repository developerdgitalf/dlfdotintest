"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

import "./ImageZoom.css";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  modalClassName?: string;
}

export default function ImageZoom({
  src,
  alt,
  className = "",
  sizes,
  modalClassName = "",
}: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* =========================================================
     CLIENT MOUNT
  ========================================================= */

  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================================================
     ESCAPE + SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* =====================================================
          NORMAL IMAGE
      ===================================================== */}

      <button
        type="button"
        className={`image-zoom-trigger ${className}`}
        onClick={() => setIsOpen(true)}
        aria-label={`Open ${alt} in full screen`}
      >
        <img
          src={src}
          alt={alt}
          className="image-zoom-image"
          sizes={sizes}
        />

        <span
          className="image-zoom-overlay"
          aria-hidden="true"
        />
      </button>

      {/* =====================================================
          FULLSCREEN MODAL
          RENDER DIRECTLY INTO BODY
      ===================================================== */}

      {mounted &&
        isOpen &&
        createPortal(
          <div
            className={`image-zoom-modal ${modalClassName}`}
            role="dialog"
            aria-modal="true"
            aria-label={`Full screen ${alt}`}
            onClick={() => setIsOpen(false)}
          >
            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              className="image-zoom-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close image"
            >
              <FiX />
            </button>

            {/* =================================================
                IMAGE CONTENT
            ================================================= */}

            <div
              className="image-zoom-modal-content"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="image-zoom-modal-image"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}