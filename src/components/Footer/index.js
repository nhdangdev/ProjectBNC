import React from "react";
import "./style.scss";
import "../../App.css";

const Footer = () => {
  return (
    <div>
      <section className="">
        <footer id="footer" className="footer">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                  <h4>Thông tin</h4>
                  <p>Gửi thông tin !!!</p>
                </div>
                <div className="col-lg-6">
                  <form action="true" method="post">
                    <input type="email" name="email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="/#" className="logo d-flex align-items-center">
                    {/* <img src="../../assets/img/logo.png" alt="" /> */}
                    <span>Công ty TNHH Thương Mại Và Xuất Nhập Khẩu BNC</span>
                  </a>
                  <p>
                    Được thành lập vào năm 2019, BNC Medical là một trong những
                    nhà cung cấp vật tư tiêu hao, vật tư y tế chuyên sâu về “Y
                    học hạt nhân” với đa dạng về chủng loại sản phẩm tại thị
                    trường Việt Nam và các nước láng giềng.
                  </p>
                  <br />
                  <p>
                    Ngoài ra BNC là nhà cung cấp các loại bông, băng, gạc, khẩu
                    trang y tế (HDM, KENKO, N95, K94,...), cũng như nhập khẩu
                    các dòng như dây truyền dịch, kim luồng, filter tips, ....
                    và cung cấp cho các bệnh viện ở Miền Tây, Tp Hồ Chí Minh,
                    các tỉnh Tây Nguyên.
                  </p>
                  <div className="social-links mt-3">
                    <a href="https://twitter.com/?lang=vi" className="twitter">
                      <i className="bi bi-twitter" />
                    </a>
                    <a
                      href="https://www.facebook.com/BNCMedical"
                      className="facebook"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="https://www.instagram.com/" className="instagram">
                      <i className="bi bi-instagram bx bxl-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/" className="linkedin">
                      <i className="bi bi-linkedin bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Thông tin</h4>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="/#">Trang chủ</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#about">Giới thiệu</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#product">Danh mục sản phẩm</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#services">Chính sách bảo hành</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#contact">Liên hệ</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Dịch vụ</h4>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="/#">Y học hạt nhân</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="/#">Vật tư tiêu hao</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="/#">Vật tư bệnh viện</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="/#">Phòng thí nghiệm</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="/#">Máy đo & Thiết bị điện tử</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="/#">X-QUANG (X-RAY)</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                  <h4>Liên hệ với chúng tôi</h4>
                  <p>
                    <strong>
                      BNC IMPORT EXPORT AND TRADING COMPANY LIMITED
                    </strong>
                    <br />
                    Mã số thuế: 0315493341 <br />
                    <strong>Địa chỉ:</strong> 652/55/5 Cộng Hòa, Phường 13, Quận
                    Tân Bình, Thành phố Hồ Chí Minh. <br />
                    <strong>Hotline:</strong>
                    <br />
                    0941 868 790 - Mr. An
                    <br />
                    0348 316 452 - Ms. Huyền
                    <br />
                    <strong>Email liên hệ:</strong> <br />
                    an.nguyen@bncmedical.com.vn
                    <br />
                    huyen.vo@bncmedical.com.vn
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              2019 © Copyright{" "}
              <strong>
                <span>BNCMedical</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="bncmedical.com.vn">BNC Medical</a>
            </div>
          </div>
        </footer>
        <a
          href="/#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </section>
    </div>
  );
};

export default Footer;
