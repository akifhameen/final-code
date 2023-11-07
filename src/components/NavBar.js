import React from 'react';
import './NavBar.css';
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext.js';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  let isAuthenticated, role;
  if (user) {
    ({ isAuthenticated, role } = user);
  }

  const navigateSignIn = () => {
    navigate('/signIn');
  };
  const navigateAdmin = () => {
    navigate('/admin');
  };
  const navigateSignUp = () => {
    navigate('/signUp');
  };
  const navigateTrainer = () => {
    navigate('/trainer');
  };

  return (
    <div>
      <div class='nav__main-div'>
        <div class='nav__name-div'>
          <p class='nav__name-p1'>
            Flex<span style={{ color: 'white' }}>Fit</span>
          </p>
        </div>
        <div class='nav__navigation'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/aboutUs'>About us</Link>
            </li>
            <li>
              <Link to='/classes'>Classes</Link>
            </li>
            <li>
              <Link to='/store'>Online shop</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs and Articles</Link>
            </li>
          </ul>
        </div>
        <div class='nav__form-btn'>
          {isAuthenticated && role === 'admin' && (
            <div class='nav__form-btn2'>
              <p>Welcome Admin</p>
              <button onClick={navigateAdmin}>Admin Panel</button>
              <button onClick={() => logout()}>Log out</button>
            </div>
          )}
          {isAuthenticated && role === 'trainer' && (
            <div class='nav__form-btn2'>
              <p>Welcome Trainer</p>
              <button onClick={navigateTrainer}>Trainer Panel</button>
              <button onClick={() => logout()}>Log out</button>
            </div>
          )}
          {isAuthenticated && role === 'member' && (
            <div class='nav__form-btn2'>
              <p>Welcome Member</p>
              <button onClick={() => logout()}>Log out</button>
            </div>
          )}
          {isAuthenticated ? null : (
            <div>
              <button onClick={navigateSignIn}>Sign In</button>
              <button onClick={navigateSignUp}>Sign Up</button>
            </div>
          )}
        </div>
      </div>
      {props.children}
      <div class='footer_area'>
        <Footer />
      </div>
    </div>
  );
};
export default NavBar;
