import React, { Component } from 'react';
import Icon from './icon';

const Features = () => (
  <div className="features">
    <div className="feature">
      <Icon className="feature__icon" icon="icon-global" />
      <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
      <p className="feature__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
        voluptatibus.
      </p>
    </div>
    <div className="feature">
      <Icon className="feature__icon" icon="icon-trophy" />
      <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
      <p className="feature__text">
        Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
      </p>
    </div>
    <div className="feature">
      <Icon className="feature__icon" icon="icon-map-pin" />
      <h4 className="heading-4 heading-4--dark">All homes in top locations</h4>
      <p className="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
    </div>
    <div className="feature">
      <Icon className="feature__icon" icon="icon-key" />
      <h4 className="heading-4 heading-4--dark">New homes in one week</h4>
      <p className="feature__text">
        Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="feature">
      <Icon className="feature__icon" icon="icon-presentation" />
      <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
      <p className="feature__text">
        Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.
      </p>
    </div>
    <div className="feature">
      <Icon className="feature__icon" icon="icon-lock" />
      <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
      <p className="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
    </div>
  </div>
);
export default Features;
