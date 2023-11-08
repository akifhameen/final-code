import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import weights from '../assets/images/weights.png';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { singup } from '../api/user';
import { useAuth } from '../authContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (signUpData.password === signUpData.confirmPassword) {
      const user = await singup(signUpData);
      login(user);
      if (user?.isAuthenticated) {
        navigate('/');
      }
    }
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div class='signup__main-div'>
      <div class='signup__form-div'>
        <img src={weights} alt='sign up' />
        <p class='p1'>Wellcome !</p>
        <p class='p2'>Sign Up</p>
        <form onSubmit={handleSubmit} method='POST'>
          <div class='name-div'>
            <input
              class='input1'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={signUpData.firstName}
              onChange={handleOnChange}
              required
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={signUpData.lastName}
              onChange={handleOnChange}
              required
            />
          </div>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={signUpData.email}
            onChange={handleOnChange}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={signUpData.password}
            onChange={handleOnChange}
            required
          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={signUpData.confirmPassword}
            onChange={handleOnChange}
            required
          />
          <button type='submit'>Sign Up</button>
        </form>
        <p class='p3'>
          Already have an account ?{' '}
          <span>
            <Link href='/signIn'>Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
