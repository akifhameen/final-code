import React, { useState } from 'react';
import './StoreSupplements.css';
import item from '../assets/images/suppliment_item.png';

const StoreDetails = () => {
  const temp = [1, 2, 3, 4, 5];
  const [img, setImg] = useState(null);
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
            <img src={item} alt='image' />
            <p class='storeDetails__p4'>Whey Proteins</p>
            <p class='storeDetails__p5'>
              Whey protein is a high-quality protein supplement that aids in
              muscle recovery and growth, making it an essential addition to
              your post-workout nutrition.
            </p>
            <p class='storeDetails__p6'>$ 500.00</p>
            <p class='storeDetails__p7'>In Stock</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreDetails;
