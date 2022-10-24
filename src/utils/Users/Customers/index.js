import React, { useState } from 'react';
import './style.scss';

const Register = () => {
  // Đối tượng `Validator`
  function Validator(options) {
    const selectorRules = {};
    // Hàm thực hiện validate
    function validate(inputElement, rule) {
      // value: inputElement.value
      // test function: rule.test
      const errorElement = inputElement.parentElement.querySelector('.form-message');
      let errorMessage;

      // Lấy ra các rules của selector
      const rules = selectorRules[rule.selector];

      // Lặp qua từng rules & kiểm tra
      // Nếu có lỗi thì dừng việc kiểm tra
      for (var i = 0; i < rules.length; ++i) {
        errorMessage = rules[i](inputElement.value);
        if (errorMessage) break;
      }

      if (errorMessage) {
        errorElement.innerText = errorMessage;
        inputElement.parentElement.classList.add('invalid');
      } else {
        errorElement.innerText = '';
        inputElement.parentElement.classList.remove('invalid');
      }

      return !errorMessage;
    }

    // Lấy Element của form cần validate
    const formElement = document.querySelector(options.form);
    if (formElement) {
      // Khi submit form
      formElement.onsubmit = function (e) {
        // Bỏ đi hành vi mặc định
        e.preventDefault();

        let isFormValid = true;

        // Lặp qua từng rules và validate
        options.rules.forEach(function (rule) {
          var inputElement = formElement.querySelector(rule.selector);
          var isValid = validate(inputElement, rule);
          if (!isValid) {
            isFormValid = false;
          }
        });

        if (isFormValid) {
          console.log('Không có lỗi');
        } else {
          console.log('Có lỗi');
        }
      };

      // Lặp qua mỗi rule và xử lý ( lắng nghe sự kiện blur, input, ...)
      options.rules.forEach(function (rule) {
        // Lưu lại các Rules cho mỗi input
        if (Array.isArray(selectorRules[rule.selector])) {
          selectorRules[rule.selector].push(rule.test);
        } else {
          selectorRules[rule.selector] = [rule.test];
        }

        const inputElement = formElement.querySelector(rule.selector);

        if (inputElement) {
          // Xử lý trường hợp blur khỏi input
          inputElement.onblur = function () {
            validate(inputElement, rule);
          };

          // Xử lý mỗi khi nười dùng nhập vào input
          inputElement.oninput = function () {
            const errorElement = inputElement.parentElement.querySelector(options.errorSelect);
            errorElement.innerText = ' ';
            inputElement.parentElement.classList.remove('invalid');
          };
        }
      });
    }
  }

  // Định nghĩa các Rules
  // Nguyên tắc của các rules
  // 1. Khi có lỗi => Trả ra message lỗi
  // 2. Khi hợp lễ => Không trả ra cái gì cả ( undefined )
  Validator.isRequired = function (selector, message) {
    return {
      selector: selector,
      test: function (value) {
        return value.trim() ? undefined : message || 'Vui lòng nhập thông tin ở đây';
      },
    };
  };
  Validator.isEmail = function (selector, message) {
    return {
      selector: selector,
      test: function (value) {
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(value) ? undefined : message || 'Vui lòng nhập gmail';
      },
    };
  };

  Validator.minLength = function (selector, min, message) {
    return {
      selector: selector,
      test: function (value) {
        return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự `;
      },
    };
  };
  Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
      selector: selector,
      test: function (value) {
        return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
      },
    };
  };
  Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    rules: [
      Validator.isRequired('#username', 'Vui lòng nhập tên tài khoản của bạn'),
      Validator.isRequired('#fullnames', 'Vui lòng nhập tên đầy đủ của bạn'),
      Validator.isEmail('#email'),
      Validator.minLength('#password', 6),
      Validator.isRequired('#password_confirmation', 'Vui lòng nhập lại mật khẩu'),
      Validator.isConfirmed(
        '#password_confirmation',
        function () {
          return document.querySelector('#form-1 #password').value;
        },
        'Mật khẩu nhập lại không chính xác',
      ),
    ],
    onSubmit: function (data) {
      console.log(data);
    },
  });
  const [name, setName] = useState('');
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // CALL API
    console.log({
      name,
      fullname,
      email,
      password,
    });
  };
  return (
    <div className="box">
      <div
        action=""
        className="form"
        method="POST"
        id="form-1"
        onSubmit={(e) => {
          this.submitForm(e);
        }}
      >
        <h2>Sign Up</h2>
        <div className="inputBox">
          <input
            id="username"
            type="text"
            required=" required"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="form-message">Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            id="fullnames"
            type="text"
            required=" required"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <span className="form-message">Fullname</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input id="email" type="text" required=" required" value={email} onChange={(e) => setEmail(e.target.value)} />
          <span className="form-message">Email</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            id="password"
            type="password"
            required=" required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="form-message">Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="/">Forgot Password</a>
          <a href="/Signin">Sign in</a>
        </div>
        <input type="submit" value="Register" onClick={handleSubmit}></input>
        <div className="backToHome">
          <a href="/Home">Back to home</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
