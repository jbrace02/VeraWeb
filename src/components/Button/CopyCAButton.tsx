import React from 'react';
import Image from 'next/image';
import styles from './CopyCAButton.module.scss';

const CopyCAButton: React.FC = () => {
  return (
    <button className={styles.buttonSmallCa}>
      <div className={styles.copyCaParent}>
        <div className={styles.copyCa}>copy ca</div>
        <Image
          className={styles.contentCopyIcon}
          src="/images/icons/contentcopy.svg" // Make sure the file is here
          alt="Copy icon"
          width={24}
          height={24}
        />
      </div>
    </button>
  );
};

export default CopyCAButton;
