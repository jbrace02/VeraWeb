"use client";

import React, { useState } from 'react';
import styles from './FAQ.module.scss';

const faqData = [
  { question: "What is TruthChain?", answer: "TruthChain is a blockchain-powered force against misinformation, ensuring transparency and accountability." },
  { question: "How does it work?", answer: "TruthChain uses decentralized verification and immutable records to store factual data securely on-chain." },
  { question: "What is $TRUTH token?", answer: "The $TRUTH token powers the TruthChain ecosystem, enabling staking, governance, and data validation." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>$TRUTH FAQ</h2>
      <div className={styles.content}>
        {/* We'll add the FAQ content here */}
      </div>
    </section>
  );
};

export default FAQ; 