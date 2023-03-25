import React, { useState, useEffect } from 'react';
import './productDetails.scss';
import Header from '~/components/Header';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';

import images from '~/assets/img';
// import ProductDescription from './ProductDescription';
// import ProductIngredient from './ProductIngredient';
// import Document from './Document';
// import Comment from './Comment';

const tabs = ['Mô tả sản phẩm', 'Thành phần', 'Hướng dẫn sử dụng', 'Bình luận'];

function ProductsDetails() {
  // const [active, setActive] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('Mô tả sản phẩm');

  useEffect(() => {
    fetch(`https:jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      <Header />
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/Product">Sản phẩm</a>
              </li>
              <li>Chi tiết sản phẩm</li>
            </ol>
            <h2>CHI TIẾT SẢN PHẨM</h2>
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
                      <img src={images.maydohuyetap} alt="Máy đo huyết áp" />
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
                      <strong>Category</strong>: Vật tư tiêu hao
                    </li>
                    <li>
                      <strong>Hãng</strong>: Việt Nam
                    </li>
                    <li>
                      <strong>Số lô (Date)</strong>: 01/03/2021
                    </li>
                    <li>
                      <div className="productPrice">
                        <div className="productPriceBox">
                          <del className="productPriceCompare">989,000₫</del>
                          <span className="productPriceMain">879,000₫</span>
                          <span className="productDiscount">Tiết kiệm 11%</span>
                        </div>
                      </div>
                    </li>
                    <div className="productActionMain">
                      <div className="groupAdd">
                        <div className="itemQuantity">
                          <button className="qtyBtn minusQuan" data-type="minus">
                            -
                          </button>
                          <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value="1"
                            min="1"
                            className="quantitySelector"
                          />
                          <button className="qtyBtn plusQuan" data-type="plus">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="productAction">
                        <button type="button" className="hoverOpacity" id="addToCart">
                          Thêm vào giỏ hàng
                        </button>
                        <button type="button" className="hoverOpacity" id="buyNow">
                          Mua ngay
                        </button>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="product-description">
                  <h2>Mô tả chi tiết sản phẩm</h2>
                  <p>
                    Độ chính xác là một trong những yêu cầu quan trọng nhất trong theo dõi huyết áp. Với vòng bít
                    IntelliWrap ™ 360° chính xác giúp máy đo huyết áp HEM-7156 của OMRON có được các kết quả đo chính
                    xác một cách dễ dàng, bất kể vòng bít được quấn ở nhà như thế nào. Giúp bạn có được kết quả đo chính
                    xác như ở phòng khám của bác sĩ. CHÍNH XÁC : Vòng Bít xoay được 360 độ ở vị trí đo mà vẫn đảm bảo
                    chính xác THOẢI MÁI : Vòng Bít tạo khuôn vừa bắp tay, chu vi lớn 22-42 cm TRỰC QUAN, DỄ SỮ DỤNG: Dễ
                    dàng quấn chỉ bằng một tay, giảm lỗi quấn vòng Bít sai khi đo CÓ CẢNH BÁO ĐỘT QUỴ: Phát hiện Afib,
                    giúp cảnh báo nguy cơ đột qụy sớm KIỂM TRA KÉP: Sàn lọc rung tâm nhỉ & đo huyết áp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Product Details Section */}
        {/* <div className="productTabsContent">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#tabOne"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                onClick={handleClick}
              >
                Mô tả sản phẩm
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#tabTwo"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Thành phần
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#tabThree"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Hướng dẫn sử dụng
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#tabFour"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Bình luận
              </a>
            </li>
          </ul>
        </div> */}
        <div className="productTabsContent">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab} onClick={() => setType(tab)}>
                <a
                  className="nav-link"
                  style={type === tab ? { background: '#23acae', color: 'white' } : {}}
                  onClick={() => setType(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}

            {posts.map((post) => (
              <li key={post.id}>{post.username}</li>
            ))}
          </ul>
        </div>
        {/* <ProductDescription /> || <ProductIngredient /> || <Document /> || <Comment /> */}
        {/* <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tabOne" role="tabpanel" aria-labelledby="home-tab">
            <div>
              <p>&nbsp;</p>
              <div className="table-responsive">
                <table cellPadding="0" cellSpacing="0" border="1" className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <td>Sản xuất:</td>
                      <td>Hàn Quốc</td>
                    </tr>
                    <tr>
                      <td>Cung cấp tại:</td>
                      <td>Việt Nam</td>
                    </tr>
                    <tr>
                      <td>Số lượng:</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Bảo hành:</td>
                      <td>1 năm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Độ chính xác là một trong những yêu cầu quan trọng nhất trong theo dõi huyết áp. Với vòng bít
                IntelliWrap ™ 360° chính xác giúp máy đo huyết áp HEM-7156 của OMRON có được các kết quả đo chính xác
                một cách dễ dàng, bất kể vòng bít được quấn ở nhà như thế nào. Giúp bạn có được kết quả đo chính xác như
                ở phòng khám của bác sĩ.
              </p>
              <p>CHÍNH XÁC : Vòng Bít xoay được 360 độ ở vị trí đo mà vẫn đảm bảo chính xác</p>
              <p>THOẢI MÁI : Vòng Bít tạo khuôn vừa bắp tay, chu vi lớn 22-42 cm</p>
              <p>TRỰC QUAN, DỄ SỮ DỤNG: Dễ dàng quấn chỉ bằng một tay, giảm lỗi quấn vòng Bít sai khi đo</p>
              <p>CÓ CẢNH BÁO ĐỘT QUỴ: Phát hiện Afib, giúp cảnh báo nguy cơ đột qụy sớm</p>
              <p>KIỂM TRA KÉP: Sàn lọc rung tâm nhỉ &amp; đo huyết áp.</p>
              <p></p>
            </div>
          </div>
        </div> */}
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
}

export default ProductsDetails;
