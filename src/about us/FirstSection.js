import React from 'react';
import image from '../assets/images/about-user.jpg';
import './FirstSection.css';

const FirstSection = () => {
  return (
    <div class='section__main-div'>
      <div class='section-img'>
        <img src={image} alt='user' />
      </div>
      <div class='section-details'>
        <p class='p1'>About Us</p>
        <p class='p2'>Work Out With The Most Complete Gym Equipment</p>
        <p class='p3'>
          FlexFit Gym is a holistic fitness haven, where we blend cutting-edge
          equipment, dedicated trainers, and a friendly ambiance to provide you
          with a well-rounded wellness experience. Our gym's layout and design
          are meticulously crafted to ensure that you can work out comfortably,
          allowing you to fully concentrate on your fitness objectives. Our
          highly skilled trainers are here to offer personalized guidance,
          whether you're new to fitness or an experienced athlete looking for an
          extra edge. At FlexFit Gym, you're not just a member; you're part of a
          thriving fitness community committed to helping you reach your full
          potential.
        </p>
        <div class='experience'>
          <div class='awards'>
            <p class='p4'>AWARDS</p>
            <p class='p5'>50 +</p>
          </div>
          <div class='rating'>
            <p class='p4'>HAPPY CLIENT</p>
            <p class='p5'>450 +</p>
          </div>
          <div class='work-exp'>
            <p class='p4'>WORK EXPERIENCE</p>
            <p class='p5'>5 +</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
