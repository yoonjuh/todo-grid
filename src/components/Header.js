import React from 'react';
import logo1 from '../style/img/logo.png';
import logo2 from '../style/img/logo-bbc.png';
import logo3 from '../style/img/logo-forbes.png';
import logo4 from '../style/img/logo-techcrunch.png';
import logo5 from '../style/img/logo-bi.png';

const Header = () => (
  <header className="header">
    <img src={logo1} alt="" className="header__logo" />
    <h3 className="heading-3">Your own home!</h3>
    <h1 className="heading-1">The ultimate personal freedom</h1>
    <button className="btn">View our properties</button>
    <div className="header__seenon-text">Seen on</div>
    <div className="header__seenon-logos">
      <img src={logo2} alt="Seen on logo" />
      <img src={logo3} alt="Seen on logo" />
      <img src={logo4} alt="Seen on logo" />
      <img src={logo5} alt="Seen on logo" />
    </div>
  </header>
);

export default Header;
