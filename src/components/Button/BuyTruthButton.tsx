import React from 'react';
import styles from './BuyTruthButton.module.scss';

const BuyTruthButton: React.FC = () => {
  return (
    <div className={styles.button}>
      <div className={styles.buyTruth}>Buy $Truth</div>
    </div>
  );
};

export default BuyTruthButton;
