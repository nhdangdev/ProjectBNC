import React from 'react';

function ProductDescription() {
  return (
    <div className="tab-content" id="myTabContent">
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
            Độ chính xác là một trong những yêu cầu quan trọng nhất trong theo dõi huyết áp. Với vòng bít IntelliWrap ™
            360° chính xác giúp máy đo huyết áp HEM-7156 của OMRON có được các kết quả đo chính xác một cách dễ dàng,
            bất kể vòng bít được quấn ở nhà như thế nào. Giúp bạn có được kết quả đo chính xác như ở phòng khám của bác
            sĩ.
          </p>
          <p>CHÍNH XÁC : Vòng Bít xoay được 360 độ ở vị trí đo mà vẫn đảm bảo chính xác</p>
          <p>THOẢI MÁI : Vòng Bít tạo khuôn vừa bắp tay, chu vi lớn 22-42 cm</p>
          <p>TRỰC QUAN, DỄ SỮ DỤNG: Dễ dàng quấn chỉ bằng một tay, giảm lỗi quấn vòng Bít sai khi đo</p>
          <p>CÓ CẢNH BÁO ĐỘT QUỴ: Phát hiện Afib, giúp cảnh báo nguy cơ đột qụy sớm</p>
          <p>KIỂM TRA KÉP: Sàn lọc rung tâm nhỉ &amp; đo huyết áp.</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
