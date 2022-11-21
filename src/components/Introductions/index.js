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
              <h1 data-aos="fade-up">
                Chúng tôi cung cấp vật tư y tế, các thiết bị cho phòng thí nghiệm,... dành cho bạn
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Tại đây chúng tôi chuyên cung cấp các thiết bị, vật tư y tế như bông băng gạc y tế các loại, đồ phòng
                dịch, khẩu trang, môi trường vận chuyển, filter tips 10ul, 100ul, 200ul, 1000ul, micropipet, ống
                eppendorf, dây truyền dịch, bơm kiêm tiêm 1ml, 3ml, 5ml, 10ml, 20ml, .....
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
