import React from "react";
import "./style.scss";

const Services = () => {
  return (
    <>
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Dịch vụ</h2>
            <p>Chính sách bảo hành </p>
          </div>
          <div className="row gy-4">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-box blue">
                <i className="ri-discuss-line icon" />
                <h3>Chất lượng sản phẩm</h3>
                <p>
                  Điều bạn không cần phải quan tâm là tất cả các sản phẩm mà BNC
                  Medical cung cấp cho các bạn là những sản phẩm có chất lượng,
                  có ghi rõ nguồn gốc xuất xứ, chứng nhận ISO và giá tốt nhất
                  trên thị trường.
                </p>
                <a href="/#" className="read-more">
                  <span>Tìm hiểu thêm</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-box orange">
                <i className="ri-discuss-line icon" />
                <h3>Sản phẩm</h3>
                <p>
                  - Nếu sản phẩm là lỗi do nhà sản xuất cung cấp ra thị trường,
                  chúng tôi sẽ hoàn trả sản phẩm mới cho quý khách hàng trong
                  thời gian 72h.
                </p>
                <p>
                  - Nếu sản phẩm bị lỗi do nhà sản xuất được bán cho quý khách
                  hàng ở xa, chúng tôi sẽ xác nhận đổi hàng cho quý khách ở
                  trường hợp tính từ lúc quý khách ký nhận với nhân viên giao
                  hàng của các đơn vị chuyển phát nhanh, đơn vị bưu điện, chành
                  xe.
                </p>
                <a href="/#" className="read-more">
                  <span>Tìm hiểu thêm</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="service-box green">
                <i className="ri-discuss-line icon" />
                <h3>Thời hạn bảo hành</h3>
                <p>Thời hạn bảo hành được tính kể từ ngày mua hàng</p>
                <p>Bảo hành không bao gồm vận chuyển hàng và giao hàng</p>
                <a href="/#" className="read-more">
                  <span>Tìm hiểu thêm</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="service-box yellowgreen">
                <i className="ri-discuss-line icon" />
                <h3>Không bảo hành</h3>
                <p>
                  - Sản phẩm hư hỏng do sử dụng không đúng, sử dùng vào muc đích
                  khác, do thiên tai, rỉ sét, bể vỡ, do côn trùng hoặc động vật
                  phá hoại,...
                </p>
                <p>
                  - Sản phẩm không thuộc danh mục được bảo hành từ Nhà sản xuất
                  hoặc nhà phân phối.
                </p>
                <p>
                  - Sản phẩm bị hư hỏng do lỗi người sử dụng, và lỗi hư hỏng
                  không nằm trong phạm vi bảo hành của Nhà sản xuất.
                </p>
                <a href="/#" className="read-more">
                  <span>Tìm hiểu thêm</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                        <div className="service-box purple">
                            <i className="ri-discuss-line icon" />
                            <h3>Velit Doloremque.</h3>
                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                            <a href="/#" className="read-more"><span>Tìm hiểu thêm</span> <i className="bi bi-arrow-right" /></a>
                        </div>
                        </div> */}
            {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={700}>
                        <div className="service-box pink">
                            <i className="ri-discuss-line icon" />
                            <h3>Dolori Architecto</h3>
                            <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                            <a href="/#" className="read-more"><span>Tìm hiểu thêm</span> <i className="bi bi-arrow-right" /></a>
                        </div>
                        </div> */}
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </>
  );
};

export default Services;
