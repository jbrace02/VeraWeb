import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* TOP LINE */}
      <div className={styles.footerLine} />

      <div className={styles.footerInner}>
        {/* Left Column - Logo only */}
        <div className={styles.leftColumn}>
          <Image
            src="/images/verafy_blue.png"
            alt="Verafy Logo"
            width={140}
            height={140}
            className={styles.footerLogo}
            priority
          />
          {/* DexScreener button removed */}
        </div>

        {/* Middle Column - Disclaimers */}
        <div className={styles.centerColumn}>
          <p className={styles.disclaimerText}>
            $TRUTH is a token with no intrinsic value. All content on this site is for 
            entertainment purposes only and not financial advice.
          </p>
          <p className={styles.disclaimerText}>
            Crypto investments carry high risk. You may lose your funds. DYOR and consult 
            professionals before investing.
          </p>
          <p className={styles.disclaimerText}>
            Not Financial Advice | Not a Security | Just for Fun
          </p>
        </div>

        {/* Right Column - Community Links (without DexScreener) */}
        <div className={styles.rightColumn}>
          <h4 className={styles.footerHeading}>Join our Community</h4>

          {/* Social icons as larger buttons */}
          <div className={styles.socialButtons}>
            {/* Discord */}
            <a
              href="https://discord.gg/TBvndJPVkr"
              aria-label="Discord"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <Image
                src="/images/icons/discord.svg"
                alt="Discord"
                width={28}
                height={28}
              />
              <span>Discord</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/truth_chain"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <Image
                src="/images/icons/telegram.svg"
                alt="Telegram"
                width={28}
                height={28}
              />
              <span>Telegram</span>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/truthchain"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <Image
                src="/images/icons/x.svg"
                alt="X (Twitter)"
                width={28}
                height={28}
              />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className={styles.footerLine} />
    </footer>
  );
};

export default Footer;

