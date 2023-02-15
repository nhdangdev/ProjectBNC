import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

function MenuItem({ title, to }) {
  return (
    <NavLink to={to} className="menu-item">
      <span className="title">{title}</span>
    </NavLink>
  );
}

MenuItem.PropTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
export default MenuItem;
