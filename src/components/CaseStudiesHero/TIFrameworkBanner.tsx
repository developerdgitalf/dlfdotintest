"use client";

import { useRouter } from "next/navigation";
import "./TIFrameworkBanner.css";

interface TIFrameworkBannerProps {
  backgroundImage?: string;
}

export default function TIFrameworkBanner({
  backgroundImage = "/images/ti-bg.jpg",
}: TIFrameworkBannerProps) {
  const router = useRouter();

  const handleShowMore = () => {
    router.push("/why-digital-fabric/ti-framework");
  };

  return (
    <section
      className="ti-framework-banner"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
      aria-labelledby="ti-framework-title"
    >
      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}
      <div
        className="ti-framework-banner__overlay"
        aria-hidden="true"
      />

      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}
      <div className="ti-framework-banner__content">
        <h2 id="ti-framework-title">
          THE TI FRAMEWORK
        </h2>

        <button
          type="button"
          className="ti-framework-banner__button"
          onClick={handleShowMore}
        >
          SHOW MORE
        </button>
      </div>

      {/* =====================================================
          REDIRECT BUTTON
      ===================================================== */}
    
    </section>
  );
}