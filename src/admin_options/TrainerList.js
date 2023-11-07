import React, { useState, useEffect } from 'react';
import './TrainerList.css';
import trainerImg from '../assets/images/male.png';

const TrainerList = () => {
  const [name, setName] = useState('');
  let x = '';
  // useEffect(() => {
  //   setName(isTrainer);
  // }, [isTrainer]);
  const [role1, setRole] = useState('trainer');
  const user = ['John', 'john1', 'john3', 'john4', 'john5'];

  return (
    <div class='user_details'>
      <p class='user-p'>John Doe</p>
      <img src={trainerImg} alt='trainer' />
      <div class='button_class'>
        {role1 !== 'trainer' && (
          <div>
            <button class='btn1'>Add trainer</button>
          </div>
        )}
        {role1 === 'trainer' && (
          <div>
            <button class='btn2'>Remove trainer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainerList;
