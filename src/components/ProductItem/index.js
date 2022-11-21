import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import Image from '~/components/Image';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function ProductItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('product-img')} src={images.noImg} alt="avt1" />
      <div className={cx('product-info')}>
        <h4 className={cx('product-name')}>
          <span>Sản phẩm 1</span>
          <FontAwesomeIcon className={cx('product-check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('product-username')}>sanpham1</span>
      </div>
    </div>
  );
}

export default ProductItem;
