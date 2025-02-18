import React from 'react';
import Image from 'next/image';
import GenericButton from '@/components/Button/Button'; // Generic button for nav links
import CopyCAButton from '@/components/Button/CopyCAButton';
import BuyTruthButton from '@/components/Button/BuyTruthButton';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Left-aligned logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/verafylogo.png"
          alt="Verafy Logo"
          width={120}
          height={120}
          className={styles.logoVerafyIcon}
        />
      </div>

      {/* Centered navigation buttons */}
      <nav className={styles.nav}>
        <GenericButton label="Tokenomics" />
        <GenericButton label="Mission" />
        <GenericButton label="Roadmap" />
      </nav>

      {/* Right-aligned additional buttons */}
      <div className={styles.buttonGroup}>
        <CopyCAButton />
        <BuyTruthButton />
      </div>
    </header>
  );
};

export default Header;


