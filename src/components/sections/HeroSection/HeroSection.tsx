"use client";

import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./HeroSection.module.scss";

const interFont = localFont({
  src: "../../../fonts/Inter.ttf",
  variable: "--font-inter",
});

const neoneon = localFont({
  src: "../../../fonts/Neoneon.otf",
  variable: "--font-neoneon",
});

const HeroSection: NextPage = () => {
  const handleVisitTerminal = () => {
    window.open("https://truthterminalmvp-production.up.railway.app/", "_blank");
  };

  return (
    <section className={`${styles.heroSection} ${interFont.className}`}>
      {/* The text block at the top (heading + subheading) */}
      <div className={styles.textBlock}>
        <h1 className={styles.gradientHeading}>Meet Vera–A Guardian of Truth</h1>
        <p className={styles.subheading}>
          Vera is Truth&apos;s AI agent, built on ElizaOS. Relentlessly evolving to
          uncover and combat misinformation.
        </p>
      </div>

      {/* Video Box */}
      <div className={styles.videoBox}>
        {/* Video container, neon "VERA" tab, social icons, etc. */}
        <div className={styles.videoContainer}>
          <video 
            className={styles.videoPlayer} 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/vera-poster.jpg"
            aria-label="Vera AI agent visualization video"
          >
            <source src="/videos/vera.mp4" type="video/mp4" />
            <source src="/videos/vera.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className={`${styles.veraTab} ${neoneon.className}`}>
            <span>VERA</span>
          </div>
          <div className={styles.socialIconsContainer}>
            <div className={styles.socialIcons}>
              {/* DexScreener */}
              <a
                href="https://dexscreener.com/solana/c6v95dsd2yndcaosvsidufe8hpeqnfnex1xxkfskorrn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconWrapper}
                aria-label="DexScreener"
              >
                <Image
                  src="/images/icons/Subtract.svg"
                  alt="DexScreener"
                  width={24}
                  height={24}
                />
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/truth_chain"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconWrapper}
                aria-label="Telegram"
              >
                <Image
                  src="/images/icons/telegram.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/truthchain"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconWrapper}
                aria-label="X (Twitter)"
              >
                <Image
                  src="/images/icons/x.svg"
                  alt="X"
                  width={24}
                  height={24}
                />
              </a>
              {/* Discord */}
              <a
                href="https://discord.gg/TBvndJPVkr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconWrapper}
                aria-label="Discord"
              >
                <Image
                  src="/images/icons/discord.svg"
                  alt="Discord"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* "Visit the Terminal" button at the bottom */}
      <button className={styles.ctaButton} onClick={handleVisitTerminal}>
        <span className={styles.buttonText}>Visit the Terminal</span>
      </button>
    </section>
  );
};

export default HeroSection;




























