import React from 'react';
import svg from '../style/img/sprite.svg';

const Icon = ({ className = '', icon }) => (
  <svg className={className}>
    <use xlinkHref={`${svg}#${icon}`} />s
  </svg>
);

export default Icon;
