import React from 'react';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import Staking from '../components/sections/Staking/Staking';
import ContentCards from '../components/sections/ContentCards/ContentCards';
import Tokenomics from '../components/sections/Tokenomics/Tokenomics';
import FAQ from '../components/sections/FAQ/FAQ';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Staking />
      <ContentCards />
      <Tokenomics />
      <FAQ />
    </main>
  );
}

