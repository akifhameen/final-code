import React from 'react';
import './ContactUs.css';
import clock from '../assets/images/clock.png';
import location from '../assets/images/location.png';
import email from '../assets/images/email.png';
import call from '../assets/images/phone-call.png';

const ContactUs = () => {
  return (
    <div class='contact__main-div'>
      <p class='contact-p1'>Contact Us</p>
      <p class='contact-p2'>Get In Touch With Us</p>
      <p class='contact-p3'>
        Get in touch with us for any questions, assistance, or to start your
        fitness journey today.
      </p>
      <div class='contact__details-div'>
        <div class='contact-method'>
          <img src={location} alt='alt_image' />
          <p class='contact-p4'>Our Location</p>
          <p class='contact-p5'>
            No. 36, De Kretser Place, Bambalapitiya Colombo 04
          </p>
        </div>
        <div class='contact-method'>
          <img src={call} alt='alt_image' />
          <p class='contact-p4'>Phone Number</p>
          <p class='contact-p5'>tel:+94114777888</p>
        </div>
        <div class='contact-method'>
          <img src={email} alt='alt_image' />
          <p class='contact-p4'>Email Us</p>
          <p class='contact-p5'>Support@domain.com</p>
        </div>
        <div class='contact-method'>
          <img src={clock} alt='alt_image' />
          <p class='contact-p4'>Working Hours</p>
          <p class='contact-p5'>Mon - Sat : 9.00 - 5.00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
