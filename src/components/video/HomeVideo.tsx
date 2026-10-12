"use client";

import "./HomeVideo.css";

interface HomeVideoProps {
  videoSrc?: string;
}

export default function HomeVideo({
  videoSrc = "/videos/digital-fabric.mp4",
}: HomeVideoProps) {
  return (
    <section
      className="home-video-section"
      aria-label="DIGITALFABRIC® Home Video"
    >
      <div className="home-video-container">

        {/* =====================================================
            VIDEO
        ===================================================== */}

        <video
          className="home-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
        </video>


        {/* =====================================================
            VIDEO OVERLAY
        ===================================================== */}

        <div
          className="home-video-overlay"
          aria-hidden="true"
        />


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="home-video-content">

          <span className="home-video-eyebrow">
       
          </span>

          <h2 className="home-video-title">
          
          </h2>

          <div className="home-video-description">

            <p>
             
            </p>

          

          </div>

        </div>

      </div>
    </section>
  );
}