import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import './style.scss';
import images from '~/assets/img';

function Search() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
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
            <PopperWrapper>
              <div className="search-result" tabIndex="-1" {...attrs}>
                Ket Qua
              </div>
            </PopperWrapper>
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
          <p>Acctions - ready update</p>
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
