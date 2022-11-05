import React from 'react';
import './style.scss';
import '~/components/GlobalStyles';
import '../../Css/grid.css';

import logo from '~/assets/img/rv-logo.png';

const Header = () => {
  return (
    /* ======= Header ======= */
    <header id="header" className="header header-scrolled fixed-top">
      {/* <div className="grid wide"> */}
      {/* <div className="container-fluid container-xl d-flex align-items-center justify-content-between"> */}
      <div className="header_wrapper">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
          <span>
            Medical <br /> Equipment
          </span>
        </a>
        {/* <nav id="navbar" className="navbar navbar-mobile"> // Click vào icon hiển thị class navbar-mobile */}
        <nav id="navbar" className="navbar ">
          <ul>
            <li>
              <a className="nav-link crollto active" href="/">
                Trang chủ
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Giới thiệu
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/product">
                Sản phẩm
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Dịch vụ
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Liên hệ
              </a>
            </li>
            <li>
              <a className="getLogin scrollto" href="/Login">
                Đăng nhập
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle " />
        </nav>
        {/* -- .navbar -- */}
      </div>
      {/* </div> */}
    </header>
    /* End Header */
  );
};

export default Header;
