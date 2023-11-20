import React from 'react';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ChooseUsSection from '../components/ChooseUsSection/ChooseUsSection';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';
import DownloadSection from '../components/DownloadSection/DownloadSection';

const HomeScreen = () => {
  return (
    <div>
      <WelcomeSection />
      <AboutSection />
      <ServicesSection />
      <ChooseUsSection />
      <ReviewsSection />
      <DownloadSection />
    </div>
  );
};

export default HomeScreen;
