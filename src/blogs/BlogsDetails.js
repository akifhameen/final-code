import React from 'react';
import './BlogsDetails.css';
import article_img from '../assets/images/articles.jpg';

const BlogsDetails = () => {
  const temp = [1, 2, 3, 4];
  return (
    <div class='blogs__main-div'>
      <p class='class-p1'>Read Our Blog</p>
      <p class='class-p2'>
        The best Fitness blogs from thousands of blogs on the web and ranked by
        traffic, social media followers & freshness
      </p>
      <p class='class-p3'>
        We understand that for many of our members, exercise plays a huge part
        of your physical and mental wellbeing. And we believe that taking care
        of that right now has never been more important. To better support you
        as we get back to the gym, we will be updating our blog regularly to
        provide you with workout ideas (for the gym and home), wellbeing and
        nutrition content.
      </p>
      <div class='blogs_card-div'>
        {temp.map((index) => (
          <div class='blogs_item-div' key={index}>
            <img src={article_img} alt='image' />
            <p class='class-p4'>Gym & Fitness</p>
            <p class='class-p5'>
              Unlocking the Power of Functional Fitness: A Game-Changer for Your
              Gym Routine
            </p>
            <p class='class-p6'>
              Are you tired of the same old gym routines that leave you feeling
              bored and uninspired? It's time to supercharge your fitness
              journey with functional training! Functional fitness is not just a
              trend; it's a transformative approach that focuses on improving
              your overall strength, flexibility, and endurance by mimicking
              real-life movements.
            </p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogsDetails;
