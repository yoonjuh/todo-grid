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
        </div>
        <p>{location}</p>
        <div className="home__rooms">
          <Icon icon="icon-profile-male" />
        </div>
        <p>{rooms}</p>
        <div className="home__area">
          <Icon icon="icon-expand" />
        </div>
        <p>{size}</p>
        <div className="home__price">
          <Icon icon="icon-key" />
        </div>
        <p>{price}</p>
        <button className="ctn">Contact realtor</button>
      </div>
    );
  }
}
export default HomeItem;
