import React, { useEffect, useState } from 'react';
import './ClassDetails.css';
import class_img from '../assets/images/tutorial.png';
import { getAllClasses } from '../api/class';
import { useAuth } from '../authContext';
import { enrollOrQuitClass } from '../api/user';

const ClassDetails = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  let isAuthenticated, plan, enrolledClassId;
  if (user) {
    ({ isAuthenticated, plan } = user);
  }

  const handleEnroll = async (classId) => {
    if (isAuthenticated && (plan === 'basic' || plan === 'premium')) {
      enrolledClassId = await enrollOrQuitClass({
        userId: user.id,
        classId: classId,
      });
    }
  };

  useEffect(async () => {
    const classList = await getAllClasses();
    setClasses(classList);
  }, [classes]);

  return (
    <div class='class__main-div'>
      <p class='class-p1'>Our Classes</p>
      <p class='class-p2'>Available Gym Classes</p>
      <p class='class-p3'>
        Explore a variety of fitness classes tailored to your goals and
        interests.
      </p>
      <div class='class_card-div'>
        {classes.map((eachClass) => (
          <div class='class_item-div' key={eachClass.id}>
            <img src={class_img} alt='alt text' />
            <p class='class-p4'>${eachClass.type}</p>
            <p class='class-p5'>
              Our bodybuilding classes are designed to help you sculpt and
              strengthen your physique with specialized workouts and expert
              guidance from our trainers
            </p>
            <button onClick={() => handleEnroll(eachClass.id)}>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDetails;
