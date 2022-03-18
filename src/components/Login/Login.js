import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
          <div>
            <div className='set-background'>
              <section className="page-section">
                <div className="container">
                  <div className="signup_container">
                    <div className="container__child signup__thumbnail">                
                      <div className="thumbnail__content text-center">
                        <h1 className="heading--primary">Chào mừng bạn đến với webstie.</h1>
                        <h2 className="heading--secondary">Hãy đăng nhập ngay</h2>
                      </div>                 
                      <div className="signup__overlay" />
                    </div>
                    <div className="container__child signup__form">
                      <form action="#" className="form-login">                  
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input className="form-control" type="text" name="email" id="email" placeholder="levana123@gmail.com" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Mật khẩu</label>
                          <input className="form-control" type="password" name="password" id="password" placeholder="********" required />
                        </div>                               
                        <div className="m-t-lg">
                          <ul className="list-inline">
                            <li>
                              <button className="btn--form">Đăng nhập</button>
                            </li>
                            <li>
                              <h1 className="logup">Bạn chưa có tài khoản ?</h1>
                              <Link className="signup__link" to="/dangKy">Nhấp vào đây để đăng ký</Link>
                            
                            </li>
                          </ul>
                        </div>
                      </form>  
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )
    }
}
