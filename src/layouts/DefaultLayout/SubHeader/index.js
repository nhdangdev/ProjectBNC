import React from 'react';
import styles from './subHeader.module.scss';
import classNames from 'classnames/bind';
import Search from '~/layouts/DefaultLayout/Search';

const cx = classNames.bind(styles);
function SubHeader() {
  return (
    <header className={cx('wrapper')}>
      <Search />
    </header>
  );
}

export default SubHeader;
