import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = className.bind(styles);

function OnTop() {
  return (
    <aside className={cx('wrapper')}>
      <h2>OnTop</h2>
    </aside>
  );
}

export default OnTop;
