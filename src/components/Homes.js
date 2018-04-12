import React from 'react';
import HomeItem from './HomeItem';

import Icon from './icon';
import home1 from '../style/img/house-1.jpeg';
import home2 from '../style/img/house-2.jpeg';
import home3 from '../style/img/house-3.jpeg';
import home4 from '../style/img/house-4.jpeg';
import home5 from '../style/img/house-5.jpeg';
import home6 from '../style/img/house-6.jpeg';

const Homes = () => (
  <section className="homes">
    <HomeItem img={home1} location="USA" rooms="5 rooms" size="325 " price="$1,200,000" desc="Beautiful Family House" />
    <HomeItem
      img={home2}
      location="Canada"
      rooms="6 rooms"
      size="450 m "
      price="$2,750,000"
      desc="Modern Glass Villa"
    />
    <HomeItem img={home3} location="UK" rooms="4 rooms" size="250 m" price="$850,000" desc="Cozy Country House" />
    <HomeItem
      img={home4}
      location="Portugal"
      rooms="6 rooms"
      size="480 m "
      price="$1,950,000"
      desc="Large Rustical Villa"
    />
    <HomeItem
      img={home5}
      location="Germany"
      rooms="18 rooms"
      size="4230 m "
      price="$9,500,000"
      desc="Majestic Palace House"
    />
    <HomeItem
      img={home6}
      location="Italy"
      rooms="3 rooms"
      size="180 m "
      price="$,600,000"
      desc="Modern Family Apartment"
    />
  </section>
);

export default Homes;
