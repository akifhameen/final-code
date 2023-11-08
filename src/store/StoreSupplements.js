import React from 'react';
import './StoreSupplements.css';
import item1 from '../assets/images/Dymatize Iso 100.webp';
import item2 from '../assets/images/Nitro-Tech.webp';
import item3 from '../assets/images/N.O. Xplode.webp';
import item4 from '../assets/images/Carnivor Mass.webp';
import item5 from '../assets/images/Serious Mass.webp';

const StoreDetails = () => {
  const temp = [0, 1, 2, 3, 4];
  const items = [item1, item2, item3, item4, item5]
  const names = ['Dymatize Iso 100', 'Nitro-Tech', 'N.O. Xplode', 'Carnivor Mass', 'Serious Mass']
  const values = ['8,000', '4,500', '6,500', '5,000', '5,500']
  return (
    <div class='storeDetails__main-div'>
      <p class='storeDetails__p1'>Supplements Area</p>
      <p class='storeDetails__p2'>Available Supplements</p>
      <p class='storeDetails__p3'>
        Our available supplements are carefully curated to support your fitness
        journey, offering high-quality options that can enhance your nutrition
        and workout results. From protein shakes to essential vitamins, we
        provide a range of supplements tailored to meet your specific needs,
        helping you maximize your performance and recovery.
      </p>
      <div class='storeDetails__card-div'>
        {temp.map((index) => (
          <div class='storeDetails__card-item' key={index}>
            <img src={items[index]} alt={`store supplement${index}`} />
            <p class='storeDetails__p4'>{names[index]}</p>
            <p class='storeDetails__p5'>
              {names[index]} is a high-quality protein supplement that aids in
              muscle recovery and growth, making it an essential addition to
              your post-workout nutrition.
            </p>
            <p class='storeDetails__p6'>Rs. {values[index]}</p>
            <p class='storeDetails__p7'>In Stock</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreDetails;
