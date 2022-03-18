import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pay extends Component {
    render() {
        return (
          <div>
            <div className='set-background'>
              <div className="container ticker">
                <div className="row">
                  <div className="col-md-9">
                    <div className="ticket-wrapper2" id="choose-chair">
                      <div className="booking-background">
                        <div className="row">
                          <div className="col-md-12">
                            <section className="booking-ticket">
                              <h2 className="booking-title">Vui lòng thanh toán</h2>
                              <form className="pay-wrapper">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label className="control-label">Họ và tên</label>
                                  </div>
                                  <div className="col-md-5">
                                    <input id="name" placeholder="Họ tên" className="login input-booking" />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-3">
                                    <label className="control-label">Email</label>
                                  </div>
                                  <div className="col-md-5">
                                    <input id="email" placeholder="Email" className="login input-booking" />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-3">
                                    <label className="control-label">Số điện thoại</label>
                                  </div>
                                  <div className="col-md-5">
                                    <input id="phone" placeholder="Số điện thoại" className="login input-booking" />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-3">
                                    <label className="control-label" />
                                  </div>
                                  <div className="col-md-5">
                                    <div className="header-pay">
                                      <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                          <li>
                                            <Link className="btn-pay" to="/chonDichvu">Quay lại</Link>
                                          </li>
                                
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                          <button className="btn-pay">
                                            Thanh toán
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>                         
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>     
                  <div className="col-md-3">
                    <div className="ticket-right">
                      <div className="ticket-header" style={{top: '0px'}}>
                        <section className="ticket-feature">
                          <article className="row">
                            <div style={{textAlign: 'center'}} className="col-md-12">
                              <img src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61892e1fa9371f3a919b76c6_Venom-2-1.jpg" alt='for react my app' className="ticket-img" />
                            </div>
                            <div className="col-md-12">
                              <div className="ticket-detail">
                                <h2 className="ticket-title upper-text">VENOM 2: ĐỐI MẶT TỬ THÙ</h2>                               
                                <div className="ticket-info">
                                  <p><b>Rạp: &nbsp;</b>Galaxy Nguyễn Du&nbsp;</p>
                                  <p><b>Suất chiếu: &nbsp;</b>18:00&nbsp; | Thứ tư, 22/12/2021</p>
                                  <p className="ng-binding"><b>Combo: &nbsp;</b>2 bắp 1 nước</p>
                                  <p className="ng-binding"><b>Ghế: &nbsp;</b>G3</p>
                                </div>
                                <div className="ticket-price-total">
                                  <p>Tổng: &nbsp; 135000</p>
                                </div>
                              </div>                       
                            </div>                      
                          </article>                    
                        </section>               
                      </div>
                    </div>            
                  </div>      
                </div>
              </div>
            </div>
          </div>
        )
    }
}

