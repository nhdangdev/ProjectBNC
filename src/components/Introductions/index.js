import React from "react";
import medicalImg from "../../assets/img/medical.jpg";
import "./style.scss";

const Introductions = () => {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1>
                Chúng tôi cung cấp vật tư y tế, các thiết bị cho phòng thí
                nghiệm,... dành cho bạn{" "}
              </h1>
              <h2>
                Tại đây chúng tôi chuyên cung cấp các thiết bị, vật tư y tế như
                đồ phòng dịch, khẩu trang, môi trường vận chuyển, filter tips
                10ul, 100ul, 200ul, 1000ul, micropipet .....
              </h2>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    href="#portfolio"
                    className="btn-get-started scrollTo d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Tìm hiểu thêm</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img">
              {/* <img src="../../../assets/img/hero-img.png" className="img-fluid" alt="" /> */}
              <img src={medicalImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};

export default Introductions;
