import React from 'react';
import localFont from 'next/font/local';
import styles from './HeroSection.module.scss';

// ✅ Importing the VideoComponent
import VideoComponent from '../VideoComponent/VideoComponent';

const digital7 = localFont({
  src: '../../../fonts/digital-7.ttf',
  variable: '--font-digital7'
});

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <div className={styles.videoArea}>
          {/* ✅ Only keeping the new component that hosts the video */}
          <VideoComponent />
        </div>

        {/* Vertical Line Separator */}
        <div className={styles.verticalLine} />

        {/* Truth Title Section */}
        <div className={`${styles.truthSection} ${digital7.className}`}>
          <h1 className={styles.truthTitle}>
            The $Truth is Yours.
          </h1>
          <p className={styles.truthSubtitle}>
            TruthChain = Verified facts on-chain. No corruption, no bias—just blockchain-backed truth.
          </p>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <p className={styles.gradientText}>
            TruthChain (TRUTH) is rewriting the rules of trust!
            A blockchain-powered force against misinformation.
            Transparent, immutable, unstoppable.
            Misinformation won't stand a chance.
          </p>
          <button className={styles.ctaButton}>
            <span className={styles.visitTheTerminal}>Visit the Terminal</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;












