/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import React, { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/img';
import styles from './Image.module.scss';

// const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImg, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const hanldeError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={hanldeError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
