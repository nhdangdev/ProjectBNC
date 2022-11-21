import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Thiếu faSpinner
import HeaderlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
// import images from '~/assets/img';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus(); // useRef => Delete and focus the input
  };

  /*eslint no-const-assign: "error"*/
  /*eslint-env es6*/
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeaderlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          {/* Search */}
          <PopperWrapper>
            <h4 className={cx('search-title')}>Kết Quả</h4>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm sản phẩm ..."
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeaderlessTippy>

    // ===============================Main content ============================================
    // <aside className={cx('search')}>
    //   <h2>Search</h2>
    //   <img src={images.logo} alt="Logo Sidebar" />

    //   <input placeholder="Tìm kiếm sản phẩm ......" spellCheck={false} />
    //   <button className={cx('clear')}>
    //     <FontAwesomeIcon icon={faCircleXmark} />
    //   </button>
    //   <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
    //   <button className={cx('search-btn')}>
    //     {/*Search*/}
    //     <FontAwesomeIcon icon={faMagnifyingGlass} />
    //   </button>
    // </aside>
  );
}

export default Search;
