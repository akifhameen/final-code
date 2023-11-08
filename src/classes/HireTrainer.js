import React from 'react';
import './ClassDetails.css';
import trainer from '../assets/images/male.png';

const HireTrainer = () => {
  const temp = [0, 1, 2];
  const trainers = ['Yoga Trainer', 'Zumba Trainer', 'Body Building Trainer'];
  return (
    <div class='class__main-div'>
      <p class='class-p1'>Our Trainers</p>
      <p class='class-p2'>Available Gym Trainers</p>
      <p class='class-p3'>
        Meet our experienced gym trainers dedicated to helping you achieve your
        fitness goals.
      </p>
      <div class='class_card-div'>
        {temp.map((index) => (
          <div class='class_item-div' key={index}>
            <img src={trainer} alt='alt text' />
            <p class='class-p4'>{trainers[index]}</p>
            <p class='class-p5'>
              Our gym trainers are highly experienced and committed to providing
              personalized guidance, helping you reach your fitness goals
              effectively and safely.
            </p>
            <button>Hire Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HireTrainer;
