"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import GenericButton from "@/components/Button/Button";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const truthAddress = "2GmUPhpe93kcTJZrC7NJ2keeDZRT5dBveUgegb13pump";
  const buyLink =
    "https://jup.ag/swap/SOL-2GmUPhpe93kcTJZrC7NJ2keeDZRT5dBveUgegb13pump";

  const headerRef = useRef<HTMLDivElement>(null);

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(truthAddress);
    alert(`Copied: ${truthAddress}`);
  };

  // Open buy link
  const handleBuy = () => {
    window.open(buyLink, "_blank");
  };

  // -- Scroll logic to toggle .scrolled class --
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const scrollPosition = window.scrollY;
      
      // Add .scrolled class after scrolling 50px
      if (scrollPosition > 50) {
        headerRef.current.classList.add(styles.scrolled);
      } else {
        headerRef.current.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      {/* Logo - now first */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/verafy_blue.png"
            alt="Verafy Logo"
            width={140}
            height={140}
            className={styles.logoVerafyIcon}
          />
        </Link>
      </div>

      {/* Navigation links */}
      <nav className={styles.nav}>
        <Link href="/" passHref legacyBehavior>
          <div className={`${styles.navItem} ${styles.homeNavItem}`}>
            <GenericButton label="Home" />
          </div>
        </Link>
        <Link href="/tokenomics" passHref legacyBehavior>
          <div className={styles.navItem}>
            <GenericButton label="Tokenomics" />
          </div>
        </Link>
        <Link href="/mission" passHref legacyBehavior>
          <div className={styles.navItem}>
            <GenericButton label="Mission" />
          </div>
        </Link>
        <Link href="/roadmap" passHref legacyBehavior>
          <div className={styles.navItem}>
            <GenericButton label="Roadmap" />
          </div>
        </Link>
      </nav>

      {/* Button group */}
      <div className={styles.buttonGroup}>
        <button className={styles.buttonSmallCa} onClick={handleCopy}>
          <div className={styles.copyCaParent}>
            <div className={styles.copyCa}>copy ca</div>
            <Image
              src="/images/icons/contentcopy.svg"
              alt="Copy Icon"
              width={24}
              height={24}
              className={styles.contentCopy24dpUndefinedFiIcon}
            />
          </div>
        </button>

        <button className={styles.button} onClick={handleBuy}>
          <div className={styles.buyTruth}>Buy $Truth</div>
        </button>
      </div>
    </header>
  );
};

export default Header;







