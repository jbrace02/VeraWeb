import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './Staking.module.scss';

const Staking: NextPage = () => {
  return (
    <section className={styles.stakingSection}>
      <div className={styles.container}>
        {/* Heading */}
        <h1 className="text-6xl font-digital text-white text-center">
          Staking $TRUTH SOL
        </h1>
        <p className="text-lg font-inter text-gray-400 text-center mt-2">
          TruthChain = Verified facts on-chain. No corruption, no bias—just blockchain-backed truth.
        </p>

        {/* Content */}
        <div className={styles.content}>
          {/* Video or Image */}
          <div className={styles.videoContainer}>
            <video autoPlay loop muted className={styles.video} poster="/images/truth-placeholder.png">
              <source src="/videos/Rectangle61.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content */}
          <div className={styles.textContainer}>
            <h2 className="text-3xl font-neoneon text-white">transparent, immutable, unstoppable.</h2>
            <p className="text-lg font-inter text-gray-300 mt-4">
              A blockchain-powered force against misinformation—transparent, immutable, unstoppable.
              Misinformation won’t stand a chance. TruthChain’s TRUTH token ensures verified facts stay on-chain.
            </p>

            {/* Stake Button */}
            <button className="mt-6 px-6 py-2 font-neoneon text-lg bg-blue-500 text-white rounded-md transition hover:bg-white hover:text-black">
              Stake your SOL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staking;

