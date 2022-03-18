import React, { Component } from 'react';

class BookMovie_item extends Component {
    render() {
        return (
          <section className="detail-feature">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-8 ">
                <div className="image-item">
                  <img src={this.props.anhPhim} alt="for react my app" className="img-thumbnail" />
                </div>
              </div>
              <div className="details col-md-8 col-sm-8 col-xs-12">
                <h2 className="detail-title upper-text">
                  {this.props.tenPhim}
                </h2>
                <div className="detail-rating mb-2">
                  <label>Thời lượng:&nbsp;</label>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg"  width={16} height={16} fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
                      <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                      <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                    </svg>&nbsp;
                    {this.props.thoiLuong}
                  </span>
                </div>
                <div className="detail-info">
                  <div className="detail-info-row">
                    <label>Đạo diễn:&nbsp;</label>
                    <div className="detail-info-right"><h4>{this.props.daoDien}</h4></div>
                  </div>
                </div>
                <div className="detail-info">
                  <div className="detail-info-row">
                    <label>Diễn viên:&nbsp;</label>
                    <div className="detail-info-right">
                      <h4>{this.props.dienVien}</h4>
                    </div>
                  </div>
                </div>
                <div className="detail-info">
                  <div className="detail-info-row">
                    <label>Nhà sản xuất:&nbsp;</label>
                    <div className="detail-info-right"><h4>{this.props.nhaSx}</h4></div>
                  </div>
                </div>
                <div className="detail-info">
                  <div className="detail-info-row">
                    <label>Quốc gia:&nbsp;</label>
                    <div className="detail-info-right"><h4>{this.props.quocGia}</h4></div>
                  </div>
                </div>
                <div className="detail-info">
                  <div className="detail-info-row">
                    <label>Thể loại:&nbsp;</label>
                    <div className="detail-info-right"><h4>{this.props.theLoai}</h4></div>
                  </div>
                </div>
                <div className="detail-info">
                  <div className="detail-info-row">
                    <label>Ngày ra rạp:&nbsp;</label>
                    <div className="detail-info-right"><h4>{this.props.ngayRarap}</h4></div>
                  </div>
                </div>
                <div className="button-book">
                  <button className="button"><a href="#booking-movie">Đặt ngay</a></button>
                </div>
              </div>
            </div>
            <div className="row detail-descreption">
              <div className="col-md-12 col sm-12 col-xs-12">
                <div className="content-text">
                  <section id="info">
                    <h3>Nội dung phim</h3>
                    <span style={{fontSize: '17px', color:"white", textShadow:"1px 1px black" }}>
                      {this.props.noiDung}
                    </span>
                  </section>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default BookMovie_item;