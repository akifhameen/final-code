import React from 'react';
import './ClassDetails.css';
import class_img from '../assets/images/tutorial.png';

const ClassDetails = () => {
  const temp = [1, 2, 3];
  return (
    <div class='class__main-div'>
      <p class='class-p1'>Our Classes</p>
      <p class='class-p2'>Available Gym Classes</p>
      <p class='class-p3'>
        Explore a variety of fitness classes tailored to your goals and
        interests.
      </p>
      <div class='class_card-div'>
        {temp.map((index) => (
          <div class='class_item-div' key={index}>
            <img src={class_img} alt='alt text' />
            <p class='class-p4'>Body Building</p>
            <p class='class-p5'>
              Our bodybuilding classes are designed to help you sculpt and
              strengthen your physique with specialized workouts and expert
              guidance from our trainers
            </p>
            <button>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDetails;
