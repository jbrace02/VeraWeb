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

          {/* Token Distribution Chart */}
          <div className={styles.tokenAllocationChart}>
            <div className={styles.chartContainer}>
              <Image
                src="/images/token-chart.png"
                alt="Token Distribution Chart showing 99.3% Free and 0.7% Locked"
                width={400}
                height={400}
                className={styles.chartImage}
              />
              <div className={styles.chartLabels}>
                <div className={styles.freeLabel}>Free:</div>
                <div className={styles.freeValue}>99.3%</div>
              </div>
            </div>
            
            <div className={styles.chartLegend}>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColor} ${styles.locked}`}></div>
                <span className={styles.legendText}>Locked: <span className={styles.legendValue}>7M (0.7%)</span></span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColor} ${styles.free}`}></div>
                <span className={styles.legendText}>Free: <span className={styles.legendValue}>993M (99.3%)</span></span>
              </div>
            </div>
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

            <div className={styles.validatorSection}>
              <div className={styles.validatorHeadingContainer}>
                <h4 className={styles.validatorHeading}>Validator Metrics (Snapshot): 2-25-2025</h4>
              </div>

              <div className={styles.validatorStatsContainer}>
                <div className={styles.validatorStats}>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>SOL Balance:</div>
                    <div className={styles.statValue}>6.3879 SOL (~$892.71)</div>
                  </div>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>Active Stake:</div>
                    <div className={styles.statValue}>21,642.34 SOL (~$3,024,518.14)</div>
                  </div>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>Commission:</div>
                    <div className={styles.statValue}>5%</div>
                  </div>
                  <div className={styles.statRow}>
                    <div className={styles.statLabel}>Validator Identity:</div>
                    <div className={styles.statValue}>TruthNode</div>
                  </div>
                </div>
              </div>

              <div className={styles.voteAccountContainer}>
                <div className={styles.voteAccountLabel}>Vote Account:</div>
                <div className={styles.voteAccountValue}>TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa</div>
              </div>

              <p>
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
            <h3>Built for a Future of Truth</h3>
            <p>
              Every element of our tokenomics is designed to inspire trust and spark innovation. Simple, 
              transparent, and built to last.
            </p>
          </div>

          {/* No Hidden Agendas */}
          <div className={styles.contentBlock}>
            <h4>No Hidden Agendas:</h4>
            <p>
              Every token and transaction is fully visible.
            </p>
          </div>

          {/* Community-Driven */}
          <div className={styles.contentBlock}>
            <h4>Community-Driven:</h4>
            <p>
              You hold the power to shape our path forward.
            </p>
          </div>

          {/* Sustainable Vision */}
          <div className={styles.contentBlock}>
            <h4>Sustainable Vision:</h4>
            <p>
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