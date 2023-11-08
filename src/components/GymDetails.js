import React from 'react';
import dumbell from '../assets/images/dumbell.png';
import gym from '../assets/images/gym.png';
import treadmill from '../assets/images/treadmill.png';
import workout1 from '../assets/images/workout1.jpg';
import workout2 from '../assets/images/workout2.jpg';
import exercise from '../assets/images/exercise.png';
import check from '../assets/images/check.png';
import './GymDetails.css';
import { useNavigate, Link } from 'react-router-dom';

const GymDetails = () => {
  const navigate = useNavigate();
  const navigateAboutUs = () => {
    navigate('/aboutUs');
  };
  return (
    <div class='gym__main-div'>
      <div class='gym__details'>
        <div class='gym__details-card'>
          <div class='gym_-details-card-first-div'>
            <img src={dumbell} alt='gym__details' />
            <p>Complete Gym</p>
          </div>
          <div class='gym_-details-card-second-div'>
            <p>
              FlexFit Gym , Your Strength Community. Elevate your fitness
              journey with our premier trainers and top-notch facilities. Join
              us and experience the difference.
            </p>
            <Link href='#'>Learn more</Link>
          </div>
        </div>
        <div class='gym__details-card'>
          <div class='gym_-details-card-first-div'>
            <img src={gym} alt='gym__details' />
            <p>Comfort Place</p>
          </div>
          <div class='gym_-details-card-second-div'>
            <p>
              FlexFit Gym offers a comfortable and welcoming environment,
              ensuring that you feel at ease while pursuing your fitness goals.
            </p>
            <Link href='#'>Learn more</Link>
          </div>
        </div>
        <div class='gym__details-card'>
          <div class='gym_-details-card-first-div'>
            <img src={treadmill} alt='gym__details' />
            <p>Skills Trainers</p>
          </div>
          <div class='gym_-details-card-second-div'>
            <p>
              At FlexFit Gym, our highly skilled trainers are dedicated to
              maximizing your fitness potential.With expertise and personalized
              guidance...
            </p>
            <Link href='#'>Learn more</Link>
          </div>
        </div>
      </div>

      {/* second area*/}

      <div class='gym__second-main-div'>
        <div class='gym__images'>
          <img src={workout1} class='img1' alt='gym__images' />
          <div class='gym__images-info-main'>
            <img src={workout2} class='img2' alt='gym__images' />
            <div class='gym__images-info'>
              <img src={exercise} class='img3' alt='gym__images' />
              <p>We Are Trusted More Than 200 Customer</p>
            </div>
          </div>
        </div>
        <div class='gym__about-details'>
          <p class='p1'>About FlexFit</p>
          <p class='p2'>A Comfortable Place With High Class Equipment</p>
          <p class='p3'>
            FlexFit Gym is a haven of comfort and excellence, where you can work
            out in a welcoming environment. Our high-class equipment is designed
            to optimize your fitness routine. With a focus on comfort, we ensure
            you can exercise with ease, making every visit a pleasure.
          </p>
          <div class='p4'>
            <img src={check} alt='gym__about-details' />
            <p>Ready 24/7 Personal Trainer Service</p>
          </div>
          <div class='p4'>
            <img src={check} alt='gym__about-details' />
            <p>A Hygiene & Comfortable Gym & Studio</p>
          </div>
          <div class='p4'>
            <img src={check} alt='gym__about-details' />
            <p>Most Complete Gym Equipment & Sport Class</p>
          </div>
          <button class='btn' onClick={navigateAboutUs}>
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};
export default GymDetails;
