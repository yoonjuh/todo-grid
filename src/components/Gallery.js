import React, { Component } from 'react';
import GalleryItem from './Gallery-item';
import img1 from '../style/img/gal-1.jpeg';
import img2 from '../style/img/gal-2.jpeg';
import img3 from '../style/img/gal-3.jpeg';
import img4 from '../style/img/gal-4.jpeg';
import img5 from '../style/img/gal-5.jpeg';
import img6 from '../style/img/gal-6.jpeg';
import img7 from '../style/img/gal-7.jpeg';
import img8 from '../style/img/gal-8.jpeg';
import img9 from '../style/img/gal-9.jpeg';
import img10 from '../style/img/gal-10.jpeg';
import img11 from '../style/img/gal-11.jpeg';
import img12 from '../style/img/gal-12.jpeg';
import img13 from '../style/img/gal-13.jpeg';

const Gallery = () => (
  <section className="gallery">
    <GalleryItem pic={img1} num={1} />
    <GalleryItem pic={img2} num={2} />
    <GalleryItem pic={img3} num={3} />
    <GalleryItem pic={img4} num={4} />
    <GalleryItem pic={img5} num={5} />
    <GalleryItem pic={img6} num={6} />
    <GalleryItem pic={img7} num={7} />
    <GalleryItem pic={img8} num={8} />
    <GalleryItem pic={img9} num={9} />
    <GalleryItem pic={img10} num={10} />
    <GalleryItem pic={img11} num={11} />
    <GalleryItem pic={img12} num={12} />
    <GalleryItem pic={img13} num={13} />
  </section>
);

export default Gallery;
