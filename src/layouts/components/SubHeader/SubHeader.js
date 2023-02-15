import React from 'react';
import { Link } from 'react-router-dom';
import styles from './subHeader.module.scss';
import classNames from 'classnames/bind';
import Search from '~/layouts/components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SubHeader() {
  return (
    <header className={cx('wrapper')}>
      <Search />
      <div className={cx('shoppingCart')}>
        <Link to="/Cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </header>
  );
}

export default SubHeader;
