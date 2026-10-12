"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

import styles from "./TIFrameworkDiagram.module.css";

export default function TIFrameworkDiagram() {
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

      <section className={styles.section}>
        <div className={styles.container}>

          {/* =================================================
              DIAGRAM
          ================================================= */}

          <button
            type="button"
            className={styles.imageWrapper}
            onClick={() => setIsImageOpen(true)}
            aria-label="Open DigitalFabric TI-Framework diagram"
          >
            
            <Image
              src="/images/why/stingray-model.svg"
              alt="DigitalFabric TI-Framework diagram"
              width={1400}
              height={800}
              className={styles.image}
              priority={false}
            />

          </button>
        </div>
      </section>

      {/* =====================================================
          FULL SCREEN IMAGE MODAL
      ===================================================== */}

      {mounted &&
        isImageOpen &&
        createPortal(
          <div
            className={styles.imageModal}
            role="dialog"
            aria-modal="true"
            aria-label="Full DigitalFabric TI-Framework diagram"
            onClick={() => setIsImageOpen(false)}
          >
            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              className={styles.imageModalClose}
              onClick={() => setIsImageOpen(false)}
              aria-label="Close image"
            >
              <FiX />
            </button>

            {/* =================================================
                FULL IMAGE
            ================================================= */}

            <div
              className={styles.imageModalContent}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src="/images/why/stingray-model.svg"
                alt="DigitalFabric TI-Framework diagram"
                className={styles.imageModalImage}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}