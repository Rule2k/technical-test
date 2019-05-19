import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ displayForm }) => (
  <div id="header">
    <img
      src="./src/img/img.jpg"
      alt="header"
    />
    <p>{displayForm}</p>
  </div>
);

Header.propTypes = {
  displayForm: PropTypes.string.isRequired,
};

export default Header;
