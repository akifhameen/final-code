import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FiMapPin,
  FiChevronRight,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiFacebook,
} from 'react-icons/fi';

const Footer = () => {
  return (
    <div class='footer__main-div'>
      <div class='footer__first-div'>
        <p class='p1'>
          Flex<span>Fit</span>
        </p>
        <p class='p2'>The Most Complete Gym To Work Out</p>
        <div class='sub-div'>
          <div class='sub-div-area'>
            <FiMapPin size={20} fill='#D76810' />
            <p>No. 36, De Kretser Place, Bambalapitiya Colombo 04</p>
          </div>
          <div class='sub-div-area'>
            <FiMail size={20} fill='#D76810' />
            <p>support@domain.com</p>
          </div>
          <div class='sub-div-area'>
            <FiPhone size={20} fill='#D76810' />
            <p>tel:+94114777888</p>
          </div>
        </div>
      </div>

      <div class='footer__second-div'>
        <p class='p1'>Other Pages</p>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link to='/'>Home</Link>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link to='/aboutUs'>About us</Link>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link to='/classes'>Classes</Link>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link to='/store'>Online shop</Link>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link to='/blogs'>Blogs and Articles</Link>
        </div>
      </div>

      <div class='footer__third-div'>
        <p class='p1'>Quick Links</p>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link>Privacy Policy</Link>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link>Term Of Service</Link>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link>Disclaimer</Link>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link>Credits</Link>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <Link>FAQ</Link>
        </div>
      </div>
      <div class='footer__fourth-div'>
        <p class='p1'>Newsletter</p>
        <div class='form'>
          <input
            type='text'
            name='name'
            required
            placeholder='Enter Your Email..'
          />
          <button>Send</button>
        </div>
        <p class='p2'>Get the latest news & updates</p>
        <div class='social-App'>
          <FiLinkedin
            class='icon'
            size={20}
            fill='white'
            stroke='white'
            style={{ backgroundColor: '#0072b1', padding: 10 }}
          />
          <FiTwitter
            class='icon'
            size={20}
            fill='white'
            stroke='white'
            style={{ backgroundColor: '#1DA1F2', padding: 10 }}
          />
          <FiYoutube
            class='icon'
            size={20}
            stroke='white'
            style={{ backgroundColor: '#c4302b', padding: 10 }}
          />
          <FiFacebook
            class='icon'
            size={20}
            fill='white'
            stroke='white'
            style={{ backgroundColor: '#3b5998', padding: 10 }}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
