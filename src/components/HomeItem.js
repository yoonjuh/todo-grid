import React, { Component } from 'react';
import Icon from './icon';

class HomeItem extends Component {
  render() {
    const { img, desc, rooms, size, price, name, location } = this.props;
    return (
      <div className="home">
        <img src={img} className="home__img" />
        <Icon className="home__like" icon="icon-heart-full" />
        <h5 className="home__name">{desc}</h5>
        <div className="home__location">
          <Icon icon="icon-map-pin" />
          <p>{location}</p>
        </div>
        <div className="home__rooms">
          <Icon icon="icon-profile-male" />
          <p>{rooms}</p>
        </div>
        <div className="home__area">
          <Icon icon="icon-expand" />
          <p>{size}</p>
        </div>
        <div className="home__price">
          <Icon icon="icon-key" />
          <p>{price}</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
    );
  }
}
export default HomeItem;
