import React from 'react';
import './style.scss';

NotFound.propTypes = {};
function myFunction(e) {
  var x = -e.clientX / 5,
    y = -e.clientY / 5;
  document.getElementById('container').style.backgroundPositionX = x + 'px';
  document.getElementById('container').style.backgroundPositionY = y + 'px';
}

function NotFound() {
  return (
    <div id="container" onMouseMove={myFunction}>
      <div className="content">
        <h2>404</h2>
        <h4>Opps ! Trang bạn tìm kiếm không tồn tại</h4>
        <p>Trang bạn đang tìm kiếm không tồn tại. Bạn có thể đã nhập sai địa chỉ hoặc trang có thể đã bị di chuyển.</p>
        <a href="/">Trở lại trang chủ</a>
      </div>
    </div>
  );
}

export default NotFound;
