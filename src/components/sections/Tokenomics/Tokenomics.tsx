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

        {/* Validator Metrics (Snapshot): 4-28-2025 */}
        <div className={styles.validatorMetricsSection}>
          <h3 className={styles.validatorMetricsTitle}>Validator Metrics (Snapshot): 4-28-2025</h3>
          <ul className={styles.validatorMetricsList}>
            <li><strong>SOL Balance:</strong> 2.4631 (<span>$359.96</span>)</li>
            <li><strong>Credits:</strong> 46</li>
            <li><strong>Root slot:</strong> 336498185</li>
            <li><strong>Delegated Stake:</strong> 69,946.29 SOL (<span>$10,221,950.94</span>)</li>
            <li><strong>Active Stake:</strong> 65,677.5 SOL (<span>$9,598,110.66</span>)</li>
            <li><strong>Total Reward:</strong> 20.06 SOL (<span>$2,932.66</span>)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
