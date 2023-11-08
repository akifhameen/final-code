import React from 'react';
import './StoreSupplements.css';
import item1 from '../assets/images/Treadmill.jpg';
import item2 from '../assets/images/Bench.jpg';
import item3 from '../assets/images/ADJUSTABLE DUMBBELL SET 24KG.jpg';
import item4 from '../assets/images/Crosstrainer.jpg';
import item5 from '../assets/images/Resistance Band.jpg';

const StoreEquipment = () => {
  const temp = [0,1,2,3,4];
  const items = [item1,item2,item3,item4,item5];
  const names = ['Treadmill', 'Bench', 'ADJUSTABLE DUMBBELL', 'Crosstrainer', 'Resistance Band']
  const values = ['475,000', '195,000', '49,000', '249,000', '1,419']

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
            <img src={items[index]} alt={`store equipment${index}`} />
            <p class='storeDetails__p4'>{names[index]}</p>
            <p class='storeDetails__p5'>
              {names[index]}: Specialized tools and machines designed for various
              exercises and workouts to support fitness goals.
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

export default StoreEquipment;
