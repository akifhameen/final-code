import React from 'react';
import './StoreSupplements.css';
import item from '../assets/images/StoreEquipment.png';

const StoreEquipment = () => {
  const temp = [1, 2, 3, 4, 5];
  return (
    <div class='storeDetails__main-div'>
      <p class='storeDetails__p1'>Equipment Area</p>
      <p class='storeDetails__p2'>Available Equipment</p>
      <p class='storeDetails__p3'>
        Our gym boasts a diverse selection of top-tier equipment, from cardio
        machines to strength training apparatus, ensuring you have the tools to
        achieve a well-rounded workout. We regularly maintain and update our
        equipment to offer the latest innovations in fitness technology,
        providing a safe and effective training environment for our members. Our
        extensive range of equipment accommodates various workout preferences
        and skill levels, making FlexFit Gym the ideal fitness destination
      </p>
      <div class='storeDetails__card-div'>
        {temp.map((index) => (
          <div class='storeDetails__card-item' key={index}>
            <img src={item} alt='image' />
            <p class='storeDetails__p4'>Equipment</p>
            <p class='storeDetails__p5'>
              Gym equipment: Specialized tools and machines designed for various
              exercises and workouts to support fitness goals.
            </p>
            <p class='storeDetails__p6'>$ 1500.00</p>
            <p class='storeDetails__p7'>In Stock</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreEquipment;
