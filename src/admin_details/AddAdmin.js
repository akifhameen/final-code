import React, { useState } from 'react';
import './AddAdmin.css';
import ReusableSearch from '../admin_options/ReusableSearch';
import AdminList from './AdminList';

const AddAdmin = () => {
  const [admin, setAdmin] = useState('');
  return (
    <div class='addTrainer__main-div'>
      <div class='addTrainer__sub-div'>
        <p>Add Admin</p>
        <div class='search-bar-div'>
          <ReusableSearch />
        </div>
        <div class='search-list-div'>
          <AdminList />
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
