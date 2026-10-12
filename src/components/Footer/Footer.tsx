import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          
          {/* Brand Section */}
          <div className={styles.brandSection}>
          <Link href="/" aria-label="DigitalFabric Home">
  <Image
    src="/images/digitalfabric-logo-white-CLR.svg"
    alt="DigitalFabric"
    width={150}
    height={80}
    className={styles.logo}
  />
</Link>

           
          </div>

          {/* Quick Links */}
          <div className={styles.linkSection}>
            <h3>Quick Links</h3>

            <a href="why-digital-fabric">About us</a>
            <a href="services">Services</a>
            <a href="knowledge-share">Knowledge Area</a>
              <a href="featured-insights">Insights</a>
          </div>

          {/* What We Do */}
          <div className={styles.linkSection}>
            <h3>Knowledge Area</h3>

            <a href="knowledge-share/transformation">Transformation</a>
            <a href="#knowledge-share/ai-automation">AI and Automation</a>
            <a href="#knowledge-share/it-governance">IT Governance</a>
            <a href="knowledge-share/new-age-tech">New Age Tech</a>
            
          </div>

          {/* Insights */}
          <div className={styles.linkSection}>
            <h3>Insights</h3>

            <a href="featured-insights/mindset-matters"> Mindset Matters</a>
            <a href="featured-insights/thought-leadership"> Thought Leadership</a>
            <a href="featured-insights/articles-papers"> Articles & Papers</a>
             <a href="featured-insights/tech-handouts"> Tech Handouts</a>
          </div>

          {/* Social & Contact */}
          <div className={styles.socialSection}>
            <h3>Follow Us</h3>

            <div className={styles.socialIcons}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                aria-label="Follow DigitalFabric on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/digitalfabric/"
                aria-label="Follow DigitalFabric on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className={styles.contactInfo}>
              <p>Hyderabad, India</p>

              <a href="mailto:info@digitalfabric.in">
                Email: info@digitalfabric.in
              </a>

              
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© 2026 DIGITALFABRIC®. All rights reserved.</p>
      </div>
    </footer>
  );
}