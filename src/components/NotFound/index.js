import React from "react";
import "./style.scss";

NotFound.propTypes = {};

const containers = document.getElementById("container");
window.onmousemove = function (e) {
  var x = -e.clientX / 5,
    y = -e.clientY / 5;
  containers.style.backgroundPositionX = x + "px";
  containers.style.backgroundPositionY = y + "px";
};
function NotFound() {
  return (
    <div id="container">
      <div className="content">
        <h2>404</h2>
        <h4>Opps ! Trang bạn tìm kiếm không tồn tại</h4>
        <p>
          Trang bạn đang tìm kiếm không tồn tại. Bạn có thể đã nhập sai địa chỉ
          hoặc trang có thể đã bị di chuyển.
        </p>
        <a href="#hero">Trở lại trang chủ</a>
      </div>
    </div>
  );
}

export default NotFound;
