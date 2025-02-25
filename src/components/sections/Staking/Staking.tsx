"use client";

import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import type { NextPage } from "next";
import styles from "./Staking.module.scss";

const interFont = localFont({
  src: "../../../fonts/Inter.ttf",
  variable: "--font-inter"
});

const Staking: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle stake button click
  const handleStakeClick = () => {
    window.open(
      "https://stakewiz.com/validator/TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa",
      "_blank"
    );
  };

  return (
    <section className={`${styles.stakingSection} ${interFont.className}`}>
      <div className={styles.container}>
        {/* Header (moved above the box) */}
        <div className={styles.header}>
          <h1 className={styles.gradientHeading}>
            Staking SOL
          </h1>
          <p className={styles.subheading}>
            Stake $SOL—Join the Truth Revolution, secure the network & Earn Big.
          </p>
        </div>

        {/* Staking Box */}
        <div className={styles.stakingBox}>
          {/* Content */}
          <div className={styles.content}>
            {/* Video */}
            <div className={styles.videoContainer}>
              <video
                autoPlay
                loop
                muted
                className={styles.video}
                poster="/images/truth-placeholder.png"
              >
                <source src="/videos/truth.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text Content */}
            <div className={styles.textContainer}>
              <h2 className={styles.neonHeading}>
                transparent, immutable, unstoppable.
              </h2>
              <p className={styles.descriptionText}>
                Stake your SOL with the $TRUTH Node to power a transparent, immutable, and unstoppable network. 
                Earn 7–10% APY risk-free, secure the ecosystem, and fuel our mission to combat misinformation, 
                strengthen the $TRUTH token, and drive innovation.
              </p>

              {/* Stake Button - clickable */}
              <button 
                onClick={() => window.open("https://stakewiz.com/validator/TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa", "_blank")}
                className={styles.stakeButton}
                aria-label="Stake your SOL with TruthNode"
              >
                <span className={styles.buttonText}>Stake your SOL</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staking;


