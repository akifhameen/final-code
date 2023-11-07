import React from 'react';
import './AdminPage.css';
import AdminImage from '../assets/images/add-user.png';
import AddClass from '../assets/images/add.png';
import AddStock from '../assets/images/add_stock.png';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const navigateAddTrainer = () => {
    navigate('/addTrainer');
  };
  const navigateAddAdmin = () => {
    navigate('/addAdmin');
  };
  const navigateAddClass = () => {
    navigate('/addClass');
  };
  return (
    <div class='admin__main-div'>
      <div class='admin__hero-div'>
        <p>Admin Panel</p>
      </div>
      <div class='admin__options-div'>
        <p class='text-p1'>Admin Settings</p>
        <div class='option-sub-div'>
          <div class='item'>
            <p class='text-p2'>Add/Remove Trainers</p>
            <img src={AdminImage} alt='add admin' />
            <button onClick={navigateAddTrainer}>Click Here</button>
          </div>
          <div class='item'>
            <p class='text-p2'>Add/Remove Admins</p>
            <img src={AdminImage} alt='add admin 1' />
            <button onClick={navigateAddAdmin}>Click Here</button>
          </div>
          <div class='item'>
            <p class='text-p2'>Add/Remove Classes</p>
            <img src={AddClass} alt='add class' />
            <button onClick={navigateAddClass}>Click Here</button>
          </div>
          <div class='item'>
            <p class='text-p2'>Add Stock</p>
            <img src={AddStock} alt='add stock' />
            <button>Click Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
