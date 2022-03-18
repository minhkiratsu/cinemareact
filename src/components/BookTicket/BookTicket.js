import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class BookTicket extends Component {
  
  
  
  render() {
        return (
          <div>
            <div className='set-background'>
              <div className="container ticker" id="page-top">
                <div className="row">
                  <div className="col-md-9">
                    {/* BOOK TICKKET  */}
                    <div className="ticket-wrapper">
                      <div className="booking-background">
                        <div className="row">
                          <div className="col-md-12">                               
                            <section className="booking-ticket">
                              <h2 className="booking-title">Chọn vé/thức ăn</h2>
                              <div className="table-responsive">
                                <table className="table table-striped booking-ticket-table">
                                  <colgroup>
                                    <col width="45%" />
                                    <col width="25%" />
                                    <col width="15%" />
                                    <col width="15%" />
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th>Loại vé</th>
                                      <th>Số lượng</th>
                                      <th>Giá (VNĐ)</th>
                                      <th>Tổng (VNĐ)</th>
                                    </tr>
                                  </thead>
                                  <tbody className="table-ticket">
                                    <tr className="ng-scope">
                                      <td>
                                        <p className="ng-binding">Vé đôi 2 người</p>
                                      </td>
                                      <td>
                                        <div className="input-group input-booking">
                                          <input style={{width: '100px'}} placeholder='0' type="number" min={0} max={8} className="input-number" />
                                        </div>
                                      </td>
                                      <td className="ng-binding">
                                        60000
                                      </td>
                                      <td className="ng-binding">
                                        0
                                      </td>
                                    </tr>
                                    <tr className="total">
                                      <td colSpan={3} className="ng-binding">Tổng</td>
                                      <td className="ng-binding">60000</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="table table-striped booking-ticket-table">
                                  <colgroup>
                                    <col width="45%" />
                                    <col width="25%" />
                                    <col width="15%" />
                                    <col width="15%" />
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th>Combo</th>
                                      <th>Số lượng</th>
                                      <th>Giá (VNĐ)</th>
                                      <th>Tổng (VNĐ)</th>
                                    </tr>
                                  </thead>
                                  <tbody className="table-ticket">
                                    <tr className="ng-scope">
                                      <td>
                                        <img width="100px" src="https://www.galaxycine.vn/media/2019/7/3/725x435_1562145236829.jpg" alt="for react my app" />
                                        <div className="des-item">
                                          <p>
                                            <b className="ng-binding">Combo 2 bắp 1 nước</b>                                                      
                                          </p>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="input-group input-booking">
                                          <input style={{width: '100px'}} type="number" placeholder='0' min={0} max={8} className="input-number" />
                                        </div>
                                      </td>
                                      <td className="ng-binding">
                                        75000
                                      </td>
                                      <td className="ng-binding">
                                        75000
                                      </td>
                                    </tr>
                                    <tr className="total">
                                      <td colSpan={3} className="ng-binding">Tổng</td>
                                      <td className="ng-binding">135000</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="total-ticket">
                                <div className="ticket-price-total">
                                  <p>Tổng: &nbsp;</p>
                                </div>
                                <div className="btn-next">
                                  <a href="#choose-chair" className="btn-arrow">Tiếp tục <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg></a>                                          
                                </div>
                              </div>
                            </section>                                                              
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END BOOK TICKKET  */}
                    <div className="ticket-wrapper2" id="choose-chair">
                      <div className="booking-background">
                        <div className="row">
                          <div className="col-md-12">
                            <section className="booking-ticket">
                              <h2 className="booking-title">Chọn ghế</h2>
                              <div className="seat-map-wrapper">
                                <div className="col-md-12">
                                  <div className="seat-map">
                                    <ul className="seat-row">
                                      <li className="row-index">F</li>
                                      <li className="seat-col-wrapper" style={{width: '260px'}}>
                                        <ul className="seat-col">
                                          <li id="soGhe" style={{transform: 'translate(110%,0)'}} className="seat-col-valiable">8</li>
                                          <li id="soGhe" style={{transform: 'translate(210%,0)'}} className="seat-col-valiable">7</li>
                                          <li id="soGhe" style={{transform: 'translate(310%,0)'}} className="seat-col-valiable">6</li>
                                          <li id="soGhe" style={{transform: 'translate(410%,0)'}} className="seat-col-valiable">5</li>
                                          <li id="soGhe" style={{transform: 'translate(510%,0)'}} className="seat-col-valiable">4</li>
                                          <li id="soGhe" style={{transform: 'translate(610%,0)'}} className="seat-col-valiable">3</li>
                                          <li id="soGhe" style={{transform: 'translate(710%,0)'}} className="seat-col-valiable">2</li>
                                          <li id="soGhe" style={{transform: 'translate(810%,0)'}} className="seat-col-valiable">1</li>
                                        </ul>
                                      </li>
                                      <li className="row-index">F</li>
                                    </ul>
                                    <ul className="seat-row">
                                      <li className="row-index">E</li>
                                      <li className="seat-col-wrapper" style={{width: '260px'}}>
                                        <ul className="seat-col">
                                          <li id="soGhe" style={{transform: 'translate(110%,0)'}} className="seat-col-valiable">8</li>
                                          <li id="soGhe" style={{transform: 'translate(210%,0)'}} className="seat-col-valiable">7</li>
                                          <li id="soGhe" style={{transform: 'translate(310%,0)'}} className="seat-col-valiable">6</li>
                                          <li id="soGhe" style={{transform: 'translate(410%,0)'}} className="seat-col-valiable">5</li>
                                          <li id="soGhe" style={{transform: 'translate(510%,0)'}} className="seat-col-valiable">4</li>
                                          <li id="soGhe" style={{transform: 'translate(610%,0)'}} className="seat-col-valiable">3</li>
                                          <li id="soGhe" style={{transform: 'translate(710%,0)'}} className="seat-col-valiable">2</li>
                                          <li id="soGhe" style={{transform: 'translate(810%,0)'}} className="seat-col-valiable">1</li>
                                        </ul>
                                      </li>
                                      <li className="row-index">E</li>
                                    </ul>
                                    <ul className="seat-row">
                                      <li className="row-index">D</li>
                                      <li className="seat-col-wrapper" style={{width: '260px'}}>
                                        <ul className="seat-col">
                                          <li id="soGhe" style={{transform: 'translate(110%,0)'}} className="seat-col-valiable">8</li>
                                          <li id="soGhe" style={{transform: 'translate(210%,0)'}} className="seat-col-valiable">7</li>
                                          <li id="soGhe" style={{transform: 'translate(310%,0)'}} className="seat-col-valiable">6</li>
                                          <li id="soGhe" style={{transform: 'translate(410%,0)'}} className="seat-col-valiable">5</li>
                                          <li id="soGhe" style={{transform: 'translate(510%,0)'}} className="seat-col-valiable">4</li>
                                          <li id="soGhe" style={{transform: 'translate(610%,0)'}} className="seat-col-valiable">3</li>
                                          <li id="soGhe" style={{transform: 'translate(710%,0)'}} className="seat-col-valiable">2</li>
                                          <li id="soGhe" style={{transform: 'translate(810%,0)'}} className="seat-col-valiable">1</li>
                                        </ul>
                                      </li>
                                      <li className="row-index">D</li>
                                    </ul>
                                    <ul className="seat-row">
                                      <li className="row-index">C</li>
                                      <li className="seat-col-wrapper" style={{width: '260px'}}>
                                        <ul className="seat-col">
                                          <li style={{transform: 'translate(110%,0)'}} className="seat-col-valiable">8</li>
                                          <li style={{transform: 'translate(210%,0)'}} className="seat-col-valiable">7</li>
                                          <li style={{transform: 'translate(310%,0)'}} className="seat-col-valiable">6</li>
                                          <li style={{transform: 'translate(410%,0)'}} className="seat-col-valiable">5</li>
                                          <li style={{transform: 'translate(510%,0)'}} className="seat-col-valiable">4</li>
                                          <li style={{transform: 'translate(610%,0)'}} className="seat-col-valiable">3</li>
                                          <li style={{transform: 'translate(710%,0)'}} className="seat-col-valiable">2</li>
                                          <li style={{transform: 'translate(810%,0)'}} className="seat-col-valiable">1</li>
                                        </ul>
                                      </li>
                                      <li className="row-index">C</li>
                                    </ul>
                                    <ul className="seat-row">
                                      <li className="row-index">B</li>
                                      <li className="seat-col-wrapper" style={{width: '260px'}}>
                                        <ul className="seat-col">
                                          <li style={{transform: 'translate(110%,0)'}} className="seat-col-valiable">8</li>
                                          <li style={{transform: 'translate(210%,0)'}} className="seat-col-valiable">7</li>
                                          <li style={{transform: 'translate(310%,0)'}} className="seat-col-valiable">6</li>
                                          <li style={{transform: 'translate(410%,0)'}} className="seat-col-valiable">5</li>
                                          <li style={{transform: 'translate(510%,0)'}} className="seat-col-valiable">4</li>
                                          <li style={{transform: 'translate(610%,0)'}} className="seat-col-valiable">3</li>
                                          <li style={{transform: 'translate(710%,0)'}} className="seat-col-valiable">2</li>
                                          <li style={{transform: 'translate(810%,0)'}} className="seat-col-valiable">1</li>
                                        </ul>
                                      </li>
                                      <li className="row-index">B</li>
                                    </ul>
                                    <ul className="seat-row">
                                      <li className="row-index">A</li>
                                      <li className="seat-col-wrapper" style={{width: '260px'}}>
                                        <ul className="seat-col">
                                          <li style={{transform: 'translate(110%,0)'}} className="seat-col-valiable">8</li>
                                          <li style={{transform: 'translate(210%,0)'}} className="seat-col-valiable">7</li>
                                          <li style={{transform: 'translate(310%,0)'}} className="seat-col-valiable">6</li>
                                          <li style={{transform: 'translate(410%,0)'}} className="seat-col-valiable">5</li>
                                          <li style={{transform: 'translate(510%,0)'}} className="seat-col-valiable">4</li>
                                          <li style={{transform: 'translate(610%,0)'}} className="seat-col-valiable">3</li>
                                          <li style={{transform: 'translate(710%,0)'}} className="seat-col-valiable">2</li>
                                          <li style={{transform: 'translate(810%,0)'}} className="seat-col-valiable">1</li>
                                        </ul>
                                      </li>
                                      <li className="row-index">A</li>
                                    </ul>
                                  </div>
                                  <div className="screen">
                                    Màn hình
                                  </div>
                                  <div className="seat-cinema">
                                    <span className="seat-cinema-selects">Ghế đang chọn</span>
                                    <span className="seat-cinema-unavailable">Ghế đã bán</span>
                                    <span className="seat-cinema-normal">Có thể chọn</span>
                                  </div>
                                </div>
                              </div>
                              <div className="total-ticket">
                                <div className="ticket-price-total">
                                  <p>Ghế: &nbsp;</p>
                                </div>
                                <div className="btn-next">
                                  <a href="#page-top" className="btn-arrow">Tiếp tục <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg></a>                                          
                                </div>
                              </div>
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
                              <img src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61892e1fa9371f3a919b76c6_Venom-2-1.jpg" alt="for react my app" className="ticket-img" />
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
                            <div className="pay-ticket" id="thanhtoan">  
                              <li>
                                <Link to="/thanhToan" className="btn-pay">
                                  Thanh toán
                                </Link>  
                              </li>                       
                                                                                            
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
