import React from 'react';
import './Trainers.css';
import profile1 from '../assets/images/profile1.jpg';
import profile2 from '../assets/images/profile2.jpg';
import profile3 from '../assets/images/profile3.jpg';

const Trainers = () => {
  return (
    <div class='trainer__main-div'>
      <p class='p1'>Our Team</p>
      <p class='p2'>Your Sport Partner</p>
      <p class='p3'>
        Our sport partners represent a network of collaboration and support,
        enhancing your fitness journey.
      </p>
      <div class='trainer-card'>
        <div class='trainers'>
          <img src={profile1} alt='alt_image' />
          <p class='trainers-p4'>Melvin Rosario</p>
          <p class='trainers-p5'>Personal Trainer</p>
        </div>
        <div class='trainers'>
          <img src={profile2} alt='alt_image' />
          <p class='trainers-p4'>Emre Andrews</p>
          <p class='trainers-p5'>Personal Trainer</p>
        </div>
        <div class='trainers'>
          <img src={profile3} alt='alt_image' />
          <p class='trainers-p4'>Tatiana Head</p>
          <p class='trainers-p5'>Yoga Trainer</p>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
