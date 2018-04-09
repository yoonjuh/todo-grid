import React from 'react';
import img1 from '../style/img/story-1.jpeg';
import img2 from '../style/img/story-2.jpeg';

const StoryPics = () => (
  <div className="story__pictures">
    <img src={img1} alt="Couple with new house" className="story__img--1" />
    <img src={img2} alt="New house" className="story__img--2" />
  </div>
);

export default StoryPics;
