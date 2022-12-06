/* eslint-disable react/display-name */

import React, { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/img';
import styles from './Image.module.scss';

// const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const hanldeError = () => {
    setFallback(images.noImg);
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

export default Image;
