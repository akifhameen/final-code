import React, { useState } from 'react';
import './AdminList.css';

const AdminList = () => {
  const [role1, setRole] = useState('admin');
  return (
    <div class='admin_details'>
      <p class='admin-p'>John Doe</p>
      <p class='admin-p'>John@123.com</p>
      <div class='admin_button_class'>
        {role1 !== 'admin' && (
          <div>
            <button class='btn1'>Add Admin</button>
          </div>
        )}
        {role1 === 'admin' && (
          <div>
            <button class='btn2'>Remove Admin</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminList;
