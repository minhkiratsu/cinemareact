import React, { Component } from 'react'


export default class Register extends Component {
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
                        <h2 className="heading--secondary">Bạn đã sẵn sàng để trở thành thành viên mới ?</h2>
                      </div>                 
                      <div className="signup__overlay" />
                    </div>
                    <div className="container__child signup__form">
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="username">Họ và tên</label>
                          <input className="form-control" type="text" name="name" id="name" placeholder="Lê Văn A" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input className="form-control" type="text" name="email" id="email" placeholder="levana123@gmail.com" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Mật khẩu</label>
                          <input className="form-control" type="password" name="password" id="password" placeholder="********" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="username">Số điện thoại</label>
                          <input className="form-control" type="tel" name="telephone" id="telephone" placeholder required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="username">Giới tính</label>
                          <input className="form-control" type="text" name="sex" id="sex" placeholder="nam/nữ" required />
                        </div>   
                        <div className="form-group">
                          <label htmlFor="username">Địa chỉ</label>
                          <input className="form-control" type="text" name="address" id="address" placeholder="Đà Nẵng" required />
                        </div>               
                        <div className="m-t-lg">
                          <ul className="list-inline">
                            <li>
                              
                              <button className="btn--form">Đăng ký</button>
                        
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
