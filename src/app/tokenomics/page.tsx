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
    window.open("https://stakewiz.com/validator/TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa", "_blank");
  };

  return (
    <main className={styles.tokenomicsPage}>
      {/* Top "Header" Section */}
      <section className={styles.headerSection}>
        <h1 className={styles.headerTitle}>$TRUTH TOKENOMICS</h1>
        <p className={styles.headerText}>
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
            <h2 className={styles.sectionTitle}>A Fair and Transparent Launch</h2>
            <p className={styles.contentText}>
              Our tokenomics is built on simplicity, fairness, and community power. 
              We&apos;ve created a transparent ecosystem where everyone has an equal stake 
              in shaping the future of truth.
            </p>
          </div>

          {/* Fair Launch */}
          <div className={styles.contentBlock}>
            <h3 className={styles.sectionSubtitle}>Fair Launch, Always</h3>
            <p className={styles.contentText}>
              No pre-sales. No hidden allocations. All 1 billion <span className={styles.truthToken}>$TRUTH</span> tokens 
              were minted at launch—ensuring everyone starts on equal footing.
            </p>
          </div>

          {/* CSS-based Pie Chart */}
          <div className={styles.tokenAllocationChart}>
            <div className={styles.pieChartContainer}>
              <div className={styles.pieChart}>
                <div className={styles.slice}></div>
              </div>
              <div className={styles.chartLabels}>
                <div className={styles.freeLabel}>Free:</div>
                <div className={styles.freeValue}>99.3%</div>
                <div className={styles.lockedLabel}>Locked: 0.7%</div>
              </div>
            </div>
            
            <div className={styles.chartLegend}>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColor} ${styles.lockedColor}`}></div>
                <span className={styles.legendText}>Locked: <span className={styles.legendValue}>7M (0.7%)</span></span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColor} ${styles.freeColor}`}></div>
                <span className={styles.legendText}>Free: <span className={styles.legendValue}>993M (99.3%)</span></span>
              </div>
            </div>
          </div>

          {/* Community-First */}
          <div className={styles.contentBlock}>
            <h3 className={styles.sectionSubtitle}>Community-First Distribution</h3>
            <p className={styles.contentText}>
              From day one, the entire supply belongs to the community. No team holdings, 
              no insider allocations. Our journey is powered by community trust.
            </p>
          </div>

          {/* Locked Liquidity */}
          <div className={styles.contentBlock}>
            <h3 className={styles.sectionSubtitle}>Locked Liquidity for Security</h3>
            <p className={styles.contentText}>
              To build confidence and protect against volatility, we locked 7M tokens for 90 days. 
              This commitment reflects our focus on stability and long-term growth.
            </p>
          </div>

          {/* Utility + Ecosystem */}
          <div className={styles.contentBlock}>
            <h3 className={styles.sectionSubtitle}>Powerful Utility & Incentives</h3>
            <p className={styles.contentText}>
              Every TruthChain transaction incurs a small <span className={styles.truthToken}>$TRUTH</span> fee,
              which flows back into development and ecosystem growth.
            </p>
            <p className={styles.contentText}>
              Holding <span className={styles.truthToken}>$TRUTH</span> gives you a voice. Participate in governance, 
              propose updates, and vote on key decisions. The platform evolves with 
              the collective wisdom of its community.
            </p>
            <p className={styles.contentText}>
              Stake <span className={styles.truthToken}>$TRUTH</span> to secure the network and earn ~7.2% APY. 
              Staking aligns incentives and strengthens our resilience.
            </p>
          </div>

          {/* Community Validator */}
          <div className={styles.contentBlock}>
            <h3 className={styles.sectionSubtitle}>Community Validator: TruthNode</h3>
            <p className={styles.contentText}>
              TruthNode isn&apos;t just a validator—it&apos;s our community-operated node that 
              supports development, funds buybacks, and drives operational excellence.
              It embodies our decentralized vision.
            </p>

            <div className={styles.validatorSection}>
              <div className={styles.validatorHeadingContainer}>
                <h4 className={styles.validatorHeading}>Validator Metrics (Snapshot): 4-2-2025</h4>
              </div>

              <div className={styles.validatorStatsContainer}>
                <div className={styles.validatorStats}>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>SOL Balance:</div>
                    <div className={styles.statValue}>5.963 SOL (~$772.63)</div>
                  </div>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>Active Stake:</div>
                    <div className={styles.statValue}>53,355.61 SOL (~$6,913,286.70)</div>
                  </div>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>Commission:</div>
                    <div className={styles.statValue}>5%</div>
                  </div>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>Total Reward:</div>
                    <div className={styles.statValue}>16.87 SOL (~$2,186.77)</div>
                  </div>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>Root Slot:</div>
                    <div className={styles.statValue}>330816680</div>
                  </div>
                </div>
              </div>

              <div className={styles.voteAccountContainer}>
                <div className={styles.voteAccountLabel}>Vote Account:</div>
                <div className={styles.voteAccountValue}>TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa</div>
              </div>

              <p className={styles.contentText}>
                TruthNode earns fees through network participation, supporting development and strategic <span className={styles.truthToken}>$TRUTH</span> buybacks. This aligns community interests with long-term platform success.
              </p>

              <button 
                onClick={handleStakeClick}
                className={styles.enhancedStakeButton}
              >
                <div className={styles.buttonGlow}></div>
                <span className={styles.buttonText}>Stake with TruthNode</span>
              </button>
            </div>
          </div>

          {/* Built for a Future of Truth */}
          <div className={styles.contentBlock}>
            <h3 className={styles.sectionSubtitle}>Built for a Future of Truth</h3>
            <p className={styles.contentText}>
              Every element of our tokenomics is designed to inspire trust and spark innovation. Simple, 
              transparent, and built to last.
            </p>
          </div>

          {/* No Hidden Agendas */}
          <div className={styles.contentBlock}>
            <h4 className={styles.sectionHeading}>No Hidden Agendas:</h4>
            <p className={styles.contentText}>
              Every token and transaction is fully visible.
            </p>
          </div>

          {/* Community-Driven */}
          <div className={styles.contentBlock}>
            <h4 className={styles.sectionHeading}>Community-Driven:</h4>
            <p className={styles.contentText}>
              You hold the power to shape our path forward.
            </p>
          </div>

          {/* Sustainable Vision */}
          <div className={styles.contentBlock}>
            <h4 className={styles.sectionHeading}>Sustainable Vision:</h4>
            <p className={styles.contentText}>
              With robust incentives and dynamic utility, <span className={styles.truthToken}>$TRUTH</span> is poised to grow and thrive.
            </p>
          </div>
        </div>

        {/* Go Back Button */}
        <div className={styles.buttonContainer}>
          <button className={styles.goBackButton} onClick={handleGoBack}>
            <Image
              src="/images/icons/Vector.svg"
              alt="Arrow icon"
              width={14}
              height={22}
              className={styles.vectorIcon}
            />
            <span>Go back</span>
          </button>
        </div>
      </section>
    </main>
  );
}