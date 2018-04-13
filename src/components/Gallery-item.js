import React from 'react';

const GalleryItem = ({ pic, num }) => (
  <figure className={`gallery__item gallery__item--${num}`}>
    <img src={pic} alt="Gallery image" className="gallery__img" />
  </figure>
);

export default GalleryItem;
