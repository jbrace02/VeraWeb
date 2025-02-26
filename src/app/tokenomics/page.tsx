"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Tokenomics.module.scss";

export default function TokenomicsPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleStakeClick = () => {
    window.open("https://stake.verafy.io", "_blank");
  };

  return (
    <main className={styles.tokenomicsPage}>
      {/* Top "Header" Section */}
      <section className={styles.headerSection}>
        <h1>$TRUTH TOKENOMICS</h1>
        <p>
          Verified facts on-chain. No corruption, no bias—
          just blockchain-backed truth.
        </p>
      </section>

      {/* Main Content Area with Black Box */}
      <section className={styles.contentArea}>
        {/* Tokenomics Box */}
        <div className={styles.tokenomicsBox}>
          {/* A Fair and Transparent Launch */}
          <div className={styles.contentBlock}>
            <h2>A Fair and Transparent Launch</h2>
            <p>
              Our tokenomics is built on simplicity, fairness, and community power. 
              We&apos;ve created a transparent ecosystem where everyone has an equal stake 
              in shaping the future of truth.
            </p>
          </div>

          {/* Fair Launch */}
          <div className={styles.contentBlock}>
            <h3>Fair Launch, Always</h3>
            <p>
              No pre-sales. No hidden allocations. All 1 billion <span className={styles.truthToken}>$TRUTH</span> tokens 
              were minted at launch—ensuring everyone starts on equal footing.
            </p>
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
            <div className={styles.pieChartTitle}>Fair Launch, Always.</div>
          </div>

          {/* Community-First */}
          <div className={styles.contentBlock}>
            <h3>Community-First Distribution</h3>
            <p>
              From day one, the entire supply belongs to the community. No team holdings, 
              no insider allocations. Our journey is powered by community trust.
            </p>
          </div>

          {/* Locked Liquidity */}
          <div className={styles.contentBlock}>
            <h3>Locked Liquidity for Security</h3>
            <p>
              To build confidence and protect against volatility, we locked 7M tokens for 90 days. 
              This commitment reflects our focus on stability and long-term growth.
            </p>
          </div>

          {/* Utility + Ecosystem */}
          <div className={styles.contentBlock}>
            <h3>Powerful Utility & Incentives</h3>
            <p>
              Every TruthChain transaction incurs a small <span className={styles.truthToken}>$TRUTH</span> fee,
              which flows back into development and ecosystem growth.
            </p>
            <p>
              Holding <span className={styles.truthToken}>$TRUTH</span> gives you a voice. Participate in governance, 
              propose updates, and vote on key decisions. The platform evolves with 
              the collective wisdom of its community.
            </p>
            <p>
              Stake <span className={styles.truthToken}>$TRUTH</span> to secure the network and earn ~7.2% APY. 
              Staking aligns incentives and strengthens our resilience.
            </p>
          </div>

          {/* Community Validator */}
          <div className={styles.contentBlock}>
            <h3>Community Validator: TruthNode</h3>
            <p>
              TruthNode isn&apos;t just a validator—it&apos;s our community-operated node that 
              supports development, funds buybacks, and drives operational excellence.
              It embodies our decentralized vision.
            </p>

            <div className={styles.validatorHeadingContainer}>
              <div className={styles.validatorHeadingPlain}>Validator Metrics (Snapshot): 2-25-2025</div>
            </div>
            <ul className={styles.validatorMetrics}>
              <li><strong>SOL Balance:</strong> <span>6.3879 SOL (~$892.71)</span></li>
              <li><strong>Active Stake:</strong> <span>21,642.34 SOL (~$3,024,518.14)</span></li>
              <li><strong>Commission:</strong> <span>5%</span></li>
              <li><strong>Validator Identity:</strong> <span>TruthNode</span></li>
            </ul>
            <div className={styles.voteAccountContainer}>
              <div className={styles.voteAccountLabel}>Vote Account:</div>
              <div className={styles.voteAccountValue}>TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa</div>
            </div>
            <p>
              TruthNode earns fees through network participation, supporting development 
              and strategic <span className={styles.truthToken}>$TRUTH</span> buybacks. This aligns community interests 
              with long-term platform success.
            </p>
          </div>

          {/* Future of Truth */}
          <div className={styles.contentBlock}>
            <h3>Built for a Future of Truth</h3>
            <p>
              Every element of our tokenomics is designed to inspire trust and spark innovation.
              Simple, transparent, and built to last.
            </p>
            <ul className={styles.futureOfTruth}>
              <li><strong>No Hidden Agendas:</strong> <span>Every token and transaction is fully visible.</span></li>
              <li><strong>Community-Driven:</strong> <span>You hold the power to shape our path forward.</span></li>
              <li><strong>Sustainable Vision:</strong> <span>With robust incentives and dynamic utility, <span className={styles.truthToken}>$TRUTH</span> is poised to grow and thrive.</span></li>
            </ul>
          </div>
        </div>

        {/* Enhanced Stake Button */}
        <div className={styles.buttonContainer}>
          <button className={styles.enhancedStakeButton} onClick={handleStakeClick}>
            <div className={styles.buttonGlow}></div>
            <span className={styles.buttonText}>Stake your SOL</span>
          </button>
        </div>

        {/* Go Back Button (moved into content area) */}
        <div className={styles.buttonContainer}>
          <div className={styles.goBackButton} onClick={handleGoBack}>
            <Image
              src="/images/icons/Vector.svg"
              alt="Arrow icon"
              width={14}
              height={22}
              className={styles.vectorIcon}
            />
            <span>Go back</span>
          </div>
        </div>
      </section>
    </main>
  );
}