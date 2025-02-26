"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import styles from "./FAQ.module.scss";

const interFont = localFont({
  src: "../../../fonts/Inter.ttf",
  variable: "--font-inter",
});

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is TruthChain?",
      answer: (
        <div className={styles.answerSection}>
          TruthChain is a decentralized platform built on Solana that uses AI to verify information and combat misinformation. Our mission is to create a more transparent and accountable information ecosystem where truth can be verified and trusted.
        </div>
      ),
    },
    {
      question: "How does the $TRUTH token work?",
      answer: (
        <div className={styles.answerSection}>
          $TRUTH is the native utility token of the TruthChain ecosystem. It&apos;s used for governance, staking, and accessing premium features. The token was launched with a fair distribution model - 99.3% of the total supply was made available to the community at launch, with only 0.7% locked for ecosystem development.
        </div>
      ),
    },
    {
      question: "How can I stake with TruthNode?",
      answer: (
        <div className={styles.answerSection}>
          You can stake your SOL with TruthNode to help secure the network and earn rewards of approximately 7-10% APY.
          
          <div className={styles.buttonContainer}>
            <a 
              href="https://stakewiz.com/validator/TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionButton}
            >
              Stake with TruthNode
            </a>
          </div>
        </div>
      ),
    },
    {
      question: "What makes TruthChain different from other AI projects?",
      answer: (
        <div className={styles.answerSection}>
          TruthChain stands out through its commitment to decentralization, transparency, and community governance. Unlike many AI projects, we&apos;re focused specifically on combating misinformation through a combination of blockchain verification and advanced AI. Our fair launch approach also demonstrates our commitment to building a truly community-owned platform.
        </div>
      ),
    },
    {
      question: "How can I get involved with TruthChain?",
      answer: (
        <div className={styles.answerSection}>
          <p className={styles.involvementHeading}>Multiple ways to get involved:</p>
          <ul className={styles.tightBulletList}>
            <li>Stake your SOL with TruthNode</li>
            <li>Participate in governance by holding $TRUTH tokens</li>
            <li>Follow our development updates and contribute to our open-source initiatives</li>
          </ul>
          
          <div className={styles.socialButtonsContainer}>
            <a
              href="https://discord.gg/TBvndJPVkr"
              aria-label="Discord"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <span>Discord</span>
            </a>
            
            <a
              href="https://t.me/truth_chain"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <span>Telegram</span>
            </a>
            
            <a
              href="https://x.com/truthchain"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <span>Twitter</span>
            </a>
            
            <a
              href="https://stakewiz.com/validator/TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa"
              aria-label="Stake"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <span>Stake</span>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className={`${styles.faqSection} ${interFont.className}`}>
      <div className={styles.faqHeader}>
        <h2 className={styles.faqTitle}>FAQ</h2>
        <p className={styles.faqSubtitle}>
          Common questions about the $TRUTH ecosystem
        </p>
      </div>

      <div className={styles.faqBox}>
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={styles.faqItem}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className={`${styles.question} ${activeIndex === index ? styles.active : ''}`}>
              {item.question}
            </h3>
            {activeIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
