import React from 'react';
import HeroSection from '../components/HeroSection';
import GymDetails from '../components/GymDetails';
import ChosseUs from '../components/ChooseUs';
import NewsLetter from '../components/NewsLetter';
import './HomePage.css';
import PackagesDetails from '../components/PackagesDetails';
import NewsAlert from '../components/NewsAlert';
import Credits from '../components/Credits';

const HomePage = () => {
  return (
    <div>
      <div class='app__heroBanner'>
        <HeroSection />
      </div>
      <div class='app__newsAlert'>
        <NewsAlert />
      </div>
      <div class='app__credits'>
        <Credits />
      </div>
      <div class='app__gymDetails'>
        <GymDetails />
      </div>
      <div class='app__chooseUs'>
        <ChosseUs />
      </div>
      <div class='app__packagesDetails'>
        <PackagesDetails />
      </div>
      <div class='app__newsLetter'>
        <NewsLetter />
      </div>
    </div>
  );
};

export default HomePage;
