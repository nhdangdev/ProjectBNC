import React from 'react';
import images from '~/assets/img';
import './style.scss';
import '~/components/GlobalStyles';

const Introductions = () => {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Chúng tôi cung cấp vật tư y tế, các thiết bị cho phòng thí nghiệm dành cho bạn</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Tại đây chúng tôi chuyên cung cấp các thiết bị và hầu hết các loại vật tư y tế:
                <p>- Bông, băng gạc y tế các loại </p>
                <p>- Môi trường vận chuyển, dây truyền dịch, dây truyền máu </p>
                <p>- Micropipet, khẩu trang, cồn y tế, lăng kính</p>
                <p>- Ống eppendorf, ống ETA, ống Serum</p>
                <p>- Filter tips 10ul, 100ul, 200ul, 1000ul,.... </p>
                <p>- Bơm kiêm tiêm 1ml, 3ml, 5ml, 10ml, 20ml, ..... </p>
                <p>Để biết thêm thông tin và nhận báo giá tốt nhất vui lòng liên hệ</p>
                <p className="flashing"> Hotline: 0348 316 452 (gặp Huyền)</p>
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a
                    href="#about"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Tìm hiểu thêm</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={images.medicalImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};
export default Introductions;
