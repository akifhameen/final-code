import React from 'react';
import './Classes.css';
import ClassHero from '../classes/ClassHero.js';
import ClassDetails from '../classes/ClassDetails.js';
import HireTrainer from '../classes/HireTrainer.js';

const Classes = () => {
  return (
    <div>
      <div>
        <ClassHero />
      </div>
      <div class='class__details-section'>
        <ClassDetails />
      </div>
      <div class='class_trainer-section'>
        <HireTrainer />
      </div>
    </div>
  );
};

export default Classes;
