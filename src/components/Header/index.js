import React, { useState } from 'react';
import './style.scss';
import '~/components/GlobalStyles/GlobalStyles';
import '../../Css/grid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';

import logo from '~/assets/img/rv-logo.png';
import Button from '~/components/Button/Button';

const Header = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    /* ======= Header ======= */
    <header id="header" className="header header-scrolled fixed-top">
      <div className="header_wrapper">
        <Link to={config.routes.home} className="logo">
          <img src={logo} alt="Logo" />
          <span>
            Medical <br /> Equipment
          </span>
        </Link>
        <nav id="navbar" className={isActive ? 'navbar' : 'navbar navbar-mobile'}>
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
              <Button className="getLogin scrollto" href="/Login" rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Đăng nhập
              </Button>
            </li>
          </ul>
          <i
            className={isActive ? 'bi bi-list mobile-nav-toggle' : 'bi mobile-nav-toggle bi-x'}
            onClick={handleToggle}
          />
        </nav>
        {/* -- .navbar -- */}
      </div>
    </header>
    /* End Header */
  );
};

export default Header;
