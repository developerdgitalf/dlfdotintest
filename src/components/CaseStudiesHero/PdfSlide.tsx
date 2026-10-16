
"use client";

import {
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import styles from "./PdfSlide.module.css";

// Configure the PDF.js worker.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfSlideProps {
  pdfPath?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function PdfSlide({
  pdfPath = "/documents/DIGITALFABRICCONSULTING_03OCT26.pdf",
  autoPlay = true,
  interval = 5000,
}: PdfSlideProps) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState(false);

  const presentationRef = useRef<HTMLDivElement>(null);

  // Reset only when the PDF source actually changes.
  const previousPdfPath = useRef(pdfPath);

  useEffect(() => {
    if (previousPdfPath.current === pdfPath) return;

    previousPdfPath.current = pdfPath;

    setNumPages(0);
    setPageNumber(1);
    setError(false);
    setIsPlaying(autoPlay);
  }, [pdfPath, autoPlay]);

  // PDF successfully loaded.
  const onLoadSuccess = useCallback(
    ({ numPages: totalPages }: { numPages: number }) => {
      console.info("[PdfSlide] Loaded PDF pages:", totalPages);

      if (!Number.isInteger(totalPages) || totalPages < 1) {
        console.error("[PdfSlide] Invalid PDF page count:", totalPages);
        setError(true);
        setIsPlaying(false);
        return;
      }

      setNumPages(totalPages);
      setPageNumber((currentPage) =>
        Math.min(Math.max(currentPage, 1), totalPages)
      );
      setError(false);
    },
    []
  );

  // Keep PDF loading errors inside the presentation.
  const onLoadError = useCallback((loadError: unknown) => {
    console.error("[PdfSlide] PDF loading error:", loadError);
    setError(true);
    setIsPlaying(false);
  }, []);

  // Previous slide.
  const previousSlide = useCallback(() => {
    startTransition(() => {
      setPageNumber((currentPage) =>
        Math.max(1, currentPage - 1)
      );
    });
  }, []);

  // Next slide. Never wrap automatically to slide one.
  const nextSlide = useCallback(() => {
    if (numPages < 1) return;

    startTransition(() => {
      setPageNumber((currentPage) =>
        Math.min(numPages, currentPage + 1)
      );
    });
  }, [numPages]);

  // Automatic playback. Stop at the last slide.
  useEffect(() => {
    if (!isPlaying || numPages <= 1 || pageNumber >= numPages) {
      if (isPlaying && numPages > 0 && pageNumber >= numPages) {
        setIsPlaying(false);
      }

      return;
    }

    const timer = window.setTimeout(() => {
      startTransition(() => {
        setPageNumber((currentPage) =>
          Math.min(numPages, currentPage + 1)
        );
      });
    }, Math.max(1000, interval));

    return () => window.clearTimeout(timer);
  }, [isPlaying, interval, numPages, pageNumber]);

  // Synchronize fullscreen state with the browser.
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement === presentationRef.current
      );
    };

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  // Enter or exit fullscreen.
  const toggleFullscreen = useCallback(async () => {
    const presentation = presentationRef.current;

    if (!presentation) return;

    try {
      if (document.fullscreenElement === presentation) {
        await document.exitFullscreen();
      } else {
        await presentation.requestFullscreen();
      }
    } catch (fullscreenError) {
      console.error(
        "[PdfSlide] Fullscreen error:",
        fullscreenError
      );
    }
  }, []);

  // Restart from the beginning only when the user presses Play.
  const togglePlayback = useCallback(() => {
    if (!isPlaying && numPages > 0 && pageNumber >= numPages) {
      startTransition(() => {
        setPageNumber(1);
      });

      setIsPlaying(true);
      return;
    }

    setIsPlaying((playing) => !playing);
  }, [isPlaying, numPages, pageNumber]);

  // Keyboard navigation within the presentation.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const presentation = presentationRef.current;
      const target = event.target as HTMLElement | null;

      if (!presentation) return;

      if (
        target?.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(
          target?.tagName ?? ""
        )
      ) {
        return;
      }

      const insidePresentation =
        (target !== null && presentation.contains(target)) ||
        document.fullscreenElement === presentation;

      if (!insidePresentation) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousSlide();
      } else if (event.code === "Space") {
        event.preventDefault();
        togglePlayback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, previousSlide, togglePlayback]);

  return (
    <section className={styles.section}>
      <div
        ref={presentationRef}
        className={styles.presentation}
      >
        <header className={styles.header}>
          <div className={styles.brand}>
            DIGITALFABRIC<span>®</span>
          </div>

          <span className={styles.headerLabel}>
            PRESENTATION
          </span>
        </header>

        <div
          className={styles.stage}
          tabIndex={0}
          aria-label="Presentation. Use left and right arrow keys to navigate."
          aria-busy={numPages === 0 && !error}
        >
          {error ? (
            <div className={styles.message} role="alert">
              <h3>Unable to load presentation</h3>
              <p>Check the PDF file and browser console.</p>
              <code>{pdfPath}</code>
            </div>
          ) : (
            <Document
              file={pdfPath}
              suspense={false}
              onLoadSuccess={onLoadSuccess}
              onLoadError={onLoadError}
              onSourceError={(sourceError) => {
                console.error(
                  "[PdfSlide] PDF source error:",
                  sourceError
                );
              }}
              loading={
                <div className={styles.message}>
                  Loading presentation...
                </div>
              }
              error={
                <div className={styles.message} role="alert">
                  Unable to open the PDF.
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                width={1200}
                suspense={false}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={
                  <div className={styles.message}>
                    Loading slide...
                  </div>
                }
                error={
                  <div className={styles.message} role="alert">
                    Unable to render this slide.
                  </div>
                }
                onRenderError={(renderError) => {
                  console.error(
                    "[PdfSlide] Page rendering error:",
                    renderError
                  );
                }}
              />
            </Document>
          )}
        </div>

        {!error && (
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={previousSlide}
              disabled={numPages === 0 || pageNumber <= 1}
              aria-label="Previous slide"
              title="Previous slide"
            >
              ←
            </button>

            <div className={styles.progressArea}>
              <span className={styles.currentPage}>
                {String(pageNumber).padStart(2, "0")}
              </span>

              <div
                className={styles.progressTrack}
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={Math.max(numPages, 1)}
                aria-valuenow={pageNumber}
                aria-label="Presentation progress"
              >
                <div
                  className={styles.progressFill}
                  style={{
                    width:
                      numPages > 0
                        ? `${(pageNumber / numPages) * 100}%`
                        : "0%",
                  }}
                />
              </div>

              <span className={styles.totalPages}>
                {numPages > 0
                  ? String(numPages).padStart(2, "0")
                  : "--"}
              </span>
            </div>

            <button
              type="button"
              className={styles.playButton}
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              title={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              <span>{isPlaying ? "Ⅱ" : "▶"}</span>
              {isPlaying ? "PAUSE" : "PLAY"}
            </button>

            <button
              type="button"
              className={styles.playButton}
              onClick={toggleFullscreen}
              aria-label={
                isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
              }
              title={
                isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
              }
            >
              <span>⛶</span>
              {isFullscreen ? "EXIT FULL SCREEN" : "FULL SCREEN"}
            </button>

            <button
              type="button"
              className={styles.navButton}
              onClick={nextSlide}
              disabled={numPages === 0 || pageNumber >= numPages}
              aria-label="Next slide"
              title="Next slide"
            >
              →
            </button>
          </div>
        )}

        <footer className={styles.footer}>
          <span>STRATEGY · TECHNOLOGY · TRANSFORMATION</span>

          <span>
            SLIDE {String(pageNumber).padStart(2, "0")}
            {numPages > 0 ? ` / ${numPages}` : " / --"}
          </span>
        </footer>
      </div>
    </section>
  );
}
