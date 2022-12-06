import React from 'react';
import './style.scss';
import product1 from '~//assets/img/product/product-1.jpg';
import Header from '~/components/Header';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';

const ProductsDetails = () => {
  return (
    <div>
      <Header />
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Product">Product</a>
              </li>
              <li>Product Details</li>
            </ol>
            <h2>Product Details</h2>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* ======= Product Details Section ======= */}
        <section id="product-details" className="product-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="product-details-slider swiper-container">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src={product1} alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="product-info">
                  <h3>Thông tin sản phẩm</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: BNC design
                    </li>
                    <li>
                      <strong>Client</strong>: ASU Company
                    </li>
                    <li>
                      <strong>Project date</strong>: 01 March, 2021
                    </li>
                    <li>
                      <strong>Project URL</strong>: <a href="/home">www.bncmedical.com.vn</a>
                    </li>
                  </ul>
                </div>
                <div className="product-description">
                  <h2>This is an example of product detail</h2>
                  <p>
                    About ipsum nam products corporis repudiandae. Quitar eos dolorem eos itaque inventore commodi
                    labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim.
                    Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at
                    esse enim cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Product Details Section */}
      </main>
      {/* End #main */}
      <Contact />
      {/* ======= Footer ======= */}
      <Footer />
      {/* End Footer */}
      <a href="/home" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  );
};

export default ProductsDetails;
