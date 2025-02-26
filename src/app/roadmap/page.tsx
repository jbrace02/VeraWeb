"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Roadmap.module.scss";
import { useEffect, useState } from "react";

export default function RoadmapPage() {
  const router = useRouter();
  const [, setIsVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  // Removing unused functions
  
  return (
    <main className={styles.roadmapPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>TruthChain Roadmap</h1>
        <p className={styles.heroSubtitle}>
          Truth is a revolution, not just a moment.
        </p>
      </section>

      {/* Main Content Area with Black Box */}
      <section className={styles.contentArea}>
        {/* Roadmap Box */}
        <div className={styles.roadmapBox}>
          {/* Main Content / Achievements */}
          <p>
            Since our January 27th launch, we&apos;ve built momentum, grown our community,
            and delivered on key milestones:
          </p>
          <ul className={styles.roadmapList}>
            <li>
              <strong>3,000+ Members Strong</strong> The community is thriving,
              providing feedback, and shipping fast.
            </li>
            <li>
              <strong>Vera AI Agent Online</strong> Our AI truth-seeker, VerafyTruth,
              is in development mode, evolving with every update.
            </li>
            <li>
              <strong>Over $3.5M Staked in Validator</strong> Strengthening our treasury
              and rewarding $TRUTH holders.
            </li>
          </ul>

          <h2 className={styles.longTermTitle}>Long-Term Vision</h2>
          <p>
            We&apos;re building more than a project—we&apos;re creating a decentralized AI
            verification layer for the future. More groundbreaking developments are underway,
            but for now, we stay focused: expanding our reach, refining our technology,
            and fortifying truth.
          </p>

          <h3>Want to Be Part of the Future?</h3>
          
          {/* Enhanced Future Links Section - Social media buttons only, centered */}
          <div className={styles.futureLinksContainer}>
            {/* Telegram Button */}
            <a 
              href="https://t.me/truth_chain" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.futureButton}
            >
              <Image 
                src="/images/icons/telegram.svg" 
                alt="Telegram" 
                width={24} 
                height={24}
                className={styles.buttonIcon}
              />
              <span className={styles.buttonText}>Join Telegram</span>
            </a>
            
            {/* X (Twitter) Button */}
            <a 
              href="https://x.com/truthchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.futureButton}
            >
              <Image 
                src="/images/icons/x.svg" 
                alt="X (Twitter)" 
                width={24} 
                height={24}
                className={styles.buttonIcon}
              />
              <span className={styles.buttonText}>Follow us on X</span>
            </a>
            
            {/* Discord Button */}
            <a 
              href="https://discord.gg/TBvndJPVkr" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.futureButton}
            >
              <Image 
                src="/images/icons/discord.svg" 
                alt="Discord" 
                width={24} 
                height={24}
                className={styles.buttonIcon}
              />
              <span className={styles.buttonText}>Join Discord</span>
            </a>
          </div>

          <p>
            Truth is being rewritten. Together, we ensure it stays real.
          </p>
        </div>

        {/* Roadmap Cards (staggered vertically) */}
        <div className={styles.cardsSection}>
          <div className={styles.cardsContainer}>
            {/* Roadmap Card 1 */}
            <div className={`${styles.contentCard} ${styles.cardLeft}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/content-cards/1roadmap.svg"
                  alt="Roadmap Phase 1"
                  fill
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Roadmap Card 2 */}
            <div className={`${styles.contentCard} ${styles.cardRight}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/content-cards/2roadmap.svg"
                  alt="Roadmap Phase 2"
                  fill
                  style={{ objectFit: "contain" }}
                  quality={100}
                />
              </div>
            </div>

            {/* Roadmap Card 3 */}
            <div className={`${styles.contentCard} ${styles.cardLeft}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/content-cards/3roadmap.svg"
                  alt="Roadmap Phase 3"
                  fill
                  style={{ objectFit: "contain" }}
                  quality={100}
                />
              </div>
            </div>

            {/* Roadmap Card 4 */}
            <div className={`${styles.contentCard} ${styles.cardRight}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/content-cards/4roadmap.svg"
                  alt="Roadmap Phase 4"
                  fill
                  style={{ objectFit: "contain" }}
                  quality={100}
                />
              </div>
            </div>
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