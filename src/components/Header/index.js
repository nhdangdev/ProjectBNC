import "./style.scss";
import React from "react";
import "../../Css/grid.css";

import logo from "@/assets/img/rv-logo.png";

const Header = () => {
  return (
    /* ======= Header ======= */
    <header id="header" className="header header-scrolled fixed-top">
      <div className="grid wide">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src={logo} alt="Logo" />
            <span>Medical Equipment</span>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link crollto active" href="#hero">
                  Trang chủ
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Dịch vụ
                </a>
              </li>
              <li className="dropdown">
                <a href="/#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="/#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="/#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="/#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="/#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="/#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="/#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="/#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Liên hệ
                </a>
              </li>
              <li>
                <a className="getLogin scrollto" href="#about">
                  Login
                </a>
              </li>
              {/* <FontAwesomeIcon icon="fa-solid fa-bars" />; */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* -- .navbar -- */}
        </div>
        {/* {products && <ProductsList products ={products} title="All Article" deleteArticle = {deleteArticle} /> }
            <button className="getLogin scrollto" onClick = {() => setName('Đây là setName')}>Change Name Value</button>
            <p> {name} </p> */}
      </div>
    </header>
    /* End Header */
  );
};

export default Header;
