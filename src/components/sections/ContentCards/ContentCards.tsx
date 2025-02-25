"use client";

import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import styles from "./ContentCards.module.scss";

// Load Inter font
const interFont = localFont({
  src: "../../../fonts/Inter.ttf", // adjust path if needed
  variable: "--font-inter",
});

const ContentCards: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.sectionContainer} ${interFont.className} ${isVisible ? styles.visible : ''}`}>
      {/* Heading & Subheading */}
      <div className={styles.textContainer}>
        <h1 className={styles.mainTitle}>
          Rewriting the rules <br /> of trust
        </h1>
        <p className={styles.subtitle}>
          $Truth: Pure, Unbiased Truth—Secured by Blockchain.
        </p>
      </div>

      {/* Content Cards Box */}
      <div className={styles.contentCardsBox}>
        {/* Cards */}
        <div className={styles.cardsContainer}>
          {/* Card 1 */}
          <div className={styles.contentCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/content-cards/tamper-proof.svg"
                alt="Fully Tamper-Proof Blockchain"
                fill
                style={{ objectFit: "contain" }}
                quality={100}
                priority
              />
            </div>
            <div className={styles.cardOverlay}></div>
          </div>

          {/* Card 2 */}
          <div className={styles.contentCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/content-cards/misinformation.svg"
                alt="Against Misinformation"
                fill
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </div>
            <div className={styles.cardOverlay}></div>
          </div>

          {/* Card 3 */}
          <div className={styles.contentCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/content-cards/future-trust.svg"
                alt="The Future of Trust"
                fill
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </div>
            <div className={styles.cardOverlay}></div>
          </div>

          {/* Card 4 */}
          <div className={styles.contentCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/content-cards/knowledge-revolution.svg"
                alt="A Knowledge Revolution"
                fill
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </div>
            <div className={styles.cardOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCards;






