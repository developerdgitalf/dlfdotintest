"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./InnerNavbar.module.css";

export default function InnerNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveItem(null);
  };

  return (
    <>
      {/* =========================
          INNER PAGE NAVBAR
      ========================== */}
      <header className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Digital Fabric Home">
            <span>DIGITAL</span>
            <span>FABRIC<sup>®</sup></span>
            <small>THE TI FRAMEWORK</small>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/why-digital-fabric">
              Why DIGITALFABRIC<sup>®</sup>
            </Link>

            <button type="button" onClick={() => setMenuOpen(true)}>
              Services <span>⌄</span>
            </button>

            <button type="button" onClick={() => setMenuOpen(true)}>
              Knowledge Share <span>⌄</span>
            </button>

            <button type="button" onClick={() => setMenuOpen(true)}>
              Insights <span>⌄</span>
            </button>

            <button type="button" onClick={() => setMenuOpen(true)}>
              Success Stories
            </button>
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            className={`${styles.menuButton} ${
              menuOpen ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* =========================
          FULL SCREEN MENU
      ========================== */}
      <div
        className={`${styles.menuOverlay} ${
          menuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.overlayTop}>
          {/* Logo */}
        <Link href="/" className={styles.logo}>
  <span>DIGITAL</span>
  <span>
    FABRIC<sup>®</sup>
  </span>
  <small>THE TI FRAMEWORK</small>
</Link>

          {/* Close */}
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className={styles.overlayLine} />

        {/* Menu Items */}
        <nav className={styles.overlayNav}>
          {/* Why DigitalFabric */}
          <div className={styles.menuGroup}>
            <button
              className={styles.menuRow}
              onClick={() => toggleItem("why")}
            >
              <span>Why DIGITALFABRIC<sup>®</sup></span>
              <b>{activeItem === "why" ? "×" : "+"}</b>
            </button>

            <div
              className={`${styles.subMenu} ${
                activeItem === "why" ? styles.subMenuOpen : ""
              }`}
            >
              <Link href="/why-digital-fabric" onClick={closeMenu}>
                5 Work Design Elements
              </Link>
              <Link href="/why-digital-fabric" onClick={closeMenu}>
                Digital Fabric Struct
              </Link>
              <Link href="/why-digital-fabric" onClick={closeMenu}>
                The TI Framework
              </Link>
              <Link href="/why-digital-fabric" onClick={closeMenu}>
                Our Team
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className={styles.menuGroup}>
            <button
              className={styles.menuRow}
              onClick={() => toggleItem("services")}
            >
              <span>Services</span>
              <b>{activeItem === "services" ? "×" : "+"}</b>
            </button>

            <div
              className={`${styles.subMenu} ${
                activeItem === "services" ? styles.subMenuOpen : ""
              }`}
            >
              <a href="#services" onClick={closeMenu}>
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Knowledge */}
          <div className={styles.menuGroup}>
            <button
              className={styles.menuRow}
              onClick={() => toggleItem("knowledge")}
            >
              <span>Knowledge Share</span>
              <b>{activeItem === "knowledge" ? "×" : "+"}</b>
            </button>

            <div
              className={`${styles.subMenu} ${
                activeItem === "knowledge" ? styles.subMenuOpen : ""
              }`}
            >
              <a href="#knowledge-share" onClick={closeMenu}>
                Articles & Knowledge
              </a>
            </div>
          </div>

          {/* Insights */}
          <div className={styles.menuGroup}>
            <button
              className={styles.menuRow}
              onClick={() => toggleItem("insights")}
            >
              <span>Insights</span>
              <b>{activeItem === "insights" ? "×" : "+"}</b>
            </button>

            <div
              className={`${styles.subMenu} ${
                activeItem === "insights" ? styles.subMenuOpen : ""
              }`}
            >
              <a href="#insights" onClick={closeMenu}>
                Latest Insights
              </a>
            </div>
          </div>

          {/* Success Stories */}
          <div className={styles.menuGroup}>
            <Link
              href="/success-stories"
              className={styles.menuRowLink}
              onClick={closeMenu}
            >
              <span>Success Stories</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}