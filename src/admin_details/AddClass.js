import React from 'react';
import './AddClass.css';

const AddClass = () => {
  return (
    <div class='addClass__main-div'>
      <div class='addClass_sub-div'>
        <p class='topic'>Add Class</p>
        <div class='class_details'>
          <div class='class-name'>
            <input type='text' name='name' placeholder='Add a class name' />
          </div>
          <div class='class-trainer'>
            <select name='names'>
              <option value='none' selected disabled hidden>
                Select a Trainer
              </option>
              <option value='trainer1'>trainer1</option>
              <option value='trainer2'>trainer2</option>
              <option value='trainer3'>trainer3</option>
            </select>
          </div>
          <div class='class-day'>
            <select name='days'>
              <option value='none' selected disabled hidden>
                Select a Day
              </option>
              <option value='Monday'>Monday</option>
              <option value='Tuesday'>Tuesday</option>
              <option value='Wednesday'>Wednesday</option>
              <option value='Thursday'>Thursday</option>
              <option value='Friday'>Friday</option>
              <option value='Saturday'>Saturday</option>
              <option value='Sunday'>Sunday</option>
            </select>
          </div>
          <div class='class-time'>
            <select name='time'>
              <option value='none' selected disabled hidden>
                Select a Time
              </option>
              <option value='2.00 pm'>2.00 pm</option>
              <option value='3.00 pm'>3.00 pm</option>
              <option value='6.30 pm'>6.30 pm</option>
            </select>
          </div>
          <div class='class-btn'>
            <button>Add Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
