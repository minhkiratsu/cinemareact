import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dlBook from '../../json/DulieuBookMovie.json' 
import NavRight from '../NavRight/NavRight'
import BookMovie_item from './BookMovie_item'


export default class BookMovie extends Component {
  render() {
    return (
      <div>
        <div className='set-background'>
          <div className="body-page mt-4">
            <div className="container">
              <div className="row">              
                {/* details  */}
                <div className="col-md-8 col-sm-8 col-xs-12">
                  {
                    dlBook.map((value, key) =>{
                      return(
                        <BookMovie_item anhPhim={value.anhPhim} tenPhim={value.tenPhim} thoiLuong={value.thoiLuong} daoDien={value.daoDien} dienVien={value.dienVien} nhaSx={value.nhaSx} quocGia={value.quocGia} theLoai={value.theLoai} ngayRarap={value.ngaRarap} noiDung={value.noiDung}></BookMovie_item>
                      )
                    })
                  }
                  <section className="showtime" id="booking-movie">
                    <h3>Lịch chiếu</h3>                 
                    <div className="detail-booking">
                      <div className="detail-group-cinema">
                        <div className="title-cinema">
                          <h5 className="title-cinema name">Galaxy Nguyễn Du</h5>
                        </div>
                        <div className="item-cinema">
                          <div className="listtime">
                            <label className="name-label">2D - Phụ đề</label>
                            <div className="typetime">
                              <li>
                                <Link className="showtimes-list" to="/chonDichvu">
                                  18:00
                                </Link>
                              </li>
                              <li>
                                <Link className="showtimes-list" to="/chonDichvu">
                                  20:00
                                </Link>
                              </li>
                              <li>
                                <Link className="showtimes-list" to="/chonDichvu">
                                  21:00
                                </Link>
                              </li>
                              <li>
                                <Link className="showtimes-list" to="/chonDichvu">
                                  22:00
                                </Link>
                              </li>
                            </div>
                          </div>
                        </div>                               
                      </div>
                      <div className="detail-group-cinema">
                        <div className="title-cinema">
                          <h5 className="title-cinema name">Galaxy Hoa Thám</h5>
                        </div>
                        <div className="item-cinema">
                          <div className="listtime">
                            <label className="name-label">2D - Phụ đề</label>
                            <div className="typetime">
                            <li>
                                <Link className="showtimes-list" to="/chonDichvu">
                                  17:00
                                </Link>
                              </li>
                              <li>
                                <Link className="showtimes-list" to="/chonDichvu">
                                  19:00
                                </Link>
                              </li>
                              <li>
                                <Link className="showtimes-list" to="/chonDichvu">
                                  21:00
                                </Link>
                              </li>
                              <li>
                                <Link className="showtimes-list" to="/chonDichvu">
                                  21:30
                                </Link>
                              </li>
                            </div>
                          </div>
                        </div>                               
                      </div>
                      
                    </div>
                  </section>
                </div>
                  {/* end details  */}
                  {/* movie sidebar  */}
                  <NavRight/>
                  {/* end movie sidebar  */}
              </div>              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

