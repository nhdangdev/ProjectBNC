import React, { useState } from 'react';
import Header from '~/components/Header';
import Contact from '~/components/Contact/Contact';
import Footer from '~/components/Footer';
import Sidebar from '~/layouts/components/Sidebar';

import './product.scss';
import '../../../Css/grid.css';
// import images from '~/assets/img';
import dataItems from '~/Data/database';
import { NumericFormat } from 'react-number-format';

function Product() {
  const [productsList, setProductList] = useState(dataItems);
  console.log(setProductList);

  const listItems = productsList.map((items) => {
    return (
      <article className="entry l-4" key={items.id}>
        <div className="entry-img">
          <img src={items.image} className="img-fluid img-products" alt="Máy Đo Huyết Áp Bắp Tay Tự Động And Ua-651" />
        </div>
        <h2 className="entry-title">
          <a href="/product-details">{items.name}</a>
        </h2>
        <div className="entry-content">
          <NumericFormat
            className="entry-price-old"
            value={items.priceOld}
            displayType={'text'}
            thousandSeparator={true}
            suffix={'đ'}
          />
          <NumericFormat
            className="entry-price-current"
            value={items.priceCurrent}
            displayType={'text'}
            thousandSeparator={true}
            suffix={'đ'}
          />
          <div className="read-more">
            <a href="/product">Xem chi tiết</a>
            <button className="addItems" onClick={this.dataItems.count}>
              Thêm sản phẩm
            </button>
          </div>
        </div>
      </article>
    );
  });

  console.log(listItems);

  return (
    <>
      <Header />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>Sản phẩm</li>
            </ol>
            <h2>SẢN PHẨM</h2>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Product Section ======= --> */}
        <section id="product" className="product">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8">
                <div className="home-filter hide-on-mobile-tablet">
                  <span className="home-filter__label">Sắp xếp theo</span>
                  <button className="home-filter__btn btn">Phổ biến</button>
                  <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                  <button className="home-filter__btn btn">Bán chạy</button>

                  <div className="select-input">
                    <span className="select-input__label">Giá</span>
                    <i className="select-input__icon fas fa-angle-down"></i>
                    {/* <!-- List option --> */}
                    {/* <ul className="select-input__list">
                      <li className="select-input__item">
                        <a href="" className="select-input__link">
                          Giá: Thấp đến cao
                        </a>
                      </li>
                      <li className="select-input__item">
                        <a href="" className="select-input__link">
                          Giá: Cao đến thấp
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className="home-product">
                  <div className="row sm-gutter">{listItems}</div>
                </div>

                {/* <!-- End product entry --> */}
                <div className="product-pagination">
                  <ul className="justify-content-center">
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End product entries list --> */}
              <Sidebar />
              {/* <!-- End product sidebar --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Blog Section --> */}
        <Contact />
        <Footer />
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default Product;

// {
//   <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
//     <i className="bi bi-arrow-up-short"></i>
//   </a>;
// }
