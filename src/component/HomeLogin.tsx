import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/HomeLogin.css';
import InputLogin from '../component/InputLogin';
import ButtonLogin from "../component/ButtonLogin"

const HomeLogin = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    passWord: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
    <div className="row agile-items-center">
      <div className="container-fluid d-flex fullscreen-container justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="form-login col-12 col-md-4">
          <div className="title-login">
            <div className='title'>
              <span>Đăng nhập</span>
            </div>
            <div className='title-content'>
              <span>Đăng nhập bằng số điện thoại mà bạn đã đăng ký với chúng tôi.</span>
            </div>
          </div>
          <div className="input-login">
            <div className='input-pn-ps'>
              <InputLogin
                title="Số điện thoại"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
              />
              <InputLogin
                title="Mật khẩu"
                type="password"
                name="passWord"
                value={formData.passWord}
                onChange={handleChange}
                placeholder="Nhập mật khẩu"
              />
              <span style={{
                width: '100%',
                height: '27px',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '27px',
                textAlign: 'right',
                textUnderlinePosition: 'from-font',
              }}>
                Quên mật khẩu?
              </span>
            </div>
            <ButtonLogin
              name="loginButton"
              value="Đăng nhập"
              width="100%"
              height="49px"
            />
            <div className='transfer-sign-up'>
              <span>
                Bạn chưa có tài khoản
              </span>
              <a href='#' style={{ textDecoration: 'none' }}> Đăng ký ngay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default HomeLogin;
