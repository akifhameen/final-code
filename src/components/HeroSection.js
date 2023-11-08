import React from 'react';
import './HeroSection.css';
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import Team from '../assets/images/teamwork.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ navigation }) => {
  const navigate = useNavigate();
  const navigateAboutUs = () => {
    navigate('/aboutUs');
  };

  return (
    <div class='hero__main-div'>
      <div class='hero__first-div'>
        <p class='p1'>Wellcome to FlexFit</p>
        <p class='p2'>The Most Complete Gym To Work Out</p>
        <p class='p3'>
          Welcome to FlexFit Gym, where strength and community unite. Our iconic
          logo and 'Unleash Your Strength' tagline represent our commitment.
          Join now for personal trainers, nutrition guidance, and diverse
          classes. Our vibrant community awaits. Start your fitness journey
          today.
        </p>
        <div class='hero__btn'>
          <button onClick={navigateAboutUs}>About Us</button>
          <a href='/aboutUs'>Learn more</a>
        </div>
      </div>
      <div class='hero__image-div'>
        <img class='img1' src={hero1} alt='hero__image' />
        <div class='hero__image-subDiv'>
          <div>
            <img class='img2' src={hero2} alt='hero__image' />
          </div>
          <div class='hero__member-card'>
            <div>
              <img
                src={Team}
                height={50}
                width={50}
                style={{ paddingRight: 20 }}
                alt='hero__image'
              />
            </div>
            <div>
              <p class='card-p1'>500 +</p>
              <p class='card-p2'>Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
