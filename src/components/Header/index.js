import React from 'react';
import './header.scss';

const Header = ({ displayForm }) => (
  <div id="header">
    <img
      src="https://iep.challenges.org/wp-content/uploads/sites/26/2015/11/header-image-5.jpg"
      alt="header"
    />
    <p>{displayForm}</p>
  </div>
);

export default Header;
