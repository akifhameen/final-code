import React from 'react';
import './TrainerList.css';
import trainerImg from '../assets/images/male.png';
import { useAuth } from '../authContext';

const TrainerList = () => {
  const {user} = useAuth();

  return (
    <div class='user_details'>
      <p class='user-p'>John Doe</p>
      <img src={trainerImg} alt='trainer' />
      <div class='button_class'>
        {user?.role !== 'trainer' && (
          <div>
            <button class='btn1'>Add trainer</button>
          </div>
        )}
        {user?.role === 'trainer' && (
          <div>
            <button class='btn2'>Remove trainer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainerList;
