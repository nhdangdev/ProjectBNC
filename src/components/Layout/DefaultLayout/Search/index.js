import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import './style.scss';
import images from '~/assets/img';
import ProductItem from '~/components/ProductItem';

function Search() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  }, []);

  return (
    <header className="wrapper">
      <div className="inner">
        {/* <div className="logo"> */}
        <img src={images.logo} alt="Demo để xóa" />
        {/* </div> */}
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className="search-result" tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className="search-title">Kết Quả</h4>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className="search">
            <input placeholder="Tìm kiếm sản phẩm ..." spellCheck={false} />
            <button className="clear">
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className="loading" icon={faSpinner} />
            <button className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className="acctions">
          {/* <p>Acctions - ready update</p> */}
          <Button text>Upload</Button>
          <Button rounded>Exam</Button>
        </div>
      </div>
    </header>

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
