import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import weights from '../assets/images/weights.png';
import { useAuth } from '../authContext';
import { Link } from 'react-router-dom';
import { singin } from '../api/user';

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await singin(loginData);
    login(user);
    if (user?.isAuthenticated) {
      navigate('/');
    }
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div class='signin__main-div'>
      <div class='signin__form-div'>
        <img src={weights} alt='sing in' />
        <p class='p1'>Good to see you again !</p>
        <p class='p2'>Sign In</p>
        <form onSubmit={handleSubmit} method='POST'>
          <input
            class='inputEmail'
            autoCapitalize='none'
            type='email'
            name='email'
            value={loginData.email}
            onChange={handleOnChange}
            placeholder='Email'
            required
          />
          <input
            type='password'
            name='password'
            value={loginData.password}
            onChange={handleOnChange}
            placeholder='Password'
            required
          />
          <button type='submit'>Sign In</button>
        </form>
        <p class='p3'>
          Don't have an account ?{' '}
          <span>
            <Link href='/signUp'>Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
