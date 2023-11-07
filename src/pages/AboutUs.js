import React from 'react';
import './AboutUs.css';
import AboutHero from '../about us/AboutHero';
import FirstSection from '../about us/FirstSection';
import Trainers from '../about us/Trainers';
import ContactUs from '../about us/ContactUs';

const AboutUs = () => {
  return (
    <div>
      <div>
        <AboutHero />
      </div>
      <div class='first-section'>
        <FirstSection />
      </div>
      <div class='trainer-section'>
        <Trainers />
      </div>
      <div class='trainer-contact'>
        <ContactUs />
      </div>
    </div>
  );
};

export default AboutUs;
