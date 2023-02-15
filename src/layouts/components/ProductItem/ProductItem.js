import React from 'react';
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image/Image';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
  return (
    <Link to={'/@${data.nickname}'} className={cx('wrapper')}>
      <Image className={cx('product-img')} src={data.avatar} alt={data.full_name} />
      <div className={cx('product-info')}>
        <h4 className={cx('product-name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('product-check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('product-username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductItem;
