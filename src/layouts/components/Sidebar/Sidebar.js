import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
// import Menu, { MenuItem } from './Menu';
// import config from '~/config';

import images from '~/assets/img';

function Sidebar() {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <h3 className="sidebar-title">Tìm kiếm</h3>
        <div className="sidebar-item search-form">
          <form action="">
            <input type="text" />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* <!-- End sidebar search formn--> */}

        <h3 className="sidebar-title">Danh mục</h3>
        <div className="sidebar-item categories">
          {/* <Menu>
            <MenuItem title="Vật tư tiêu hao" to={config.routes.productVTTH} />
            <span>(25)</span>
          </Menu> */}
          <ul>
            <li>
              <Link to="/product-details">
                Vật tư tiêu hao <span>(25)</span>
              </Link>
            </li>
            <li>
              <Link to="yhhn">
                Y học hạt nhân <span>(12)</span>
              </Link>
            </li>
            <li>
              <Link to="ptn">
                Thiết bị dụng cụ phòng thí nghiệm <span>(5)</span>
              </Link>
            </li>
            <li>
              <Link to="tbdt">
                Máy đo & Thiết bị điện tử <span>(22)</span>
              </Link>
            </li>
            <li>
              <Link to="x-quang">
                X-QUANG (X-RAY) <span>(8)</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- End sidebar categories--> */}

        <h3 className="sidebar-title">Mặt hàng liên quan</h3>
        <div className="sidebar-item recent-posts">
          <div className="post-item clearfix">
            <img src={images.product1} className="img-fluid" alt="" />
            <h4>
              <a href="/product">san pham 1</a>
            </h4>
            <p className="subText">Sub tex sp1</p>
          </div>
          <div className="post-item clearfix">
            <img src={images.product1} className="img-fluid" alt="" />
            <h4>
              <a href="/product">Quidem autem et impedit</a>
            </h4>
            <p className="subText">Sub tex sp1</p>
          </div>

          <div className="post-item clearfix">
            <img src={images.product1} className="img-fluid" alt="" />
            <h4>
              <a href="/product">Id quia et et ut maxime similique occaecati ut</a>
            </h4>
            <p className="subText">Sub tex sp1</p>
          </div>

          <div className="post-item clearfix">
            <img src={images.product1} className="img-fluid" alt="" />
            <h4>
              <a href="/product">Laborum corporis quo dara net para</a>
            </h4>
            <p className="subText">Sub tex sp1</p>
          </div>

          <div className="post-item clearfix">
            <img src={images.product1} className="img-fluid" alt="" />
            <h4>
              <a href="/product">Et dolores corrupti quae illo quod dolor</a>
            </h4>
            <p className="subText">Sub tex sp1</p>
          </div>
        </div>
        {/* <!-- End sidebar recent posts--> */}

        <h3 className="sidebar-title">Tags</h3>
        <div className="sidebar-item tags">
          <ul>
            <li>
              <a href="#">Vật tư tiêu hao</a>
            </li>
            <li>
              <a href="#">Vật dụng phòng thí nghiệm</a>
            </li>
            <li>
              <a href="#">Máy đó & thiết bị điện tử</a>
            </li>
            <li>
              <a href="#">Y học hạt nhân</a>
            </li>
            <li>
              <a href="#">X-Quang</a>
            </li>
          </ul>
        </div>
        {/* <!-- End sidebar tags--> */}
      </div>
      {/* <!-- End sidebar --> */}
    </div>
  );
}

export default Sidebar;
