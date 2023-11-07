import React from 'react';
import BlogsHero from '../blogs/BlogsHero';
import BlogsDetails from '../blogs/BlogsDetails';
import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      <div class='blogs__hero-section'>
        <BlogsHero />
      </div>
      <div class='blogs__details-section'>
        <BlogsDetails />
      </div>
    </div>
  );
};
export default Blogs;
