import React from 'react';
import './TrainerPage.css';
import AdminImage from '../assets/images/add-user.png';
import AddSchedule from '../assets/images/schedule.png';

const TrainerPage = () => {
  return (
    <div>
      <div class='trainer__hero-div'>
        <p>Trainer Panel</p>
      </div>
      <div class='trainer__options-div'>
        <p class='text-p1'>Trainer Settings</p>
        <div class='trainer-sub-div'>
          <div class='item'>
            <p class='text-p2'>Add schedule</p>
            <img src={AddSchedule} alt='add schedule' />
            <button>Click Here</button>
          </div>
          <div class='item'>
            <p class='text-p2'>Add workouts</p>
            <img src={AddSchedule} alt='add schedule' />
            <button>Click Here</button>
          </div>
          <div class='item'>
            <p class='text-p2'>Add </p>
            <img src={AddSchedule} alt='add schedule' />
            <button>Click Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrainerPage;
