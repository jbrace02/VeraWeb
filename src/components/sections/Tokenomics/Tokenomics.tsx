"use client";

import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import type { NextPage } from "next";
import styles from "./Tokenomics.module.scss";

/**
 * Inter font
 * Adjust src path if needed.
 */
const interFont = localFont({
  src: "../../../fonts/Inter.ttf",
  variable: "--font-inter",
});

const Tokenomics: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.tokenomicsSection} ${interFont.className} ${isVisible ? styles.visible : ''}`}>
      {/* Main Title and Subtitle */}
      <div className={styles.header}>
        <h2 className={styles.tokenomicsTitle}>$TRUTH Tokenomics</h2>
        <p className={styles.tokenomicsSubtitle}>Pure, Fair, Unstoppable</p>
      </div>

      {/* Tokenomics Box */}
      <div className={styles.tokenomicsBox}>
        {/* Fair Launch Title */}
        <div className={styles.contentBlock}>
          <h3 className={styles.fairLaunchTitle}>Fair Launch, Always.</h3>
        </div>

        {/* Enhanced Pie Chart */}
        <div className={styles.pieChartContainer}>
          <div className={styles.pieChart}>
            {/* Labels inside the pie chart */}
            <div className={styles.pieChartLabels}>
              <div className={styles.freeLabel}>Free: 99.3%</div>
              <div className={styles.lockedLabel}>Locked: 0.7%</div>
            </div>
          </div>
          
          {/* Legend below the chart */}
          <div className={styles.pieChartLegend}>
            <span className={styles.locked}>Locked: 7M (0.7%)</span>
            <span className={styles.free}>Free: 993M (99.3%)</span>
          </div>
        </div>

        {/* Description */}
        <p className={styles.launchDescription}>
          No pre-sales. No hidden allocations. 1 billion $TRUTH tokens minted at launch—7M tokens (0.7%) 
          locked by the team, 993M (99.3%) released to the public. Equal access for all. 
          All unlocked tokens are in circulation, with no emission schedule.
        </p>
      </div>
    </section>
  );
};

export default Tokenomics;






