import React from 'react';
import './BlogsDetails.css';
import image1 from '../assets/images/articles.jpg';
import image2 from '../assets/images/rest-day.jpg';
import image3 from '../assets/images/Lose-weight-without-dieting-hero.jpg';
import image4 from '../assets/images/healthy-eating-ingredients.webp';
import { article1, article2, article3, article4 } from './articleDetails';


const BlogsDetails = () => {
  const temp = [0, 1, 2, 3];
  const images = [image1, image2, image3, image4]
  const titles = [
    'Unlocking the Power of Functional Fitness: A Game-Changer for Your Gym Routine',
    'The Important rest days',
    '33 sneaky ways to lose weight',
    'The best foods for a Healthy, Balanced diet'
  ]
  const articles = [article1, article2, article3, article4];
  const catogory = ['Gym & Fitness', 'Nutrition and Wellness']
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
            <img src={images[index]} alt='alt_image' />
            <p class='class-p4'>{index < 2 ? catogory[0] : catogory[1]}</p>
            <p class='class-p5'>
              {titles[index]}
            </p>
            <p class='class-p6'>
              {articles[index]}
            </p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogsDetails;
