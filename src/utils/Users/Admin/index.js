import React from "react";
import "./style.scss";

const onLogin = () => {
  const name = document.getElementById("userName").value;
  const pass = document.getElementById("passWord").value;
  if (name === "nhdangdev" && pass === "123456") {
    return localStorage.setItem("user", true);
  }
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    //Khởi tạo state chứa giá trị của input
    this.state = {
      username: "",
      password: "",
    };
  }
  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  validationForm() {
    let returnData = {
      error: false,
      msg: "",
    };
    const { username, password } = this.state;
    //Kiểm tra username
    const re = /\S+@\S+\.\S+/;
    if (!re.test(username)) {
      returnData = {
        error: true,
        msg: "Tài khoản không đúng",
      };
    }
    //Kiểm tra password
    if (password.length < 8) {
      returnData = {
        error: true,
        msg: "Mật khẩu không đúng",
      };
    }
    return returnData;
  }
  submitForm(e) {
    //Chặn các event mặc định của form
    e.preventDefault();

    //Gọi hàm validationForm() dùng để kiểm tra form
    const validation = this.validationForm();

    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg);
    } else {
      alert("Submit form success");
    }
  }
  render() {
    return (
      <div className="box">
        <div
          className="form"
          onSubmit={(e) => {
            this.submitForm(e);
          }}
        >
          <h2>Sign in</h2>
          <div className="inputBox">
            <input
              type="text"
              required=" required"
              id="username"
              onChange={(e) => this.changeInputValue(e)}
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              id="password"
              required=" required"
              onChange={(e) => this.changeInputValue(e)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="/">Forgot Password</a>
            <a href="/">Sign up</a>
          </div>
          <input type="submit" value="Login" onSubmit={onLogin}></input>
        </div>
      </div>
    );
  }
}
export default Login;

{
  /* =============END INPUT=============== */
}
