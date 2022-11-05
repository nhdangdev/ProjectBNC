import React from 'react';
import './style.scss';
import './Validator.js';
const Login = () => {
  const handleSubmit = () => {
    console.log('Handle Submit');
  };
  const backToHome = () => {
    console.log('Back to Home');
  };
  return (
    <div className="container_LoginPages">
      <div className="box">
        {/* <ul className="fly-in-text hidden">
          <li>
            <h2>Đ</h2>
          </li>
          <li>
            <h2>Ă</h2>
          </li>
          <li>
            <h2>N</h2>
          </li>
          <li>
            <h2>G</h2>
          </li>
          <li>
            <h2>N</h2>
          </li>
          <li>
            <h2>H</h2>
          </li>
          <li>
            <h2>Ậ</h2>
          </li>
          <li>
            <h2>P</h2>
          </li>
          <li>
            <h2>!</h2>
          </li>
        </ul> */}
        <div
          className="form"
          onSubmit={(e) => {
            this.submitForm(e);
          }}
        >
          <h2>Sign in</h2>
          <div className="inputBox">
            <input type="text" required=" required" id="username" />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" id="password" required=" required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="/">Forgot Password</a>
            <a href="/Register" onClick={handleSubmit}>
              Sign up
            </a>
          </div>
          <input type="submit" value="Login"></input>
          <div className="backToHome">
            <a href="/" onClick={backToHome}>
              Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
{
  /* <div id="toast">
        <!-- Success -->
        <div class="toast toast--success">
            
        </div>
    </div>

    <div>
        <div onclick="showSuccessToast();" class="btn btn--success">Show success Toast</div>
        <div onclick="showErrorToast();"class="btn btn--warning">Show error Toast</div>

    </div>
    <script>
        // Toast function
        function toast({ 
            title ='',
            message ='', 
            type ='info', 
            duration = 3000
        }) {
            const main = document.getElementById('toast');
            if (main) {
                const toast = document.createElement('div');

                // Auto Remove toast
                const autoRemoveID = setTimeout(function () {
                    main.removeChild(toast);
                }, duration + 1000);

                // Remove toast when clicked
                toast.onclick = function() {
                    if (e.target.closest('.toast__close')) {
                        main.removeChild(toast);
                        clearTimeout(autoRemoveID);
                    }
                }
                const icons = {
                    success: 'fas fa-check-circle',
                    info: 'fas fa-info-circle',
                    warning: 'fas fa-exclamation-circle',
                    error: 'fas fa-exclamation-circle',
                };
                const icon = icons[type];
                const delay = (duration/ 1000).toFixed(2);
                
                toast.classList.add('toast', 'toast--${type}');
                toast.style.animation = `slideInleft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
                toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
                `;
                main.appendChild(toast);

                
            }
        } 
        function showSuccessToast() {
            toast({
            title: 'Thành công !',
            message: 'Bạn đã đăng ký tài khoản thành công',
            type :'success',
            duration: 5000
            });
        }
        function showErrorToast() {
            toast({
            title: 'Thất bại!',
            message: 'Có lỗi xảy ra, vui lòng liên hệ quản trị viên',
            type :'error',
            duration: 5000
            });
        }  

    </script> */
}
