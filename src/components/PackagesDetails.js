import React from 'react';
import './PackagesDetails.css';
import check from '../assets/images/check.png';

function PackagesDetails() {
  return (
    <div class='packages__main-div'>
      <div class='packages__details'>
        <p class='details-p1'>Our Pricing</p>
        <p class='details-p2'>Affordable Pricing Plans For You</p>
        <p class='details-p3'>
          FlexFit Gym offers affordable pricing plans, making fitness accessible
          to all. Our packages cater to various budgets, so you can choose the
          one that suits you best.
        </p>
        <div class='details-div'>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Limited flexibility in membership options.</p>
          </div>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Potential overcrowding during peak hours.</p>
          </div>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Package restrictions on certain classes or services.</p>
          </div>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Some amenities may not be included in lower-tier packages.</p>
          </div>
        </div>
        <button>All Pricing</button>
      </div>
      <div class='packages__first-package'>
        <p class='package-p1'>Premium Packages</p>
        <p class='package-p2'>
          $110,40<span>/month</span>
        </p>
        <p>-----------------------------</p>
        <div class='package-div'>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Get All Courses</p>
          </div>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Group Classes</p>
          </div>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Personal Training</p>
          </div>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Free Soft Drinks</p>
          </div>
          <div class='check-P'>
            <img src={check} alt='image' />
            <p>Free Four Towels</p>
          </div>
        </div>
        <button>Get Started</button>
      </div>
      <div class='packages__second-package'>
        <p class='second-pack-p1'>Basic Packages</p>
        <p class='second-pack-p2'>
          $89,40<span>/month</span>
        </p>
        <p>-----------------------------</p>
        <div class='second-div'>
          <div class='check-P1'>
            <img src={check} alt='image' />
            <p>Group Classes</p>
          </div>
          <div class='check-P1'>
            <img src={check} alt='image' />
            <p>Free Soft Drink</p>
          </div>
          <div class='check-P1'>
            <img src={check} alt='image' />
            <p>Personal Training</p>
          </div>
          <div class='check-P1'>
            <img src={check} alt='image' />
            <p>Free Towel</p>
          </div>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default PackagesDetails;
