import type { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <div className={styles.button}>
      <div className={styles.tokenomics}>{label}</div>
    </div>
  );
};

export default Button;
