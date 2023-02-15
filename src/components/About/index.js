import React from 'react';
import './style.scss';
import '~/components/GlobalStyles/GlobalStyles';
import images from '~/assets/img';

const About = () => {
  return (
    <>
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <div className="content">
                  <h3>Về chúng tôi</h3>
                  <h2>BNC Medical Equipment</h2>
                  <p>
                    Được thành lập vào năm 2019, BNC Medical là một trong những nhà cung cấp vật tư y tế chuyên sâu về
                    “Y học hạt nhân” với đa dạng về chủng loại sản phẩm tại thị trường Việt Nam và các nước láng giềng
                  </p>
                  <p>
                    Chúng tôi luôn luôn hướng đến mục tiêu nâng cao chất lượng chăm sóc sức khỏe cho từng khách hàng
                    cũng như chất lượng sản phẩm đến các công ty đối tác uy tín trong nước.
                  </p>
                  <p>
                    Tại BNC Medical, chúng tôi cung cấp đầy đủ các loại vật tư y tế vì lợi ích cộng đồng, luôn định
                    hướng tất cả sản phẩm và dịch vụ của BNC mọi lúc, mọi nơi cho mọi người và mọi nhà. Những nhóm sản
                    phẩm chính chúng tôi cung cấp, bao gồm:
                  </p>
                  <div className="row">
                    <div className="col">
                      <li>Y học hạt nhân</li>
                      <li>X-Quang</li>
                      <li>Máy đó & thiết bị điện tử</li>
                    </div>
                    <div className="col">
                      <li>Vật tư bệnh viện</li>
                      <li>Phòng thí nghiệm</li>
                      <li>Vật tư tiêu hao</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <img src={images.aboutImg} className="img-fluid" alt="about" />
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </main>
    </>
  );
};

export default About;
