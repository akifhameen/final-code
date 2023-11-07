import React, { useState } from 'react';
import './ReusableSearch.css';
import Search from '../assets/images/search.png';

const ReusableSearch = (props) => {
  const [text, setText] = useState('');
  const onClick = () => {
    props.setTrainer(text);
  };
  return (
    <div class='search-main-div'>
      <div class='search-bar'>
        <input
          type='email'
          name='name'
          required
          placeholder='Enter Your Email..'
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={onClick}>
          <img src={Search} alt='search' />
        </button>
      </div>
    </div>
  );
};

export default ReusableSearch;
