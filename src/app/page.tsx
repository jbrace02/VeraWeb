"use client";

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ContentCards from '@/components/sections/ContentCards/ContentCards';
import FAQ from '@/components/sections/FAQ/FAQ';
import Staking from '@/components/sections/Staking/Staking';

export default function Home() {
  // You can add any page-specific logic here
  useEffect(() => {
    // Any side effects for the homepage
    document.title = "TruthChain | Verified Truth on Solana";
  }, []);

  return (
    <main>
      <HeroSection />
      <ContentCards />
      <Staking />
      <FAQ />
    </main>
  );
}

