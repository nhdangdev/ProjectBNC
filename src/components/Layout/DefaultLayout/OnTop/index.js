import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import images from '~/assets/img';
import styles from './onTop.module.scss';
import classNames from 'classnames/bind';
import Search from '~/components/Layout/DefaultLayout/Search';

const cx = classNames.bind(styles);
function OnTop() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Demo để xóa" />
        </div>

        {/* Search */}
        <Search />

        <div className={cx('acctions')}>
          <Button text>Upload</Button>
          <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Exam
          </Button>
        </div>
      </div>
    </header>
  );
}

export default OnTop;
