import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import WhatWeDoSection from '@/components/what-we-do-section';
import HowYouLearnSection from '@/components/how-you-learn-section';
import LegendsSection from '@/components/legends-section';
import StalkUsSection from '@/components/stalk-us-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <HowYouLearnSection />
      <LegendsSection />
      <StalkUsSection />
    </main>
  );
}
