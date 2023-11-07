import React from 'react';
import StoreHero from '../store/StoreHero';
import StoreDetails from '../store/StoreSupplements';
import './Store.css';
import StoreEquipment from '../store/StoreEquipment';

const Store = () => {
  return (
    <div>
      <div>
        <StoreHero />
      </div>
      <div class='store__Details-first-div'>
        <StoreDetails />
      </div>
      <div class='store__Details-second-div'>
        <StoreEquipment />
      </div>
    </div>
  );
};

export default Store;
