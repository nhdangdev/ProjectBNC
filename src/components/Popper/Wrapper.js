import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types';

Wrapper.propTypes = {
  children: PropTypes.string,
};
const cx = classNames.bind(styles);
function Wrapper({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
