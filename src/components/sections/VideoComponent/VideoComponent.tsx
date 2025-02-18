// /home/j3ralien/projects/verafy-site/src/components/sections/VideoComponent/VideoComponent.tsx

import type { NextPage } from 'next';
import Image from 'next/image';
import localFont from 'next/font/local';
import styles from './index.module.scss';

const neoneon = localFont({
  src: '../../../fonts/Neoneon.otf',
  variable: '--font-neoneon'
});

const VideoComponent: NextPage = () => {
  return (
    <div className={styles.screen1Column}>
      <div className={styles.videoContainer}>
        <video 
          className={styles.videoPlayer} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/truth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Vera Tab */}
        <div className={`${styles.veraTab} ${neoneon.className}`}>
          <span>VERA</span>
        </div>

        {/* Social Icons Container */}
        <div className={styles.socialIconsContainer}>
          <div className={styles.socialIcons}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icons/Subtract.svg"
                alt="Website"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icons/telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icons/x.svg"
                alt="X"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icons/discord.svg"
                alt="Discord"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;

