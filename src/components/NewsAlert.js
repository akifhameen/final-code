import React, { useState } from 'react';
import './NewsAlert.css';
import target from '../assets/images/target.png';

const NewsAlert = () => {
  const [showMessage, setShowMessage] = useState(true);
  const click = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div class='alert-main-div'>
      <div class='message_container'>
        {showMessage && (
          <div class='message'>
            <p>
              Test your strength, endurance, and determination in our intense
              fitness challenges. Compete in obstacle courses, weightlifting,
              and HIIT workouts to win exciting prizes and become the 'FlexFit
              Champion'!"
            </p>
          </div>
        )}
      </div>
      <button onClick={click}>
        <img src={target} />
      </button>
    </div>
  );
};
export default NewsAlert;
