// /home/j3ralien/projects/verafy-site/src/app/page.tsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import Staking from '../components/sections/Staking/Staking';
import CoreValues from '../components/sections/CoreValues/CoreValues';
import Tokenomics from '../components/sections/Tokenomics/Tokenomics';
import FAQ from '../components/sections/FAQ/FAQ';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Staking />
      <CoreValues />
      <Tokenomics />
      <FAQ />
    </main>
  );
}


