import React from 'react';
import './AdminList.css';
import { useAuth } from '../authContext';

const AdminList = () => {
  const {user} = useAuth();
  return (
    <div class='admin_details'>
      <p class='admin-p'>John Doe</p>
      <p class='admin-p'>John@123.com</p>
      <div class='admin_button_class'>
        {user?.role !== 'admin' && (
          <div>
            <button class='btn1'>Add Admin</button>
          </div>
        )}
        {user?.role === 'admin' && (
          <div>
            <button class='btn2'>Remove Admin</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminList;
