import React from 'react';
import datas from 'src/data';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <div id="nav">
    {datas.map(data => (
      <NavLink
        key={data.slug}
        exact
        to={`/${data.slug}`}
      >
        {data.name}
      </NavLink>
    ))}
    <NavLink exact to="/">Home</NavLink>
  </div>
);

export default Nav;
