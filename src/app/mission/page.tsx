"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Mission.module.scss";
import { useEffect, useState } from "react";

export default function MissionPage() {
  const router = useRouter();
  const [, setIsVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className={styles.missionPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.textBlock}>
          <h1 className={styles.gradientHeading}>Our Mission</h1>
          <p className={styles.subheading}>
            Keeping AI Accountable. Protecting Truth.
          </p>
        </div>
      </section>

      {/* Main Content Area with Black Box */}
      <section className={styles.contentArea}>
        {/* Mission Box */}
        <div className={styles.missionBox}>
          <p>
            In a world where misinformation spreads faster than truth, we&apos;re building 
            a decentralized ecosystem that verifies facts, combats AI-generated falsehoods, 
            and restores trust in information.
          </p>

          <p>
            $TRUTH is more than a token—it&apos;s a movement to reclaim truth in the digital age. 
            Our blockchain-powered platform creates an immutable record of verified facts, 
            making manipulation impossible and accountability inevitable.
          </p>

          <h2 className={styles.sectionTitle}>Fair Launch, Always</h2>
          <p>
            We launched with complete transparency—no pre-sales, no hidden allocations. 
            All 1 billion <span className={styles.truthToken}>$TRUTH</span> tokens were minted at launch, 
            with 99.3% immediately available to the community. This ensures everyone 
            starts on equal footing, with no privileged insiders.
          </p>

          <div className={styles.distributionStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>99.3%</div>
              <div className={styles.statLabel}>Free Circulation</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>0.7%</div>
              <div className={styles.statLabel}>Locked for Security</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>0%</div>
              <div className={styles.statLabel}>Team Allocation</div>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>Community-First Distribution</h2>
          <p>
            From day one, the entire supply belongs to the community. No team holdings, 
            no insider allocations. Our journey is powered by community trust and participation, 
            not by enriching founders.
          </p>

          <h2 className={styles.sectionTitle}>Locked Liquidity for Confidence</h2>
          <p>
            To build confidence and protect against volatility, we locked 7M tokens for 90 days. 
            This commitment reflects our focus on stability and long-term growth, not short-term gains.
          </p>

          <h2 className={styles.sectionTitle}>Empowering Token Utility</h2>
          <ul className={styles.bulletList}>
            <li>
              <strong>Transaction Fees:</strong> Every TruthChain transaction incurs a small <span className={styles.truthToken}>$TRUTH</span> fee, 
              which flows back into development and ecosystem growth.
            </li>
            <li>
              <strong>Governance Rights:</strong> Holding <span className={styles.truthToken}>$TRUTH</span> gives you a voice. Participate in governance, 
              propose updates, and vote on key decisions. The platform evolves with the collective wisdom of its community.
            </li>
            <li>
              <strong>Staking Rewards:</strong> Stake <span className={styles.truthToken}>$TRUTH</span> to secure the network and earn ~7.2% APY. 
              Staking aligns incentives and strengthens our resilience against attacks.
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>TruthNode: The Community Validator</h2>
          <p>
            TruthNode isn&apos;t just a validator—it&apos;s our community-operated node that supports development, 
            funds buybacks, and drives operational excellence. It embodies our decentralized vision.
          </p>

          <div className={styles.validatorSnapshot}>
            <h4>Validator Metrics (Snapshot)</h4>
            <ul className={styles.validatorMetrics}>
              <li><strong>SOL Balance:</strong> <span>6.3879 SOL (~$892.71)</span></li>
              <li><strong>Active Stake:</strong> <span>21,642.34 SOL (~$3,024,518.14)</span></li>
              <li><strong>Commission:</strong> <span>5%</span></li>
              <li><strong>Validator Identity:</strong> <span>TruthNode</span></li>
            </ul>
          </div>

          <p>
            TruthNode earns fees through network participation, supporting development and strategic <span className={styles.truthToken}>$TRUTH</span> buybacks. 
            This aligns community interests with long-term platform success.
          </p>

          <h2 className={styles.sectionTitle}>Built for a Future of Truth</h2>
          <p>
            Every element of our ecosystem is designed to inspire trust and spark innovation. 
            We&apos;re creating a world where facts are verified, misinformation is exposed, and truth prevails.
          </p>

          <div className={styles.callToAction}>
            Join us in building a future where truth is the foundation of digital interaction.
          </div>
        </div>

        {/* Go Back Button */}
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



