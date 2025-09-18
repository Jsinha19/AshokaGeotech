import React from 'react';
import HeroSlider from '../components/HeroSlider';
import HomeAboutSection from '../components/HomeAboutSection';
import HomeServices from '../components/HomeServices'; // 1. Import the new component
import HomeSectors from '../components/HomeSector';
import HomeAchivement from '../components/HomeAchivement';
import HomeClient from '../components/HomeClient';
import ReviewsSection from '../components/ReviewsSection';

const Homepage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SECTION 1: THE NEW HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 2: About us */}
      <HomeAboutSection />
      
      {/* SECTION 3: Services */}
      <HomeServices /> 
  {/* SECTION 3: Sectors */}
      <HomeSectors />

  {/* SECTION 4:Achivement */}
  <HomeAchivement />

    {/* SECTION 5:Clients */}
  <HomeClient />

<ReviewsSection/>
    </div>
  );
};

export default Homepage;