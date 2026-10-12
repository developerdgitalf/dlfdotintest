"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/Header.module.css";

const navigation = [
  {
    label: "Why DIGITALFABRIC®",
    href: "/why-digital-fabric",
    submenu: [
      {
        label: " Work Design Elements",
        href: "/why-digital-fabric/work-design-elements",
      },
      {
        label: "DIGITALFABRIC® Construct",
        href: "/why-digital-fabric/digital-fabric-construct",
      },
      {
        label: "TI framework",
        href: "/why-digital-fabric/ti-framework",
      },
      {
        label: "Our Team",
        href: "/why-digital-fabric/our-team",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Narrative & Positioning Strategy",
        href: "/services/narrative-positioning-strategy",
      },
      {
        label: "Business Capability",
        href: "/services/business-capability",
      },
      {
        label: "Advisory & Consulting",
        href: "/services/advisory-consulting",
      },
      {
        label: "Research & Market Study",
        href: "/services/research-market-study",
      },
    ],
  },
  {
    label: "Knowledge Area",
    href: "/knowledge-share",
    submenu: [
      {
        label: "Enterprises transformation",
        href: "/knowledge-share/enterprises-transformation",
      },
      
     
    ],
  },
  {
    label: "Insights",
    href: "/featured-insights",
    submenu: [
      {
        label: "Mindset Matters",
        href: "/featured-insights/mindset-matters",
      },
      {
        label: "Thought Leadership",
        href: "/featured-insights/thought-leadership",
      },
      {
        label: "Articles & Papers",
        href: "/featured-insights/articles-papers",
      },
      {
        label: "Tech Handouts",
        href: "/featured-insights/tech-handouts",
      },
       {
        label: "New Age Tech",
        href: "/knowledge-share/new-age-tech",
      },
    ],
  },
  {
    label: "Success Stories",
    href: "/case-studies",
  },
  {
    label: "Social Action",
    href: "/social-action",
  },
];

type HeaderProps = {
  innerPage?: boolean;
};

