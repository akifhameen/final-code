import React from 'react';
import './NewsLetter.css';
import { useNavigate } from 'react-router-dom';

const NewsLetter = () => {
  const navigate = useNavigate();
  const navigateSignIn = () => {
    navigate('/signIn');
  };
  return (
    <div class='newsletter_div'>
      <p class='p1'>Are You Ready To Get in Shape ?</p>
      <p class='p2'>
        Get a top-notch certified professional consultation today!
      </p>
      <button onClick={navigateSignIn}>Become Member Today</button>
    </div>
  );
};
export default NewsLetter;