export default function Header({
  innerPage = false,
}: HeaderProps) {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] =
    useState<string | null>(null);

  const dropdownTimeout =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =====================================================
     ARTICLE PAGE DETECTION
  ===================================================== */

  const isArticlePage =
    pathname.startsWith("/insights/");

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ===================================================== */

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setOpenMobileMenu(null);
  }, [pathname]);

  /* =====================================================
     CLEANUP
  ===================================================== */

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) {
        clearTimeout(dropdownTimeout.current);
      }
    };
  }, []);

  /* =====================================================
     ACTIVE ROUTE
  ===================================================== */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  /* =====================================================
     DROPDOWN
  ===================================================== */

  const openDropdownMenu = (label: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }

    setOpenDropdown(label);
  };

  const closeDropdownMenu = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }

    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
      dropdownTimeout.current = null;
    }, 700);
  };

  const toggleDropdown = (label: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }

    setOpenDropdown((current) =>
      current === label ? null : label
    );
  };

  /* =====================================================
     MOBILE SUBMENU
  ===================================================== */

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileMenu((current) =>
      current === label ? null : label
    );
  };

  /* =====================================================
     LOGO

     DEFAULT:
     white logo

     SCROLLED / ARTICLE:
     colored logo
  ===================================================== */

  const desktopLogo =
    scrolled || isArticlePage
      ? "/images/digitalfabric-logo-white-CLR.svg"
      : "/images/digitalfabric-logo-white.svg";

  return (
    <>
      {/* =================================================
          MAIN HEADER
      ================================================= */}

      <header
        className={`${styles.header} ${
          scrolled ? styles.scrolled : ""
        } ${
          isArticlePage
            ? styles.articleHeader
            : ""
        } ${
          innerPage
            ? styles.innerHeader
            : ""
        }`}
      >
        <div className={styles.headerContainer}>

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className={styles.logoLink}
            aria-label="DIGITALFABRIC Home"
          >
            <img
              src={desktopLogo}
              alt="DIGITALFABRIC"
              className={styles.logo}
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className={styles.desktopNav}
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const hasSubmenu =
                item.submenu &&
                item.submenu.length > 0;

              const isDropdownOpen =
                openDropdown === item.label;

              return (
                <div
                  className={styles.navItem}
                  key={item.label}
                  onMouseEnter={() => {
                    if (hasSubmenu) {
                      openDropdownMenu(
                        item.label
                      );
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasSubmenu) {
                      closeDropdownMenu();
                    }
                  }}
                >
                  {hasSubmenu ? (
                    <>
                      <div
                        className={
                          styles.navWithDropdown
                        }
                      >
                        <Link
                          href={item.href}
                          className={`${
                            styles.navLink
                          } ${
                            isActive(item.href)
                              ? styles.activeNav
                              : ""
                          }`}
                        >
                          {item.label}
                        </Link>

                        <button
                          type="button"
                          className={
                            styles.dropdownToggle
                          }
                          aria-label={`Open ${item.label} menu`}
                          aria-expanded={
                            isDropdownOpen
                          }
                          onClick={() =>
                            toggleDropdown(
                              item.label
                            )
                          }
                        >
                          <span
                            className={`${
                              styles.chevron
                            } ${
                              isDropdownOpen
                                ? styles.chevronOpen
                                : ""
                            }`}
                          />
                        </button>
                      </div>

                      <div
                        className={`${
                          styles.dropdown
                        } ${
                          isDropdownOpen
                            ? styles.dropdownOpen
                            : ""
                        }`}
                        onMouseEnter={() =>
                          openDropdownMenu(
                            item.label
                          )
                        }
                      >
                        {item.submenu?.map(
                          (subItem) => (
                            <Link
                              href={subItem.href}
                              className={
                                styles.dropdownLink
                              }
                              key={subItem.label}
                            >
                              {subItem.label}
                            </Link>
                          )
                        )}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${
                        styles.navLink
                      } ${
                        isActive(item.href)
                          ? styles.activeNav
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* =================================================
              HAMBURGER
          ================================================= */}

          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(true)
            }
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <div
        className={`${
          styles.mobileOverlay
        } ${
          mobileOpen
            ? styles.mobileOverlayOpen
            : ""
        }`}
      >
        <div
          className={
            styles.mobileMenuHeader
          }
        >
          <Link
            href="/"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <img
              src="/images/digitalfabric-logo-white.svg"
              alt="DIGITALFABRIC"
              className={styles.mobileLogo}
            />
          </Link>

          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close menu"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            ×
          </button>
        </div>

        <nav className={styles.mobileNav}>
          {navigation.map((item) => {
            const hasSubmenu =
              item.submenu &&
              item.submenu.length > 0;

            const isMobileSubmenuOpen =
              openMobileMenu === item.label;

            return (
              <div
                className={
                  styles.mobileNavItem
                }
                key={item.label}
              >
                {hasSubmenu ? (
                  <>
                    <div
                      className={
                        styles.mobileNavTop
                      }
                    >
                      <Link
                        href={item.href}
                        className={
                          styles.mobileSingleLink
                        }
                        onClick={() =>
                          setMobileOpen(false)
                        }
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        className={
                          styles.mobileArrowButton
                        }
                        aria-label={`Open ${item.label} submenu`}
                        aria-expanded={
                          isMobileSubmenuOpen
                        }
                        onClick={() =>
                          toggleMobileSubmenu(
                            item.label
                          )
                        }
                      >
                        <span
                          className={`${
                            styles.mobileChevron
                          } ${
                            isMobileSubmenuOpen
                              ? styles.mobileChevronOpen
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      className={`${
                        styles.mobileSubmenu
                      } ${
                        isMobileSubmenuOpen
                          ? styles.mobileSubmenuOpen
                          : ""
                      }`}
                    >
                      {item.submenu?.map(
                        (subItem) => (
                          <Link
                            href={subItem.href}
                            key={subItem.label}
                            onClick={() =>
                              setMobileOpen(false)
                            }
                          >
                            {subItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={
                      styles.mobileSingleLink
                    }
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}